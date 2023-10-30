const fs = require("fs").promises;
const path = require("path");

const PATH_SYSTEM_ICON_SOURCE_PATH = "./src/assets/icons/system_icon";
const PATH_IMAGE_ICON_SOURCE_PATH = "./src/assets/icons/image_icon";
const PATH_ICON_COMPONENT = "./src/icons";
// const PATH_COMPONENTS = "./src/stories/components";
const CREATE_ICONS_TIMEOUT = 8000;

const BAN_FILE_LIST = [".DS_Store"];
const BAN_COMPONENT_LIST = ["Feedback", "Progress"];

const PATH_INDEX_ORIGIN = "./src/index-origin.ts";
const PATH_INDEX = "./src/index.ts";

const PATH_ICON_STORYBOOK_ORIGIN =
  "./src/stories/components/Icon/Icon.stories.origin.tsx";
const PATH_ICON_STORYBOOK = "./src/stories/components/Icon/Icon.stories.tsx";
const ICON_STORYBOOK_IMPORT_INSERT_POSITION = "// INSERT IMPORT";
const ICON_STORYBOOK_COMPONENT_INSERT_POSITION = "{/* INSERT COMPONENT */}";
const STORYBOOK_ICON_SIZE = 30;

/**
 * 주어진 파일명을 컴포넌트명으로 변경 ex) creditcard_coinbase -> CreditcardCoinbaseIcon
 * reference : https://levelup.gitconnected.com/javascript-algorithm-convert-string-to-camel-case-9a72da82287f
 * @param {*} fileName
 * @returns 컴포넌트명
 */
const CreateComponentName = (fileName) => {
  let componentName = "";
  if (fileName) {
    // 구분자로 분리
    let wordArr = fileName.split(/[-_]/g);
    for (let i in wordArr) {
      // 원래 camel case 변환은 첫 단어의 첫 문자는 소문자로 사용하지만 컴포넌트 이름으로 사용할 것이므로 첫 단어도 적용시킴
      componentName += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      // 첫 단어는 적용하지 않는 원본 방식의 경우
      // if (i > 0) {
      //   newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      // } else {
      //   newStr += wordArr[i];
      // }
    }
  } else {
    return componentName;
  }
  return componentName;
};

/**
 * 아이콘 컴포넌트 생성을 위해 기존 아이콘 컴포넌트가 저장되는 디렉토리 제거 후 재생성
 * * @param {string} componentPath 아이콘 컴포넌트가 저장되는 경로
 */
const initForCreateIconComponent = async (componentPath) => {
  await fs.rm(path.join(componentPath), {
    recursive: true, // 경로 내 모든 파일 삭제
    force: true, //  강제 삭제 : 경로가 존재하지 않을 경우 무시
    // => rm -rf
  });
  await fs.mkdir(path.join(componentPath), { recursive: true });
};

/**
 * 기존 아이콘 입력받은 경로 내 기능 단위로 분리된 아이콘 원본 목록 생성하여 파싱 시작
 * @param {string} sourcePath 아이콘 원본 상위 경로 : system_icon / image_icon
 */
const createAssetList = async (sourcePath) => {
  const assetNamePath = path.join(sourcePath);
  const assetNameList = await fs.readdir(assetNamePath);
  for await (let pathName of assetNameList) {
    if (BAN_FILE_LIST.indexOf(pathName) > -1) {
      // 의도하지 않은 파일 제외
      continue;
    } else {
      parsingIconPath(pathName, sourcePath, "");
    }
  }
};

/**
 * 하위 디렉토리가 없이 파일이 나올때까지 경로를 파싱하면서 해당 경로를 에셋명으로 저장
 * @param {string} pathName 파싱할 경로
 * @param {string} sourcePath 현재 파싱중인 아이콘 종류 경로(system or image)
 * @param {string} assetName 현재 아이콘의 카테고리/에셋명
 */
const parsingIconPath = async (pathName, sourcePath, assetName) => {
  if (BAN_FILE_LIST.indexOf(pathName) > -1) {
    // 의도하지 않은 파일 제외
    return;
  } else if (pathName.includes(".svg")) {
    // svg로 되어있는 시스템 아이콘으로 컴포넌트 생성(Icon 컴포넌트)
    createSVGIconByPathName(pathName, sourcePath, assetName);
  } else if (pathName.includes(".png")) {
    if (pathName.includes("@1x")) {
      // png로 되어있는 이미지 아이콘으로 컴포넌트 생성(img 태그)
      createPNGIconByPathName(pathName, sourcePath, assetName);
    } else {
      return;
    }
  } else {
    // 디렉토리
    const originPath = path.join(`${sourcePath}/${pathName}`);
    const childList = await fs.readdir(originPath);
    for await (let child of childList) {
      parsingIconPath(
        child,
        `${sourcePath}/${pathName}`,
        `${assetName}_${pathName}`
      );
    }
  }
};

/**
 * 에셋명을 이용해서 svg를 감싸는 아이콘 컴포넌트 생성
 * @param {string} pathName
 * @param {string} sourcePath
 * @param {string} assetName
 */
const createSVGIconByPathName = async (pathName, sourcePath, assetName) => {
  const componentName = CreateComponentName(
    `${assetName}_${pathName.replace(".svg", "Icon")}`
  );
  const iconComponentFile = path.join(
    PATH_ICON_COMPONENT,
    `${componentName}.tsx`
  );
  const iconSourcePath = `${sourcePath.replace("./src/", "../")}/${pathName}`;
  const iconComponentCode = `import { Icon } from "../components/Icon";
  import { ReactComponent as SourceIcon } from "${iconSourcePath}";

  const ${componentName} = ({
    color,
    className,
    fontSize,
    title,
  }: {
    color?: string;
    className?: string;
    fontSize?: number;
    title?: string;
  }) => {
    return (
      <Icon color={color} className={className} fontSize={fontSize}>
        <SourceIcon title={title || "${componentName}"} />
      </Icon>
    );
  };

  export default ${componentName};
  `;
  fs.writeFile(iconComponentFile, iconComponentCode, "utf8");
};

/**
 * 에셋명을 이용해서 png를 감싸는 아이콘 컴포넌트 생성
 * @param {string} pathName
 * @param {string} sourcePath
 * @param {string} assetName
 */
const createPNGIconByPathName = async (pathName, sourcePath, assetName) => {
  const componentName = CreateComponentName(
    `${assetName}_${pathName.replace(".png", "Icon").replace("@1x", "")}`
  );
  const iconComponentFile = path.join(
    PATH_ICON_COMPONENT,
    `${componentName}.tsx`
  );
  const iconSourcePath = `${sourcePath.replace("./src/", "../")}/${pathName}`;
  const iconComponentCode = `import { css } from "@emotion/react";
  import ${componentName}1x from "${iconSourcePath}";
  import ${componentName}2x from "${iconSourcePath.replace(
    "@1x.png",
    "@2x.png"
  )}";
  import ${componentName}3x from "${iconSourcePath.replace(
    "@1x.png",
    "@3x.png"
  )}";
  
  const ${componentName} = ({
    fontSize,
    className,
    alt,
  }: {
    fontSize?: number;
    className?: string;
    alt?: string;
  }) => {
    return (
      <img
        src={${componentName}1x}
        width={fontSize}
        height={fontSize}
        srcSet={\`\${${componentName}2x} 2x, \${${componentName}3x} 3x\`}    
        alt={alt || "${componentName}"}
        className={className}
        css={css\`
          object-fit: contain;
        \`}
      />
    );
  };
  
  export default ${componentName};
  `;

  fs.writeFile(iconComponentFile, iconComponentCode, "utf8");
};

/**
 * foundation/Icons에 존재하는 Icon 컴포넌트를 index.ts에서 export 하는 구문 생성
 */
const getIconsExportStatements = async () => {
  const iconComponentPath = path.join(PATH_ICON_COMPONENT);
  const iconComponentList = await fs.readdir(iconComponentPath);
  const exportStatement = iconComponentList
    .map(
      (icon) =>
        `export { default as ${icon
          .toString()
          .replace(".tsx", "")} } from "${path
          .join(iconComponentPath)
          .replace("src/", "./")}/${icon.toString().replace(".tsx", "")}";`
    )
    .toString()
    .replaceAll(",", "\n");
  return exportStatement;
};

/**
 * components에 존재하는 컴포넌트를 index.ts에서 export 하는 구문 생성
 */
const getComponentsExportStatements = async () => {
  const componentDirPath = path.join(PATH_COMPONENTS);
  const componentList = await fs.readdir(componentDirPath);

  // 앞글자가 대문자 알파벳으로 시작할 경우 컴포넌트로 인식하고 export 구문 생성 (.DS_Store 등 필요없는 파일 배제)
  // 제외 컴포넌트(depth가 다른 feedback, progress)는 스킵
  const exportComponentStatement = componentList.map((component) => {
    if (
      /^[A-Z]/.test(component.charAt(0)) &&
      BAN_COMPONENT_LIST.indexOf(component) === -1
    ) {
      return `export { ${component} } from "${path
        .join(componentDirPath)
        .replace("src/", "./")}/${component}";`;
    }
    return "";
  });
  const exportComponentPropsStatement = componentList.map((component) => {
    if (
      /^[A-Z]/.test(component.charAt(0)) &&
      BAN_COMPONENT_LIST.indexOf(component) === -1
    ) {
      return `export type { ${component}Props } from "${path
        .join(componentDirPath)
        .replace("src/", "./")}/${component}";`;
    }
    return "";
  });
  return `${exportComponentStatement}\n${exportComponentPropsStatement}`.replaceAll(
    ",",
    "\n"
  );
};

/**
 *
 * @param {string} exportStatements : 아이콘, 컴포넌트 export 구문 뭉치
 * 받은 구문을 index-origin.ts의 내용에 추가하여 index.ts 생성
 */
const createIndexFile = async (exportStatements) => {
  const indexOriginFile = path.join(PATH_INDEX_ORIGIN);
  const indexFile = path.join(PATH_INDEX);
  const originData = await fs.readFile(indexOriginFile, { encoding: "utf8" });
  fs.writeFile(
    indexFile,
    originData.concat(exportStatements),
    function (error, data) {
      if (error) {
        console.error("Create Index Error", error);
        throw error;
      }
    }
  );
};

const createIconStorybook = async () => {
  const storybookOriginFile = path.join(PATH_ICON_STORYBOOK_ORIGIN);
  const storybookFile = path.join(PATH_ICON_STORYBOOK);
  const originData = await fs.readFile(storybookOriginFile, {
    encoding: "utf8",
  });

  const iconComponentPath = path.join(PATH_ICON_COMPONENT);
  const iconComponentList = await fs.readdir(iconComponentPath);
  const importStatement = iconComponentList
    .map((icon) => {
      const componentName = icon.replace(".tsx", "");
      return `import ${componentName} from "../../foundation/Icons/${componentName}";`;
    })
    .toString()
    .replaceAll(",", "\n");
  const componentStatement = iconComponentList
    .map((icon) => {
      const componentName = icon.replace(".tsx", "");
      return `<Box width="210px"><Stack direction="column" alignItems="center">
        <Typography variant="caption2" color={theme.colors.text.main}>
          ${componentName}
        </Typography>
        <${componentName} fontSize={${STORYBOOK_ICON_SIZE}}/>
        </Stack></Box>`;
    })
    .toString()
    .replaceAll(",", "\n");

  fs.writeFile(
    storybookFile,
    originData
      .replace(ICON_STORYBOOK_IMPORT_INSERT_POSITION, importStatement)
      .replace(ICON_STORYBOOK_COMPONENT_INSERT_POSITION, componentStatement),
    function (error, data) {
      if (error) {
        console.error("Create Icon Storybook Error", error);
        throw error;
      }
    }
  );
};

/**
 * 작업 순서를 위해 함수 구성
 */
const main = async () => {
  await initForCreateIconComponent(PATH_ICON_COMPONENT);
  await createAssetList(PATH_SYSTEM_ICON_SOURCE_PATH);
  await createAssetList(PATH_IMAGE_ICON_SOURCE_PATH);

  //TODO: 아이콘 리소스 개수에 따라 TIMEOUT 유동적으로 조정
  setTimeout(async () => {
    // const componentExportStatement = await getComponentsExportStatements();
    const iconExportStatement = await getIconsExportStatements();
    const exportStatements = iconExportStatement;
    createIndexFile(exportStatements);
    // createIconStorybook();
  }, CREATE_ICONS_TIMEOUT);
};

main();

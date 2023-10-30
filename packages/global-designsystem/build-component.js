const fs = require("fs").promises;
const path = require("path");

const PATH_ICON_COMPONENT = "../icons-library/src/icons";
const PATH_COMPONENTS = "./src/stories/components";
const CREATE_ICONS_TIMEOUT = 8000;

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
  const importStatement =
    `import {
  ` +
    iconComponentList
      .map((icon) => {
        const componentName = icon.replace(".tsx", "");
        return `${componentName}`;
      })
      .toString()
      .replaceAll(",", ",\n") +
    `
  } from "@lookatourdesignsystem/icons-library";`;
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
  //TODO: 아이콘 리소스 개수에 따라 TIMEOUT 유동적으로 조정
  setTimeout(async () => {
    const componentExportStatement = await getComponentsExportStatements();
    const exportStatements = componentExportStatement;
    createIndexFile(exportStatements);
    createIconStorybook();
  }, CREATE_ICONS_TIMEOUT);
};

main();

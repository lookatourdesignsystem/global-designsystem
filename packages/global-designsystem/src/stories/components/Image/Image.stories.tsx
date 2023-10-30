import { Story, Meta } from "@storybook/react";
import { Fragment, useRef } from "react";
import { Image } from ".";
import { Typography } from "../../foundation/Typography";
import { Stack } from "../Stack";
import Image01Png from "../../../assets/images/wreck_league_1.png";
import Image01Webp from "../../../assets/images/wreck_league_1.webp";
import Image02Png from "../../../assets/images/wreck_league_2.png";
import Image02Webp from "../../../assets/images/wreck_league_2.webp";
import Image03Png from "../../../assets/images/wreck_league_3.png";
import Image03Webp from "../../../assets/images/wreck_league_3.webp";
import Image04Png from "../../../assets/images/wreck_league_4.png";
import Image04Webp from "../../../assets/images/wreck_league_4.webp";
import Image04Avif from "../../../assets/images/wreck_league_4.avif";
import Image05Png from "../../../assets/images/wreck_league_5.png";
import Image05Webp from "../../../assets/images/wreck_league_5.webp";
import ImageSrc from "../../../assets/images/image-src.png";
import Image1x from "../../../assets/images/image-1x.png";
import Image2x from "../../../assets/images/image-2x.png";
import Image3x from "../../../assets/images/image-3x.png";
import { useTheme } from "../../../hooks/useTheme";
import { ImageBox, Section } from "./styles";
import { imageDesc } from "src/stories/docs/image";

const meta: Meta = {
  title: "Util/Image",
  component: Image,
  ...imageDesc,
};
export default meta;

export const Default: Story<typeof Image> = (args) => {
  return (
    <Fragment>
      <Image
        src={ImageSrc}
        width={600}
        radius={30}
        srcSet={`${Image1x} 1x, ${Image2x} 2x, ${Image3x} 3x`}
        {...args}
      />
    </Fragment>
  );
};

export const SrcSet: Story<typeof Image> = (args) => {
  return (
    <Image
      src={Image01Png}
      srcSet={`${Image02Png} 300w, ${Image03Png} 600w, ${Image04Png} 900w`}
      width={600}
      {...args}
    />
  );
};
SrcSet.parameters = {
  docs: {
    description: {
      story: `srcSet에 w 디스크립터(Width descriptor)를 사용해 포트 너비에 최적화된 이미지를 선택해 출력할 수 있습니다. 또는 x 디스크립터(Device pixel ratio descriptor)로 디바이스의 픽셀 비율(Device pixel ratio)과 일치하는 값으로 최적화 선택됩니다.  이 방식으로 이미지를 제공하는 것이 시각적으로도 좋고 데이터 낭비도 줄여서 유저 경험에 긍정적인 효과를 줍니다.`,
    },
  },
  options: { showPanel: true },
};

export const Sources: Story<typeof Image> = (args) => {
  return (
    <Image
      src={Image01Png}
      sources={[
        {
          srcSet: `${Image02Webp} 1x, ${Image03Webp} 2x, ${Image04Webp} 3x`,
          type: "webp",
        },
        {
          srcSet: `${Image02Png} 1x, ${Image03Png} 2x, ${Image04Png} 3x`,
          type: "png",
        },
      ]}
      width="100%"
      {...args}
    />
  );
};
Sources.parameters = {
  docs: {
    description: {
      story:
        "여러 이미지를 제공하여 브라우저가 렌더링 할 수 있는 최적의 이미지를 선택 및 사용하게 됩니다.",
    },
  },
  options: { showPanel: true },
};

export const LazyLoad: Story<typeof Image> = () => {
  const theme = useTheme();
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <ImageBox ref={parentRef}>
      <Stack direction="column" spacing="500" alignItems="center">
        <Section theme={theme}>
          <Stack alignItems="center" justifyContent="center">
            <Typography variant="h3">
              Lazy loading from the 3rd image
            </Typography>
          </Stack>
        </Section>
        <Typography variant="h6">
          ▼ sources를 정의하지 않은 경우, 네트워트탭에서 기본 src인 png파일만
          사용되는 걸 볼 수 있다.
        </Typography>
        <Image
          src={Image01Png}
          sources={[{ srcSet: Image01Webp, type: "webp" }]}
          width="100%"
        />
        <Image
          src={Image02Png}
          sources={[{ srcSet: Image02Webp, type: "webp" }]}
          width="100%"
        />
        <Image
          src={Image03Png}
          sources={[{ srcSet: Image03Webp, type: "webp" }]}
          width="100%"
          lazy
          observe={{ root: parentRef, rootMargin: "0px 0px 100px" }}
        />
        <Typography variant="h6">
          ▼ sources는 배열 순서대로 우선순위(avif &gt; webp &gt; png)가 있어
          네트워트탭에서 avif를 사용하는 걸 볼 수 있다.
        </Typography>
        <Image
          src={Image04Png}
          sources={[
            { srcSet: Image04Avif, type: "avif" },
            { srcSet: Image04Webp, type: "webp" },
          ]}
          width="100%"
          lazy
          observe={{ root: parentRef, rootMargin: "0px 0px 100px" }}
        />
        <Image
          src={Image05Png}
          sources={[{ srcSet: Image05Webp, type: "webp" }]}
          width="100%"
          lazy
          observe={{ root: parentRef, rootMargin: "0px 0px 100px" }}
        />
      </Stack>
    </ImageBox>
  );
};

LazyLoad.parameters = {
  docs: {
    description: {
      story:
        "lazy가 true인 이미지의 경우 뷰포트 영역에 들어왔을때 이미지 소스를 불러옵니다.",
    },
  },
  options: { showPanel: false },
};

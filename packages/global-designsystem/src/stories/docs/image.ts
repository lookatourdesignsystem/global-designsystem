import { commonArgTypes } from "./common";

export const imageDesc = {
  parameters: {
    componentSubtitle: "이미지 요소를 삽입할 때 사용하는 컴포넌트 입니다.",
    options: { showPanel: true },
  },
  argTypes: {
    width: {
      description: "이미지의 너비입니다.",
      type: { required: true },
      control: { type: "text" },
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    height: {
      description: "이미지의 높이입니다.",
      control: { type: "text" },
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    src: {
      description: "이미지 리소스입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    backgroundColor: {
      description: "이미지 배경의 컬러입니다.",
      control: { type: "color" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    alt: {
      description: "이미지에 대한 설명인 alt 속성입니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    radius: {
      description: "이미지의 border-radius 값입니다.",
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: "number",
        },
      },
    },
    hideIfError: {
      description:
        "true로 설정하면 이미지 로드하면서 onError에 의한 에러발생시에 이미지가 렌더링되지 않습니다.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    maxWidth: {
      description: "이미지의 최대 너비 값입니다.",
      control: { type: "text" },
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    maxHeight: {
      description: "이미지의 최대 높이 값입니다.",
      control: { type: "text" },
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    lazy: {
      description:
        "true일 경우 해당 이미지가 뷰포트 영역에 들어왔을때 이미지 소스를 불러오게 되어 이미지 로드 최적화에 도움을 줍니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    observe: {
      description:
        "IntersectionObserver 관련 옵션을 정합니다.<br/>- threshold: observer의 콜백이 실행될 대상 요소의 가시성 퍼센티지를 나타내는 단일 숫자 혹은 숫자 배열입니다. 만일 50%만큼 요소가 보여졌을 때를 탐지하고 싶다면, 값을 0.5로 설정하면 됩니다.<br/>- rootMargin: root 가 가진 여백입니다. 이 속성의 값은 CSS의 margin 속성과 유사합니다. e.g. '10px 20px 30px 40px' (top, right, bottom, left). 이 값은 퍼센티지가 될 수 있습니다.<br/>- root: 대상 객체의 가시성을 확인할 때 사용되는 뷰포트 요소입니다. 이는 대상 객체의 조상 요소여야 합니다. 기본값은 브라우저 뷰포트이며, root 값이 null 이거나 지정되지 않을 때 기본값으로 설정됩니다.",
      table: {
        type: {
          summary:
            "{ threshold?: number | number[]; rootMargin?: string; root?: RefObject<HTMLDivElement>  }",
        },
      },
    },
    sources: {
      description:
        "컴포넌트의 picture 태그 내에 이미지 리소스를 여러개 배열 형태로 넣습니다.",
      table: {
        type: {
          summary: `{ srcSet: string; type: "webp" | "avif" | "gif" | "jpeg" | "png" | "svg+xml" | "apng"; }[]`,
        },
      },
    },
    draggable: {
      description:
        "이미지 요소를 드래그할 수 있는지 여부를 나타내는 속성입니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    ratio: {
      description:
        "가로 세로 비율을 설정하는 aspect-ratio 값을 지정합니다.<br/>e.g. '1/1', '16/9', '0.5', 'auto'",
      table: {
        type: {
          summary: 'string | "auto"',
        },
      },
    },
    srcSet: {
      description:
        "사용할 이미지 리소스와 조건을 쉼표(,)로 구분하여 이미지 후보를 문자열로 나열합니다.<br/>e.g 'Image1xUrl 1x, Image2xUrl 2x, Image3xUrl 3x'",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    onLoad: {
      description: "이미지가 로드될 때 실행하는 함수입니다.",
      table: {
        type: {
          summary: "(e?: SyntheticEvent<HTMLImageElement>) => void",
        },
      },
    },
    onError: {
      description: "이미지 로드에서 에러가 발생했을 때 실행하는 함수입니다.",
      table: {
        type: {
          summary: "(e?: SyntheticEvent<HTMLImageElement>) => void",
        },
      },
    },
    ...commonArgTypes,
  },
};

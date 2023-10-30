import { commonArgTypes } from "./common";

export const linkDesc = {
  parameters: {
    componentSubtitle:
      "링크는 페이지 이동, 이메일, 전화번호 클릭 요소로 사용할 수 있습니다. 텍스트나 이미지와 함께 사용될 수 있습니다.",
    options: { showPanel: true },
  },
  argTypes: {
    variant: {
      description: "Link의 텍스트 variant입니다.",
      options: [
        "subtitle1",
        "subtitle2",
        "caption1",
        "caption2",
        "body1",
        "body2",
        "overline",
        "button",
      ],
      table: {
        defaultValue: {
          summary: "subtitle1",
        },
        type: {
          summary:
            '"subtitle1" | "subtitle2" | "caption1" | "caption2" | "body1" | "body2" | "overline" | "button"',
        },
      },
    },
    href: {
      description: "HTML의  Element의 href 속성입니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    rel: {
      description: "HTML의  Element의 rel 속성입니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    target: {
      description: "HTML의  Element의 target 속성입니다.",
      options: ["_self", "_blank", "_parent", "_top"],
      table: {
        type: {
          summary: '"_self" | "_blank" | "_parent" | "_top"',
        },
      },
    },
    title: {
      description: "HTML의  Element의  title 속성입니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    disabled: {
      description:
        "disabled 여부 입니다. true 이면 호버, 클릭에 대한 액션이 없습니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    leftIcon: {
      description: "children 텍스트의 좌측에 들어갈 아이콘입니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    rightIcon: {
      description: "children 텍스트의 우측에 들어갈 아이콘입니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    hideUnderline: {
      description:
        "true 이면 underline이 스타일이 없어집니다. 주로 이미지가 children으로 들어갈 경우 underline이 필요없습니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    children: {
      description:
        "link가 걸릴 a내부에 들어갈 컨텐츠입니다. 텍스트 혹은 이미지가 들어갑니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    onClick: {
      description: "클릭했을 때 실행되는 함수입니다.",
      table: {
        type: {
          summary: "MouseEventHandler<HTMLAnchorElement>",
        },
      },
    },
    ...commonArgTypes,
  },
};

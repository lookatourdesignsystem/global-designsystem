import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { commonArgTypes, typographyTypes } from "./common";

export const typographyDesc = {
  parameters: {
    componentSubtitle: "Typography는 텍스트를 표현하는 구성요소입니다.",
    options: { showPanel: true },
  },
  argTypes: {
    fontFamily: {
      description:
        "font-family로 foundation에 셋팅되어 있는 default, expressive 값을 사용합니다.",
      options: ["default", "expressive"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "default" },
        type: {
          summary: '"default" | "expressive"',
        },
      },
    },
    variant: {
      description: "variant에 따라 HTML Element와 스타일이 달라집니다.",
      options: typographyTypes,
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: "body2",
        },
        type: {
          summary: arrayToArgTypes(typographyTypes),
        },
      },
    },
    color: {
      description: "텍스트 컬러입니다.",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "color",
      },
    },
    ellipsis: {
      description: "말줄임을 시작하고자 하는 줄 입니다.",
      control: {
        type: "number",
        min: 0,
        step: 1,
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: "number",
        },
      },
    },
    fitHeight: {
      description:
        "true로 설정하면 Typography의 높이는 텍스트가 차지하는 높이와 동일하게 맞춰집니다.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    textAlign: {
      description: "text-align스타일로 텍스트 정렬 방향입니다.",
      options: [
        "center",
        "end",
        "justify",
        "left",
        "match-parent",
        "right",
        "start",
      ],
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: "left",
        },
        type: {
          summary:
            '"center" | "end" | "justify" | "left" | "match-parent" | "right" | "start"',
        },
      },
    },
    wordBreak: {
      description:
        "word-break 스타일 입니다. 텍스트가 Typography의 너비 보다 길 경우 단어를 어떻게 개행할 것인지 정합니다.",
      options: ["break-all", "break-word", "keep-all", "normal"],
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: "normal",
        },
        type: {
          summary: '"break-all" | "break-word" | "keep-all" | "normal"',
        },
      },
    },
    decoration: {
      description:
        "text-decoration 스타일입니다.텍스트에 밑줄 혹은 중간에 라인을 넣을 수 있습니다.",
      options: ["none", "underline", "line-through"],
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: "none",
        },
        type: {
          summary: '"none" | "underline" | "line-through"',
        },
      },
    },
    children: {
      description: "Typography 내부 컨텐츠입니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    ...commonArgTypes,
  },
};

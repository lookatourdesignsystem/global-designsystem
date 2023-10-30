import { commonArgTypes } from "./common";

export const skeletonDesc = {
  parameters: {
    componentSubtitle:
      "Skeleton는 데이터가 로드되기 전에 콘텐츠의 자리 표시자 미리보기를 표시하여 로드 시간 불편함을 줄입니다.",
    options: { showPanel: true },
  },
  argTypes: {
    id: {
      description:
        "HTML Element의 id 속성입니다.HTML Element의 id 속성입니다. 입력하지 않으면 랜덤하게 부여됩니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      description: "접근성을 위한 svg element에 title 속성입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    variant: {
      description:
        "로딩하는 컨텐츠 형태가 글자라면 “text”, 그 외 형태의 컨텐츠라면 “shape”으로 설정합니다.",
      type: { required: true },
      options: ["text", "shape"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "text" },
        type: {
          summary: '"text" | "shape"',
        },
      },
    },
    width: {
      description: "Skeleton의 너비입니다.",
      type: { required: true },
      table: {
        defaultValue: { summary: 12 },
        type: {
          summary: "number",
        },
      },
    },
    height: {
      description: "Skeleton의 높이입니다.",
      type: { required: true },
      table: {
        defaultValue: { summary: 12 },
        type: {
          summary: "number",
        },
      },
    },
    radius: {
      description: "Skeleton의 border-radius입니다.",
      table: {
        defaultValue: { summary: 0 },
        type: {
          summary: "number | string",
        },
      },
    },
    fullWidth: {
      description:
        "true이면 너비가 100%가 되어 부모 요소의 너비와 동일해집니다.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
        type: {
          summary: "boolean",
        },
      },
    },
    fullHeight: {
      description: "true이면 높이가 100%가 되어 부모 요소의 높이 동일해집니다.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
        type: {
          summary: "boolean",
        },
      },
    },

    wordType: {
      description:
        "variant가 “text”일 때, 텍스트의 종류가 “title”인지 “sentence”인지 정합니다. 텍스트가 여러줄 일 때 wordType에 따라 너비의 형태가 달라집니다.<br/>- title : width의 80%, 90%, 60%로 line의 너비가 반복됩니다.<br/>- sentence : 마지막 line만 너비가 50%, 나머지는 100%가 됩니다.",
      options: ["title", "sentence"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: { summary: "title" },
        type: {
          summary: '"title" | "sentence"',
        },
      },
    },
    line: {
      control: {
        type: "number",
      },
      description: "variant가 “text”일 때, line의 개수입니다.",
      table: {
        defaultValue: { summary: 1 },
        type: {
          summary: "number",
        },
      },
    },
    gap: {
      control: {
        type: "number",
      },
      description: "variant가 “text”일 때, line간의 간격입니다.",
      table: {
        defaultValue: { summary: 0 },
        type: {
          summary: "number",
        },
      },
    },
    equalWidthLines: {
      control: {
        type: "boolean",
      },
      description: "variant가 “text”일 때, line의 너비를 통일합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    ...commonArgTypes,
  },
};

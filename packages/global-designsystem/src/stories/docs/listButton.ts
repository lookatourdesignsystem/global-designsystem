import { commonArgTypes } from "./common";

export const listButtonDesc = {
  parameters: {
    componentSubtitle:
      "Button과 사용 목적은 같으나 단독으로 보단 공통의 성격으로 묶여 버튼이 나열될 때 사용됩니다.",
    options: { showPanel: true },
  },
  argTypes: {
    value: {
      description:
        "button의 value 속성으로 onClick할 때 타겟의 value를 받아 사용할 수 있습니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    selected: {
      description: "selected 여부입니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      description: "disabled 여부입니다.",
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
      description: "컴포넌트 내부에 들어갈 컨텐츠입니다.",
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
          summary: "any",
        },
      },
    },
    ...commonArgTypes,
  },
};

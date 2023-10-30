import { commonArgTypes } from "./common";

export const switchDesc = {
  parameters: {
    componentSubtitle:
      "Switch는 설정 상태를 토글 형식으로 켜거나 끌 수 있습니다.",
    options: { showPanel: true },
  },
  argTypes: {
    id: {
      description: "HTML Element의 id 속성입니다.",
      type: { required: true },
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    name: {
      description:
        "해당 Radio 그룹의 name 속성 값입니다. 주로 보내질 데이터를 참조하기 위해 form 태그와 함께 사용합니다.",
      type: { required: true },
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    value: {
      description: "해당 Switch의 값입니다.",
      type: { required: true },
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      description: "Switch의 크기입니다.",
      options: ["s", "m", "l"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: '"s" | "m" | "l"',
        },
      },
    },
    checked: {
      description: "true로 설정하면 초기값이 checked상태가 됩니다.",
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
    disabled: {
      description: "disabled여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    onChange: {
      description:
        "Switch를 클릭할 때 실행하는 함수입니다. 파라미터로 check여부, id, value값을 전달받습니다.",
      type: { required: true },
      table: {
        type: {
          summary: "(checked: boolean, id: string, value: string) => void",
        },
      },
    },
    ...commonArgTypes,
  },
};

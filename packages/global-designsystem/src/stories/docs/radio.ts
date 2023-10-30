import { commonArgTypes } from "./common";

export const radioDesc = {
  parameters: {
    componentSubtitle:
      "Radio는 공통의 성격을 가진 옵션 그룹으로 유저가 그 중 하나의 옵션을 선택할 수 있습니다.",
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
        type: { summary: "string" },
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
        type: { summary: "string" },
      },
    },
    value: {
      description: "Radio의 value로 input의 value 속성 값입니다.",
      type: { required: true },
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      description: "Radio의 크기입니다.",
      options: ["s", "m", "l"],
      control: {
        defaultValue: {
          summary: "m",
        },
        type: "radio",
      },

      table: {
        type: { summary: '"s" | "m"  | "l"' },
      },
    },
    checked: {
      description: "선택된 상태입니다.",
      control: {
        defaultValue: {
          summary: "false",
        },
        type: "boolean",
      },

      table: {
        type: { summary: "boolean" },
      },
    },
    disabled: {
      description: "true이면 disabled처리됩니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: { summary: "boolean" },
      },
    },
    required: {
      description: "필수 값 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: { summary: "boolean" },
      },
    },
    onChange: {
      description:
        "Radio를 클릭할 때 실행되는 함수입니다. 파라미터로 check여부, id, value값을 전달받습니다.",
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

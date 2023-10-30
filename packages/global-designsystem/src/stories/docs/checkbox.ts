import { commonArgTypes } from "./common";

export const checkboxDesc = {
  parameters: {
    componentSubtitle: "사용자가 여러 옵션을 선택할 수 있는 입력 요소입니다.",
    options: { showPanel: true },
  },
  argTypes: {
    id: {
      description:
        "HTML Element의 id 속성입니다. FormControlLabel의 htmlFor 와 동일한 값이어야 합니다.",
      type: { required: true },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    value: {
      description: "해당 Checkbox의 value attribute 값 입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    checked: {
      description: "check 되어 있는지 여부입니다.",
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
      description: "true이면 disabled 처리됩니다.",
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
    required: {
      description: "필수 값 여부입니다.",
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
    name: {
      description:
        "해당 Checkbox의 name 속성 값입니다. 주로 보내질 데이터를 참조하기 위해 form 태그와 함께 사용합니다.",
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
    size: {
      description: "Checkbox의 크기입니다.",
      options: ["s", "m", "l"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: "m",
        },
        type: {
          summary: '"s" | "m" | "l"',
        },
      },
    },
    onChange: {
      description:
        "Checkbox 클릭할 때 실행되는 함수입니다. 파라미터로 check 여부, id, value값을 전달받습니다.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "(isChecked: boolean, id: string, value: string) => void;",
        },
      },
    },
    ...commonArgTypes,
  },
};

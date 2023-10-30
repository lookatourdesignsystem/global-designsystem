import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { commonArgTypes, inputModeTypes, textAlignTypes } from "./common";
export const textfieldDesc = {
  parameters: {
    componentSubtitle:
      "TextField는 유저가 텍스트를 입력, 수정할 수 있는 구성요소입니다.",
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
    type: {
      description: "input의 type attribute입니다.",
      options: ["text", "email", "password", "number", "search"],
      type: { required: true },
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: "text",
        },
        type: {
          summary: '"text" | "email" | "password" | "number" | "search"',
        },
      },
    },
    value: {
      description: "해당 TextField가 가지는 값입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    size: {
      description: "TextField의 크기입니다.",
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
    state: {
      description: "TextField의 상태입니다.",
      options: ["error", "success"],
      control: {
        type: "radio",
      },
      table: {
        type: {
          summary: '"error" | "success"',
        },
      },
    },
    inputMode: {
      description: "터치 디바이스에서 나타날 키보드 형태를 변경할 수 있습니다.",
      options: inputModeTypes,
      control: {
        type: "select",
      },
      table: {
        type: {
          summary: arrayToArgTypes(inputModeTypes),
        },
      },
    },
    label: {
      description: "TextField의 상단에 보여질 필드에 대한 라벨 텍스트입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    helperText: {
      description: "TextField의 하단에 보여질 안내문구입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    defaultValue: {
      description: "초기값입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    placeHolder: {
      description: "TextField가 빈 상태에서 보여질 텍스트입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: " ",
        },
        type: {
          summary: "string",
        },
      },
    },
    maxlength: {
      description: "최대 입력할 수 있는 텍스트의 길이입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    textAlign: {
      description: "텍스트의 정렬입니다.",
      options: textAlignTypes,
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: "left",
        },
        type: {
          summary: arrayToArgTypes(textAlignTypes),
        },
      },
    },
    pattern: {
      description:
        "폼 제출 시 <input> 요소의 값을 검사할 때 사용될 정규 표현식(regular expression)을 명시합니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    autocomplete: {
      description:
        "“on”으로 설정하면 이전에 입력했던 내용을 자동으로 제안해줍니다.",
      options: ["on", "off"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: "off",
        },
        type: {
          summary: '"on" | "off"',
        },
      },
    },
    disabled: {
      description: "disabled여부입니다.",
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
      description: "필수 항목 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    readonly: {
      description: "true이면 입력, 수정이 불가합니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    asset: {
      description: "입력창 안쪽에 같이 보여질 asset입니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    assetPosition: {
      description: "asset의 위치입니다.",
      table: {
        defaultValue: {
          summary: "right",
        },
        type: {
          summary: '"left" | "right',
        },
      },
    },
    onKeyUp: {
      description:
        "TextField에 포커스된 상태에서 키 누른상태에서 땔 때 실행되는 함수입니다.",
      table: {
        type: {
          summary: "KeyboardEventHandler<HTMLInputElement>",
        },
      },
    },
    onKeyDown: {
      description:
        "TextField에 포커스된 상태에서 키를 누를 때 실행되는 함수입니다.",
      table: {
        type: {
          summary: "KeyboardEventHandler<HTMLInputElement>",
        },
      },
    },
    onKeyPress: {
      description:
        "onKeyUp와 onKeyDown동작을 한 동작으로 보고 실행되는 함수입니다.",
      table: {
        type: {
          summary: "KeyboardEventHandler<HTMLInputElement>",
        },
      },
    },
    onFocus: {
      description: "TextField에 포커스될 때 실행하는 함수입니다.",
      table: {
        type: {
          summary: "KeyboardEventHandler<HTMLInputElement>",
        },
      },
    },
    onChange: {
      description: "타이핑할 때마다 실행되는 함수입니다.",
      table: {
        type: {
          summary: "KeyboardEventHandler<HTMLInputElement>",
        },
      },
    },
    ...commonArgTypes,
  },
};

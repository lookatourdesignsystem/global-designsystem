import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { commonArgTypes, inputModeTypes, textAlignTypes } from "./common";
export const textareaDesc = {
  parameters: {
    componentSubtitle:
      "Textarea는 다중 열의 문장을 입력, 수정할 수 있는 구성요소입니다.",
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
    textAreaRef: {
      description:
        "Textarea의 useRef값입니다. useTextarea의 첫번째로 리턴되는 값을 prop으로 사용합니다.",
      type: { required: true },
      table: {
        type: {
          summary: "React.MutableRefObject<HTMLDivElement | null>",
        },
      },
    },
    state: {
      description: "Textarea의 상태입니다.",
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
        defaultValue: {
          summary: '"none"',
        },
        type: {
          summary: arrayToArgTypes(inputModeTypes),
        },
      },
    },
    label: {
      description: "Textarea의 상단에 보여질 필드에 대한 라벨 텍스트입니다.",
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
      description: "Textarea의 하단에 보여질 안내문구입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    placeHolder: {
      description: "Textarea가 빈 상태에서 보여질 텍스트입니다.",
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
    height: {
      description: "Textarea의 높이입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: "128px",
        },
        type: {
          summary: "string",
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
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    onKeyUp: {
      description:
        "Textarea에 포커스된 상태에서 키 누른상태에서 땔 때 실행되는 함수입니다.",
      table: {
        type: {
          summary: "KeyboardEventHandler<HTMLInputElement>",
        },
      },
    },
    onKeyDown: {
      description:
        "Textarea에 포커스된 상태에서 키를 누를 때 실행되는 함수입니다.",
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
      description: "Textarea에 포커스될 때 실행하는 함수입니다.",
      table: {
        type: {
          summary: "KeyboardEventHandler<HTMLInputElement>",
        },
      },
    },
    onInput: {
      description:
        "타이핑할 때마다 실행되는 함수입니다. useTextarea에서 세번째로 리턴되는 함수를 이 prop에 사용합니다.",
      table: {
        type: {
          summary: "any",
        },
      },
    },
    ...commonArgTypes,
  },
};

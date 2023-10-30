import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { commonArgTypes, inputModeTypes } from "./common";

export const serialFieldDesc = {
  parameters: {
    componentSubtitle:
      "SerialField는 특정 형식의 문자열 정보를 수집하는 데 사용됩니다.",
    options: { showPanel: true },
  },
  argTypes: {
    inputMode: {
      description: "터치 디바이스에서 나타날 키보드 형태를 변경할 수 있습니다.",
      options: inputModeTypes,
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: '"numeric"',
        },
        type: {
          summary: arrayToArgTypes(inputModeTypes),
        },
      },
    },
    value: {
      description: "input에 입력된 값입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: "",
        },
        type: { summary: "string" },
      },
    },
    state: {
      description: "SerialField의 상태입니다.",
      options: ["disabled", "error", "success"],
      control: {
        type: "radio",
      },
      table: {
        type: { summary: '"disabled" | "error" | "success"' },
      },
    },
    masking: {
      description: "value의 masking 표시 여부입니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    maskingDelay: {
      description: "값 입력 후 masking으로 바뀌는 시간입니다.",
      control: {
        type: "number",
      },
      table: {
        defaultValue: {
          summary: 1000,
        },
        type: { summary: "number" },
      },
    },
    length: {
      description: "필드 개수입니다. false은 입력 칸이 1개입니다.",
      type: { required: true },
      options: [false, 2, 3, 4, 5, 6],
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 6,
        },
        type: { summary: "false | 2 | 3 | 4 | 5 | 6" },
      },
    },
    helperText: {
      description: "하단에 안내문구 입니다.",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    letterRegex: {
      description:
        "입력값의 유효성을 위한 정규식을 입력합니다. 초기값으로는 숫자만 입력이 가능한 정규식입니다.",
      table: {
        defaultValue: {
          summary: /[^0-9]/g,
        },
        type: { summary: "RegExp" },
      },
    },
    onChange: {
      description: "value를 입력할 때 실행되는 함수입니다.",
      type: { required: true },
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    ...commonArgTypes,
  },
};

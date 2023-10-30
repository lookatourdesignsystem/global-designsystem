import { commonArgTypes } from "./common";

export const selectDesc = {
  parameters: {
    componentSubtitle:
      "Select는 옵션 목록에서 한 가지 정보를 수집하는 데 사용됩니다.",
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
    title: {
      description: "옵션을 선택하는 Modal 상단에 보여질 타이틀입니다.",
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
    items: {
      description:
        "옵션들로 배열 형태로 들어갑니다.<br/>- value : 옵션의 실제값입니다.<br/>- label : 옵션 선택에서 보여질 값입니다.<br/>- subLabel : label 아래에 보여질 추가 설명입니다.<br/>- icon : 옵션과 함께 보여질 아이콘입니다.",
      type: { required: true },
      table: {
        type: {
          summary:
            "{ value: string; label: string; subLabel?: string; icon?: ReactElement;}[]",
        },
      },
    },
    labelText: {
      description: "Select input 위에 보여질 텍스트입니다.",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    helpText: {
      description: "Select input 아래에 보여질 안내 텍스트입니다.",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    searchText: {
      description: "특정 문자열이 포함된 옵션만 필터링하여 보여줍니다.",
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
    placeholder: {
      description:
        "옵션이 아무것도 선택되어 있지 않을 때 placeholder 값입니다.",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    selectedIndex: {
      description:
        "선택된 item의 index값 입니다. -1로 설정하면 placeholder가 선택됩니다.",
      control: {
        defaultValue: {
          summary: -1,
        },
        type: "number",
      },
      table: {
        type: { summary: "number" },
      },
    },
    error: {
      description: "true이면 error상태 스타일이 적용됩니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: { summary: "boolean" },
      },
    },
    description: {
      description: "subLabel의 노출 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: { summary: "boolean" },
      },
    },
    disabled: {
      description: "disabled 여부입니다.",
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
    onSelect: {
      description:
        "Select 모달에서 옵션을 선택했을 때 실행될 함수입니다. 파라미터로 선택한 옵션의 index를 전달받습니다.",
      table: {
        type: { summary: "(index: number) => void" },
      },
    },
    ...commonArgTypes,
  },
};

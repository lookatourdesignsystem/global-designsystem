import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { colorTypes, commonArgTypes, sizeTypes } from "./common";

export const buttonGroupDesc = {
  parameters: {
    componentSubtitle:
      "공통적인 성격의 Button 컴포넌트를 모아놓은 그룹입니다. Button컴포넌트와 동일하게 사용자가 클릭하거나 터치할 때 발생하는 동작을 실행하는 데 사용됩니다.",
    options: { showPanel: true },
  },
  argTypes: {
    items: {
      description: "Button 에 들어갈 요소를 배열 형태로 넣습니다.",
      type: { required: true },
      table: {
        type: {
          summary: "string[] | ReactNode[]",
        },
      },
    },
    selectedIndex: {
      description: "active 상태인 Button 의 인덱스 값입니다.",
      type: { required: true },
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    size: {
      description: "ButtonGroup 의 크기입니다.",
      options: sizeTypes,
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: '"m"',
        },
        type: {
          summary: arrayToArgTypes(sizeTypes),
        },
      },
    },
    color: {
      description: "ButtonGroup 의 컬러입니다.",
      options: colorTypes,
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: "default",
        },
        type: {
          summary: arrayToArgTypes(colorTypes),
        },
      },
    },
    direction: {
      description:
        "ButtonGroup 이 가로로 배치하려면 “horizontal”, 세로로 배치하려면 “vertical” 로 설정합니다.",
      options: ["horizontal", "vertical"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: "horizontal",
        },
        type: {
          summary: '"horizontal" | "vertical"',
        },
      },
    },
    icon: {
      description:
        "item 에 들어가는 요소가 Icon 컴포넌트라면 true 로 설정합니다. Icon 은 Icon Library 에서 선택하여 사용할 수 있습니다.",
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
    fullWidth: {
      description:
        "true 이면 ButtonGroup 너비를 100%가 되고 각 Button 들의 너비가 동일해집니다.",
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
    width: {
      description: "ButtonGroup 의 전체 너비입니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    scrollable: {
      description:
        "Button 들이 width 를 넘치면 가로 스크롤이 가능합니다. scrollable true 이면 선택되어 있는 버튼이 항상 맨앞에 보입니다. 주로 width prop 과 같이 사용됩니다.",
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
    initialFocus: {
      description:
        "페이지 첫 로딩될 때 초기 선택되어있는 버튼으로 이 값이 true 이면 자동 스크롤 및 포커싱됩니다.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: "scrollable ? true : false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    onChange: {
      description:
        "Button 을 클릭했을 때 실행할 함수입니다. 클릭한 Button 의 인덱스 값을 인자로 받습니다.",
      table: {
        type: {
          summary: "(activeButton: number) => void;",
        },
      },
    },
    ...commonArgTypes,
  },
};

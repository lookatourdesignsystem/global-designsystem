import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import {
  borderRadiusTypes,
  colorTypes,
  commonArgTypes,
  sizeTypes,
} from "./common";

export const buttonDesc = {
  parameters: {
    componentSubtitle:
      "버튼은 사용자가 클릭하거나 터치할 때 발생하는 동작을 실행하는 데 사용됩니다.",
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      description:
        "Button 의 type 을 정합니다. HTML의 <button> Element 의 type attribute값입니다.",
      options: ["button", "submit", "reset"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"button"',
        },
        type: {
          summary: '"button" | "submit" | "reset"',
        },
      },
    },
    variant: {
      description: "Button 의 variant 를 정합니다.",
      options: ["text", "solid", "solidSub", "outlined"],
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 'icon ? "text" : "solid"',
        },
        type: {
          summary: '"text" | "solid" | "solidSub" | "outlined"',
        },
      },
    },
    size: {
      description: "Button 의 크기입니다.",
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
      description: "Button 의 컬러입니다.",
      options: colorTypes,
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: '"default"',
        },
        type: {
          summary: arrayToArgTypes(colorTypes),
        },
      },
    },
    borderRadius: {
      description: "Button 의 border-radius 값 입니다.",
      options: borderRadiusTypes,
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: '"200"',
        },
        type: {
          summary: arrayToArgTypes(borderRadiusTypes),
        },
      },
    },
    icon: {
      description:
        "children 에 Icon Library 의 아이콘이 단독으로 들어가는 경우, 해당 값을 true값으로 설정합니다.",
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
    selected: {
      description: "Button 의 selected 여부입니다.",
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
      description: "Button 의 disabled 여부입니다.",
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
    block: {
      description:
        "Button의 스타일 display:block 여부를 정합니다. 주로 버튼을 전체 너비로 하고자할 때 true로 설정합니다.",
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
    isLoading: {
      description:
        "Button 의 로딩 상태 여부입니다. true 이면 loader가 Button 내부에 보여집니다.",
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
    leftIcon: {
      description:
        "Button 이 왼쪽에 들어갈 아이콘 컴포넌트입니다. Icon 은 Icon Library 에서 선택하여 사용할 수 있습니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    rightIcon: {
      description:
        "Button이 오른쪽에 들어갈 아이콘 컴포넌트입니다. Icon은 Icon Library에서 선택하여 사용할 수 있습니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    onClick: {
      description: "Button을 클릭했을 때 실행할 함수입니다.",
      table: {
        type: {
          summary: "any",
        },
      },
    },
    children: {
      description: "Button 컴포넌트 내부에 들어갈 컨텐츠입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    ...commonArgTypes,
  },
};

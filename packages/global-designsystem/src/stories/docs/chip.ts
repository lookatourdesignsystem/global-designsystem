import { commonArgTypes } from "./common";

export const chipDesc = {
  parameters: {
    componentSubtitle:
      "Chip은 유저에게 카테고리나 압축된 정보를 제공해주고 선택 요소 역할도 합니다.",
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      description: "Chip의 유형입니다.",
      options: ["solid", "outline", "solidSub"],
      table: {
        defaultValue: {
          summary: "solid",
        },
        type: {
          summary: '"solid" | "outline" | "solidSub"',
        },
      },
    },
    color: {
      description: "Chip의 컬러입니다.",
      options: ["default", "primary", "secondary"],
      table: {
        defaultValue: {
          summary: "default",
        },
        type: {
          summary: '"default" | "primary" | "secondary"',
        },
      },
    },
    selected: {
      description: "selected 상태 여부입니다.",
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
      description: "disabled 상태 여부입니다.",
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
      description: "Chip의 크기입니다.",
      options: ["s", "m"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"m"',
        },
        type: {
          summary: '"s" | "m"',
        },
      },
    },
    label: {
      description: "Chip 내부에 보여질 컨텐츠입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    leftIcon: {
      description:
        "컨텐츠 좌측에 들어갈 아이콘입니다. Icon Library의 Icon을 선택하여 사용할 수 있습니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    rightIcon: {
      description:
        "컨텐츠 우측에 들어갈 아이콘입니다. Icon Library의 Icon을 선택하여 사용할 수 있습니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    onClick: {
      description: "Chip을 클릭했을 때 실행될 함수입니다.",
    },
    ...commonArgTypes,
  },
};

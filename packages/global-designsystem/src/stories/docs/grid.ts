import { commonArgTypes } from "./common";

export const gridDesc = {
  parameters: {
    componentSubtitle:
      "Grid는 화면 크기와 방향에 적응하여 레이아웃 전체에서 일관성을 보장합니다.",
    options: { showPanel: true },
  },
  argTypes: {
    background: {
      description: "배경 스타일입니다.",
      control: {
        type: "color",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    container: {
      description: "true이면 container역할의 스타일이 부여됩니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    item: {
      description: "true이면 item역할의 스타일이 부여됩니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    xs: {
      description: "xs범위에서 grid item이 차지할 열의 개수입니다.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    sm: {
      description: "sm범위에서 grid item의 차지할 열의 개수입니다.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    md: {
      description: "md범위에서 grid item의 차지할 열의 개수입니다.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    lg: {
      description: "lg범위에서 grid item의 차지할 열의 개수입니다.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    xl: {
      description: "xl범위에서 grid item의 차지할 열의개수입니다.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    repeatCount: {
      description: "grid container에서 나누어질 열의 개수입니다.",
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    children: {
      description: "Container 내부 컨텐츠입니다.",
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

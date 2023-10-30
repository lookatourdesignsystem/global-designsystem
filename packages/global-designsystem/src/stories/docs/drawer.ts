import { commonArgTypes } from "./common";

export const drawerDesc = {
  parameters: {
    componentSubtitle:
      "Drawer는 화면 사이드에서 유저가 토글 방식으로 열고 닫을 수 있으며 유저가 앱의 전반적인 네비게이션을 제공합니다.",
    options: { showPanel: true },
  },
  argTypes: {
    open: {
      description: "Drawer 오픈 여부입니다.",
      type: { required: true },
      control: {
        type: "boolean",
      },
      table: {
        type: {
          control: {
            summary: "boolean",
          },
        },
      },
    },
    direction: {
      description: "Drawer가 등장할 방향입니다.",
      options: ["left", "right"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"left"',
        },
        type: {
          summary: '"left" | "right"',
        },
      },
    },
    fullScreen: {
      description: "true로 설정하면 width가 100%가 되어 화면 전체를 덮습니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    header: {
      description: "헤더 영역 입니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    footer: {
      description: "풋터 영역 입니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    backdropColor: {
      description: "Backdrop의 컬러입니다.",
      control: {
        type: "color",
      },
      table: {
        defaultValue: {
          summary: "rgba(0,0,0,0.5)",
        },
        type: {
          summary: "string",
        },
      },
    },
    onClose: {
      description: "backdrop을 클릭할 때 실행될 함수 입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    ...commonArgTypes,
  },
};

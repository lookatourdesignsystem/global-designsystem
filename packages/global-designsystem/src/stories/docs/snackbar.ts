import { commonArgTypes } from "./common";

export const snackBarDesc = {
  parameters: {
    componentSubtitle: "Snackbar는 스낵바는 간단한 알림을 제공합니다.",
    options: { showPanel: true },
  },
  argTypes: {
    variant: {
      description: "Snackbar에는 두 가지 스타일을 제공합니다.",
      control: {
        type: "radio",
      },
      options: ["solid", "outlined"],
      table: {
        defaultValue: {
          summary: '"solid"',
        },
        type: { summary: '"solid" | "outlined"' },
      },
    },
    show: {
      description: "Snackbar의 노출 여부입니다.",
      type: { required: true },
      control: {
        type: "boolean",
      },
      table: {
        type: { summary: "boolean" },
      },
    },
    message: {
      description: "Snackbar에 보여질 내용입니다.",
      type: { required: true },
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    showActionButton: {
      description: "true이면 message 우측에 액션 버튼이 노출됩니다.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: "false",
        },
        type: { summary: "boolean" },
      },
    },
    actionText: {
      description: "ActionButton의 텍스트입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: "OK",
        },
        type: { summary: "string" },
      },
    },
    alert: {
      description: "Snackbar의 목적에 따라 컬러가 정해집니다.",
      options: ["default", "error", "info", "warning", "success"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"default"',
        },
        type: {
          summary: '"default" | "error" | "info" | "warning" | "success"',
        },
      },
    },
    showSystemIcon: {
      description:
        "message 좌측에 보여질 아이콘 노출 여부입니다. alert이 ”default”일 때는 아이콘이 항상 없습니다.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: true,
        },
        type: { summary: "boolean" },
      },
    },
    showCloseButton: {
      description: "CloseButton의 노출 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: true,
        },
        type: { summary: "boolean" },
      },
    },
    timeout: {
      description: "Snackbar 애니메이션의 transition duration입니다.",
      control: {
        type: "number",
      },
      table: {
        defaultValue: {
          summary: 250,
        },
        type: { summary: "number" },
      },
    },
    position: {
      description:
        "breakpoints 마다 Snackbar의 position을 변경할 수 있습니다. 기본적으로는 화면 하단 중간에 배치됩니다. 브라우저 별 특징에 따라 Snackbar컴포넌트가 브라우저 시스템 UI에 가려지는 경우가 있어 이를 보호하기 위해 position값 보다 ”20px”씩 추가되어 위치됩니다.",
      table: {
        defaultValue: {
          summary: {
            xs: {
              bottom: 20,
            },
          },
        },
        type: {
          summary: `{
             [key in BreakpointKey]?:    
                {
                    top?: number | string;
                    left?: number;
                    right?: number;
                    bottom?: number | string;
                };
            }`,
        },
      },
    },
    basePosition: {
      description:
        "basePosition 위치를 기준으로 position값 만큼 더해 위치하게 됩니다.",
      table: {
        type: {
          summary: `{
                top?: number;
                left?: number;
                right?: number;
                bottom?: number;
            }`,
        },
      },
    },
    transitionType: {
      description: "Snackbar가 나타날 때 애니메이션 유형입니다.",
      table: {
        defaultValue: {
          summary: '["fade"]',
        },
        type: {
          summary: '("fade" | "slide-bottom-center")[]',
        },
      },
    },
    onClickAction: {
      description: "ActionButton을 클릭할 때 실행되는 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    onClose: {
      description: "CloseButton을 클릭할 때 실행되는 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    exited: {
      description: "Snackbar가 화면에서 완전히 사라진 후에 실행될 함수입니다.",
      table: {
        defaultValue: {
          summary: () => {},
        },
        type: {
          summary: "() => void",
        },
      },
    },
    ...commonArgTypes,
  },
};

import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { commonArgTypes, typographyTypes } from "./common";

export const modalDesc = {
  parameters: {
    componentSubtitle:
      "Modal은 사용자의 특정 행동에 대한 중요한 피드백을 주거나 사용자의 확인을 받기 위해 사용하는 구성 요소입니다.",
    options: { showPanel: true },
  },
  argTypes: {
    id: {
      description: "HTML Element의 id 속성입니다.",
      table: {
        type: { summary: "string" },
      },
    },
    open: {
      description: "Modal의 노출 여부입니다.",
      table: {
        type: { summary: "boolean" },
      },
    },
    title: {
      description: "모달 상단에 타이틀입니다.",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
      },
    },
    titleVariant: {
      description: "title의 Typography variant입니다.",
      options: typographyTypes,
      table: {
        defaultValue: { summary: "h6" },
        type: { summary: arrayToArgTypes(typographyTypes) },
      },
    },
    hideCloseButton: {
      description: "true이면 우측 상단 닫기 버튼이 사라집니다.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    hideBackdrop: {
      description: "true이면 Modal 뒤에 있는 Backdrop이 사라집니다.",
      table: {
        type: { summary: "boolean" },
      },
    },
    disableBackdropClose: {
      description:
        "true이면 Modal뒤에 있는 Backdrop을 클릭했을 때 Modal이 닫히지 않습니다.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    icon: {
      description:
        "닫기 버튼에 들어갈 icon 으로 Icon Library 의 Icon을 선택하여 사용할 수 있습니다.",
      table: {
        defaultValue: {
          summary: "<CloseFilledIcon />",
        },
        type: {
          summary: "ReactNode",
        },
      },
    },
    iconSize: {
      description: "닫기 버튼에 들어갈 icon 의 사이즈입니다.",
      control: {
        type: "number",
      },
      table: {
        defaultValue: {
          summary: 24,
        },
        type: {
          summary: "number",
        },
      },
    },
    fullScreen: {
      description: "true이면 height가 100%가 되어 화면 전체를 덮습니다.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    backdropColor: {
      description: "backdrop의 컬러입니다.",
      control: {
        type: "color",
      },
      table: {
        defaultValue: { summary: "rgba(0,0,0,0.5)" },
        type: { summary: "string" },
      },
    },
    borderWidth: {
      description: "테두리 너비입니다.",
      table: {
        defaultValue: { summary: 0 },
        type: { summary: "number" },
      },
    },
    animation: {
      description:
        "커스텀 애니메이션으로 Modal 이 나타나고 사라지는 과정을 visible, hidden, exit 단계로 나누어 스타일을 지정할 수 있습니다.",
      table: {
        defaultValue: {
          summary: {
            hidden: {
              opacity: 0,
              translateY: 0,
              transition: {
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1],
              },
            },
            visible: {
              opacity: 1,
              translateY: 0,
              transition: {
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1],
              },
            },
            exit: {
              opacity: 0,
              translateY: 0,
              transition: {
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1],
              },
            },
          },
        },
        type: {
          summary: "{ hidden?: Variant; visible?: Variant; exit?: Variant; }",
        },
      },
    },
    animationVariables: {
      description: "animation 에 필요한 변수를 object 형태로 넘깁니다.",
      table: {
        defaultValue: {
          summary: `{ fullScreen : false }`,
        },
        type: {
          summary: "boolean",
        },
      },
    },
    header: {
      description: "헤더 영역을 커스텀합니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    fixTop: {
      description: "내부 컨텐츠 영역을 스크롤할 때 상단에 고정될 영역입니다.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    fixBottom: {
      description: "하단에 보여질 영역입니다. 일반적으로 버튼들이 나열됩니다.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    children: {
      description: "내부 컨텐츠 영역입니다.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    onClose: {
      description:
        "우측 상단에 닫기 버튼과 Backdrop을 클릭시 실행될 함수입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    ...commonArgTypes,
  },
};

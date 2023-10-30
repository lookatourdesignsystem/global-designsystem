import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { commonArgTypes, typoVariantTypes } from "./common";

export const bottomSheetDesc = {
  parameters: {
    componentSubtitle:
      "BottomSheet는 화면 하단에 고정되어 현재 페이지와 관련된 내용이나 추가 설명 및 아이콘을 제공하는 데 사용됩니다. 또한 유저에게 중요한 피드백을 제공하거나 사용자 확인을 받는 데 사용할 수 있습니다.",
    options: { showPanel: true },
  },
  argTypes: {
    title: {
      description: "상단에 보여질 타이틀입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    open: {
      description: "BottomSheet의 노출 여부입니다.",
      type: { required: true },
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    fixTop: {
      description: "내부 컨텐츠 영역을 스크롤할 때 상단에 고정될 영역입니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    fixBottom: {
      description: "하단에 보여질 영역입니다. 일반적으로 버튼들이 나열됩니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    titleVariant: {
      description: "title의 Typography variant입니다.",
      options: typoVariantTypes,
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: '"h6"',
        },
        type: {
          summary: arrayToArgTypes(typoVariantTypes),
        },
      },
    },
    hideCloseButton: {
      description: "true 이면 우측 상단에 닫기 버튼을 숨김처리합니다.",
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
    disableBackdropClose: {
      description: "Backdrop 클릭했을 때 BottomSheet 이 닫히는 지 여부입니다.",
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
    hideBackdrop: {
      description: "Backdrop 노출 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
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
      description:
        "true로 설정하면 height 가 100%가 되어 화면 전체를 덮습니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
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
          summary: '"rgba(0,0,0,0.5)"',
        },
        type: {
          summary: "string",
        },
      },
    },
    animation: {
      description:
        "커스텀 애니메이션으로 BottomSheet 가 나타나고 사라지는 과정을 visible, hidden, exit 단계로 나누어 스타일을 지정할 수 있습니다.",
      table: {
        type: {
          summary: "{ hidden?: Variant; visible?: Variant; exit?: Variant; }",
        },
      },
    },
    animationVariables: {
      description: "animation 에 필요한 변수를 object 형태로 넘깁니다.",
    },
    header: {
      description: "헤더 영역을 커스텀합니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    borderWidth: {
      description: "테두리의 굵기입니다.",
      control: {
        type: "number",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: "number",
        },
      },
    },
    children: {
      description: "내부 컨텐츠 영역입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    onClose: {
      description: "닫기 버튼 클릭시 실행되는 함수입니다.",
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

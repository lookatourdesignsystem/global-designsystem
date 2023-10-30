import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { spacingTypes, borderRadiusTypes, commonArgTypes } from "./common";

export const boxDesc = {
  parameters: {
    componentSubtitle:
      "Box는 구성요소에 대한 래퍼 역할을 하고 스타일을 자유롭게 적용하여 사용합니다.",
    options: { showPanel: true },
  },
  argTypes: {
    id: {
      description: "HTML Element의 id 속성입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    border: {
      description: "Box 의 테두리 스타일 입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    width: {
      description: "Box 의 너비입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    height: {
      description: "Box 의 높이입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    maxWidth: {
      description: "Box 의 최대 너비입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    minWidth: {
      description: "Box 의 최소 너비입니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    borderRadius: {
      description: "border-radius 값입니다.",
      options: borderRadiusTypes,
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: '"0"',
        },
        type: {
          summary: arrayToArgTypes(borderRadiusTypes),
        },
      },
    },
    color: {
      description: "폰트 컬러입니다.",
      control: {
        type: "color",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
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
    p: {
      description: "사방의 padding 값 입니다.",
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: arrayToArgTypes(spacingTypes),
        },
      },
    },
    pt: {
      description: "padding-top 값 입니다.",
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: arrayToArgTypes(spacingTypes),
        },
      },
    },
    pr: {
      description: "padding-right 값 입니다.",
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: arrayToArgTypes(spacingTypes),
        },
      },
    },
    pb: {
      description: "padding-bottom 값 입니다.",
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: arrayToArgTypes(spacingTypes),
        },
      },
    },
    pl: {
      description: "padding-left 값 입니다.",
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: "0",
        },
        type: {
          summary: arrayToArgTypes(spacingTypes),
        },
      },
    },
    as: {
      description: "HTML element 타입을 지정합니다.",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: '"div"',
        },
        type: {
          summary: "ElementType",
        },
      },
    },
    children: {
      description: "Box 내부 컨텐츠입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    onClick: {
      description: "Box 를 클릭할 때 실행되는 함수입니다.",
      table: {
        type: {
          summary: "(e?: MouseEvent<HTMLDivElement>) => void",
        },
      },
    },
    ...commonArgTypes,
  },
};

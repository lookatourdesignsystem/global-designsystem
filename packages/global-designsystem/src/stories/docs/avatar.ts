import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { borderRadiusTypes, commonArgTypes, sizeTypes } from "./common";

export const avatarDesc = {
  parameters: {
    componentSubtitle:
      "Avatar는 유저를 설명하기 위해 사용되는 구성 요소로 사용자 이름의 이미지 또는 텍스트로 구성될 수 있습니다.",
    options: { showPanel: true },
  },
  argTypes: {
    alt: {
      description: "src 이미지에 대한 alt값입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    src: {
      description: "Avatar 에 들어갈 이미지입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    icon: {
      description:
        "Avatar 에 들어갈 아이콘입니다. Icon Library 의 아이콘이 사용됩니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    backgroundColor: {
      description: "Avatar 의 배경색입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      description: "Avatar 의 크기입니다.",
      options: [...sizeTypes, "xxl"],
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: '"xxs"',
        },
        type: {
          summary: arrayToArgTypes([...sizeTypes, "xxl"]),
        },
      },
    },
    borderRadius: {
      description: "Avatar 의 borderRadius 값입니다.",
      options: borderRadiusTypes,
      control: {
        defaultValue: {
          summary: '"circle"',
        },
        type: "select",
      },
      table: {
        type: {
          summary: arrayToArgTypes(borderRadiusTypes),
        },
      },
    },
    children: {
      description:
        "이미지, 아이콘이 아닌 텍스트 형태로 보여주려면 children 으로 텍스트를 넘깁니다.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    ...commonArgTypes,
  },
};

import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { commonArgTypes, systemColorTypes } from "./common";

export const badgeDesc = {
  parameters: {
    componentSubtitle:
      "Badge는 새로운 업데이트 및 알림에 대한 정보를 제공하는 데 사용되는 구성 요소입니다. Button, Icon, Box와 같은 다른 구성 요소와 함께 사용되며 단독으로 사용할 수 없습니다.",
    options: { showPanel: true },
  },
  argTypes: {
    value: {
      description: "Badge 에 보여질 컨텐츠입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "string | number",
        },
      },
    },
    color: {
      description: "Badge 의 색깔입니다.",
      options: systemColorTypes,
      control: {
        type: "select",
      },
      table: {
        defaultValue: {
          summary: '"default"',
        },
        type: {
          summary: arrayToArgTypes(systemColorTypes),
        },
      },
    },
    horizontal: {
      description: "children 을 기준으로 상단 또는 하단에 위치합니다.",
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
    vertical: {
      description: "children 을 기준으로 상단 또는 하단에 위치합니다.",
      options: ["top", "bottom"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"top"',
        },
        type: {
          summary: '"top" | "bottom"',
        },
      },
    },
    invisible: {
      description: "true 로 설정하면 Badge 를 숨길 수 있습니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    shape: {
      description:
        "children 대상이 원형일 경우 round 로 변경하면 children 대상의 원형 테두리에 맞게 위치합니다.",
      options: ["square", "round"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"square"',
        },
        type: {
          summary: '"square" | "round"',
        },
      },
    },
    variant: {
      description:
        "value 를 dot 형태, 한 글자, 두 글자 이상으로 표시할 수 있습니다.",
      options: ["dot", "1unit", "2unit"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"2unit"',
        },
        type: {
          summary: '"dot" | "1unit" | "2unit"',
        },
      },
    },
    position: {
      description: "children 안쪽에 위치할 지 바깥쪽에 위치할 지 정합니다.",
      options: ["in", "out"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: '"out"',
        },
        type: {
          summary: '"in" | "out"',
        },
      },
    },
    max: {
      description:
        "value 가 number 일 경우 최대값을 설정해 최대값보다 클 경우 ‘+’ 와 함께 표기할 수 있습니다.",
      control: {
        type: "number",
      },
      table: {
        defaultValue: {
          summary: "undefined",
        },
        type: {
          summary: "number",
        },
      },
    },
    width: {
      description:
        "children 의 부모 Element 너비입니다. 디폴트 값은 children 의 너비입니다.",
      table: {
        defaultValue: {
          summary: '"fit-content"',
        },
        type: {
          summary: "string",
        },
      },
    },
    children: {
      description:
        "Badge 의 children 으로 새로운 업데이트 및 알림에 대한 정보를 제공할 컨텐츠입니다.",
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

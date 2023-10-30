import { commonArgTypes } from "./common";

export const accordionDesc = {
  parameters: {
    componentSubtitle:
      "Accordion를 사용하면 유저의 액션으로 페이지에서 관련 콘텐츠 섹션을 표시하거나 숨길 수 있습니다.",
    options: { showPanel: true },
  },
  argTypes: {
    item: {
      description:
        "Accordion에 들어갈 item입니다. 각 item은 summary, details, disabled, initialExpanded 값을 가집니다.",
      type: { required: true },
      table: {
        type: {
          summary:
            "{ summary: ReactNode; details: ReactNode; disabled?: boolean; initialExpanded?: boolean;}",
        },
      },
    },
    icon: {
      description:
        "item에 들어가는 요소가 Icon이라면 true로 설정합니다. Icon은 Icon Library에서 선택하여 사용할 수 있습니다.",
      type: { required: true },
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
    expanded: {
      description: "Accordion의 expanded 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    detailTransition: {
      description: "transition 스타일을 추가합니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    activeMargin: {
      description: "active상태일 때 margin 값입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    accordionStyle: {
      description:
        "Summary 영역과 Details 영역을 랩핑한 엘리먼트에 스타일을 커스텀합니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    summaryStyle: {
      description: "Summary 영역의 스타일을 커스텀합니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    detailsStyle: {
      description: "Details 영역의 스타일을 커스텀합니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    iconStyle: {
      description: "icon의 스타일을 커스텀합니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    selectiveIcon: {
      description:
        "Accordion 을 클릭할 때 실행하는 함수로 expanded 상태를 받아 커스텀 icon을 리턴하는 함수입니다.",
      table: {
        type: {
          summary: "((expanded: boolean) => ReactNode)",
        },
      },
    },
    onChange: {
      description:
        "Accordion 을 클릭할 때 실행하는 함수로 해당 expanded 상태를 받아 함수를 구성할 수 있습니다.",
      table: {
        type: {
          summary: "((newExpanded: boolean) => void)",
        },
      },
    },
    ...commonArgTypes,
  },
};

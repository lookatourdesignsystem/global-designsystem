import { commonArgTypes } from "./common";

export const tabsDesc = {
  parameters: {
    componentSubtitle: "Tab은 콘텐츠 그룹 간의 뷰를 전환 할 수 있습니다.",
    options: { showPanel: true },
  },
  argTypes: {
    items: {
      description: "Tabs에 나열될 컨텐츠들입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "string[] | ReactNode[]",
        },
      },
    },
    selectedIndex: {
      description: "active상태인 Tab의 index입니다.",
      type: { required: true },
      control: {
        type: "number",
      },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    size: {
      description: "Tabs의 사이즈입니다.",
      options: ["xs", "s", "m", "l"],
      control: {
        type: "radio",
      },
      table: {
        type: {
          summary: '"xs" | "s" | "m" | "l"',
        },
      },
    },
    fullWidth: {
      description:
        "true이면 Tabs 너비를 100%가 되고 각 Tab들의 너비가 동일해집니다.",
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
    width: {
      description: "Tabs의 전체 너비입니다.",
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    scrollable: {
      description:
        "true이면 가로 스크롤이 가능하게 하고, 선택되어 있는 탭이 항상 맨앞에 보이도록 합니다. 주로 width prop과 같이 사용됩니다.",
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
    initialFocus: {
      description:
        "페이지 첫 로딩될 때 초기 선택되어있는 탭으로 자동 스크롤 및 포커싱됩니다.",
      table: {
        defaultValue: {
          summary: "scrollable ? true : false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    onChange: {
      description:
        "Tab을 클릭할 때 실행되는 함수입니다. active되는 Tab의 index를 전달받습니다.",
      type: { required: true },
      table: {
        type: {
          summary: "(activeTab: number) => void",
        },
      },
    },
    ...commonArgTypes,
  },
};

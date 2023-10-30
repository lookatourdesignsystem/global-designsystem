import { arrayToArgTypes } from "@lookatourdesignsystem/utils-library";
import { commonArgTypes, loadingTypes } from "./common";

export const loadingDesc = {
  parameters: {
    componentSubtitle:
      "Loading는 circle 모양으로 프로세스 중임을 나타내고 진행률을 표시할 수 있습니다.",
    options: { showPanel: true },
  },
  argTypes: {
    color: {
      description: "프로세스의 상태를 상징하는 컬러입니다.",
      options: loadingTypes,
      table: {
        defaultValue: {
          summary: "default",
        },
        type: {
          summary: arrayToArgTypes(loadingTypes),
        },
      },
    },
    size: {
      description: "circle의 크기입니다.",
      table: {
        defaultValue: {
          summary: 58,
        },
        type: {
          summary: "number",
        },
      },
    },
    thickness: {
      description: "circle 링의 두께입니다.",
      table: {
        defaultValue: {
          summary: 6,
        },
        type: {
          summary: "number",
        },
      },
    },
    disableShrink: {
      description:
        "true로 설정하면 variant=“indeterminate” 인 경우 circle의 두께에 들어간 애니메이션이 없어집니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    value: {
      description: "range 범위 내에서의 프로세스 진행정도입니다.",
      table: {
        defaultValue: {
          summary: 0,
        },
        type: {
          summary: "number",
        },
      },
    },
    range: {
      description: "value의 범위입니다.",
      table: {
        defaultValue: {
          summary: { min: 0, max: 100 },
        },
        type: {
          summary: "{ min: number; max: number }",
        },
      },
    },
    variant: {
      description:
        "-determinate : 프로세스에 특정한 진행정도(value)를 표시합니다.<br/>-indeterminate : 불특정 대기 시간을 시각화합니다. value는 사용되지 않습니다.",
      table: {
        defaultValue: {
          summary: "indeterminate",
        },
        type: {
          summary: '"determinate" | "indeterminate"',
        },
      },
    },
    label: {
      description: "circle 중앙에 보여질 텍스트입니다.",
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    withOverlay: {
      description: "true이면 Backdrop과 함께 배치됩니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    open: {
      description:
        "withOverlay가 true일 때 Loading와 Backdrop의 노출여부입니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "number",
        },
      },
    },
    backdropColor: {
      description: "Backdrop 컬러입니다.",
      table: {
        control: { type: "color" },
        type: {
          summary: "string",
        },
      },
    },
    disableBackdropClose: {
      description: "true이면 onClose함수 실행이 안됩니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    onClickBackdrop: {
      description: "Backdrop 영역을 클릭하면 실행하는 함수입니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "() => void",
        },
      },
    },
    ...commonArgTypes,
  },
};

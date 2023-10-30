import { commonArgTypes } from "./common";

export const videoDesc = {
  parameters: {
    componentSubtitle:
      "Video는 영상 리소스를 재생 및 컨트롤할 수 있는 컴포넌트입니다.",
    options: { showPanel: true },
  },
  argTypes: {
    sources: {
      description:
        "비디오 리소스를 여러개 배열 형태로 넣습니다. 비디오 최적화를 위해 webm > mp4 우선순위로 합니다.",
      type: { required: true },
      table: {
        type: {
          summary: `{ src: string; type: "video/webm" | "video/mp4"; }[]`,
        },
      },
    },
    errorFallbackEl: {
      description: "비디오 재생에서 에러가 났을 때 보여질 대체 컴포넌트입니다.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "ReactElement",
        },
      },
    },
    loop: {
      description: "비디오 반복 재생 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    muted: {
      description: "비디오 음소거 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    autoPlay: {
      description: "비디오 자동 재생 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    poster: {
      description:
        "비디오를 다운로드하는 동안이나 사용자가 재생 버튼을 누르기 전까지 비디오 대신 보여줄 이미지를 명시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    controls: {
      description:
        "플레이 버튼이나 정지 버튼과 같이 비디오의 실행을 제어할 수 있는 제어기 노출 여부입니다.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: true,
        },
        type: {
          summary: "boolean",
        },
      },
    },
    preload: {
      description:
        "페이지가 로드될 때 비디오 파일이 같이 로드되어야 하는지 여부와 그 방법을 명시합니다.<br/>- auto : 페이지가 로드될 때 미디어 파일을 모두 다운로드됩니다.<br/>- metadata : 페이지가 로드될 때 미디어 파일을 다운로드 하지 않고 메타데이터(metadata)만 다운로드합니다.<br/>- none: 사용자가 재생버튼을 누르면 다운로드됩니다.",
      options: ["auto", "metadata", "none"],
      control: {
        type: "radio",
      },
      table: {
        defaultValue: {
          summary: "auto",
        },
        type: {
          summary: "'auto' | 'metadata' | 'none'",
        },
      },
    },
    onEnded: {
      description: "비디오 재생이 끝났을 때 실행되는 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    ...commonArgTypes,
  },
};

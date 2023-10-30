import { commonArgTypes } from "./common";
export const transitionDesc = {
  parameters: {
    componentSubtitle:
      "Transition는 타켓 요소가 마운팅되고 언마운팅되는 상황에 애니메이션을 구현할 수 있는 구성요소입니다.",
    options: { showPanel: true },
  },
  argTypes: {
    inTransition: {
      description: "true이면 children 요소가 마운트됩니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    types: {
      description: "transition의 타입입니다.",
      table: {
        type: {
          summary: `("fade" | "slide-bottom" | "slide-bottom-center")[]`,
        },
      },
    },
    customType: {
      description:
        "types에 정의된 것 외에 커스텀 transition 타입을 클래스명으로 정의할 수 있습니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    children: {
      description: "transition 이 적용될 타겟 요소입니다.",
      type: { required: true },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    unmountOnExit: {
      description:
        "true이면 애니메이션 종료 후(onExit) 타켓 요소가 언마운트 됩니니다.",
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
    timeout: {
      description: "transition의 duration입니다.",
      control: {
        type: "number",
      },
      table: {
        defaultValue: {
          summary: 250,
        },
        type: {
          summary: "number",
        },
      },
    },
    nodeRef: {
      description: "children요소 ref입니다.",
      table: {
        type: {
          summary: "Ref<HTMLElement | undefined> | undefined",
        },
      },
    },
    enter: {
      description:
        "children요소가 마운트되어 transition이 시작되는 시점에 실행할 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    entering: {
      description:
        "children요소가 enter후 transition일어나는 동안에 실행할 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    entered: {
      description:
        "children요소가 transition이 끝나고 완전히 눈에 보일 때 실행할 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    exit: {
      description:
        "children요소가  transition이 시작되는 시점에 실행할 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    exiting: {
      description:
        "children요소가 exit후 transition이 일어나는 동안에 실행할 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    exited: {
      description:
        "children요소가 transition이 끝나고 화면에서 언마운트 될 때 실행할 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    ...commonArgTypes,
  },
};

export const useIntersectionDesc = {
  parameters: {
    componentSubtitle:
      "useIntersection는 타켓 요소가 화면에 노출중인지를 감지할 수 있습니다.",
    options: { showPanel: false },
  },
  argTypes: {
    element: {
      description: "타겟 요소입니다.",
      table: {
        type: {
          summary: "RefObject<HTMLElement>",
        },
      },
    },
    options: {
      description:
        "- threshold: observer의 콜백이 실행될 대상 요소의 가시성 퍼센티지를 나타내는 단일 숫자 혹은 숫자 배열입니다. 만일 50%만큼 요소가 보여졌을 때를 탐지하고 싶다면, 값을 0.5로 설정하면 됩니다.<br/>- rootMargin: root 가 가진 여백입니다. 이 속성의 값은 CSS의 margin 속성과 유사합니다. e.g. '10px 20px 30px 40px' (top, right, bottom, left). 이 값은 퍼센티지가 될 수 있습니다.<br/>- root: 대상 객체의 가시성을 확인할 때 사용되는 뷰포트 요소입니다. 이는 대상 객체의 조상 요소여야 합니다. 기본값은 브라우저 뷰포트이며, root 값이 null 이거나 지정되지 않을 때 기본값으로 설정됩니다.",
      table: {
        type: {
          summary: `{
						threshold?: number | number[];
						rootMargin?: string;
						root?: RefObject<HTMLElement>;
					}`,
        },
      },
    },
    lazy: {
      description: "false이면 observe하지 않습니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    keepObserving: {
      description:
        "false이면 화면에 노출되는지 최초 한번만 observe하고 true이면 계속 observe하면서 새운 isIntersecting 값을 리턴하게됩니다.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
};

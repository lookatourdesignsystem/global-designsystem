export const useSnackbarDesc = {
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 400,
    },
    componentSubtitle:
      "useSnackbar은 사용해 Snackbar의 상태를 핸들링할 수 있습니다.",
    options: { showPanel: false },
  },
  argTypes: {
    addMessage: {
      description:
        "Snackbar를 오픈하는 함수입니다. 파라미터에 대한 자세한 설명은 Snackbar Properties를 참고하세요.<br/>- duration : Snackbar가 visible상태로 유지하는 시간입니다.",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: `{
						onClickAction?: () => void;
						actionText?: string;
						duration?: number;
						timeout?: number;
						alert?: "default" | "error" | "info" | "warning" "success";
						transitionType?: ("fade" | "slide-bottom-center")[];
						showActionButton?: boolean;
						showSystemIcon?: boolean;
						showCloseButton?: boolean;
						position?: {
								[key in BreakpointKey]?: {
									top?: number | string;
									left?: number;
									right?: number;
									bottom?: number | string;
								};
						};
					}`,
        },
      },
    },
    clearMessages: {
      description: "Snackbar를 모두 없애는 함수입니다.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    updateBasePosition: {
      description: "Snackbar의 basePosition 값을 업데이트하는 함수입니다.",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: `(basePosition: {
						top?: number;
						left?: number;
						right?: number;
						bottom?: number;
					}) => void;`,
        },
      },
    },
  },
};

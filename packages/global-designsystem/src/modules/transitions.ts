import { css, keyframes } from "@emotion/react";
import { SerializedStyles } from "@emotion/react";

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const fadeOut = keyframes`
from {
    opacity: 1;
}
to {
    opacity: 0;
}
`;

const slideIn = keyframes`
from {
    transform: translateY(100%);
}
to {
    transform: translateY(0);
}
`;

const slideOut = keyframes`
from {
    transform: translateY(0);
}
to {
    transform: translateY(100%);
}
`;
export interface Transition {
  enter?: SerializedStyles;
  "enter-active"?: SerializedStyles;
  "enter-done"?: SerializedStyles;
  "exit-active"?: SerializedStyles;
  exit?: SerializedStyles;
}
export const transitionEffect: { [key: string]: Transition } = {
  slide: {
    "enter-active": css`
      animation: ${slideIn} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `,
    "exit-active": css`
      animation: ${slideOut} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `,
  },
  fade: {
    "enter-active": css`
      animation: ${fadeIn} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `,
    "exit-active": css`
      animation: ${fadeOut} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `,
  },
};

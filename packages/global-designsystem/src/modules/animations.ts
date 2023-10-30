import { keyframes } from "@emotion/react";
import { Keyframes } from "@emotion/react/node_modules/@emotion/serialize";

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

const snackbarIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const snackbarOut = keyframes`
from {
    transform: translateX(-50%) translateY(0);
}
to {
    transform: translateX(-50%) translateY(-100%);
}
`;

export const animationEffect: { [key: string]: [Keyframes, Keyframes] } = {
  slide: [slideIn, slideOut],
  fade: [fadeIn, fadeOut],
  snackbar: [snackbarIn, snackbarOut],
};

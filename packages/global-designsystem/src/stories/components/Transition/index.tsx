import { Fragment, Ref } from "react";
import { CSSTransition } from "react-transition-group";
import { css, Global, keyframes } from "@emotion/react";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import { TransitionClassNamesKey, TransitionTypes } from "../../../types";
import { TransitionChildren } from "react-transition-group/Transition";

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

const slideInCenter = keyframes`
from {
    transform: translateY(100%) translateX(-50%);;
}
to {
    transform: translateY(0) translateX(-50%);;
}
`;

const slideOutCenter = keyframes`
from {
    transform: translateY(0) translateX(-50%);;
}
to {
    transform: translateY(100%) translateX(-50%);;
}
`;

export interface TransitionProps {
  inTransition: boolean;
  types?: TransitionTypes;
  customType?: string;
  children: TransitionChildren;
  unmountOnExit?: boolean;
  timeout?: number;
  nodeRef?: Ref<HTMLElement | undefined> | undefined;
  enter?: () => void;
  entering?: () => void;
  entered?: () => void;
  exit?: () => void;
  exiting?: () => void;
  exited?: () => void;
  testid?: string;
}

export const Transition = ({
  inTransition,
  timeout = 250,
  types,
  customType,
  unmountOnExit = false,
  enter,
  entering,
  entered,
  exit,
  exiting,
  exited,
  children,
  nodeRef,
  testid,
}: TransitionProps) => {
  const getFadeStyle = (timeout: number) => {
    return css`
      .fade-enter {
        opacity: 0;
      }
      .fade-enter-active {
        opacity: 1;
        transition: opacity ${timeout}ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .fade-exit {
        opacity: 1;
      }
      .fade-exit-active {
        opacity: 0;
        transition: opacity ${timeout}ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
    `;
  };

  const getSlideBottomStyle = (timeout: number) => {
    return css`
      .slide-bottom-enter-active {
        animation: ${slideIn} ${timeout}ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      .slide-bottom-exit-active {
        animation: ${slideOut} ${timeout}ms cubic-bezier(0.4, 0, 0.2, 1)
          forwards;
      }
    `;
  };

  const getSlideBottomCenterStyle = (timeout: number) => {
    return css`
      .slide-bottom-center-enter-active {
        animation: ${slideInCenter} ${timeout}ms cubic-bezier(0.4, 0, 0.2, 1)
          forwards;
      }
      .slide-bottom-center-exit-active {
        animation: ${slideOutCenter} ${timeout}ms cubic-bezier(0.4, 0, 0.2, 1)
          forwards;
      }
    `;
  };

  const getAnimationStyle = (types: TransitionTypes, timeout: number) => {
    if (types === undefined) {
      return;
    }
    return css`
      html {
        ${types.includes("fade") && getFadeStyle(timeout)}
        ${types.includes("slide-bottom") && getSlideBottomStyle(timeout)}
        ${types.includes("slide-bottom-center") &&
        getSlideBottomCenterStyle(timeout)}
      }
    `;
  };

  const getClassNames = (types: TransitionTypes) => {
    if (types === undefined) {
      return;
    }

    let classNames: CSSTransitionClassNames = {
      appear: "",
      appearActive: "",
      appearDone: "",
      enter: "",
      enterActive: "",
      enterDone: "",
      exit: "",
      exitActive: "",
      exitDone: "",
    };

    for (const key in classNames) {
      let tempClassNames = [];

      for (const type of types) {
        tempClassNames.push(
          `${type}-${key
            .split(/(?=[A-Z])/)
            .join("-")
            .toLowerCase()}`
        );
      }
      classNames[key as TransitionClassNamesKey] = tempClassNames.join(" ");
    }

    return classNames;
  };

  return (
    <Fragment>
      <Global styles={getAnimationStyle(types, timeout)} />
      <CSSTransition
        in={inTransition}
        timeout={timeout}
        classNames={customType ? customType : getClassNames(types)}
        unmountOnExit={unmountOnExit}
        onEnter={enter}
        onEntering={entering}
        onEntered={entered}
        onExit={exit}
        onExiting={exiting}
        onExited={exited}
        nodeRef={nodeRef}
        data-testid={testid}
      >
        {children}
      </CSSTransition>
    </Fragment>
  );
};

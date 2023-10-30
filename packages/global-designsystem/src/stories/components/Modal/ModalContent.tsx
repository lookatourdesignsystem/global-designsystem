import { ModalProps } from ".";
import { ModalHeader } from "./ModalHeader";
import { StyledModalContainerDiv, StyledModalContentDiv } from "./styles";
import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { Variants } from "framer-motion/dist/framer-motion";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import { Box } from "../Box";

const defaultAnimation: Variants = {
  hidden: ({ isBottomSheet, fullScreen }) => {
    return {
      opacity: isBottomSheet && !fullScreen ? 1 : 0,
      translateY: isBottomSheet && !fullScreen ? "100%" : 0,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      },
    };
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: ({ isBottomSheet, fullScreen }) => {
    return {
      opacity: isBottomSheet && !fullScreen ? 1 : 0,
      translateY: isBottomSheet && !fullScreen ? "100%" : 0,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      },
    };
  },
};

export const ModalContent = ({
  id,
  children,
  title,
  titleVariant,
  hideCloseButton,
  header,
  fixTop,
  fixBottom,
  onClick,
  icon,
  className,
  iconSize,
  fullScreen,
  animation,
  animationVariables,
  borderWidth,
  ...props
}: Omit<ModalProps, "onClose"> & {
  onClick: () => void;
}) => {
  const theme = useTheme();
  const breakpoints = useBreakpoints();
  const hideHeader =
    (title === "" || title === undefined) && hideCloseButton === true;

  return (
    <StyledModalContainerDiv
      variants={animation ? animation : defaultAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={
        animationVariables
          ? animationVariables
          : { isBottomSheet: breakpoints.calc.down("sm"), fullScreen }
      }
      id={id}
      className={getJoinedClassName("Modal", {
        className,
      })}
      theme={theme}
      breakpoints={breakpoints}
      fullScreen={fullScreen}
      borderWidth={borderWidth}
      {...props}
    >
      {(hideHeader === false || header !== undefined) && (
        <ModalHeader
          title={title}
          titleVariant={titleVariant}
          onClose={onClick}
          hideCloseButton={hideCloseButton}
          icon={icon}
          iconSize={iconSize}
          header={header}
        />
      )}
      {fixTop !== undefined && (
        <Box className="ModalFixTop" pt="200" pr="500" pb="200" pl="500">
          {fixTop}
        </Box>
      )}
      <StyledModalContentDiv
        className="ModalContent"
        isFixBottom={fixBottom !== undefined}
        isHeader={hideHeader === false || header !== undefined}
        theme={theme}
      >
        {children}
      </StyledModalContentDiv>
      {fixBottom !== undefined && (
        <Box className="ModalFixBottom" pt="200" pr="500" pb="500" pl="500">
          {fixBottom}
        </Box>
      )}
    </StyledModalContainerDiv>
  );
};

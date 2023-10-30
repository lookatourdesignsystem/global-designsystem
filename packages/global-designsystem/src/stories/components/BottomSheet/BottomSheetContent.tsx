import { BottomSheetProps } from ".";
import { BottomSheetHeader } from "./BottomSheetHeader";
import {
  StyledBottomSheetContainerDiv,
  StyledBottomSheetContentDiv,
} from "./styles";
import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { Box } from "../Box";

export const defaultAnimation = {
  hidden: ({ fullScreen }: { fullScreen: boolean }) => ({
    opacity: fullScreen ? 0 : 1,
    translateY: fullScreen ? 0 : "100%",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: ({ fullScreen }: { fullScreen: boolean }) => ({
    opacity: fullScreen ? 0 : 1,
    translateY: fullScreen ? 0 : "100%",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export const BottomSheetContent = ({
  children,
  title,
  titleVariant,
  hideCloseButton,
  header,
  borderWidth,
  fixTop,
  fixBottom,
  onClick,
  isOpened,
  icon,
  iconSize,
  className,
  fullScreen,
  animation,
  animationVariables,
}: Omit<BottomSheetProps, "open" | "onClose"> & {
  onClick: () => void;
  isOpened: boolean;
}) => {
  const theme = useTheme();
  const hideHeader =
    (title === "" || title === undefined) && hideCloseButton === true;

  return (
    <StyledBottomSheetContainerDiv
      className={getJoinedClassName("BottomSheet", {
        className,
      })}
      theme={theme}
      isOpened={isOpened}
      fullScreen={fullScreen}
      borderWidth={borderWidth}
      variants={animation ? animation : defaultAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={animationVariables ? animationVariables : { fullScreen }}
    >
      {(hideHeader === false || header !== undefined) && (
        <BottomSheetHeader
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
        <Box className="BottomSheetFixTop" pt="200" pr="500" pb="200" pl="500">
          {fixTop}
        </Box>
      )}
      <StyledBottomSheetContentDiv
        className="BottomSheetContent"
        isFixBottom={fixBottom !== undefined}
        isHeader={hideHeader === false || header !== undefined}
        theme={theme}
      >
        {children}
      </StyledBottomSheetContentDiv>
      {fixBottom !== undefined && (
        <Box
          className="BottomSheetFixBottom"
          pt="200"
          pr="500"
          pb="500"
          pl="500"
        >
          {fixBottom}
        </Box>
      )}
    </StyledBottomSheetContainerDiv>
  );
};

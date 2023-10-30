import { css } from "@emotion/react";
import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { useTheme } from "../../../../hooks/useTheme";
import { Transition } from "../../Transition";
import { StyledDetailsDiv } from "../styles";

export const AccordionDetails = ({
  expanded,
  children,
  detailTransition,
  detailsStyle,
}: {
  expanded: boolean;
  children: ReactNode;
  detailTransition?: string;
  detailsStyle?: string;
}) => {
  const theme = useTheme();
  const detailRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    if (expanded && !height && detailRef && detailRef.current) {
      const boxHeight = detailRef.current.scrollHeight;
      setHeight(boxHeight);
    }
  }, [expanded, height, detailRef]);
  return (
    <Fragment>
      <Transition
        customType="Expanded"
        inTransition={expanded}
        nodeRef={detailRef}
        timeout={500}
        unmountOnExit={false}
      >
        <StyledDetailsDiv
          className="AccordionDetails"
          ref={detailRef}
          theme={theme}
          css={css`
            ${detailsStyle ? detailsStyle : ""}
          `}
          height={height}
        >
          {children}
        </StyledDetailsDiv>
      </Transition>
    </Fragment>
  );
};

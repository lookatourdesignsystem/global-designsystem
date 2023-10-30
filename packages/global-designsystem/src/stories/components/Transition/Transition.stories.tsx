import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment, useRef, useState } from "react";
import { Transition } from ".";
import { useIntersection } from "../../../hooks/components";
import { useTheme } from "../../../hooks/useTheme";
import { Typography } from "../../foundation/Typography";
import { Box } from "../Box";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { StyledSectionDiv } from "./styles";
import { transitionDesc } from "src/stories/docs/transition";

export default {
  title: "Util/Transition",
  component: Transition,
  args: {
    timeout: 250,
    unmountOnExit: false,
  },
  ...transitionDesc,
} as ComponentMeta<typeof Transition>;

export const Default: ComponentStory<typeof Transition> = (args) => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <Button
        size="s"
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        fade {show ? "out" : "in"}
      </Button>
      <Transition
        {...args}
        inTransition={show}
        types={["fade"]}
        unmountOnExit={true}
      >
        <Typography variant="h1">Title Fade Transition</Typography>
      </Transition>
    </Fragment>
  );
};

export const withUseIntersection: ComponentStory<typeof Transition> = () => {
  const Section = ({
    even,
    threshold,
    timeout,
    types,
  }: {
    even: boolean;
    threshold: number;
    types?: ("fade" | "slide-bottom")[];
    timeout?: number;
  }) => {
    const theme = useTheme();
    const sectionRef = useRef<HTMLDivElement>(null);
    const inViewport = useIntersection(sectionRef, { threshold: threshold });

    return (
      <StyledSectionDiv even={even} theme={theme} ref={sectionRef}>
        <Transition
          inTransition={inViewport}
          timeout={timeout}
          types={types}
          unmountOnExit
        >
          <Box>
            <Stack direction="row" justifyContent="center">
              <Typography variant="h3" color={theme.colors.gray[0]}>
                Test
              </Typography>
            </Stack>
          </Box>
        </Transition>
      </StyledSectionDiv>
    );
  };

  return (
    <div>
      <Section even={false} threshold={0} types={["fade"]} timeout={1000} />
      {[...new Array(5)].map((el, i) => (
        <Section
          key={i}
          even={i % 2 === 0}
          threshold={0.3}
          timeout={1000}
          types={["fade", "slide-bottom"]}
        />
      ))}
    </div>
  );
};
withUseIntersection.parameters = {
  docs: {
    description: {
      story:
        "useIntersection를 사용해서 화면에 노출되었을 때 transition이 시작되도록 구현한 예제입니다. ",
    },
  },
  options: { showPanel: false },
};

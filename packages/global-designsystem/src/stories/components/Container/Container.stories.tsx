import { ComponentMeta, Story } from "@storybook/react";
import { Fragment } from "react";
import { Container } from ".";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import { Box } from "../Box";
import { containerDesc } from "src/stories/docs/container";

export default {
  title: "Layout/Container",
  component: Container,
  ...containerDesc,
} as ComponentMeta<typeof Container>;

export const Default: Story<typeof Container> = (args) => {
  const breakpoints = useBreakpoints();
  return (
    <Fragment>
      <p>Container : purple</p>
      <div style={{ background: "purple" }}>
        <Container {...args}>
          <Box background="yellowgreen">
            breakpoint: {breakpoints.calc.current()}
          </Box>
        </Container>
      </div>
    </Fragment>
  );
};

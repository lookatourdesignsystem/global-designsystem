import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useTheme } from "src/hooks/useTheme";
import { Skeleton } from ".";
import { Box } from "../Box";
import { Spacer } from "../Spacer";
import { skeletonDesc } from "src/stories/docs/skeleton";

export default {
  title: "Loading/Skeleton",
  component: Skeleton,
  args: {
    variant: "text",
    width: 12,
    height: 12,
    fullWidth: false,
    wordType: "title",
    line: 1,
    radius: 0,
    gap: 0,
  },
  ...skeletonDesc,
} as ComponentMeta<typeof Skeleton>;

export const Default: ComponentStory<typeof Skeleton> = (args) => {
  return <Skeleton {...args} />;
};

export const Text: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);
Text.args = {
  ...Text.args,
  variant: "text",
  wordType: "title",
  width: 400,
  height: 15,
  line: 5,
  gap: 5,
  radius: 0,
};
Text.parameters = {
  docs: {
    description: {
      story: "variant=”text”의 예시입니다.",
    },
  },
  options: { showPanel: true },
};

export const Shape: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);
Shape.args = {
  ...Shape.args,
  variant: "shape",
  width: 100,
  height: 100,
  radius: "50%",
};
Shape.parameters = {
  docs: {
    description: {
      story: "variant=”shape”의 예시입니다.",
    },
  },
  options: { showPanel: true },
};

export const Combination: ComponentStory<typeof Skeleton> = () => {
  const theme = useTheme();
  return (
    <Box border={`1px solid ${theme.colors.gray[200]}`} width="157px">
      <Skeleton variant="shape" width={156} height={156} />
      <Box p="200">
        <Skeleton variant="shape" width={56} height={20} radius={10} />
        <Spacer y="100" />
        <Skeleton
          variant="text"
          width={139}
          height={12}
          line={3}
          gap={2}
          radius={2}
        />
        <Spacer y="200" />
        <Skeleton variant="shape" width={88} height={12} radius={2} />
      </Box>
    </Box>
  );
};
Combination.parameters = {
  docs: {
    description: {
      story: "variant=”shape”과 “text”를 혼합하여 사용된 예시입니다.",
    },
  },
  options: { showPanel: false },
};

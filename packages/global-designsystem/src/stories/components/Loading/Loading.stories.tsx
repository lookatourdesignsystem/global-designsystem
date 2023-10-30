import { Fragment, useEffect, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loading } from ".";
import { Button } from "../Button";
import { loadingDesc } from "src/stories/docs/loading";

export default {
  title: "Loading/Loading",
  component: Loading,
  args: {
    open: true,
    withOverlay: false,
    disableBackdropClose: false,
    variant: "indeterminate",
    color: "default",
    size: 58,
    thickness: 6,
    disableShrink: false,
    label: "label",
    value: 0,
  },
  decorators: [
    (storyFn) => (
      <div
        id="overlay-root"
        style={{
          transform: "scale(1)",
          height: "100%",
          minHeight: "400px",
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
  ...loadingDesc,
} as ComponentMeta<typeof Loading>;

export const Default: ComponentStory<typeof Loading> = (args) => {
  return <Loading {...args} />;
};

export const DeterminateInterval: ComponentStory<typeof Loading> = (args) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Loading
      {...args}
      variant="determinate"
      value={progress}
      label={`${progress}%`}
    />
  );
};
DeterminateInterval.args = {
  ...Default.args,
  variant: "determinate",
};
DeterminateInterval.parameters = {
  docs: {
    description: {
      story:
        "progress를 인터벌로 업데이트함으로써 progress가 서서히 진행되는 모습을 구현할 수 있습니다.",
    },
    inlineStories: false,
    iframeHeight: 400,
  },
  options: { showPanel: true },
};

export const WithAction: ComponentStory<typeof Loading> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Button size="s" color="primary" onClick={() => setIsOpen(true)}>
        show loading with backdrop
      </Button>
      <Loading
        withOverlay
        open={isOpen}
        onClickBackdrop={() => setIsOpen(false)}
      />
    </Fragment>
  );
};
WithAction.parameters = {
  docs: {
    description: {
      story: "withOverlay로 Backdrop이 함께 구현될 수 있습니다.",
    },
    inlineStories: false,
    iframeHeight: 400,
  },
  options: { showPanel: false },
};

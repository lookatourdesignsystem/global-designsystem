import { Fragment, useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProgressBar } from ".";
import { progressBarDesc } from "src/stories/docs/progressBar";

export default {
  title: "Loading/ProgressBar",
  component: ProgressBar,
  args: {
    label: "Label",
    helperText: "Helper Text",
    state: "normal",
    value: 50,
    variant: "indeterminate",
  },
  ...progressBarDesc,
} as ComponentMeta<typeof ProgressBar>;

export const Default: ComponentStory<typeof ProgressBar> = (args) => {
  return (
    <Fragment>
      <ProgressBar
        {...args}
        value={args.variant === "determinate" ? args.value : undefined}
      />
      {args.variant === "determinate" && <p>{args.value}%</p>}
    </Fragment>
  );
};

export const DeterminateInterval: ComponentStory<typeof ProgressBar> = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Fragment>
      <ProgressBar variant="determinate" value={progress} />
      <p>{progress}%</p>
    </Fragment>
  );
};
DeterminateInterval.args = {
  ...DeterminateInterval.args,
  variant: "determinate",
};
DeterminateInterval.parameters = {
  docs: {
    description: {
      story:
        "progress를 인터벌로 업데이트함으로써 progress가 서서히 진행되는 모습을 구현할 수 있습니다.",
    },
  },
  options: { showPanel: false },
};

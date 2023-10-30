import { Fragment, useState } from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { Tabs } from "./";
import { PolygonCircleFilledIcon } from "@lookatourdesignsystem/icons-library";
import { Stack } from "../Stack";
import { Typography } from "src/stories/foundation/Typography";
import { tabsDesc } from "src/stories/docs/tabs";

const meta: Meta = {
  title: "Action/Tabs",
  component: Tabs,
  args: {
    size: "m",
    selectedIndex: 0,
    onChange: (activeTab: number) => {},
    items: ["strawberry", "banana", "mango", "apple", "melon"],
    fullWidth: false,
    scrollable: false,
    initialFocus: false,
  },
  ...tabsDesc,
};

export default meta;

export const Default: ComponentStory<typeof Tabs> = (args) => {
  return (
    <Fragment>
      <Typography>Change selectedIndex prop in Controls panel.</Typography>
      <br />
      <Tabs {...args} />
    </Fragment>
  );
};

export const Example: ComponentStory<typeof Tabs> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Fragment>
      <Tabs
        items={[
          <div>div</div>,
          <span>span</span>,
          <Stack spacing="100" direction="row">
            <PolygonCircleFilledIcon />
            <Typography>Typography</Typography>
          </Stack>,
          "apple",
        ]}
        selectedIndex={selectedIndex}
        onChange={(i) => {
          setSelectedIndex(i);
        }}
        fullWidth
        width="500px"
      />
    </Fragment>
  );
};
Example.parameters = {
  docs: {
    description: {
      story: `onChange로 selectedIndex 값을 변경할 수 있습니다. item은 string 혹은 ReactNode로 자유롭게 구현가능하며 fullWidth로 Tab들의 너비를 동일하게 맞출 수 있습니다.`,
    },
  },
  options: { showPanel: false },
};

export const Scrollable: ComponentStory<typeof Tabs> = () => {
  const [selectedIndex, setSelectedIndex] = useState(7);

  return (
    <Fragment>
      <Tabs
        width="400px"
        items={[
          "strawberry",
          "banana",
          "mango",
          "apple",
          "melon",
          "lemon",
          "orange",
          "pineapple",
          "peach",
          "cherry",
          "plum",
          "watermelon",
          "kiwi",
        ]}
        selectedIndex={selectedIndex}
        onChange={(i) => {
          setSelectedIndex(i);
        }}
        scrollable
      />
    </Fragment>
  );
};

Scrollable.parameters = {
  docs: {
    description: {
      story: `Tab들이 width를 넘치면 가로 스크롤이 가능합니다. scrollable prop으로 선택되어 있는 탭이 항상 맨앞에 보이도록 합니다.`,
    },
  },
  options: { showPanel: false },
};

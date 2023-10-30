import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonGroup } from ".";
import { InformationOutlinedIcon } from "@lookatourdesignsystem/icons-library";
import { useState } from "react";
import { buttonGroupDesc } from "src/stories/docs/buttonGroup";
export default {
  title: "Action/ButtonGroup",
  component: ButtonGroup,
  args: {
    selectedIndex: 0,
    direction: "horizontal",
    color: "default",
    size: "m",
    icon: false,
    onChange: (activeButton: number) => {},
    items: ["Button1", "Button2", "Button3"],
    fullWidth: false,
    scrollable: false,
    initialFocus: false,
  },
  ...buttonGroupDesc,
} as ComponentMeta<typeof ButtonGroup>;

export const Default: ComponentStory<typeof ButtonGroup> = (args) => {
  return <ButtonGroup {...args} />;
};

export const WithIcon: ComponentStory<typeof ButtonGroup> = (args) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const fontSize = args.size === "s" ? 12 : args.size === "m" ? 16 : 20;
  return (
    <ButtonGroup
      {...args}
      icon
      items={[
        <InformationOutlinedIcon fontSize={fontSize} />,
        <InformationOutlinedIcon fontSize={fontSize} />,
        <InformationOutlinedIcon fontSize={fontSize} />,
      ]}
      selectedIndex={selectedIndex}
      onChange={(i) => {
        setSelectedIndex(i);
      }}
    />
  );
};

WithIcon.parameters = {
  docs: {
    description: {
      story: `Icon을 사용할 경우 Icon Library의 Icon을 선택하여 사용할 수 있습니다.`,
    },
  },
  options: { showPanel: true },
};

export const Scrollable: ComponentStory<typeof ButtonGroup> = () => {
  const [selectedIndex, setSelectedIndex] = useState(7);
  return (
    <ButtonGroup
      items={[
        "Button0",
        "Button1",
        "Button2",
        "Button3",
        "Button4",
        "Button5",
        "Button6",
        "Button7",
        "Button8",
        "Button9",
        "Button10",
        "Button11",
        "Button12",
        "Button13",
      ]}
      selectedIndex={selectedIndex}
      onChange={(i) => {
        setSelectedIndex(i);
      }}
      width="300px"
      scrollable
    />
  );
};
Scrollable.parameters = {
  docs: {
    description: {
      story: `onChange 함수로 selectedIndex 값을 변경할 수 있고, button들이 width를 넘치면 가로스크롤이 가능합니다. scrollable prop으로 선택되어 있는 탭이 항상 맨앞에 보이도록 합니다.`,
    },
  },
  options: { showPanel: false },
};

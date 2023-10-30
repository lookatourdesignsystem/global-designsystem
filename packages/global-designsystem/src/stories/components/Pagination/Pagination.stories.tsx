import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from ".";
import { defaultTheme } from "../../../modules/defaultTheme";

export default {
  title: "Components/Pagination",
  component: Pagination,
  args: {
    defaultPage: 1,
    totalLength: 100,
    sectionSize: 10,
    pageInfo: true,
  },
  argTypes: {
    defaultPage: {
      control: {
        type: "number",
        min: 1,
        step: 1,
      },
    },
    totalLength: {
      control: {
        type: "number",
        min: 0,
        step: 1,
      },
    },
    sectionSize: {
      control: {
        type: "number",
        min: 5,
        step: 1,
      },
    },
    color: {
      options: defaultTheme.colors.primary.main,
      control: {
        type: "select",
      },
    },
    pageInfo: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

const Normal = Template.bind({});
Normal.args = {
  ...Normal.args,
};

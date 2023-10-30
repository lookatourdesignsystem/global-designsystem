import { Meta, Story } from "@storybook/react";
import { Link, LinkProps } from ".";
import { ArrowRightFilledIcon } from "@lookatourdesignsystem/icons-library";
import { linkDesc } from "src/stories/docs/link";

const meta: Meta = {
  title: "Action/Link",
  component: Link,
  args: {
    variant: "subtitle1",
    href: "#",
    children: "Learn More",
    title: "link",
  },
  ...linkDesc,
};

export default meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});

export const WithIcon: Story<LinkProps> = (args) => {
  return <Link {...args} rightIcon={<ArrowRightFilledIcon />} />;
};
WithIcon.parameters = {
  docs: {
    description: {
      story:
        "children을 기준으로 왼쪽과 오른쪽에 Icon을 배치할 수 있습니다. Icon은 Icon Library에서 선택하여 사용할 수 있습니다.",
    },
  },
  options: { showPanel: true },
};

export const WithImage: Story<LinkProps> = (args) => {
  return (
    <Link hideUnderline {...args}>
      <ArrowRightFilledIcon />
    </Link>
  );
};
WithImage.parameters = {
  docs: {
    description: {
      story:
        "children에 텍스트대신 이미지가 들어갈 수 있습니다. 이미지가 들어가면 주로 underline이 없는 경우가 많습니다.",
    },
  },
  options: { showPanel: true },
};

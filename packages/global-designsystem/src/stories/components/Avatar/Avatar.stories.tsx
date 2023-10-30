import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar } from ".";
import Avartar from "../../../assets/images/avatar_01.jpeg";
import { Stack } from "../Stack";
import { EarthFilledIcon } from "@lookatourdesignsystem/icons-library";
import { Typography } from "../../foundation/Typography";
import { avatarDesc } from "src/stories/docs/avatar";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    size: "xxs",
  },
  ...avatarDesc,
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => {
  return (
    <Stack
      spacing="800"
      alignItems="center"
      width="fit-content"
      direction="row"
    >
      <Stack alignItems="center">
        <Typography>icon</Typography>
        <Avatar icon={<EarthFilledIcon />} {...args} />
      </Stack>
      <Stack alignItems="center">
        <Typography>image</Typography>
        <Avatar src={Avartar} {...args} />
      </Stack>
      <Stack alignItems="center">
        <Typography>text</Typography>
        <Avatar {...args}>HY</Avatar>
      </Stack>
    </Stack>
  );
};

export const ImageFallback: ComponentStory<typeof Avatar> = (args) => {
  return (
    <Stack
      spacing="800"
      alignItems="center"
      width="fit-content"
      direction="row"
    >
      <Stack alignItems="center">
        <Typography>fallback default</Typography>
        <Avatar src={"error url"} {...args} />
      </Stack>
      <Stack alignItems="center">
        <Typography>fallback icon</Typography>
        <Avatar src={"error url"} icon={<EarthFilledIcon />} {...args} />
      </Stack>
      <Stack alignItems="center">
        <Typography>fallback text</Typography>
        <Avatar src={"error url"} {...args}>
          JY
        </Avatar>
      </Stack>
    </Stack>
  );
};
ImageFallback.parameters = {
  docs: {
    description: {
      story:
        "src 이미지를 불러오는데 오류가 생기면 대체 이미지 혹은 텍스트가 보여질 수 있습니다.",
    },
  },
  options: { showPanel: true },
};

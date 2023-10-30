import { ComponentMeta, Story } from "@storybook/react";
import { Fragment, useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { Typography } from "../../foundation/Typography";
import { Stack } from "../Stack";
import { ListButton } from ".";
import { FundCoinbaseIcon } from "@lookatourdesignsystem/icons-library";
import { listButtonDesc } from "src/stories/docs/listButton";

export default {
  title: "Action/ListButton",
  component: ListButton,
  ...listButtonDesc,
} as ComponentMeta<typeof ListButton>;

export const Default: Story<typeof ListButton> = (args) => {
  const theme = useTheme();

  return (
    <Stack spacing="100">
      <ListButton {...args}>
        <Stack direction="row" spacing="200">
          <FundCoinbaseIcon fontSize={36} />
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Stack justifyContent="center">
              <Typography variant="subtitle1" color={theme.colors.text.main}>
                Send
              </Typography>
              <Typography variant="caption1" color={theme.colors.text.low}>
                25 minutes ago
              </Typography>
            </Stack>
            <Stack justifyContent="center">
              <Typography
                variant="subtitle1"
                color={theme.colors.text.main}
                textAlign="right"
              >
                - 100.00 OCO
              </Typography>
              <Typography
                variant="caption1"
                color={theme.colors.text.low}
                textAlign="right"
              >
                Complete
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </ListButton>
    </Stack>
  );
};

export const Value: Story<typeof ListButton> = () => {
  const theme = useTheme();
  const [value, setValue] = useState("");

  return (
    <Fragment>
      <Stack spacing="100">
        {[...Array(4)].map((item, i) => (
          <ListButton
            key={i}
            value={i}
            onClick={(e: any) => {
              setValue(e?.currentTarget.value);
            }}
            selected={value === String(i)}
          >
            <Stack direction="row" justifyContent="space-between">
              <Stack justifyContent="center">
                <Typography variant="subtitle1" color={theme.colors.text.main}>
                  Send
                </Typography>
                <Typography variant="caption1" color={theme.colors.text.low}>
                  25 minutes ago
                </Typography>
              </Stack>
              <Stack justifyContent="center">
                <Typography
                  variant="subtitle1"
                  color={theme.colors.text.main}
                  textAlign="right"
                >
                  - 100.00 OCO
                </Typography>
                <Typography
                  variant="caption1"
                  color={theme.colors.text.low}
                  textAlign="right"
                >
                  Complete
                </Typography>
              </Stack>
            </Stack>
          </ListButton>
        ))}
      </Stack>
    </Fragment>
  );
};
Value.parameters = {
  docs: {
    description: {
      story: "value값을 onClick에서 사용할 수 있습니다.",
    },
  },
  options: { showPanel: false },
};

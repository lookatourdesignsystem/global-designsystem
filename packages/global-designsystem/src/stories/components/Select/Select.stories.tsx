import { FundCoinbaseIcon } from "@lookatourdesignsystem/icons-library";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Select } from ".";
import { ContainerModalProvider } from "../../../providers/ContainerModal";
import { Global, css } from "@emotion/react";
import { selectDesc } from "src/stories/docs/select";

export default {
  title: "Inputs/Select",
  component: Select,
  args: {
    id: "example",
    size: "m",
    description: true,
    disabled: false,
    placeholder: "placeholder",
    selectedIndex: -1,
    labelText: "Label",
    helpText: "Helper Text",
    items: [
      {
        value: "Coinbase0",
        label: "Coinbase Commerce 0",
        subLabel: "descriptiond",
        icon: <FundCoinbaseIcon />,
      },
      {
        value: "Coinbase1",
        label: "Coinbase Commerce 1",
        subLabel: "description",
        icon: <FundCoinbaseIcon />,
      },
      {
        value: "Coinbase2",
        label: "Coinbase Commerce 2",
        subLabel: "description",
        icon: <FundCoinbaseIcon />,
      },
      {
        value: "Coinbase3",
        label: "Coinbase Commerce 3",
        subLabel: "description",
        icon: <FundCoinbaseIcon />,
      },
      {
        value: "Coinbase4",
        label: "Coinbase Commerce 4",
        subLabel: "description",
        icon: <FundCoinbaseIcon />,
      },
    ],
  },
  decorators: [
    (storyFn) => (
      <div
        id="modal-root"
        style={{
          transform: "scale(1)",
          height: "100%",
          minHeight: "400px",
        }}
      >
        {storyFn()}
        <Global
          styles={css`
            body {
              overflow: visible !important;
            }
          `}
        />
      </div>
    ),
  ],
  ...selectDesc,
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (args) => (
  <ContainerModalProvider>
    <Select {...args} onSelect={() => {}} />
  </ContainerModalProvider>
);

export const WithAction: ComponentStory<typeof Select> = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const onSelectMethod = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <ContainerModalProvider>
      <Select
        id={"custom-select"}
        selectedIndex={selectedIndex}
        onSelect={onSelectMethod}
        searchText="Coinbase Commerce"
        description
        css={css`
          .selectModal {
            background-color: pink;
          }
        `}
        items={[
          {
            value: "Coinbase0",
            label: "Coinbase Commerce 0",
            subLabel: "description",
            icon: <FundCoinbaseIcon />,
          },
          {
            value: "Coinbase1",
            label: "Coinbase Commerce 1",
            subLabel: "description",
            icon: <FundCoinbaseIcon />,
          },
          {
            value: "Coinbase2",
            label: "Coinbase Commerce 2",
            subLabel: "description",
            icon: <FundCoinbaseIcon />,
          },
          {
            value: "Coinbase3",
            label: "Coinbase Commerce 3",
            subLabel: "description",
            icon: <FundCoinbaseIcon />,
          },
          {
            value: "Coinbase4",
            label: "Coinbase Commerce 4",
            subLabel: "description",
            icon: <FundCoinbaseIcon />,
          },
        ]}
      />
    </ContainerModalProvider>
  );
};
WithAction.parameters = {
  docs: {
    description: {
      story:
        "placeholder가 아닌 초기값을 옵션중에서 하나로 셋팅하려면 useState로 설정할 수 있습니다.",
    },
    inlineStories: false,
    iframeHeight: 400,
  },
  options: { showPanel: false },
};

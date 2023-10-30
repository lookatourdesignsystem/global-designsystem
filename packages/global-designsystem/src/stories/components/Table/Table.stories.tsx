import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from ".";

export default {
  title: "Data Display/Table",
  component: Table,
  args: {
    stickyHeight: "250px",
  },
  argTypes: {
    hover: {
      control: {
        type: "boolean",
      },
    },
    dense: {
      control: {
        type: "boolean",
      },
    },
    stickyHeader: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Table>;

export const Default: ComponentStory<typeof Table> = (args) => {
  return (
    <Table
      {...args}
      column={[
        {
          id: "name",
          label: "Name",
          headAlign: "left",
          bodyAlign: "left",
        },
        {
          id: "iso",
          label: "	ISO Code",
          headAlign: "center",
          bodyAlign: "center",
        },
        {
          id: "population",
          label: "Population",
          headAlign: "right",
          bodyAlign: "right",
        },
        {
          id: "size",
          label: "Size (km²)",
          headAlign: "right",
          bodyAlign: "right",
        },
        {
          id: "density",
          label: "Density",
          headAlign: "right",
          bodyAlign: "right",
        },
      ]}
      data={[
        {
          id: "1",
          name: "India",
          iso: "IN",
          population: "1,324,171,354",
          size: "3,287,263",
          density: "3,287,263",
        },
        {
          id: "2",
          name: "China",
          iso: "CN",
          population: "1,403,500,365",
          size: "9,596,961",
          density: "146.24",
        },
        {
          id: "3",
          name: "Italy",
          iso: "IT",
          population: "60,483,973",
          size: "301,340",
          density: "200.72",
        },
        {
          id: "4",
          name: "United States",
          iso: "US",
          population: "327,167,434",
          size: "9,833,520",
          density: "9,833,520",
        },
        {
          id: "5",
          name: "Canada",
          iso: "CA",
          population: "37,602,103",
          size: "9,984,670",
          density: "3.77",
        },
        {
          id: "6",
          name: "Australia",
          iso: "AU",
          population: "25,475,400",
          size: "7,692,024",
          density: "3.31",
        },
        {
          id: "7",
          name: "Germany",
          iso: "DE",
          population: "83,019,200",
          size: "357,578",
          density: "232.17",
        },
        {
          id: "8",
          name: "Ireland",
          iso: "IE",
          population: "4,857,000",
          size: "70,273",
          density: "69.12",
        },
        {
          id: "9",
          name: "Mexico",
          iso: "MX",
          population: "126,577,691",
          size: "1,972,550",
          density: "64.17",
        },
        {
          id: "10",
          name: "Japan",
          iso: "JP",
          population: "126,317,000",
          size: "377,973",
          density: "334.20",
        },
      ]}
    />
  );
};

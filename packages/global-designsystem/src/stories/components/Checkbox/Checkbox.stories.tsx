import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from ".";
import { FormEvent, Fragment, useEffect, useState } from "react";
import { FormControlLabel } from "../FormControlLabel";
import { Typography } from "../../foundation/Typography";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { checkboxDesc } from "src/stories/docs/checkbox";

export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
  args: {
    size: "m",
    checked: false,
  },
  ...checkboxDesc,
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <Fragment>
      <FormControlLabel
        control={<Checkbox {...args} />}
        alignControl="start"
        label="Cillum cupidatat fugiat irure Lorem eu tempor commodo nisi laboris do
          ipsum magna voluptate. Fugiat pariatur dolor consectetur elit laboris
          enim qui laboris id sunt reprehenderit nostrud ea irure."
        htmlFor="agree"
        variant={
          args.size === "l" ? "body1" : args.size === "s" ? "caption2" : "body2"
        }
      />
      <Typography>checked : {String(args.checked)}</Typography>
    </Fragment>
  );
};

export const Multiple = () => {
  const [result, setResult] = useState({});
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [data, setData] = useState<string[]>([]);
  const isCheckedAll = checkedItems.length === data.length;

  const handleCheckedAll = () => {
    if (isCheckedAll) {
      setCheckedItems([]);
    } else {
      setCheckedItems(data);
    }
  };

  const handleCheckboxClick = (checked: boolean, value: string) => {
    setCheckedItems((prev) => {
      return prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value];
    });
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      strawberry: { value: string; checked: boolean };
      banana: { value: string; checked: boolean };
      mango: { value: string; checked: boolean };
    };

    setResult({
      strawberry: formElements.strawberry.checked,
      banana: formElements.banana.checked,
      mango: formElements.mango.checked,
    });
  };

  useEffect(() => {
    setData(["strawberry", "banana", "mango"]);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setCheckedItems(["strawberry", "banana", "melon"]);
    }
  }, [data.length]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(e);
      }}
    >
      <Stack spacing="400">
        <FormControlLabel
          variant="body1"
          control={
            <Checkbox
              id="all"
              name="all"
              value="all"
              onChange={handleCheckedAll}
              checked={isCheckedAll}
            />
          }
          alignControl="center"
          label="Select All"
          htmlFor="all"
        />
        {data.map((item, i) => (
          <FormControlLabel
            key={i}
            variant="body1"
            control={
              <Checkbox
                id={item}
                name="fruits"
                value={item}
                onChange={(checked) => handleCheckboxClick(checked, item)}
                checked={checkedItems.includes(item)}
              />
            }
            alignControl="center"
            label={item}
            htmlFor={item}
          />
        ))}
      </Stack>
      <br />
      <Typography>Checked: {checkedItems.join(", ")}</Typography>
      <Button type="submit">Submit</Button>
      <Typography>
        {Object.keys(result).length !== 0 &&
          `Form Submitted! ${JSON.stringify(result)}`}
      </Typography>
    </form>
  );
};
Multiple.parameters = {
  docs: {
    description: {
      story: `data state를 활용해 multiple checkbox를 구현할 수 있습니다. check all(전체선택)을 어떻게 구현했는지 아래에서 확인해보세요. onChange함수는 Checkbox의 check 여부를 리턴합니다.`,
    },
  },
  options: { showPanel: false },
};

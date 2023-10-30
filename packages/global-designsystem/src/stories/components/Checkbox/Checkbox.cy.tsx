import { useEffect, useState } from "react";
import { mount } from "@cypress/react";
import { Typography } from "../../foundation/Typography";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { FormControlLabel } from "../FormControlLabel";
import { Checkbox } from ".";

const Example = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const handleCheckboxClick = (checked: boolean, value: string) => {
    setCheckedItems((prev) => {
      return checked ? [...prev, value] : prev.filter((item) => item !== value);
    });
  };
  const handleCheckAll = () => {
    setCheckAll((prev) => !prev);
  };

  useEffect(() => {
    checkAll
      ? setCheckedItems(["banana", "strawberry", "mango", "melon", "apple"])
      : setCheckedItems([]);
  }, [checkAll]);

  useEffect(() => {
    setCheckedItems(["banana"]);
  }, []);
  return (
    <fieldset>
      <Typography variant="h5" className="checkedItems">
        Checked Items: {checkedItems.join(", ")}
      </Typography>
      <Box>
        <Stack direction="column" spacing="500" alignItems="flex-start">
          <FormControlLabel
            variant="body1"
            control={
              <Checkbox
                id="checkAll"
                name="fruits"
                value="check all"
                onChange={handleCheckAll}
                checked={checkAll}
              />
            }
            alignControl="center"
            label="check all"
            htmlFor="checkAll"
          />
          <FormControlLabel
            variant="body1"
            control={
              <Checkbox
                id="banana"
                name="fruits"
                value="banana"
                onChange={(checked) => handleCheckboxClick(checked, "banana")}
                checked={checkedItems.includes("banana")}
              />
            }
            alignControl="center"
            label="banana"
            htmlFor="banana"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="strawberry"
                name="fruits"
                value="strawberry"
                onChange={(checked) =>
                  handleCheckboxClick(checked, "strawberry")
                }
                checked={checkedItems.includes("strawberry")}
              />
            }
            alignControl="center"
            label="strawberry"
            htmlFor="strawberry"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="mango"
                name="fruits"
                value="mango"
                onChange={(checked) => handleCheckboxClick(checked, "mango")}
                checked={checkedItems.includes("mango")}
              />
            }
            alignControl="center"
            label="mango"
            htmlFor="mango"
          />
        </Stack>
      </Box>
    </fieldset>
  );
};

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("checkbox들이 렌더링 됩니다.", () => {
    cy.get(".Checkbox").should("be.exist");
  });
  it("checkbox들은 'Checkbox'라는 클래스명을 갖습니다.", () => {
    cy.get(".Checkbox").should("have.class", "Checkbox");
  });
  it("처음 banana만 체크되어있습니다. ", () => {
    cy.get("#banana").should("be.checked");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("strawberry 항목의 size는 m로 m 클래스명을 포함합니다.", () => {
    cy.get("#strawberry").parent(".Checkbox").should("have.class", "m");
  });
  it("strawberry 항목의 value는 'strawberry' 입니다.", () => {
    cy.get("#strawberry").should("have.attr", "value", "strawberry");
  });
  it("strawberry 항목의 label은 'strawberry' 입니다.", () => {
    cy.get("#strawberry")
      .parent(".Checkbox")
      .siblings(".Typography")
      .should("have.text", "strawberry");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    mount(<Example />);
  });
  it("mango 항목을 클릭하면 체크됩니다.", () => {
    cy.get("#mango").click();
    cy.get("#mango").should("be.checked");
  });
  it("mango 항목을 클릭하면 체크되고 다시 클릭하면 해제됩니다.", () => {
    cy.get("#mango").click();
    cy.get("#mango").click();
    cy.get("#mango").should("not.be.checked");
  });
  it("checkAll를 한 번 클릭하면 모든 항목들이 체크됩니다.", () => {
    cy.get("#checkAll").click();
    cy.get("[type='checkbox']").should("be.checked");
  });
  it("checkAll 두 번 클릭하면 모든 항목들이 체크되었다가 해제됩니다.", () => {
    cy.get("#checkAll").click();
    cy.get("#checkAll").click();
    cy.get("[type='checkbox']").should("not.be.checked");
  });
});

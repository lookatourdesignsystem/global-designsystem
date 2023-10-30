import { css } from "@emotion/react";
import { Fragment, useState } from "react";
import { useScrollIntoView } from "src/hooks/components";
import { Button } from "src/stories/components/Button";
import { FormControlLabel } from "src/stories/components/FormControlLabel";
import { Radio } from "src/stories/components/Radio";
import { Stack } from "src/stories/components/Stack";
import { useScrollIntoViewDesc } from "src/stories/docs/useScrollIntoView";

export default {
  title: "Hooks/useScrollIntoView",
  ...useScrollIntoViewDesc,
};

export const Vertical = () => {
  const scrollPositions = ["center", "end", "start", "nearest"];
  const [value, setValue] = useState<ScrollLogicalPosition>("start");
  const [scrollableRef, setShouldScrollTo] = useScrollIntoView({
    target: ".target",
    vertical: value,
  });

  return (
    <Fragment>
      <Button onClick={() => setShouldScrollTo(true)}>
        scroll to get to target ↕️
      </Button>
      <Stack direction="column" spacing="500" alignItems="flex-start" pt="500">
        {scrollPositions.map((item) => (
          <FormControlLabel
            control={
              <Radio
                id={item}
                name="verticalTypes"
                value={item}
                onChange={(checked, id, value) => {
                  setValue(value as ScrollLogicalPosition);
                }}
              />
            }
            label={item}
            checked={value === item}
            value={item}
          />
        ))}
      </Stack>
      <div
        ref={scrollableRef}
        css={css`
          height: 250vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: auto;
          background-color: gray;
        `}
      >
        <div
          className="target"
          css={css`
            height: 200px;
            background-color: pink;
          `}
        >
          This is target
        </div>
      </div>
    </Fragment>
  );
};

export const Horizontal = () => {
  const scrollPositions = ["center", "end", "start", "nearest"];
  const [value, setValue] = useState<ScrollLogicalPosition>("nearest");
  const [scrollableRef, setShouldScrollTo] = useScrollIntoView({
    target: ".target",
    horizontal: value,
  });

  return (
    <Fragment>
      <Button onClick={() => setShouldScrollTo(true)}>
        scroll to get to target ↔️
      </Button>
      <Stack direction="column" spacing="500" alignItems="flex-start" pt="500">
        {scrollPositions.map((item) => (
          <FormControlLabel
            control={
              <Radio
                id={item}
                name="verticalTypes"
                value={item}
                onChange={(checked, id, value) => {
                  setValue(value as ScrollLogicalPosition);
                }}
              />
            }
            label={item}
            checked={value === item}
            value={item}
          />
        ))}
      </Stack>
      <div
        ref={scrollableRef}
        css={css`
          width: 250vw;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: auto;
          background-color: gray;
        `}
      >
        <div
          className="target"
          css={css`
            height: 200px;
            background-color: pink;
          `}
        >
          This is target
        </div>
      </div>
    </Fragment>
  );
};

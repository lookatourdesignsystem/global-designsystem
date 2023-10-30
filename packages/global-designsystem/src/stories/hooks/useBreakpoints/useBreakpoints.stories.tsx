import { Fragment, useState } from "react";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import { useTheme } from "src/hooks/useTheme";
import { Typography } from "src/stories/foundation/Typography";
import { BreakpointOptions, breakpointKeys } from "src/modules/breakpoints";
import { BreakpointKey } from "src/types";
import styled from "@emotion/styled";
import { Spacer } from "src/stories/components/Spacer";
import { css } from "@emotion/react";
import { useBreakpointsDesc } from "src/stories/docs/useBreakpoints";

export default {
  title: "Hooks/useBreakpoints",
  ...useBreakpointsDesc,
};

export const Default = () => {
  const breakpoints = useBreakpoints();
  const theme = useTheme();
  const [key, setKey] = useState<BreakpointKey>("md");

  const data = [
    {
      title: "Media Query",
      col: ["function", "description", "result"],
      list: [
        {
          function: "breakpoints.currentKey()",
          description: "현재 범위",
          result: breakpoints.currentKey(),
        },
        {
          function: `breakpoints.between("sm", "lg")`,
          description: `미디어쿼리 sm 범위부터 lg 범위 전까지`,
          result: breakpoints.between("sm", "lg"),
        },
        {
          function: `breakpoints.down('${key}')`,
          description: `미디어쿼리 ${key}범위 전까지`,
          result: breakpoints.down(key),
        },
        {
          function: `breakpoints.not('${key}')`,
          description: `미디어쿼리 ${key}범위에 없음`,
          result: breakpoints.not(key),
        },
        {
          function: `breakpoints.only('${key}')`,
          description: `미디어쿼리 ${key}범위에 있음`,
          result: breakpoints.only(key),
        },
        {
          function: `breakpoints.up('${key}')`,
          description: `미디어쿼리 ${key}범위 이상`,
          result: breakpoints.up(key),
        },
      ],
    },
    {
      title: "Calc",
      col: ["function", "description", "result"],
      list: [
        {
          function: "breakpoints.calc.current()",
          description: "현재 범위",
          result: String(breakpoints.calc.current()),
        },
        {
          function: "breakpoints.between('sm', 'md')",
          description: "현재 sm md 범위인가?",
          result: String(breakpoints.calc.between("sm", "md")),
        },

        {
          function: `breakpoints.calc.down('${key}')`,
          description: `현재 너비가 ${key} 의 startValue(${theme.breakpoints.values[key]}px) 미만인가?`,
          result: String(breakpoints.calc.down(key)),
        },
        {
          function: `breakpoints.calc.not('${key}')`,
          description: `현재 너비가 ${key} 범위가 아닌가?`,
          result: String(breakpoints.calc.not(key)),
        },
        {
          function: `breakpoints.calc.only('${key}')`,
          description: `현재 너비가 ${key} 범위인가?`,
          result: String(breakpoints.calc.only(key)),
        },
        {
          function: `breakpoints.calc.up('${key}')`,
          description: `현재 너비가 ${key} 의 startValue(${theme.breakpoints.values[key]}px) 이상인가?`,
          result: String(breakpoints.calc.up(key)),
        },
      ],
    },
  ];
  return (
    <Fragment>
      <table style={{ marginBottom: "10px" }}>
        <caption>
          <Typography variant="h6">Breakpoints</Typography>
        </caption>
        <tbody>
          {Object.entries(theme.breakpoints.values).map(([key, value], i) => (
            <tr key={i}>
              <th>
                <Typography variant="body2">{key}</Typography>
              </th>
              <td>
                <Typography variant="body2">
                  {value} ~
                  {key !== "xl" &&
                    theme.breakpoints.values[
                      breakpointKeys[
                        breakpointKeys.indexOf(key) + 1
                      ] as BreakpointKey
                    ] - 1}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Typography variant="h6">Target Key</Typography>
      <div style={{ marginBottom: "10px" }}>
        {breakpointKeys.map((item, i) => (
          <label style={{ marginRight: "10px" }} key={i}>
            <input
              type="radio"
              value={item}
              name="key"
              defaultChecked={item === "md"}
              onChange={(ev) => {
                setKey(item as BreakpointKey);
              }}
            />
            <Typography variant="caption1">{item}</Typography>
          </label>
        ))}
      </div>
      {data.map((table, i) => (
        <table style={{ marginBottom: "10px" }} key={i}>
          <caption>
            <Typography variant="h6">{table.title}</Typography>
          </caption>
          <thead>
            <tr>
              {table.col.map((item, i) => (
                <th key={i}>
                  <Typography variant="subtitle2">{item}</Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.list.map((item, i) => {
              return (
                <tr key={i}>
                  <th>
                    <Typography variant="body2">{item.function}</Typography>
                  </th>
                  <td>
                    <Typography variant="body2">{item.description}</Typography>
                  </td>
                  <td>
                    <Typography variant="body2">{item.result}</Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ))}
    </Fragment>
  );
};

export const Calc = () => {
  const breakpoints = useBreakpoints();

  return (
    <Fragment>
      {breakpoints.calc.down("md") && <div>only mobile</div>}
      <Spacer
        y={breakpoints.calc.down("md") ? "800" : "300"}
        css={css`
          background-color: pink;
        `}
      />
    </Fragment>
  );
};
Calc.parameters = {
  docs: {
    description: {
      story:
        "특정 범위에서 컴포넌트가 마운트 되도록할 때 혹은 prop이 변경할 때는 calc 함수를 사용합니다.",
    },
  },
  options: { showPanel: false },
};

export const MediaQuery = () => {
  const breakpoints = useBreakpoints();

  const StyledDiv = styled.div<{ breakpoints: BreakpointOptions }>`
    width: 100%;
    height: 200px;
    background-color: pink;

    ${breakpoints.up("sm")} {
      width: 50%;
    }
  `;

  return <StyledDiv breakpoints={breakpoints}></StyledDiv>;
};
MediaQuery.parameters = {
  docs: {
    description: {
      story: "특정 범위에서 스타일을 정의하는 경우 아래와 같이 사용합니다.",
    },
  },
};

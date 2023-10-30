import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "./index";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { StyledDetailsContentDiv } from "./styles";
import { Typography } from "../../foundation/Typography";
import { useTheme } from "../../../hooks/useTheme";
import { accordionDesc } from "src/stories/docs/accordion";

export default {
  title: "Action/Accordion",
  component: Accordion,
  ...accordionDesc,
} as ComponentMeta<typeof Accordion>;

const DetailsContentDiv = ({ children }: { children: ReactNode }) => (
  <StyledDetailsContentDiv>{children}</StyledDetailsContentDiv>
);

export const Default: ComponentStory<typeof Accordion> = (args) => {
  const theme = useTheme();

  return (
    <Fragment>
      {[
        {
          summary: (
            <Typography variant="h6" color={theme.colors.gray[1000]}>
              How can I be whitelisted?
            </Typography>
          ),
          details: (
            <DetailsContentDiv>
              <Typography variant="body2" color={theme.colors.gray[1000]}>
                Lorem ipsum dolor sit amet, consectetur a.
              </Typography>
            </DetailsContentDiv>
          ),
          initialExpanded: true,
        },
        {
          summary: (
            <Typography variant="h6" color={theme.colors.gray[1000]}>
              How can I be whitelisted?
            </Typography>
          ),
          details: (
            <DetailsContentDiv>
              <Typography variant="body2" color={theme.colors.gray[1000]}>
                mod tempor incididunt.
              </Typography>
            </DetailsContentDiv>
          ),
        },
        {
          summary: (
            <Typography variant="h6" color={theme.colors.gray[1000]}>
              How can I be whitelisted?
            </Typography>
          ),
          details: (
            <DetailsContentDiv>
              <Typography variant="body2" color={theme.colors.gray[1000]}>
                Ut enim ad minim veniam:
              </Typography>
            </DetailsContentDiv>
          ),
        },
      ].map((item, i) => {
        return (
          <Accordion
            {...args}
            onChange={undefined}
            key={i}
            item={{
              summary: item.summary,
              details: item.details,
              initialExpanded: item.initialExpanded,
            }}
          />
        );
      })}
    </Fragment>
  );
};

export const ExpandedOnlyOne: ComponentStory<typeof Accordion> = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | false>(false);
  const handleChange = (index: number) => (newExpanded: boolean) => {
    setActiveIndex(newExpanded ? index : false);
  };

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <Fragment>
      {[
        {
          summary: <Typography variant="body2">Accordion 1</Typography>,
          details: (
            <DetailsContentDiv>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </DetailsContentDiv>
          ),
        },
        {
          summary: (
            <Typography variant="body2" color={theme.colors.gray[700]}>
              Accordion 2
            </Typography>
          ),
          details: (
            <DetailsContentDiv>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </DetailsContentDiv>
          ),
        },
        {
          summary: (
            <Typography variant="body2" color={theme.colors.gray[700]}>
              Accordion 3
            </Typography>
          ),
          details: (
            <DetailsContentDiv>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </DetailsContentDiv>
          ),
        },
      ].map((item, i) => (
        <Accordion
          key={i}
          onChange={handleChange(i)}
          expanded={i === activeIndex}
          item={{
            summary: item.summary,
            details: item.details,
          }}
          icon={<span>🚀</span>}
        />
      ))}
    </Fragment>
  );
};
ExpandedOnlyOne.parameters = {
  docs: {
    description: {
      story:
        "expanded prop 과 activeIndex 상태 값으로 한 아코디언만 펼칠 수 있도록 구현이 가능합니다.",
    },
  },
  options: { showPanel: false },
};
export const CustomizeStylesAndIcons: ComponentStory<typeof Accordion> = () => {
  const theme = useTheme();

  return (
    <Fragment>
      {[
        {
          summary: (
            <Typography variant="h6" color={theme.colors.gray[1000]}>
              {"ullamco laboris".toUpperCase()}
            </Typography>
          ),
          details: (
            <DetailsContentDiv>
              <Typography variant="body2" color={theme.colors.gray[1000]}>
                Lorem ipsum dolor sit amet, consectetur a.
              </Typography>
            </DetailsContentDiv>
          ),
        },
        {
          summary: (
            <Typography variant="h6" color={theme.colors.gray[1000]}>
              {"eu fugiat nulla".toUpperCase()}
            </Typography>
          ),
          details: (
            <DetailsContentDiv>
              <Typography variant="body2" color={theme.colors.gray[1000]}>
                mod tempor incididunt.
              </Typography>
            </DetailsContentDiv>
          ),
        },
        {
          summary: (
            <Typography variant="h6" color={theme.colors.gray[1000]}>
              {"irure dolor in reprehenderit".toUpperCase()}
            </Typography>
          ),
          details: (
            <DetailsContentDiv>
              <Typography variant="body2" color={theme.colors.gray[1000]}>
                Ut enim ad minim veniam:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2" color={theme.colors.gray[1000]}>
                    ullamco laboris nisi u
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color={theme.colors.gray[1000]}>
                    irure dolor in
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color={theme.colors.gray[1000]}>
                    cillum dolore eu fugiat nulla pariatur
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color={theme.colors.gray[1000]}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore.
                  </Typography>
                </li>
              </ul>
            </DetailsContentDiv>
          ),
        },
      ].map((item, i) => {
        return (
          <Accordion
            onChange={undefined}
            key={i}
            item={{
              summary: item.summary,
              details: item.details,
            }}
            summaryStyle={`height: 70px;`}
            accordionStyle={`border-bottom: 1px solid ${theme.colors.gray[1000]};
              max-width: 700px;
              width: 100%;
              margin-left: auto;
              margin-right: auto;
              &.AccordionExpanded {
                margin: 0 auto;
              }
              `}
            selectiveIcon={(expanded) =>
              expanded ? <span>🙋</span> : <span>👼🏻</span>
            }
            iconStyle={`
              transform: none;
              animation: none;
            `}
            icon={undefined}
          />
        );
      })}
    </Fragment>
  );
};
CustomizeStylesAndIcons.parameters = {
  docs: {
    description: {
      story:
        "summaryStyle, accordionStyle, iconStyle prop으로 스타일을 커스텀할 수 있고, selectiveIcon prop 으로 expanded상태일 때와 아닐 때 아이콘도 커스텀할 수 있습니다.",
    },
  },
  options: { showPanel: false },
};

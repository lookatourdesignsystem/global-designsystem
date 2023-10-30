import { ComponentStory, Meta, Story } from "@storybook/react";
import { Button } from "../Button";
import { BottomSheet, BottomSheetProps } from ".";
import { Typography } from "../../foundation/Typography";
import { Fragment, useState } from "react";
import {
  ArrowLeftOutlinedIcon,
  CloseOutlinedIcon,
} from "@lookatourdesignsystem/icons-library";
import { Grid } from "../../foundation/Grid";
import { Stack } from "../Stack";
import { Variants } from "framer-motion/dist/framer-motion";
import { FormControlLabel } from "../FormControlLabel";
import { Radio } from "../Radio";
import { bottomSheetDesc } from "src/stories/docs/bottomSheet";

const meta: Meta = {
  title: "Overlay/BottomSheet",
  component: BottomSheet,
  args: {
    open: true,
    titleVariant: "h6",
    iconSize: 24,
    title: "Title",
    fixTop: <Typography variant="h5">fixed Top</Typography>,
    fixBottom: (
      <Button block color="primary">
        fix Bottom
      </Button>
    ),
    backdropColor: "rgba(0,0,0,0.5)",
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
      </div>
    ),
  ],
  ...bottomSheetDesc,
};

export default meta;

export const Default: ComponentStory<typeof BottomSheet> = (args) => {
  return (
    <BottomSheet {...args}>
      <Typography>children</Typography>
    </BottomSheet>
  );
};

export const CustomizeHeader: Story<BottomSheetProps> = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  return (
    <Fragment>
      <Button
        onClick={() => {
          setShowBottomSheet(true);
        }}
      >
        show BottomSheet
      </Button>
      <BottomSheet
        open={showBottomSheet}
        onClose={() => {
          setShowBottomSheet(false);
        }}
        fixBottom={
          <Grid container>
            <Grid item xs={4}>
              <Button
                block
                color="primary"
                variant="solidSub"
                onClick={() => {
                  setShowBottomSheet(false);
                }}
              >
                close
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button
                block
                color="primary"
                onClick={() => {
                  setShowBottomSheet(false);
                }}
              >
                close
              </Button>
            </Grid>
          </Grid>
        }
        header={
          <Stack
            direction="row"
            alignItems="center"
            spacing="200"
            justifyContent="space-between"
            width="100%"
          >
            <Stack direction="row" alignItems="center" spacing="200">
              <Button icon borderRadius="circle">
                <ArrowLeftOutlinedIcon fontSize={24} />
              </Button>
              <Typography variant="h6">Title</Typography>
            </Stack>
            <Button
              icon
              borderRadius="circle"
              onClick={() => setShowBottomSheet(false)}
            >
              <CloseOutlinedIcon fontSize={24} />
            </Button>
          </Stack>
        }
      >
        <div>
          Cillum cupidatat fugiat irure Lorem eu tempor commodo nisi laboris do
          ipsum magna voluptate. Fugiat pariatur dolor consectetur elit laboris
          enim qui laboris id sunt reprehenderit nostrud ea irure. Ullamco
          excepteur adipisicing fugiat id aute eiusmod. Tempor id minim non
          mollit ullamco. Ullamco et dolor quis id laboris et laborum. Cillum
          minim eiusmod eiusmod Lorem mollit eu ad. Magna elit sint ullamco in
          laboris amet sit aliquip occaecat non eu labore consectetur occaecat.
          Exercitation anim labore in velit elit ea adipisicing commodo
          cupidatat. Ex consequat pariatur pariatur pariatur in.
        </div>
      </BottomSheet>
    </Fragment>
  );
};
CustomizeHeader.parameters = {
  docs: {
    description: {
      story:
        "헤더 영역 전체를 커스텀할 수 있습니다. 아래 예시의 경우 커스텀하여 헤더 영역에 back 버튼이 추가되었습니다.",
    },
    inlineStories: false,
    iframeHeight: 400,
  },
  options: { showPanel: false },
};

export const CustomizeAnimation: Story<BottomSheetProps> = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [value, setValue] = useState<String>("left");
  const direction = ["left", "right"];
  const customAnimation: Variants = {
    hidden: {
      opacity: 1,
      translateX: value === "left" ? "-100%" : "100%",
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 1,
      translateX: value === "left" ? "-100%" : "100%",
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <Fragment>
      <Button
        onClick={() => {
          setShowBottomSheet(true);
        }}
      >
        show BottomSheet
      </Button>
      <Stack direction="column" spacing="500" alignItems="flex-start" pt="500">
        {direction.map((direction) => (
          <FormControlLabel
            control={
              <Radio
                id={direction}
                name="direction"
                value={direction}
                onChange={(checked, id, value) => {
                  setValue(value);
                }}
              />
            }
            label={direction}
            checked={value === direction}
            value={direction}
          />
        ))}
      </Stack>
      <BottomSheet
        open={showBottomSheet}
        onClose={() => {
          setShowBottomSheet(false);
        }}
        fixBottom={
          <Grid container>
            <Grid item xs={4}>
              <Button
                block
                color="primary"
                variant="solidSub"
                onClick={() => {
                  setShowBottomSheet(false);
                }}
              >
                close
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button
                block
                color="primary"
                onClick={() => {
                  setShowBottomSheet(false);
                }}
              >
                close
              </Button>
            </Grid>
          </Grid>
        }
        animationVariables={{
          direction: value, // "left" or "right"
        }}
        animation={customAnimation}
      >
        children
      </BottomSheet>
    </Fragment>
  );
};
CustomizeAnimation.parameters = {
  docs: {
    description: {
      story:
        "커스텀 애니메이션으로 BottomSheet 가 나타나고 사라지는 과정은 visible, hidden, exit 단계로 나누어 스타일을 지정할 수 있습니다. 커스텀 애니메이션에서 필요한 variable 은 animationVariables 를 통해 넘겨줄 수 있습니다.<br/>아래의 경우 translateX 가 각 단계별로 변경되도록 하여 BottomSheet 이 나타날 때 direction 값에 따라 좌측 또는 우측에서 나타나는 애니메이션이 구현됩니다.",
    },
    inlineStories: false,
    iframeHeight: 400,
  },
  options: { showPanel: false },
};

import { ComponentStory, Meta, Story } from "@storybook/react";
import { Fragment, useState } from "react";
import { Button } from "../Button";
import { Modal, ModalProps } from ".";
import { Typography } from "../../foundation/Typography";
import { Stack } from "../Stack";
import {
  ArrowLeftOutlinedIcon,
  CloseOutlinedIcon,
} from "@lookatourdesignsystem/icons-library";
import { Variants } from "framer-motion/dist/framer-motion";
import { useBreakpoints } from "src/hooks/useBreakpoints";
import { modalDesc } from "src/stories/docs/modal";
import { Global, css } from "@emotion/react";
const meta: Meta = {
  title: "Overlay/Modal",
  component: Modal,
  args: {
    open: true,
    hideCloseButton: false,
    disableBackdropClose: false,
    iconSize: 24,
    fullScreen: false,
    backdropColor: "rgba(0,0,0,0.5)",
    borderWidth: 0,
    titleVariant: "h6",
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
  ...modalDesc,
};

export default meta;

export const Default: ComponentStory<typeof Modal> = (args) => {
  return (
    <Modal
      title="Title"
      titleVariant="h4"
      fixTop={<Typography variant="h5">fixed Top</Typography>}
      fixBottom={
        <Button block color="primary">
          fix Bottom
        </Button>
      }
      {...args}
    >
      <Typography>
        Cillum cupidatat fugiat irure Lorem eu tempor commodo nisi laboris do
        ipsum magna voluptate. Fugiat pariatur dolor consectetur elit laboris
        enim qui laboris id sunt reprehenderit nostrud ea irure. Ullamco
        excepteur adipisicing fugiat id aute eiusmod. Tempor id minim non mollit
        ullamco. Ullamco et dolor quis id laboris et laborum. Cillum minim
        eiusmod eiusmod Lorem mollit eu ad. Magna elit sint ullamco in laboris
        amet sit aliquip occaecat non eu labore consectetur occaecat.
        Exercitation anim labore in velit elit ea adipisicing commodo cupidatat.
        Ex consequat pariatur pariatur pariatur in. Esse et sit non velit.
        Laborum nulla cupidatat nulla aliquip mollit id tempor eu. Nisi ex amet
        mollit aliquip duis anim cillum irure pariatur aliqua esse minim esse
        sint. Pariatur minim laborum culpa eu irure aliqua voluptate laboris sit
        laborum magna sunt ipsum commodo. Voluptate fugiat aute cillum nisi
        elit. Exercitation elit exercitation enim voluptate Lorem nisi magna
        nisi amet incididunt occaecat exercitation nostrud. Mollit cupidatat qui
        incididunt ullamco officia ea veniam enim id fugiat quis. Ad do sit
        commodo aliqua commodo ea anim officia in ut. Lorem cupidatat aute
        nostrud nisi cupidatat ipsum.
      </Typography>
    </Modal>
  );
};

export const CustomHeader: Story<ModalProps> = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        show Modal
      </Button>

      <Modal
        id="modal1"
        title="Modal1"
        open={open}
        fixTop={<Typography variant="h5">fixed Top</Typography>}
        fixBottom={
          <Button block color="primary">
            Button
          </Button>
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
            <Button icon borderRadius="circle" onClick={() => setIsOpen(false)}>
              <CloseOutlinedIcon fontSize={24} />
            </Button>
          </Stack>
        }
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Typography>children</Typography>
      </Modal>
    </Fragment>
  );
};
CustomHeader.parameters = {
  docs: {
    description: {
      story:
        "header, FixedTop, fixedBottom 영역을 커스텀 할 수 있습니다. 아래 예시의 경우 커스텀하여 header 영역에 back 버튼이 추가되었습니다.",
    },
    inlineStories: false,
    iframeHeight: 400,
  },
  options: { showPanel: false },
};

export const CustomAnimation: Story<ModalProps> = () => {
  const breakpoints = useBreakpoints();

  const [open, setIsOpen] = useState(false);
  const customAnimation: Variants = {
    visible: ({ width, isBottomSheet }) => {
      return {
        opacity: 1,
        translateY: 0,
        width: isBottomSheet ? "100%" : width,
        transition: {
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        },
      };
    },
    hidden: ({ isBottomSheet }) => {
      return {
        opacity: 1,
        translateY: isBottomSheet ? "100%" : 0,
        width: isBottomSheet ? "100%" : 0,
        transition: {
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        },
      };
    },
    exit: ({ isBottomSheet }) => {
      return {
        opacity: 0,
        translateY: isBottomSheet ? "100%" : 0,
        width: isBottomSheet ? "100%" : 0,
        transition: {
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        },
      };
    },
  };

  return (
    <Fragment>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        show Modal
      </Button>
      <Modal
        id="modal1"
        title="Modal1"
        open={open}
        fixTop={<Typography variant="h5">fixed Top</Typography>}
        fixBottom={
          <Button block color="primary">
            Button
          </Button>
        }
        animation={customAnimation}
        animationVariables={{
          isBottomSheet: breakpoints.calc.down("sm"),
          width: "600px",
        }}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Typography>children</Typography>
      </Modal>
    </Fragment>
  );
};
CustomAnimation.parameters = {
  docs: {
    description: {
      story:
        "커스텀 애니메이션으로 Modal가 나타나고 사라지는 과정은 animation은 visible, hidden, exit 단계로 나누어 스타일을 구성할 수 있습니다. 커스텀 애니메이션에서 필요한 variable은 animationVariables를 통해 넘겨줄 수 있습니다. 아래의 경우 Modal이 open, close될 때 width에 애니메이션을 준 예시입니다.",
    },
    inlineStories: false,
    iframeHeight: 400,
  },
  options: { showPanel: false },
};

import { Meta, Story } from "@storybook/react";
import { Fragment, useState } from "react";
import { Button } from "../../components/Button";
import { Modal, ModalProps } from "../../components/Modal";
import { Typography } from "../../foundation/Typography";
import { useContainerModal } from "../../../hooks/components/useContainerModal";
import { ContainerModalProvider } from "../../../providers/ContainerModal";
import { Stack } from "src/stories/components/Stack";
import { Box } from "src/stories/components/Box";
import Modal2 from "./modals/Modal2";
import { Grid } from "src/stories/foundation/Grid";
import { useContainerModalDesc } from "src/stories/docs/useContainerModal";

const meta: Meta = {
  title: "Hooks/useContainerModal",
  ...useContainerModalDesc,
};

export default meta;

export const UseOpen: Story<ModalProps> = () => {
  const Modal1 = ({
    updateItems,
    toggleValue,
    items,
    value,
    onClose,
    ...props
  }: {
    updateItems?: () => void;
    toggleValue?: () => void;
    items?: string[];
    value?: boolean;
    onClose: () => void;
  }) => {
    const { open, close } = useContainerModal({ id: "Modal2" });

    const handleClick = () => {
      open(<Modal2 onClose={close} />);
    };
    return (
      <Modal
        title="Modal1"
        fixTop={<Typography variant="h5">fixed Top</Typography>}
        fixBottom={
          <Grid container>
            <Grid item xs={12}>
              <Button block onClick={handleClick} color="primary">
                open modal2
              </Button>
            </Grid>
          </Grid>
        }
        onClose={onClose}
        {...props}
      >
        Modal1 Children
      </Modal>
    );
  };

  const Example1 = () => {
    const {
      isOpen: isOpenModal1,
      open,
      close,
    } = useContainerModal({
      id: "Modal1",
    });
    const { isOpen: isOpenModal2 } = useContainerModal({
      id: "Modal2",
    });

    const { isOpen: isOpenModal3 } = useContainerModal({
      id: "Modal3",
    });

    const handleClick = () => {
      open(<Modal1 onClose={close} />);
    };

    return (
      <Fragment>
        <Button onClick={handleClick}>show Multiple Modal</Button>
        <Stack direction="row" spacing="1000">
          <Box>
            <Typography variant="h6">isOpen</Typography>
            <Typography>
              Modal1 is open? : <b>{String(isOpenModal1)}</b>
            </Typography>
            <Typography>
              Modal2 is open? : <b>{String(isOpenModal2)}</b>
            </Typography>
            <Typography>
              Modal3 is open? : <b>{String(isOpenModal3)}</b>
            </Typography>
          </Box>
        </Stack>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <ContainerModalProvider>
        <Example1 />
      </ContainerModalProvider>
    </Fragment>
  );
};

export const UseKeys: Story<ModalProps> = () => {
  const Modal1 = ({
    updateItems,
    toggleValue,
    items,
    value,
    onClose,
    ...props
  }: {
    updateItems?: () => void;
    toggleValue?: () => void;
    items: string[];
    value: boolean;
    onClose: () => void;
  }) => {
    return (
      <Modal
        title="Modal1"
        fixTop={<Typography variant="h5">fixed Top</Typography>}
        fixBottom={
          <Grid container>
            <Grid item xs={6}>
              <Button block onClick={updateItems} color="default">
                updateItems
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button block onClick={toggleValue} color="default">
                updateValue
              </Button>
            </Grid>
          </Grid>
        }
        onClose={onClose}
        {...props}
      >
        <Typography>
          items(will be updated) : <b>{items.map((item, i) => item)}</b>
        </Typography>
        <Typography>
          value(will not be updated) : <b>{String(value)}</b>{" "}
        </Typography>
      </Modal>
    );
  };
  const Example2 = () => {
    const [items, setItems] = useState(["item0"]);
    const [value, setValue] = useState(false);

    const {
      isOpen: isOpenModal1,
      open,
      close,
    } = useContainerModal({
      id: "Modal1",
      keys: { items },
    });

    const updateItems = () => {
      setItems((item) => item.concat(`item${item.length}`));
    };

    const toggleValue = () => {
      setValue((prev) => !prev);
    };

    const handleClick = () => {
      open(
        <Modal1
          items={items}
          updateItems={updateItems}
          toggleValue={toggleValue}
          value={value}
          onClose={close}
        />
      );
    };

    return (
      <Fragment>
        <Button onClick={handleClick}>show Modal1</Button>
        <Stack direction="row" spacing="1000">
          <Box>
            <Typography variant="h6">isOpen</Typography>
            <Typography>
              Modal1 is open? : <b>{String(isOpenModal1)}</b>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">keys</Typography>
            <Typography>
              items(will be updated) :<b>{items.map((item, i) => item)}</b>
            </Typography>
            <Typography>
              value(will be updated) : <b>{String(value)}</b>
            </Typography>
          </Box>
        </Stack>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <ContainerModalProvider>
        <Example2 />
      </ContainerModalProvider>
    </Fragment>
  );
};
UseKeys.parameters = {
  docs: {
    description: {
      story: "useContainerModal의 key로 Modal의 prop 상태를 업데이트합니다.",
    },
  },
};

import { Meta, Story } from "@storybook/react";
import { Fragment } from "react";
import { Button } from "../../components/Button";
import { Modal, ModalProps } from "../../components/Modal";
import { Typography } from "../../foundation/Typography";
import { useModal } from "src/hooks/components";
import { useModalDesc } from "src/stories/docs/useModal";

const meta: Meta = {
  title: "Hooks/useModal",
  ...useModalDesc,
};

export default meta;

export const Default: Story<ModalProps> = () => {
  const [isOpen, open, close] = useModal();

  return (
    <Fragment>
      <Button
        onClick={() => {
          open();
        }}
      >
        show Modal
      </Button>
      <Modal
        id="modal1"
        title="Modal1"
        open={isOpen}
        fixTop={<Typography variant="h5">fixed Top</Typography>}
        onClose={() => {
          close();
        }}
      >
        Children
      </Modal>
    </Fragment>
  );
};

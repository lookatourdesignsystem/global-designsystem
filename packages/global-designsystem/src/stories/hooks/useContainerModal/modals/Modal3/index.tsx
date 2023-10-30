import { Modal } from "../../../../components/Modal";
import { Typography } from "../../../../foundation/Typography";
import { Button } from "../../../../components/Button";

const Modal3 = ({ onClose, ...props }: { onClose: () => void }) => {
  return (
    <Modal
      title="Modal3"
      fixTop={<Typography variant="h5">fixed Top</Typography>}
      fixBottom={
        <Button block onClick={onClose} color="default">
          close
        </Button>
      }
      onClose={onClose}
      {...props}
    >
      Modal3
    </Modal>
  );
};

export default Modal3;

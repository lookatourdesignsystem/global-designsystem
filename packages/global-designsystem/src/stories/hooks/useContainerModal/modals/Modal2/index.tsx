import { Modal } from "../../../../components/Modal";
import { useContainerModal } from "../../../../../hooks/components/useContainerModal";
import { Grid } from "../../../../foundation/Grid";
import { Typography } from "../../../../foundation/Typography";
import { Button } from "../../../../components/Button";
import Modal3 from "../Modal3";
import { Variants } from "framer-motion/dist/framer-motion";

const customAnimation: Variants = {
  hidden: ({ isBottomSheet }) => {
    return {
      opacity: 1,
      translateY: isBottomSheet ? "100%" : 0,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      },
    };
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    translateY: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Modal2 = ({ onClose, ...props }: { onClose: () => void }) => {
  const { open, close } = useContainerModal({ id: "Modal3" });

  const handleClick = () => {
    open(<Modal3 onClose={close} />);
  };

  return (
    <Modal
      title="Modal2"
      fixTop={<Typography variant="h5">fixed Top</Typography>}
      fixBottom={
        <Grid container>
          <Grid item xs={8}>
            <Button block onClick={handleClick} color="primary">
              open modal3
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button block onClick={onClose} color="default">
              close
            </Button>
          </Grid>
        </Grid>
      }
      onClose={onClose}
      animation={customAnimation}
      {...props}
    >
      Modal2
    </Modal>
  );
};

export default Modal2;

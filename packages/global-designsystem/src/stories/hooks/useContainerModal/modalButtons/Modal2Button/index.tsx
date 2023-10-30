import { Fragment, useState } from "react";
import { Modal } from "../../../../components/Modal";
import { Grid } from "../../../../foundation/Grid";
import { Button } from "../../../../components/Button";

const Modal2Button = ({
  items,
  updateItems,
}: {
  items: string[];
  updateItems: () => void;
}) => {
  const [open, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Button
        block
        onClick={() => {
          setIsOpen(true);
        }}
      >
        show Modal2
      </Button>
      <Modal
        id="modal2"
        title="Modal2"
        open={open}
        fixBottom={
          <Grid container>
            <Grid item xs={8}>
              <Button block onClick={updateItems} color="primary">
                add items
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                block
                onClick={() => {
                  setIsOpen(false);
                }}
                color="default"
              >
                close Modal2
              </Button>
            </Grid>
          </Grid>
        }
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <p> {items.map((item, i) => item)}</p>
      </Modal>
    </Fragment>
  );
};

export default Modal2Button;

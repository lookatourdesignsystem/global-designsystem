import { Fragment, useState } from "react";
import { Modal } from "../../../../components/Modal";
import { Grid } from "../../../../foundation/Grid";
import { Typography } from "../../../../foundation/Typography";
import { Button } from "../../../../components/Button";
import Modal2Button from "../Modal2Button";

const Modal1Button = ({
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
        onClick={() => {
          setIsOpen(true);
        }}
      >
        show Modal1
      </Button>
      <Modal
        id="modal1"
        title="Modal1"
        open={open}
        fixTop={<Typography variant="h5">fixed Top</Typography>}
        fixBottom={
          <Grid container>
            <Grid item xs={8}>
              <Button block onClick={updateItems} color="primary">
                add items
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Modal2Button items={items} updateItems={updateItems} />
            </Grid>
          </Grid>
        }
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <p>{items.map((item, i) => item)}</p>
      </Modal>
    </Fragment>
  );
};

export default Modal1Button;

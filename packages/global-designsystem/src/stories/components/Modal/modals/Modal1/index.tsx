import { Modal } from "../..";
import { Grid } from "../../../../foundation/Grid";
import { Typography } from "../../../../foundation/Typography";
import { Button } from "../../../Button";

const Modal1 = ({
  updateItems,
  toggleValue,
  items,
  value,
  onClose,
  ...props
}: {
  updateItems: () => void;
  toggleValue: () => void;
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
      items(업데이트됨) : <b>{items.map((item, i) => item)}</b>
      <br />
      value(업데이트안됨) : <b>{String(value)}</b>
    </Modal>
  );
};

export default Modal1;

import { ComponentMeta, Meta } from "@storybook/react";
import { Fragment, useContext } from "react";
import { useLoading } from "../../../hooks/components/useLoading";
import { LoadingStateContext } from "../../../hooks/components/useLoading/LoadingContext";
import { LoadingProvider } from "../../../providers/Loading";
import { Button } from "src/stories/components/Button";
import { Loading } from "src/stories/components/Loading";
import { Stack } from "src/stories/components/Stack";
import { useLoadingDesc } from "src/stories/docs/useLoading";

const meta: Meta = {
  title: "Hooks/useLoading",
  decorators: [
    (storyFn) => (
      <div
        id="overlay-root"
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
  ...useLoadingDesc,
} as ComponentMeta<typeof Loading>;

export default meta;

export const Default = () => {
  const Example = () => {
    const {
      openLoading,
      closeLoading,
      updateLoadingLabel,
      updateLoadingColor,
    } = useLoading();
    const isOpen = useContext(LoadingStateContext);

    return (
      <div style={{ position: "fixed", zIndex: 1 }}>
        <Stack spacing="100" direction="row">
          <Button
            size="s"
            color="primary"
            onClick={() => {
              openLoading({
                color: "success",
                label: "label",
                disableBackdropClose: false,
              });
            }}
          >
            show loading
          </Button>
          <Button
            size="s"
            color="primary"
            onClick={() => {
              closeLoading();
            }}
          >
            close loading
          </Button>
          <Button
            size="s"
            color="primary"
            onClick={() => {
              updateLoadingLabel("text2");
            }}
          >
            change label
          </Button>
          <Button
            size="s"
            color="primary"
            onClick={() => {
              updateLoadingColor("primary");
            }}
          >
            change color
          </Button>
          <p>progress state : {String(isOpen)}</p>
        </Stack>
      </div>
    );
  };

  return (
    <Fragment>
      <LoadingProvider>
        <Example />
      </LoadingProvider>
    </Fragment>
  );
};

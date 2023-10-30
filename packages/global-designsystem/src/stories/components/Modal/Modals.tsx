import { css, Global } from "@emotion/react";
import { cloneElement, Fragment, isValidElement, useContext } from "react";
import { ContainerModalListContext } from "../../../hooks/components/useContainerModal/ContainerModalContext";

export const Modals = () => {
  const openedModals = useContext(ContainerModalListContext);

  return (
    <Fragment>
      {openedModals.map((modal: any, i: number) => {
        const { id, component, isOpen, props } = modal;
        return (
          isValidElement(component) && (
            <Fragment key={i}>
              {cloneElement<any>(component, {
                id: id,
                open: isOpen,
                ...props,
              })}
            </Fragment>
          )
        );
      })}
      {openedModals.length > 0 && (
        <Global
          styles={css`
            body {
              overflow: hidden;
            }
          `}
        />
      )}
    </Fragment>
  );
};

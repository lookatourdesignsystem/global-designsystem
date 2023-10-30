import { ReactElement, useCallback, useContext, useEffect } from "react";
import { OpenedModal } from "../../../providers/ContainerModal";
import { ContainerModalDispatchContext } from "./ContainerModalContext";

export const useContainerModal = ({ id, keys }: { id: string; keys?: any }) => {
  const {
    openModal,
    closeModal,
    removeModal,
    updateModal,
    openedModals,
  } = useContext(ContainerModalDispatchContext);

  const isOpen = openedModals.some((modal: OpenedModal) => {
    return modal.id === id;
  });

  const open = useCallback((component: ReactElement) => {
    openModal({ id, component });
  }, []);

  const close = useCallback(() => {
    closeModal(id);
  }, []);

  const remove = useCallback(() => {
    removeModal(id);
  }, []);

  const update = useCallback(({ id, props }: { id: string; props: any }) => {
    updateModal({ id, props });
  }, []);

  useEffect(() => {
    if (id && keys) update({ id: id, props: keys });
  }, [keys]);

  return { isOpen, open, close, remove, update };
};

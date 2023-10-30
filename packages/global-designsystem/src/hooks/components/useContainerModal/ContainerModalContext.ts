import { createContext, ReactElement } from "react";
import { OpenedModal } from "../../../providers/ContainerModal";

export const ContainerModalDispatchContext = createContext<{
  openModal: ({
    id,
    component,
  }: {
    id: string;
    component: ReactElement;
  }) => void;
  closeModal: (id: string) => void;
  removeModal: (id: string) => void;
  updateModal: ({ id, props }: { id: string; props: any }) => void;
  openedModals: OpenedModal[];
}>({
  openModal: () => {},
  closeModal: () => {},
  removeModal: () => {},
  updateModal: () => {},
  openedModals: [],
});

export const ContainerModalListContext = createContext<OpenedModal[]>([]);

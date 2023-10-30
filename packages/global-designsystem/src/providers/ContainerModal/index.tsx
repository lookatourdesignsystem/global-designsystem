import { ReactElement, ReactNode, useMemo, useState } from "react";
import {
  ContainerModalDispatchContext,
  ContainerModalListContext,
} from "../../hooks/components/useContainerModal/ContainerModalContext";
import { Modals } from "../../stories/components/Modal/Modals";

export interface OpenedModal {
  id: string;
  component: ReactElement;
  isOpen: boolean;
}

export const ContainerModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [openedModals, setOpenedModals] = useState<OpenedModal[]>([]);

  const openModal = ({
    id,
    component,
  }: {
    id: string;
    component: ReactElement;
  }) => {
    setOpenedModals((modals: OpenedModal[]) => {
      // FIXME : id가 유니크하여 모달을 오픈, 클로즈 할 수 있도록 의도했기 때문에, 컨텍스트에 남아있는 모달 id와 오픈하려는 모달 id가 중복되면 오픈될 수 없도록 throw error를 했었다.
      // 그런데, 프로덕트에서 가끔 모달이 정상적으로 close되지 않아 컨텍스트에 남아있는 경우 있어 throw error가 발생했다.
      // throw error를 없애고 컨텍스트에 중복되는 id의 모달이 존재하는 경우 그것의 isOpen 상태만 바뀌도록 수정했다.
      // "모달이 정상적으로 close되지 않아 컨텍스트에 남아있는 경우"가 재현하기가 쉽지 않아서 추후에 좀 더 확인이 필요할 것 같다.
      const isExisted = modals.some((modal: OpenedModal) => modal.id === id);

      if (isExisted) {
        return modals.map((modal: OpenedModal) => {
          if (modal.id === id) {
            return { ...modal, isOpen: true };
          } else {
            return modal;
          }
        });
      }

      return [...modals, { id: id, component, isOpen: true }];
    });
  };

  const updateModal = ({ id, props }: { id: string; props: any }) => {
    setOpenedModals((modals: OpenedModal[]) => {
      return modals.map((modal: OpenedModal) => {
        if (modal.id !== id) {
          return modal;
        } else {
          return {
            id: modal.id,
            component: modal.component,
            isOpen: modal.isOpen,
            props: props,
          };
        }
      });
    });
  };

  const closeModal = (id: string) => {
    setOpenedModals((modals: OpenedModal[]) => {
      return modals.map((modal: OpenedModal) => {
        if (modal.id !== id) {
          return modal;
        } else {
          return { id: modal.id, component: modal.component, isOpen: false };
        }
      });
    });
  };

  const removeModal = (id: string) => {
    setOpenedModals((modals: OpenedModal[]) => {
      return modals.filter((modal: OpenedModal) => {
        return modal.id !== id;
      });
    });
  };

  const dispatch = useMemo(
    () => ({
      openModal,
      closeModal,
      removeModal,
      updateModal,
      openedModals,
    }),
    [openedModals.length]
  );

  return (
    <ContainerModalListContext.Provider value={openedModals}>
      <ContainerModalDispatchContext.Provider value={dispatch}>
        {children}
        <Modals />
      </ContainerModalDispatchContext.Provider>
    </ContainerModalListContext.Provider>
  );
};

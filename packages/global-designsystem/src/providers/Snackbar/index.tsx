import {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  SnackbarContext,
  SnackBarOption,
} from "../../hooks/components/useSnackbar/SnackbarContext";
import { Snackbar } from "../../stories/components/Snackbar";

const DISMISS = 1000;

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false);
  const [activeMessage, setActiveMessage] = useState<{
    message: string;
    options?: SnackBarOption;
  } | null>(null);
  const pendingMessages = useRef<
    { message: string; options?: SnackBarOption }[]
  >([]);

  const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null);
  const [basePosition, setBasePosition] = useState({});

  const addMessage = useCallback(
    (message: string, options?: SnackBarOption) => {
      if (activeMessage === null && pendingMessages.current.length === 0) {
        setActiveMessage({ message: message, options });
        return;
      }

      pendingMessages.current.push({ message: message, options });
    },
    [activeMessage]
  );

  const showMessage = () => {
    setShow(true);
  };

  const closeMessage = () => {
    setShow(false);
    // setTimeout(() => {
    //   setActiveMessage(null);
    // }, activeMessage?.options?.timeout || DISMISS);
  };

  const clearMessages = () => {
    closeMessage();
    pendingMessages.current = [];
    clearTimer();
  };

  const onClickAction = () => {
    if (activeMessage === null) {
      return;
    }

    if (activeMessage.options?.onClickAction) {
      activeMessage.options.onClickAction();
      clearTimer();
      closeMessage();
    }
  };

  const setTimer = useCallback((action: () => void, timeout: number) => {
    timerRef.current = setTimeout(() => {
      action();
    }, timeout);
  }, []);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    if (activeMessage !== null) {
      showMessage();
      setTimer(() => {
        closeMessage();
      }, activeMessage.options?.duration || 3000);
      return;
    }

    const lastMessage = pendingMessages.current.shift();
    if (activeMessage === null && lastMessage) {
      setActiveMessage(lastMessage);
    }
  }, [activeMessage, setTimer]);

  const updateBasePosition = (basePosition: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  }) => {
    setBasePosition(basePosition);
  };

  return (
    <SnackbarContext.Provider
      value={{ addMessage, clearMessages, updateBasePosition }}
    >
      <Fragment>
        {children}
        {
          <Snackbar
            show={show}
            message={activeMessage?.message || ""}
            alert={activeMessage?.options?.alert}
            showActionButton={activeMessage?.options?.showActionButton}
            actionText={activeMessage?.options?.actionText}
            showCloseButton={activeMessage?.options?.showCloseButton}
            showSystemIcon={activeMessage?.options?.showSystemIcon}
            timeout={activeMessage?.options?.timeout || DISMISS}
            position={activeMessage?.options?.position}
            basePosition={basePosition}
            onClickAction={onClickAction}
            transitionType={activeMessage?.options?.transitionType}
            onClose={closeMessage}
            exited={() => {
              setActiveMessage(null);
            }}
          />
        }
      </Fragment>
    </SnackbarContext.Provider>
  );
};

import {
  StyledSerialFieldContainerDiv,
  StyledSerialListDiv,
  StyledSerialFieldInput,
} from "./styles";
import { SerialFieldItem } from "./SerialFieldItem";
import {
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
  MouseEvent,
  ChangeEvent,
} from "react";
import { AlignType, SerialFieldLength, SerialFieldState } from "../../../types";
import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { Typography } from "../../foundation/Typography";
export interface SerialFieldProps {
  inputMode?: React.HTMLAttributes<HTMLLIElement>["inputMode"];
  value?: string;
  state?: SerialFieldState;
  masking?: boolean;
  maskingDelay?: number;
  length: SerialFieldLength;
  onChange: (value: string) => void;
  helperText?: string;
  letterRegex?: RegExp;
  className?: string;
  testid?: string;
}

// https://nft.line.me/
export const SerialField = ({
  inputMode = "numeric",
  value = "",
  state,
  masking = false,
  maskingDelay = 1000,
  length = 6,
  onChange,
  helperText,
  letterRegex = /[^0-9]/g,
  className,
  testid,
}: SerialFieldProps) => {
  const theme = useTheme();
  const itemLength = length === false ? 1 : length;
  const [activeInfo, setActiveInfo] = useState({
    number: 0,
    direction: "center",
  } as {
    number: number;
    direction: AlignType;
  });
  const serialInput = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue: string = e.currentTarget.value
      .replaceAll(" ", "")
      .replace(letterRegex, "")
      .substring(0, itemLength);

    onChange(targetValue);

    if (targetValue.length > value.length) {
      setActiveInfo((prev) => {
        if (!serialInput.current) {
          return {
            ...prev,
          };
        }

        if (
          (serialInput.current.selectionStart as number) < targetValue.length
        ) {
          return {
            ...prev,
            number: (serialInput.current.selectionStart as number) + 1,
          };
        }
        return {
          ...prev,
          number:
            targetValue.length <= itemLength
              ? targetValue.length + 1
              : targetValue.length - 1,
        };
      });
    }
  };

  const handleKeyLeft = () => {
    setActiveInfo((prev) => {
      if (!serialInput.current) {
        return {
          ...prev,
        };
      }
      if (prev.number === 1 && prev.direction === "left") {
        return {
          ...prev,
        };
      }

      const isEmptyNextDigit =
        value.substring(prev.number - 2, prev.number - 1) === "";

      serialInput.current.selectionStart = prev.number;
      serialInput.current.selectionEnd = prev.number;
      return {
        ...prev,
        number: isEmptyNextDigit
          ? prev.number - 1
          : prev.direction === "right"
          ? prev.number
          : prev.number - 1,
        direction: isEmptyNextDigit
          ? "center"
          : prev.direction === "right"
          ? "left"
          : "right",
      };
    });
  };

  const handleKeyRight = () => {
    setActiveInfo((prev) => {
      if (!serialInput.current) {
        return {
          ...prev,
        };
      }
      if (prev.number === itemLength && prev.direction === "right") {
        return {
          ...prev,
        };
      }

      serialInput.current.selectionStart = prev.number - 1;
      serialInput.current.selectionEnd = prev.number - 1;

      const isEmptyNextDigit =
        value.substring(prev.number, prev.number + 1) === "";
      return {
        ...prev,
        number: isEmptyNextDigit
          ? prev.number + 1
          : prev.direction === "left"
          ? prev.number
          : prev.number + 1,
        direction: isEmptyNextDigit
          ? "center"
          : prev.direction === "left"
          ? "right"
          : "left",
      };
    });
  };

  const handleKeyBackspace = () => {
    setActiveInfo((prev) => {
      if (!serialInput.current) {
        return {
          ...prev,
        };
      }

      if (value.length === 0) {
        return {
          number: 1,
          direction: "center",
        };
      }

      if (prev.number === 1 && prev.direction === "left") {
        return {
          ...prev,
        };
      }

      if (prev.number === value.length && prev.direction === "right") {
        return {
          ...prev,
          direction: "center",
        };
      }

      return {
        ...prev,
        number:
          prev.direction === "right"
            ? prev.number
            : (serialInput.current.selectionStart as number),
        direction: prev.direction === "center" ? "center" : "left",
      };
    });
  };

  const handleKeyDelete = () => {
    setActiveInfo((prev) => {
      if (!serialInput.current) {
        return {
          ...prev,
        };
      }

      if (prev.number === value.length && prev.direction === "left") {
        return {
          ...prev,
          direction: "center",
        };
      }

      return {
        ...prev,
      };
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "ArrowLeft") {
      handleKeyLeft();
    } else if (e.code === "ArrowRight") {
      handleKeyRight();
    } else if (e.code === "Backspace") {
      handleKeyBackspace();
    } else if (e.code === "Delete") {
      handleKeyDelete();
    }
  };

  const clickSerialItem = (e: MouseEvent<HTMLInputElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const itemWidth = rect.width / itemLength;
    const clickedPosition = e.clientX - rect.left;

    if (!serialInput.current) {
      return;
    }

    for (let i = 0; i < itemLength; i++) {
      if (
        clickedPosition >= itemWidth * i &&
        clickedPosition < itemWidth * (i + 1)
      ) {
        if (value.split("")[i]) {
          if (clickedPosition < itemWidth * i + itemWidth / 2) {
            setActiveInfo({
              number: i + 1,
              direction: "left",
            });
            serialInput.current.selectionStart = i;
            serialInput.current.selectionEnd = i;
          } else {
            setActiveInfo({
              number: i + 1,
              direction: "right",
            });
            serialInput.current.selectionStart = i + 1;
            serialInput.current.selectionEnd = i + 1;
          }
        } else {
          setActiveInfo({
            number: i + 1,
            direction: "center",
          });
          serialInput.current.selectionStart = i + 1;
          serialInput.current.selectionEnd = i + 1;
        }
      }
    }
  };

  const focusOutSerialItem = () => {
    setActiveInfo({
      number: 0,
      direction: "center",
    });
  };

  useEffect(() => {
    onChange("");
  }, [length, onChange]);

  return (
    <StyledSerialFieldContainerDiv
      className={getJoinedClassName("SerialField", {
        className,
      })}
      data-testid={testid}
    >
      <StyledSerialListDiv>
        {[...Array(itemLength)].map((item, i) => {
          const digit = value.split("")[i];

          return (
            <SerialFieldItem
              key={i}
              value={digit}
              masking={masking}
              maskingDelay={maskingDelay}
              isFocused={activeInfo.number === i + 1}
              state={state}
              cursorPosition={activeInfo.direction}
            />
          );
        })}
      </StyledSerialListDiv>
      <StyledSerialFieldInput
        size={itemLength}
        type="text"
        inputMode={inputMode}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        onClick={clickSerialItem}
        onBlur={focusOutSerialItem}
        value={value}
        ref={serialInput}
        disabled={state === "disabled"}
        autoComplete="off"
        minLength={0}
        maxLength={itemLength}
      />
      {helperText !== undefined && helperText !== "" && (
        <Typography
          variant="caption1"
          color={
            state === "error"
              ? theme.colors.system.error.main
              : state === "success"
              ? theme.colors.system.success.main
              : theme.colors.text.main
          }
        >
          {helperText}
        </Typography>
      )}
    </StyledSerialFieldContainerDiv>
  );
};

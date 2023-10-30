import {
  cloneElement,
  Fragment,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { Typography } from "../../foundation/Typography";
import { ListButton } from "../ListButton";
import {
  StyledHiddenInput,
  StyledLabelDiv,
  StyledSelectContainerStack,
} from "./styles";
import { Modal } from "../Modal";
import { useContainerModal } from "../../../hooks/components/useContainerModal";
import { Spacer } from "../Spacer";
import { css } from "@emotion/react";
import { Stack } from "../Stack";
import { ChevronDownFilledIcon } from "@lookatourdesignsystem/icons-library";
import { TypoVariant } from "../../../types";

export interface SelectProps {
  id: string;
  title?: string;
  size?: "l" | "m" | "s";
  items: {
    value: string;
    label: string;
    subLabel?: string;
    icon?: ReactElement;
  }[];
  labelText?: string;
  selectedIndex?: number;
  error?: boolean;
  helpText?: string;
  searchText?: string;
  description?: boolean;
  disabled?: boolean;
  onSelect?: (index: number) => void;
  placeholder?: string;
  className?: string;
  testid?: string;
}

export const Select = ({
  id,
  title,
  size = "m",
  items,
  labelText,
  selectedIndex = -1,
  error,
  helpText,
  searchText = "",
  description,
  disabled = false,
  onSelect,
  placeholder,
  className,
  testid,
}: SelectProps) => {
  const theme = useTheme();
  const { isOpen, open, close } = useContainerModal({ id: "selectModal" });
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [selectValue, setSelectValue] = useState<{
    value: string;
    label: string;
    subLabel: string;
    icon: ReactElement | null;
  }>({
    value: "",
    label: "",
    subLabel: "",
    icon: null,
  });
  const placeholderVariant: TypoVariant = size === "l" ? "body1" : "body2";
  const valueVariant: TypoVariant =
    size === "l" ? "subtitle1" : size === "m" ? "subtitle2" : "caption1";

  const handleClick = (index: number) => {
    if (onSelect) {
      let item = filteredItems[index];
      for (let i = 0; i < items.length; i++) {
        if (items[i].value === item.value) {
          onSelect(i);
          break;
        }
      }
    }
  };

  const handOpenModal = (description?: boolean) => {
    open(
      <Modal
        title={title}
        onClose={() => {
          close();
        }}
        className="selectModal"
        css={css`
          .ModalContent {
            margin-bottom: ${theme.spacing[500]}px;
            padding-bottom: 0px;
          }
        `}
      >
        <Stack spacing="100">
          {filteredItems.length > 0 ? (
            filteredItems.map((item: any, i: number) => (
              <ListButton
                key={"option_" + id + "_" + i}
                value={item.value}
                onClick={() => {
                  handleClick(i);
                  close();
                }}
              >
                <Stack direction="row" spacing="200" alignItems="center">
                  {item.icon}
                  <Stack justifyContent="center">
                    {item.label && (
                      <Typography
                        variant="subtitle1"
                        color={theme.colors.gray[900]}
                      >
                        {item.label}
                      </Typography>
                    )}
                    {description && item.subLabel && (
                      <Typography
                        variant="caption1"
                        color={theme.colors.gray[500]}
                      >
                        {item.subLabel}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </ListButton>
            ))
          ) : (
            <Typography variant="body2" color={theme.colors.gray[900]}>
              You don’t have any activity history yet.
            </Typography>
          )}
        </Stack>
      </Modal>
    );
  };

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    if (selectedIndex === -1) {
      setSelectValue({
        value: "",
        label: placeholder || "",
        subLabel: "",
        icon: null,
      });
    }
    const selectedItem = items[selectedIndex];
    if (selectedItem === undefined) {
      return;
    }

    setSelectValue({
      ...selectValue,
      value: selectedItem.value,
      label: selectedItem.label,
      subLabel: selectedItem.subLabel || "",
      icon: selectedItem.icon || null,
    });
  }, [selectedIndex, items, placeholder]);

  useEffect(() => {
    if (searchText === "") {
      setFilteredItems(items);
      return;
    }

    let searchLabel = (searchText as string).toLowerCase();

    setFilteredItems(
      items.filter((item: any) => {
        return item.label.toLowerCase().indexOf(searchLabel) > -1;
      })
    );
  }, [open, searchText]);

  return (
    <div
      className={getJoinedClassName("SelectWrapper", {
        className,
      })}
      onClick={disabled !== true ? () => handOpenModal(description) : undefined}
      data-testid={testid}
    >
      {labelText && (
        <Typography
          variant="caption1"
          color={theme.colors.text.low}
          className="SelectLabel"
        >
          {labelText || ""}
        </Typography>
      )}
      <StyledSelectContainerStack
        className="Select"
        theme={theme}
        error={error}
        selected={isOpen}
        size={size}
        disabled={disabled}
        direction="row"
        alignItems="center"
        spacing="200"
        isValue={selectValue.value !== "" && selectValue.label !== ""}
      >
        {selectValue.icon && (
          <Fragment>
            {cloneElement(selectValue.icon as ReactElement, {
              fontSize: size === "l" ? 28 : size === "m" ? 24 : 20,
            })}
          </Fragment>
        )}
        <StyledLabelDiv>
          {selectValue.label && (
            <Typography
              variant={selectedIndex === -1 ? placeholderVariant : valueVariant}
              color={
                selectedIndex === -1
                  ? theme.colors.text.verylow
                  : theme.colors.text.main
              }
              ellipsis={1}
            >
              {selectValue.label}
            </Typography>
          )}
          {description && selectedIndex !== -1 && (
            <Typography
              variant={size === "s" ? "overline" : "caption1"}
              color={theme.colors.text.low}
              ellipsis={1}
            >
              {selectValue.subLabel || ""}
            </Typography>
          )}
        </StyledLabelDiv>
        <Spacer
          flexGrow={1}
          css={css`
            margin: 0;
          `}
        />
        <ChevronDownFilledIcon color={theme.colors.text.main} fontSize={24} />
        <StyledHiddenInput
          id={id}
          name={id}
          type="text"
          defaultValue={selectValue.value || ""}
        />
      </StyledSelectContainerStack>
      {helpText && (
        <Typography
          variant="caption1"
          color={error ? theme.colors.system.error.main : theme.colors.text.low}
          className="SelectHelperText"
        >
          {helpText || ""}
        </Typography>
      )}
    </div>
  );
};

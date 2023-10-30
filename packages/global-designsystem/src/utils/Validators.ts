import BigNumber from "bignumber.js";

export const maxString = (value: string, max: number, message: string) => {
  return value.length > max
    ? { isValid: false, message }
    : { isValid: true, message: "" };
};

export const compareNumber = (
  value: number,
  compare: "eq" | "lt" | "gt" | "lte" | "gte",
  control: number
) => {
  const returnValue = new BigNumber(value);
  let result = { isValid: true, message: "" };

  if (returnValue.isNaN()) {
    return {
      isValid: false,
      message: "It's not a number",
    };
  }

  switch (compare) {
    case "eq": {
      if (!returnValue.isEqualTo(control)) {
        result = {
          isValid: false,
          message: `The number should be equal to ${control}.`,
        };
      }
      break;
    }
    case "lt": {
      if (!returnValue.isLessThan(control)) {
        result = {
          isValid: false,
          message: `The number should be less than ${control}.`,
        };
      }
      break;
    }
    case "gt": {
      if (!returnValue.isGreaterThan(control)) {
        result = {
          isValid: false,
          message: `The number should be greater than ${control}.`,
        };
      }
      break;
    }
    case "lte": {
      if (!returnValue.isLessThanOrEqualTo(control)) {
        result = {
          isValid: false,
          message: `The number should be less than or equal to ${control}`,
        };
      }
      break;
    }
    case "gte": {
      if (!returnValue.isGreaterThanOrEqualTo(control)) {
        result = {
          isValid: false,
          message: `The number should be greater than or equal to ${control}`,
        };
      }
    }
  }

  return result;
};

export const validateEmail = (value: string) => {
  const isValid =
    /(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}/gi.test(
      value
    );
  return isValid
    ? { isValid: true, message: "" }
    : { isValid: false, message: "Please enter a proper email address." };
};

export const validatedInteger = (value: string) => {
  const validate = new BigNumber(value.match(/[\d]|[.]/g)?.join("") || "");
  return validate.isInteger()
    ? { isValid: true, message: "" }
    : { isValid: false, message: "This is not a integer." };
};

export const validateNumberInputEvent = (event: KeyboardEvent) => {
  const key = event.key;

  return /\d/.test(key) || key === "Backspace" || key === "Delete"
    ? {
        isValid: true,
        message: "",
      }
    : {
        isValid: false,
        message: "not a number",
      };
};

export const isPeriodKeyCode = (event: KeyboardEvent) => {
  const key = event.key;
  return key === "."
    ? { isValid: true, message: "" }
    : {
        isValid: false,
        message: "not period",
      };
};

export const validateBackSpaceInputEvent = (event: KeyboardEvent) => {
  const key = event.key;

  return key === "Backspace" || key === "Delete"
    ? {
        isValid: true,
        message: "",
      }
    : {
        isValid: false,
        message: "not backspace",
      };
};

export const validateFullName = (value: string) => {
  if (value === "") {
    return {
      isValid: false,
      message: "This field cannot be empty.",
    };
  }

  const splitValue = value.split(" ");

  if (splitValue.length === 1) {
    return {
      isValid: false,
      message: "Last name cannot be empty.",
    };
  }

  if (splitValue[0] === "") {
    return {
      isValid: false,
      message: "Name cannot be empty.",
    };
  }

  return {
    isValid: true,
    message: "",
  };
};

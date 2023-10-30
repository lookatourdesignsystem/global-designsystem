import { BreakpointKey } from "../types";
export interface BreakpointOptions {
  keys: BreakpointKey[];
  values: {
    [key in BreakpointKey]: number;
  };
  up: (key: BreakpointKey) => string;
  down: (key: BreakpointKey) => string;
  between: (start: BreakpointKey, end: BreakpointKey) => string;
  only: (key: BreakpointKey) => string;
  not: (key: BreakpointKey) => string;
  currentKey: () => BreakpointKey;
  calc: {
    current: () => BreakpointKey;
    up: (key: BreakpointKey) => boolean;
    down: (key: BreakpointKey) => boolean;
    between: (start: BreakpointKey, end: BreakpointKey) => boolean;
    only: (key: BreakpointKey) => boolean;
    not: (key: BreakpointKey) => boolean;
  };
  unit: string;
}

export const breakpointKeys = ["xs", "sm", "md", "lg", "xl"];

export type BreakpointKeyOptions = {
  values: {
    [key in BreakpointKey]: number;
  };
  unit: string;
};

export const createBreakpoints = (breakpoints: {
  values: {
    [key in BreakpointKey]: number;
  };
  unit?: string;
  step?: number;
}): BreakpointOptions => {
  const {
    values = {
      xs: 0, // phone
      sm: 600, // tablet
      md: 1024, // small laptop
      lg: 1440, // desktop
      xl: 1920, // large screen
    },
    unit = "px",
    step = 5,
    ...other
  } = breakpoints;

  const keys = Object.keys(values) as BreakpointKey[];

  // https://hoya-kim.github.io/2021/10/02/globalThis/
  const getGlobal = () => {
    if (typeof globalThis !== "undefined") return globalThis;
    // eslint-disable-next-line no-restricted-globals
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof global !== "undefined") return global;
    throw new Error("unable to locate global object");
  };

  const globalObject = getGlobal();

  function up(key: BreakpointKey) {
    const value = typeof values[key] === "number" ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key: BreakpointKey) {
    const value = values[key];
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start: BreakpointKey, end: BreakpointKey) {
    const endIndex = keys.indexOf(end);

    return (
      `@media (min-width:${values[start]}${unit}) and ` +
      `(max-width:${values[keys[endIndex]] - step / 100}${unit})`
    );
  }

  function only(key: BreakpointKey) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  }

  function not(key: BreakpointKey) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }

    return between(key, keys[keys.indexOf(key) + 1]).replace(
      "@media",
      "@media not all and"
    );
  }

  function currentKey() {
    if (globalObject.window === undefined) {
      throw new Error("window is not defined");
    }

    const innerWidth = globalObject.window.innerWidth;

    for (let key of keys) {
      const keyIndex = keys.indexOf(key);
      // 불필요하게 호출될때가 많아서 개선해야함
      if (values[keys[keyIndex + 1]] === undefined) {
        return key;
      }

      if (innerWidth < values[keys[keyIndex + 1]]) {
        return key;
      }
    }

    throw new Error("size error");
  }

  const calc = {
    current: () => {
      if (globalObject.window === undefined) {
        throw new Error("window is not defined");
      }

      const innerWidth = globalObject.window.innerWidth;

      for (let key of keys) {
        const keyIndex = keys.indexOf(key);
        // 불필요하게 호출될때가 많아서 개선해야함
        if (values[keys[keyIndex + 1]] === undefined) {
          return key;
        }

        if (innerWidth < values[keys[keyIndex + 1]]) {
          return key;
        }
      }

      throw new Error("size error");
    },
    up: (key: BreakpointKey) => {
      if (globalObject.window === undefined) {
        throw new Error("window is not defined");
      }

      const innerWidth = globalObject.window.innerWidth;
      const keyValue = values[key];

      return keyValue <= innerWidth;
    },
    down: (key: BreakpointKey) => {
      if (globalObject.window === undefined) {
        throw new Error("window is not defined");
      }

      const innerWidth = globalObject.window.innerWidth;
      const keyValue = values[key];

      return keyValue > innerWidth;
    },
    between: (start: BreakpointKey, end: BreakpointKey) => {
      if (globalObject.window === undefined) {
        throw new Error("window is not defined");
      }

      const innerWidth = globalObject.window.innerWidth;
      const startValue = values[start];
      const endKeyIndex = keys.indexOf(end);
      const endValue = values[keys[endKeyIndex + 1]];

      return innerWidth >= startValue && innerWidth < endValue;
    },
    only: (key: BreakpointKey) => {
      if (globalObject.window === undefined) {
        throw new Error("window is not defined");
      }

      const innerWidth = globalObject.window.innerWidth;
      const startValue = values[key];
      const endKeyIndex = keys.indexOf(key);
      const endValue = values[keys[endKeyIndex + 1]];
      if (endValue === undefined) {
        return innerWidth >= startValue;
      }
      return innerWidth >= startValue && innerWidth < endValue;
    },
    not: (key: BreakpointKey) => {
      if (globalObject.window === undefined) {
        throw new Error("window is not defined");
      }

      const innerWidth = globalObject.window.innerWidth;
      const startValue = values[key];
      const endKeyIndex = keys.indexOf(key);
      const endValue = values[keys[endKeyIndex + 1]];

      return innerWidth < startValue || innerWidth >= endValue;
    },
  };

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    not,
    currentKey,
    calc,
    unit,
    ...other,
  };
};

import {
  ChangeEvent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface ValidateResult {
  isValid: boolean;
  message: string;
}

export const useSerialField = (options?: {
  validate?: (value: string) => ValidateResult;
}) => {
  const [value, setValue] = useState<string>("");
  const isValid = useRef<boolean>(true);
  const errorText = useRef<string>("");

  const onChangeInput = useCallback(
    (value: string) => {
      const targetValue = value;

      const validate = options?.validate;
      if (validate) {
        const result = validate(targetValue);
        isValid.current = result.isValid;
        errorText.current = result.message;
      }

      setValue(targetValue);
    },
    [options?.validate]
  );

  return [value, onChangeInput, isValid.current, errorText.current] as const;
};

export function useTextField(options?: {
  initialValue?: string;
  validate?: (value: string) => ValidateResult;
  format?: (value: string) => string;
}) {
  const { initialValue } = options || {};
  const [value, setValue] = useState<string>(initialValue || "");
  const isValid = useRef<boolean>(true);
  const errorText = useRef<string>("");

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement> | string) => {
      const targetValue = typeof e === "string" ? e : e.target.value || "";

      const format = options?.format;
      let formattedValue = String(targetValue);
      if (format && targetValue !== "") {
        formattedValue = format(String(targetValue));
      }

      const validate = options?.validate;
      if (validate) {
        const result = validate(formattedValue);
        isValid.current = result.isValid;
        errorText.current = result.message;
      }

      setValue(formattedValue);
    },
    [options?.format, options?.validate]
  );

  return [value, onChangeInput, isValid.current, errorText.current] as const;
}

export function useNumberField(options?: {
  initialValue?: string;
  validate?: (value: number) => ValidateResult; // number만 validate으로 취급
  format?: (value: string) => string;
}) {
  const { initialValue } = options || {};
  const [value, setValue] = useState<string>(initialValue || "");
  const isValid = useRef<boolean>(true);
  const errorText = useRef<string>("");

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement> | number) => {
      const targetValue =
        typeof e === "number"
          ? e
          : e.target.value.replace(/[^0-9.]/g, "") || "";

      if (targetValue !== "." && isNaN(+targetValue)) {
        return;
      }

      const format = options?.format;

      let formattedValue = targetValue;

      if (targetValue === ".") {
        formattedValue = "0";
      } else if (format && targetValue !== "") {
        formattedValue = format(String(targetValue));
      }

      let underDecimal = String(targetValue).split(".")[1];
      let emptyDecimal = underDecimal === "" ? "." : "";
      formattedValue = formattedValue + emptyDecimal;

      const validate = options?.validate;
      if (validate) {
        const numValue = Number(formattedValue.replace(/[^0-9.]/g, ""));
        if (isNaN(numValue)) {
          throw new Error("invalid value");
        }
        const result = validate(numValue);
        isValid.current = result.isValid;
        errorText.current = result.message;
      }

      setValue(formattedValue);
    },
    [options?.format, options?.validate]
  );

  return [value, onChangeInput, isValid.current, errorText.current] as const;
}

export const useTextarea = (options?: {
  initialValue?: string;
  validate?: (value: string) => ValidateResult;
}) => {
  const { initialValue } = options || {};
  const textAreaRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(initialValue || "");
  const isValid = useRef<boolean>(true);
  const errorText = useRef<string>("");

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLDivElement> | string) => {
      const targetValue =
        typeof e === "string" ? e : (e.target.innerHTML as string) || "";
      const validate = options?.validate;

      if (validate) {
        const result = validate(targetValue);
        isValid.current = result.isValid;
        errorText.current = result.message;
      }
      setValue(targetValue);
      if (typeof e === "string" && textAreaRef.current) {
        textAreaRef.current.innerHTML = targetValue;
      }
    },
    [options?.validate]
  );

  const setInitialValue = useCallback((newContent: string) => {
    if (textAreaRef.current) {
      textAreaRef.current.innerHTML = newContent;
      setValue(newContent);
    }
  }, []);

  useEffect(() => {
    setInitialValue(initialValue || "");
  }, [initialValue, setInitialValue]);

  return [
    textAreaRef,
    value,
    onChangeInput,
    isValid.current,
    errorText.current,
  ] as const;
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return [isOpen, open, close] as const;
};

export const useIntersection = (
  element: RefObject<HTMLElement>,
  options?: {
    threshold?: number | number[];
    rootMargin?: string;
    root?: RefObject<HTMLElement>;
  },
  lazy?: boolean | undefined,
  keepObserving?: boolean | undefined
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const elementRef = element.current;
    if (lazy === false) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (keepObserving === true) {
          setIsIntersecting(entry.isIntersecting);
        } else {
          if (!entry.isIntersecting) return;
          setIsIntersecting(true);
          observer.unobserve(elementRef as HTMLElement);
        }
      },
      {
        root: options?.root?.current,
        threshold: options?.threshold,
        rootMargin: options?.rootMargin,
      }
    );

    element.current && observer.observe(elementRef as HTMLElement);
  }, [element, options, lazy]);

  return isIntersecting;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export const useScrollIntoView = ({
  target,
  behavior = "smooth",
  vertical = "start",
  horizontal = "nearest",
  disabled = false,
}: {
  target: string;
  behavior?: ScrollBehavior;
  vertical?: ScrollLogicalPosition;
  horizontal?: ScrollLogicalPosition;
  disabled?: boolean;
}) => {
  const scrollableRef = useRef<HTMLDivElement | null>(null);
  const [shouldScrollTo, setShouldScrollTo] = useState(false);

  useEffect(() => {
    if (disabled) {
      return;
    }
    if (scrollableRef.current && shouldScrollTo) {
      const selectedTab = scrollableRef.current.querySelector(target);
      selectedTab?.scrollIntoView({
        behavior: behavior,
        block: vertical,
        inline: horizontal,
      });

      setShouldScrollTo(false);
    }
  }, [shouldScrollTo]);

  return [scrollableRef, setShouldScrollTo] as const;
};

export const useIsMount = () => {
  let isMount = useRef(false);

  useEffect(() => {
    isMount.current = true;

    return () => {
      isMount.current = false;
    };
  }, []);

  return isMount;
};

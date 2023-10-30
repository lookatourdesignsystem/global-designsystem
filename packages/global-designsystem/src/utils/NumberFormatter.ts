import BigNumber from "bignumber.js";

export default class NumberFormatter {
  public static format(
    value: string | number,
    options: {
      prefix?: string;
      decimal?: number | "none";
      toFixed?: number | "none" | "decimal" | "decimal_auto"; // decimal: decimal 만큼 fixed, decimal_auto: decimal까지 fixed
      roundingMode?: "floor" | "half_up" | "ceil";
      hasComma?: boolean;
      unit?: string;
      unitSpace?: boolean;
      sign?: boolean;
    } = {}
  ): string {
    // 우선은 value를 BN으로 만들어서 관리한다.
    let tempBN = this.getTempBN(value);

    if (tempBN.isNaN() === true) {
      // throw Error("invalid value");
    }

    ////////////////////
    // prefix
    const prefix: string = options.prefix || "";

    // 소수점 자리
    const decimal: number | "none" = options.decimal || "none";

    // 소수점 고정 true인 경우
    const toFixed: number | "none" | "decimal" | "decimal_auto" =
      options.toFixed || "none";

    // 내림, 반올림, 올림
    const roundingMode: "floor" | "half_up" | "ceil" =
      options.roundingMode || "floor"; // floor, round, ceil
    ////////////////////

    // 쉼표 여부
    const hasComma: boolean = options.hasComma || false;

    // 부호 표시 여부
    const sign: boolean = options.sign || false;

    // 단위
    const unit: string = options.unit || "";
    const unitSpace: boolean = options.unitSpace || false;

    // 소수점 아래 em tag 여부
    // const hasEmTag: boolean = options.hasEmTag;
    /////////////////////

    // 우선 value를 정하기

    tempBN = this.setDecimal(tempBN, {
      decimal,
      roundingMode,
    });

    ///////////////////////

    // 정해진 value에 string을 첨가

    let tempStr = this.setFixed(tempBN, {
      decimal,
      toFixed,
    });

    if (hasComma === true) {
      tempStr = this.setComma(tempStr);
    }

    if (sign === true) {
      tempStr = this.setSign(tempStr, {
        sign: tempBN.isGreaterThan(0) ? `+` : tempBN.isLessThan(0) ? `-` : ``,
      });
    }

    if (unit) {
      tempStr = this.setUnit(tempStr, {
        unit,
        unitSpace,
      });
    }

    if (prefix) {
      tempStr = this.setPrefix(tempStr, {
        prefix,
      });
    }

    return tempStr;
  }

  private static setFixed(
    value: BigNumber,
    options: {
      decimal: number | "none";
      toFixed: number | "none" | "decimal" | "decimal_auto";
    }
  ) {
    const toFixed = options.toFixed;
    const decimal = options.decimal;

    let tempStr = value.toString();
    if (toFixed === "decimal") {
      if (decimal === "none") {
        throw new Error("error");
      }

      tempStr = value.toFixed(decimal);
    } else if (typeof toFixed === "number") {
      tempStr = value.toFixed(toFixed);
    }

    let after = String(value).split(".")[1];
    if (toFixed === "decimal_auto") {
      if (decimal === "none") {
        throw new Error("error");
      }

      if (after !== undefined) {
        tempStr = value.toFixed(
          after.length < decimal ? after.length : decimal
        );
      }
    } else if (toFixed === "none") {
      if (after !== undefined) {
        tempStr = value.toFixed(after.length);
      }
    }

    return tempStr;
  }

  private static setSign(
    value: string,
    options: {
      sign: "+" | "-" | "";
    }
  ): string {
    return `${options.sign}${value}`;
  }

  private static setPrefix(
    value: string,
    options: {
      prefix: string;
    }
  ): string {
    return `${options.prefix}${value}`;
  }

  private static setUnit(
    value: string,
    options: {
      unitSpace: boolean;
      unit: string;
    }
  ): string {
    return `${value}${options.unitSpace ? " " : ""}${options.unit}`;
  }

  private static setDecimal(
    value: BigNumber,
    options: {
      decimal: number | "none";
      roundingMode: "floor" | "half_up" | "ceil";
    }
  ): BigNumber {
    if (options.decimal === "none") {
      return value;
    }

    const bnRoundMode =
      options.roundingMode === "floor"
        ? BigNumber.ROUND_FLOOR
        : options.roundingMode === "ceil"
        ? BigNumber.ROUND_CEIL
        : BigNumber.ROUND_HALF_UP;

    return value.dp(options.decimal, bnRoundMode);
  }

  public static setComma(value: string): string {
    const reg = /(^[+-]?\d+)(\d{3})/;
    while (reg.test(value)) {
      value = value.replace(reg, "$1,$2");
    }
    return value;
  }

  private static getTempBN(value: string | number): BigNumber {
    if (typeof value === "number") {
      BigNumber.config({ EXPONENTIAL_AT: [-200, 200] });
      return new BigNumber(value);
    }

    if (typeof value === "string") {
      const returnValue = this.removeComma(value);
      BigNumber.config({ EXPONENTIAL_AT: [-200, 200] });
      return new BigNumber(returnValue);
    }

    throw Error("type error");
  }

  private static getTemp(value: string | number): string {
    if (typeof value === "number") {
      return String(value);
    }

    if (typeof value === "string") {
      return this.removeComma(value);
    }

    throw Error("type error");
  }

  public static removeComma(value: string): string {
    return value.replace(/,/gi, "");
  }

  public static formatUSD(
    value: number | string,
    options: {
      prefix?: string;
      showSign?: boolean;
      unit?: string;
      unitSpace?: boolean;
      max?: number;
    } = {}
  ) {
    const defaultOptions = {
      hasComma: true,
      decimal: 2,
      max: 100000000000,
      unitSpace: true,
    };
    return this.format(value, { ...defaultOptions, ...options });
  }

  public static formatCreditCardNumber(value: string) {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,20}/g);
    const match = (matches && matches[0]) || "";
    let parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  }

  public static formatToKoreanStyleNumber(value: number): string {
    // const count = 0;
    const units = ["", "만", "억", "조"];
    const results: number[] = [];
    if (value === 0) {
      return "0";
    }

    while (value >= 1) {
      // 4자리가 넘어서는 경우에 하나씩 자른다.
      results.push(value % 10000);
      value = Math.floor(value / 10000);
    }

    // 상위 두개만 쓴다
    const unit1 = results.length - 1;
    let result = results[unit1] + units[unit1];
    // 첫째 자리가 2자리이고 두번째가 존재하면 한구간을 더 쓴다
    // ex) 11억 3천만 (백단위는 자른다)
    const unit2 = results.length - 2;
    if (unit2 >= 0) {
      if (results[unit2] >= 1000) {
        result += " " + Math.floor(results[unit2] / 1000) + "천" + units[unit2];
      } else if (results[unit2] >= 100) {
        result += " " + Math.floor(results[unit2] / 100) + "백" + units[unit2];
      } else if (results[unit2] >= 10) {
        result += " " + Math.floor(results[unit2] / 10) + "십" + units[unit2];
      }
    }

    return result;
  }
}

/**
 * System Scrollbar Width check.
 * @param cacheEnabled
 * @returns {number}
 */
let scrollbarWidth: boolean | number = false;

export const getScrollbarWidth = (cacheEnabled = true) => {
  if (cacheEnabled && scrollbarWidth !== false) return scrollbarWidth;
  /* istanbul ignore else */
  if (typeof document !== "undefined") {
    const div = document.createElement("div");

    Object.assign(div.style, {
      width: "100px",
      height: "100px",
      position: "absolute",
      top: "-9999px",
      overflow: "scroll",
      userSelect: "none",
      MsOverflowStyle: "scrollbar",
    });

    document.body.appendChild(div);
    scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  } else {
    scrollbarWidth = 0;
  }
  return scrollbarWidth || 0;
};

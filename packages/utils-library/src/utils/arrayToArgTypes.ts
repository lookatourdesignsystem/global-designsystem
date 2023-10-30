/**
 * string array to string for create types in storybook
 * @param array
 * @returns {string}
 */
export const arrayToArgTypes = (array: (string | number)[]) => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      result += array[i] + (i !== array.length - 1 ? " " : "");
    } else {
      result += `"${array[i]}"` + (i !== array.length - 1 ? " " : "");
    }
  }

  return result.replaceAll(" ", " | ");
};

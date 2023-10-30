export const getJoinedClassName = (
  defaultClassName: string,
  params: {
    className?: string;
    classNames?: string[];
  }
) => {
  let classNames = [defaultClassName];

  if (params.className) {
    classNames.push(params.className);
  }
  if (params.classNames) {
    classNames.concat(params.classNames);
  }

  return classNames.join(" ");
};

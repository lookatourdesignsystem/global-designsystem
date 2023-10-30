/**
 * Turns an old-fashioned css hex color value into a rgb color value.
 * @param hex hex value ('#123456', '#123')
 * @return An rgb value. ('rgb(11, 22, 33)'. 'rgba(11, 22, 33)')
 */
export const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || [
    "0",
    "0",
    "0",
  ];
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)},${parseInt(
    result[3],
    16
  )}`;
};

import tinycolor from "tinycolor2";

const isLightColor = (color: string) => {
  const tc = tinycolor(color);
  return tc.isLight();
};

export const getBorderColor = (bgColor: string) => {
  return isLightColor(bgColor) ? "black" : "white";
};

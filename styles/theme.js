import React from "react";
import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["40em", "52em", "64em"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    ...chakraTheme.fontSizes,
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 600,
  },
  breakpoints,
  icons: {
    ...chakraTheme.icons,
  },
};

export default theme;

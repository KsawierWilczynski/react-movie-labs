import truncate from "lodash/truncate";
import { createTheme } from "@mui/material/styles";

export function excerpt(string) {
  return truncate(string, {    
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}

// https://petertyliu.github.io/mui-theme-builder/
export const theme = createTheme({
  "palette": {
    "primary": {
      "main": "#57ab3b"
    },
    "secondary": {
      "main": "#2e856f"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#ffffff"
    }
  },
  "typography": {
    "fontFamily": "Tahoma",
    "fontWeightLight": 100,
    "fontWeightRegular": 200,
    "fontWeightMedium": 300,
    "fontWeightBold": 500
  },
  "spacing": 12,
  "shape": {
    "borderRadius": 14
  }
})
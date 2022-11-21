import { createTheme } from "@mui/material/styles";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["PT Sans", "sans-serif", "Poppins"],
  },
});

const Theme = createTheme({
  palette: {
    background: {
      paper: "#FFFFFF",
      default: "#FAFAFA",
    },
    primary: {
      main: "#3c9ae2",
    },
  },
});

export default Theme;

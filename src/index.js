import React from "react";
import { ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import theme from "./styles/theme";
import { globalStyles } from "./styles/styles";
import Slider from "./Slider";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Slider />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));

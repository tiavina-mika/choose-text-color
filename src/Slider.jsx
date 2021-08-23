/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Slider as AntdSlider, Layout } from "antd";
import { useState } from "react";
import Footer from "./components/Footer";
import Typography from "./components/Typography";
import theme from "./styles/theme";

const SLIDER = {
  width: 340,
  height: 14,
  borderRadius: 16
};

const formatter = (value) => {
  return `${value}px`;
};

const classes = {
  sliderContainer: {},
  layoutContent: (theme) => ({
    minHeight: "85vh",
    margin: 0,
    background: "#fff",
    padding: theme.spacing(3)
  }),
  slider: {
    width: SLIDER.width,
    "&:hover .ant-slider-track": {
      background: "#F0F1FB"
    },
    "& .ant-slider-track": {
      width: SLIDER.width,
      height: SLIDER.height,
      background: "#F0F1FB",
      borderRadius: SLIDER.borderRadius
    },
    "& .ant-slider-rail": {
      width: SLIDER.width,
      height: SLIDER.height,
      borderRadius: SLIDER.borderRadius
    }
  },
  rail: {
    background: theme.colors.primary,
    marginTop: -40 / 3,
    border: "none",
    height: 40,
    width: 40
  },
  result: (textSize) => ({
    fontSize: textSize
  })
};

const Slider = () => {
  const [textSize, setTextSize] = useState(22);
  const handleTextSizeChange = (value) => {
    setTextSize(value);
  };

  return (
    <div css={classes.sliderContainer} className="flexCenter">
      <Layout.Content
        css={classes.layoutContent}
        className="flexCenter justifyStart stretchSelf"
      >
        <Typography variant="title">AntDesign slider customization</Typography>
        <Typography>Changer la taille de la police d’écriture</Typography>
        <div className="m-t-25">
          <AntdSlider
            css={classes.slider}
            handleStyle={classes.rail}
            tipFormatter={formatter}
            min={18}
            max={32}
            defaultValue={textSize}
            onChange={handleTextSizeChange}
          />
        </div>
        <div className="m-t-20">
          <span css={classes.result(textSize)}>Here is the result</span>
        </div>
      </Layout.Content>
      <Footer />
    </div>
  );
};

export default Slider;

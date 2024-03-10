import React from "react";
import { Box, Typography, useTheme, Paper } from "@mui/material";
import * as images from "../../assets/assets";
import { useTranslation } from "react-i18next";
import AboutUsComponent from "../AboutUs";
import ImageGallery from "../Home/ImageGallery";
import LogoWallComponent from "../LogoWall";

const IntroductionComponent = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <AboutUsComponent />
      <ImageGallery />
      <LogoWallComponent isLarge={false} />
    </React.Fragment>
  );
};

export default IntroductionComponent;

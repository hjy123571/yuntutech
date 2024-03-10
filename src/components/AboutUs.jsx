import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery, Grid } from "@mui/material";
import * as images from "../assets/assets";
import { useTranslation } from "react-i18next";

const AboutUsComponent = () => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const imageBoxWidth = windowWidth * 0.3625;
  const imageBoxHeight = imageBoxWidth * 1.25;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isNarrowScreen ? "column" : "row",
        alignItems: "center",
        justifyContent: "flex-start",
        px: theme.spacing(11.25),
        pt: theme.spacing(14),
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          width: isNarrowScreen ? "100%" : imageBoxWidth,
          height: isNarrowScreen ? "125vw" : imageBoxHeight,
          flexShrink: 0,
          backgroundImage: `url(${images.about1})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          mb: isNarrowScreen ? theme.spacing(7.25) : 0, // Margin bottom on narrow screens only
        }}
      />

      {/* Text Content Box */}
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: "0",
          maxWidth: isNarrowScreen ? "100%" : "auto",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mx: isNarrowScreen ? 0 : theme.spacing(7.25),
        }}
      >
        <Typography sx={{ fontSize: "3.66rem", color: "black" }}>
          {t("aboutUsTitle")}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: "1.03rem",
            lineHeight: "1.5rem",
            color: "black",
          }}
        >
          {t("aboutIntroductionDetail")}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUsComponent;

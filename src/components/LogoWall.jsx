import * as images from "../assets/assets";
import React, { useState, useEffect } from "react";
import { Box, Grid, useTheme, useMediaQuery, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const LogoWallComponent = ({ isLarge }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [scaleFactor, setScaleFactor] = useState(1);
  const spacing = theme.spacing(27.25);

  const top = isLarge ? theme.spacing(15.25) : theme.spacing(13.5);
  const textAlignment = isLarge ? "center" : "left";

  const logos = [
    {
      imageUrl: images.logo1,
      width: 178,
      height: 175,
    },
    {
      imageUrl: images.logo2,
      width: 178,
      height: 178,
    },
    {
      imageUrl: images.logo3,
      width: 214,
      height: 119,
    },
    {
      imageUrl: images.logo4,
      width: 231,
      height: 109,
    },
  ];

  useEffect(() => {
    // 创建一个函数来更新scaleFactor
    const updateScaleFactor = () => {
      const screenWidth = window.innerWidth;
      const baseScreenWidth = 1920;
      const newScaleFactor =
        screenWidth < baseScreenWidth ? screenWidth / baseScreenWidth : 1;
      setScaleFactor(newScaleFactor);
    };

    updateScaleFactor();

    window.addEventListener("resize", updateScaleFactor);

    return () => {
      window.removeEventListener("resize", updateScaleFactor);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          pt: top,
          px: theme.spacing(11.25),
          display: "flex",
          justifyContent: textAlignment,
          textAlign: textAlignment,
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: isLarge ? "3.66rem" : "1.45rem",
          }}
        >
          {t("logoTitle")}
        </Typography>
      </Box>
      <Box
        sx={{
          py: theme.spacing(6.25),
          px: theme.spacing(6.25),
        }}
      >
        <Grid container justifyContent="space-around" alignItems="center">
          {logos.map((logo, index) => (
            <Grid item xs={3} key={index} style={{ textAlign: "center" }}>
              <Box
                component="img"
                src={logo.imageUrl}
                alt={`Logo ${index + 1}`}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: `${scaleFactor * logo.width}px`,
                  height: `${scaleFactor * logo.height}px`,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default LogoWallComponent;

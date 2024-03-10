import * as images from "../assets/assets";
import React from "react";
import { Box, Grid, useTheme, useMediaQuery, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const LogoWallComponent = ({ isLarge }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("md"));
  const imagePaths = [images.logo1, images.logo2, images.logo3, images.logo4];
  const spacing = theme.spacing(27.25);
  console.log("isLarge: ", isLarge);

  const top = isLarge ? theme.spacing(15.25) : theme.spacing(13.5);
  const textAlignment = isLarge ? "center" : "left";

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
          pt: isLarge ? theme.spacing(11.25) : theme.spacing(6.75),
          pb: theme.spacing(13.25),
          px: theme.spacing(12.25),
          gap: spacing,
        }}
      >
        <Grid container columnSpacing={isNarrowScreen ? 0 : spacing}>
          {imagePaths.map((image, index) => (
            <Grid
              item
              xs={6}
              md={3}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  paddingTop: "calc(100% * (178 /231))",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
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

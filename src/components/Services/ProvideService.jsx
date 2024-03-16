import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as images from "../../assets/assets";

const WeProvideComponent = () => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();
  const serviceImages = [
    images.service1,
    images.service2,
    images.service3,
    images.service4,
    images.service5,
    images.service6,
  ];
  const serviceDesc = [
    t("serviceDesc1"),
    t("serviceDesc2"),
    t("serviceDesc3"),
    t("serviceDesc4"),
    t("serviceDesc5"),
    t("serviceDesc6"),
  ];

  return (
    <Box
      sx={{
        px: "4.6%",
        width: "100%",
      }}
    >
      <Typography
        gutterBottom
        sx={{
          fontSize: "3.66rem",
          textAlign: "center",
        }}
      >
        {t("serviceProvideTitle")}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item sm={10} md={5}>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.69rem", textAlign: "left" }}
          >
            {t("service1")}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.69rem", textAlign: "left" }}
          >
            {t("service2")}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.69rem", textAlign: "left" }}
          >
            {t("service3")}
          </Typography>
        </Grid>
        <Grid item sm={10} md={5}>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.69rem", textAlign: "left" }}
          >
            {t("service4")}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.69rem", textAlign: "left" }}
          >
            {t("service5")}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.69rem", textAlign: "left" }}
          >
            {t("service6")}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          mt: theme.spacing(11.25),
          py: `calc(100vw * 0.032)`,
          px: "3.9%",
          backgroundColor: "#f1f1f1",
          "& > .MuiGrid-item": {
            px: "3.75%",
          },
        }}
      >
        {serviceImages.map((image, index) => (
          <Grid item sm={6} md={4} key={index}>
            <Box
              component="img"
              src={image}
              alt={`image-${index}`}
              sx={{ width: "100%", height: "auto" }}
            />
            <Typography
              display="block"
              sx={{ fontSize: "1.12rem", textAlign: "center" }}
              gutterBottom
            >
              {serviceDesc[index]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeProvideComponent;

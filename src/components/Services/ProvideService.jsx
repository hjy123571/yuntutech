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
        mt: "11rem",
        px: "4.6%",
        // display: "flex",
        // flexDirection: "column",
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

      <Grid container spacing={isNarrowScreen ? 2 : 4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" sx={{ fontSize: "1.69rem" }}>
            {t("service1")}
          </Typography>
          <Typography variant="h4" sx={{ fontSize: "1.69rem" }}>
            {t("service2")}
          </Typography>
          <Typography variant="h4" sx={{ fontSize: "1.69rem" }}>
            {t("service3")}
          </Typography>
        </Grid>
        {!isNarrowScreen && (
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" sx={{ fontSize: "1.69rem" }}>
              {t("service4")}
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "1.69rem" }}>
              {t("service5")}
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "1.69rem" }}>
              {t("service6")}
            </Typography>
          </Grid>
        )}
      </Grid>

      <Grid
        container
        spacing={"3.75%vw"}
        mx={"3.5%vw"}
        sx={{
          backgroundColor: "#f1f1f1",
        }}
      >
        {serviceImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
              {serviceDesc[0]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeProvideComponent;

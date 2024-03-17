import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as images from "../../assets/assets";
import ServiceCircleComponent from "./ServiceCircle";

const ServiceScopesComponent = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const firstScopes = [
    t("serviceDetailTitle1"),
    t("serviceDetailTitle2"),
    t("serviceDetailTitle3"),
    t("serviceDetailTitle4"),
  ];

  const secondScopes = [
    t("serviceDetailTitle5"),
    t("serviceDetailTitle6"),
    t("serviceDetailTitle7"),
    t("serviceDetailTitle8"),
  ];

  return (
    <Box
      sx={{
        position: "relative",
        left: "4.6875%",
        width: "90.625%",
      }}
    >
      <ServiceCircleComponent
        title={t("serviceContent1")}
        subTitle={t("serviceContentSubtitle1")}
        scopes={firstScopes}
        image={images.bg2}
        themeColor={theme.palette.primary.main}
        textColor="#ffffff"
        shouldEmphasizeTitle={true}
      />
      <Box sx={{ height: theme.spacing(7.5) }}></Box>
      <ServiceCircleComponent
        title={t("serviceContent2")}
        subTitle={t("serviceContentSubtitle2")}
        scopes={secondScopes}
        image={images.bg4}
        themeColor="#ffffff"
        textColor="#000000"
        shouldEmphasizeTitle={false}
      />
    </Box>
  );
};

export default ServiceScopesComponent;

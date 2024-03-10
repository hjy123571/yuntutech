import React from "react";
import { Box, Typography, useTheme, Paper } from "@mui/material";
import * as images from "../../assets/assets";
import { useTranslation } from "react-i18next";

const IntroductionTextComponent = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
      <Box sx = {{
        width: "100%",
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: "clear",
        color: theme.palette.text.primary,
        // padding: theme.spacing(6),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
      >
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: theme.spacing(3) }}
        >
          {t("aboutIntroduction")}
        </Typography>
        <Typography variant="subtitle1" gutterBottom whiteSpace={"pre-line"}>
          {t("aboutIntroductionDetail")}
        </Typography>
      </Box>
  );
};

export default IntroductionTextComponent;

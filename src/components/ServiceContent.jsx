import React from "react";
import { Box, Typography, styled, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import theme from "../Theme";

const ServiceRangeContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%", // Set the width to 80% of the page
  margin: "0 auto", // Center the component
  marginBottom: "20px",
});

const Title = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
});

const Line = styled("hr")({
  width: "50%",
  border: "1px solid",
  margin: "0 auto",
  marginBottom: "20px",
  color: theme.palette.primary.main,
});

const CircleRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%", // Each row takes up 100% of the width
  marginTop: "10px",
});

const ColoredCircle = styled(Box)(({ theme, color, overlapright, zIndex }) => ({
  flex: "1",
  width: "18%",
  paddingBottom: "26%",
  borderRadius: "50%",
  shappeOutside: "circle",
  backgroundColor: color,
  position: "relative",
  zIndex: zIndex || 0,
  ...(overlapright == "true" && {
    marginLeft: "-3%",
  }),
}));

const CircleText = styled(Typography)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  textAlign: "center",
});

const ServiceRange = () => {
  const { t } = useTranslation();
  // const theme = useTheme();
  return (
    <ServiceRangeContainer sx={{
      padding: theme.spacing(6)
    }}>
      <Title variant="h2">{t("serviceProvideTitle")}</Title>
      {/* <Line /> */}
      <CircleRow>
        <ColoredCircle color={theme.palette.primary.main}>
          <CircleText variant="body2">{t("serviceDetailTitle1")}</CircleText>
        </ColoredCircle>
        <ColoredCircle
          color={theme.palette.primary.secondary}
          overlapright={"true"}
          zIndex={1}
        >
          <CircleText variant="body2">{t("serviceDetailTitle2")}</CircleText>
        </ColoredCircle>
        <ColoredCircle
          color={theme.palette.primary.main}
          overlapright={"true"}
          zIndex={2}
        >
          <CircleText variant="body2">{t("serviceDetailTitle3")}</CircleText>
        </ColoredCircle>
        <ColoredCircle
          color={theme.palette.primary.secondary}
          overlapright={"true"}
          zIndex={3}
        >
          <CircleText variant="body2">{t("serviceDetailTitle4")}</CircleText>
        </ColoredCircle>
      </CircleRow>
      <CircleRow>
        <ColoredCircle color={theme.palette.primary.secondary}>
          <CircleText variant="body2">{t("serviceDetailTitle5")}</CircleText>
        </ColoredCircle>
        <ColoredCircle
          color={theme.palette.primary.main}
          overlapright={"true"}
          zIndex={1}
        >
          <CircleText variant="body2">{t("serviceDetailTitle6")}</CircleText>
        </ColoredCircle>
        <ColoredCircle
          color={theme.palette.primary.secondary}
          overlapright={"true"}
          zIndex={2}
        >
          <CircleText variant="body2">{t("serviceDetailTitle7")}</CircleText>
        </ColoredCircle>
        <ColoredCircle
          color={theme.palette.primary.main}
          overlapright={"true"}
          zIndex={3}
        >
          <CircleText variant="body2">{t("serviceDetailTitle8")}</CircleText>
        </ColoredCircle>
      </CircleRow>
    </ServiceRangeContainer>
  );
};

export default ServiceRange;

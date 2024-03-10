import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const ProductBannerCard = ({
  isNarrowScreen,
  image,
  title,
  subtitle,
  onClick,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  console.log("isNarrowScreen", isNarrowScreen);
  const paddingTop = `${(801 / 1741) * 100}%`; // (height / width) * 100
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: paddingTop,
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: isNarrowScreen ? "50%" : "33.3%",
          transform: "translateX(-50%)", // Center-align the content box
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          textAlign="left"
          sx={{
            fontSize: "2.49rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h1"
          color="white"
          textAlign="left"
          sx={{
            fontSize: "1.03rem",
            lineHeight: "1.87rem",
            mt: "4.5%",
          }}
        >
          {subtitle}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: "4.5%",
            height: "68px",
            width: "256px",
            borderRadius: "32px",
          }}
          onClick={onClick}
        >
          <Typography
            variant="h1"
            color="white"
            textAlign="center"
            sx={{
              fontSize: "1.22rem",
            }}
          >
            {t("productMore")}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ProductBannerCard;

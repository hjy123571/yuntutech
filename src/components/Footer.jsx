import React from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTranslation } from "react-i18next";

const FooterComponent = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isNotXLScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const iconStyle = {
    fontSize: "1.45rem",
    marginRight: "1.31rem",
  };

  return (
    <Box
      sx={{
        py: "6rem",
        display: "flex",
        justifyContent: "space-between",
        pl: "10%",
        pr: isNotXLScreen ? "10%" : "20",
        bgcolor: "#ededed",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h2" sx={{ fontSize: "1.9375rem" }}>
          {t("footerName")}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: "1.45rem" }}>
          <LocationOnIcon sx={{ ...iconStyle }} />
          <Typography
            sx={{
              fontSize: "0.84rem",
              color: "#333333",
            }}
          >
            {t("footerAddress")}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "0.5rem" }}>
          <EmailIcon sx={{ ...iconStyle }} />
          <Typography
            sx={{
              fontSize: "0.84rem",
              color: "#333333",
            }}
          >
            {t("footerEmail")}
          </Typography>
        </Box>
      </Box>

      {/* Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "1.9375rem" }}>
          {t("footerFollow")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IconButton aria-label="Facebook" size="large">
            <FacebookIcon
              sx={{
                fontSize: "2.11rem",
                color: "#000000",
              }}
            />
          </IconButton>
          <IconButton aria-label="Twitter" size="large">
            <TwitterIcon
              sx={{
                fontSize: "2.11rem",
                color: "#000000",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterComponent;

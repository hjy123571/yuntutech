import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar, { NavTabType } from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceScopes from "../components/Services/ServiceScopes";
import WeProvideComponent from "../components/Services/ProvideService";
import { Box, useTheme } from "@mui/material";
import LogoWallComponent from "../components/LogoWall";

function Service() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar selectedTab={NavTabType.SERVICE_RANGE} />
      <Box sx={{ height: theme.spacing(8.5) }}></Box>
      <Box
        sx={{
          width: "90.8%",
          height: "1pt",
          bgcolor: "#989898",
          margin: "0 auto",
        }}
      />
      <Box
        sx={{
          width: "30%",
          height: "5px",
          bgcolor: theme.palette.primary.main,
          margin: "0 auto",
        }}
      />
      <Box sx={{ height: theme.spacing(9.5) }}></Box>
      <WeProvideComponent />
      <Box sx={{ height: theme.spacing(7.5) }}></Box>
      <ServiceScopes />
      <LogoWallComponent isLarge={false} />
      <Footer />
    </React.Fragment>
  );
}

export default Service;

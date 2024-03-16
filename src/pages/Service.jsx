import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar, { NavTabType } from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceContent from "../components/ServiceContent";
import WeProvideComponent from "../components/Services/ProvideService";

function Service() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar selectedTab={NavTabType.SERVICE_RANGE} />
      <WeProvideComponent />
      <ServiceContent />
      <Footer />
    </React.Fragment>
  );
}

export default Service;

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar, { NavTabType } from "../components/Navbar";
import Footer from "../components/Footer";
import IntroductionComponent from "../components/Introduction";

function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar selectedTab={NavTabType.ABOUT_US} />
      <IntroductionComponent />
      {/* <ContactForm /> */}
      <Footer />
    </React.Fragment>
  );
}

export default About;

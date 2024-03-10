import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar, { NavTabType } from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import LogoWallComponent from "../components/LogoWall";

function Contact() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar selectedTab={NavTabType.CONTACT_US} />
      <ContactForm />
      <LogoWallComponent isLarge={false} />
      <Footer />
    </React.Fragment>
  );
}

export default Contact;

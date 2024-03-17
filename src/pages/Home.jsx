import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar, { NavTabType } from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";
import { Box, useTheme } from "@mui/material";
import * as images from "../assets/assets";
import BannerCarousel from "../components/Home/BannerCarousel";
import HomeProductsComponent from "../components/Home/HomeProductsComponent";
import ImageGallery from "../components/Home/ImageGallery";
import LogoWallComponent from "../components/LogoWall";
import WeProvideComponent from "../components/Services/ProvideService";
import ServiceScopes from "../components/Services/ServiceScopes";
import {
  airCraftsData,
  fanCardsData,
} from "../components/Products/FanProductsData";

function Home() {
  const theme = useTheme();
  const { t } = useTranslation();

  const bannerData = [
    {
      imageUrl: images.HomeBanner1,
      title: t("banner1Title"),
      description: t("banner1Subtitle"),
      textPosition: "left",
    },
    {
      imageUrl: images.HomeBanner2,
      title: t("banner2Title"),
      description: t("banner3Subtitle"),
      textPosition: "left",
    },
    {
      imageUrl: images.HomeBanner3,
      title: t("banner3Title"),
      description: t("banner3Subtitle"),
      textPosition: "right",
    },
  ];
  const homeProductsData = [fanCardsData, airCraftsData];

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar selectedTab={NavTabType.HOME} />
      <BannerCarousel banners={bannerData} />
      <Box
        sx={{
          mt: theme.spacing(21.3),
        }}
      >
        <HomeProductsComponent products={homeProductsData} />
      </Box>
      <Box
        sx={{
          mt: theme.spacing(21.3),
        }}
      >
        <WeProvideComponent />
      </Box>
      <AboutUs />
      <ImageGallery />
      <LogoWallComponent isLarge={true} />
      <ContactForm darkStyle={true} />
      <Footer />
    </React.Fragment>
  );
}

export default Home;

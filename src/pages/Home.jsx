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

  const fanData = [
    {
      key: "fan1",
      image: images.FanBanner60kg,
      title: t("homeProduct1Title"),
      subtitle: t("homeProduct1Subtitle"),
      isLarge: true,
    },
    {
      key: "fan2",
      image: images.FanCard200kg,
      title: t("homeProduct2Title"),
      subtitle: t("homeProduct2Subtitle"),
      isLarge: false,
    },
    {
      key: "fan3",
      image: images.FanCard500kg,
      title: t("homeProduct3Title"),
      subtitle: t("homeProduct3Subtitle"),
      isLarge: false,
    },
    {
      key: "fan4",
      image: images.FanCard1000kg,
      title: t("homeProduct4Title"),
      subtitle: t("homeProduct4Subtitle"),
      isLarge: false,
    },
  ];
  const aircraftData = [
    {
      key: "aircraft1",
      image: images.AircraftCard200kg,
      title: t("homeProduct5Title"),
      subtitle: t("homeProduct5Subtitle"),
      isLarge: true,
    },
    {
      key: "aircraft2",
      image: images.AircraftCard260kg,
      title: t("homeProduct6Title"),
      subtitle: t("homeProduct6Subtitle"),
      isLarge: false,
    },
    {
      key: "aircraft3",
      image: images.AircraftCard1000kg,
      title: t("homeProduct7Title"),
      subtitle: t("homeProduct7Subtitle"),
      isLarge: false,
    },
  ];
  const homeProductsData = [fanData, aircraftData];
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

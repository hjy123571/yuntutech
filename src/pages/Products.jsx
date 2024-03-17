import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar, { NavTabType } from "../components/Navbar";
import Footer from "../components/Footer";
import FanCardList from "../components/Products/FanCardList";
import ProductSeries from "../components/Products/ProductSeries";
import * as images from "../assets/assets";
import LogoWallComponent from "../components/LogoWall";

function Products() {
  const aircrafts = [
    {
      imageUrl: images.Aircraft200kg,
      title: "200kg class",
      description: "Quad ducted fan VTOL UAV",
    },
    {
      imageUrl: images.Aircraft260kg,
      title: "200kg class",
      description: "Quad ducted fan VTOL UAV",
    },
    {
      imageUrl: images.Aircraft1600kg,
      title: "200kg class",
      description: "Quad ducted fan VTOL UAV",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar selectedTab={NavTabType.ELECTRIC_FAN} />
      <FanCardList />
      {/* <ProductSeries products={aircrafts} /> */}
      <LogoWallComponent isLarge={false} />
      <Footer />
    </React.Fragment>
  );
}

export default Products;

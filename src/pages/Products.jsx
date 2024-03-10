import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar, { NavTabType } from '../components/Navbar';
import Footer from '../components/Footer';
import FanCardList from '../components/Products/FanCardList';
import ProductSeries from '../components/Products/ProductSeries';
import * as images from "../assets/assets";

function Products() {
  const fans = [
    {
      imageUrl: images.Fan60kg,
      title: "60kg class",
      description: "Quad ducted fan VTOL UAV"
    },
    {
      imageUrl: images.Fan200kg,
      title: "200kg class",
      description: "Quad ducted fan VTOL UAV"
    },
    {
      imageUrl: images.Fan500kg,
      title: "500kg class",
      description: "Quad ducted fan VTOL UAV"
    },
    {
      imageUrl: images.Fan1000kg,
      title: "1000kg class",
      description: "Quad ducted fan VTOL UAV"
    },
  ]
  const aircrafts = [
    {
      imageUrl: images.Aircraft200kg,
      title: "200kg class",
      description: "Quad ducted fan VTOL UAV"
    },
    {
      imageUrl: images.Aircraft260kg,
      title: "200kg class",
      description: "Quad ducted fan VTOL UAV"
    },
    {
      imageUrl: images.Aircraft1600kg,
      title: "200kg class",
      description: "Quad ducted fan VTOL UAV"
    },
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar selectedTab={NavTabType.ELECTRIC_FAN}/>
      {/* <ProductSeries products={fans} /> */}
      <FanCardList />
      <ProductSeries products={aircrafts} />
      <Footer />
    </React.Fragment>
  );
}

export default Products;
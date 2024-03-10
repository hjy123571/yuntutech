import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar, { NavTabType } from '../components/Navbar';
import Footer from "../components/Footer";
import ProductDetailComponent from "../components/ProductDetail/ProductDetailComponent";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function ProductDetail() {

    const location = useLocation();
    const { data } = location.state;
    const { t } = useTranslation();
  
    return (
      <React.Fragment>
        <CssBaseline />
        <Navbar selectedTab={NavTabType.ELECTRIC_FAN}/>
        <ProductDetailComponent
          imageUrl={data.imageUrl}
          title={data.detailTitle}
          mainParams={[
            { label: t("productDetailMaximumThrust"), value: data.maximumThrust, unit: "kg" },
            { label: t("productDetailBladeDiametr"), value: data.bladeDiamter, unit: "m" },
            { label: t("productDetailTakeoffRateSpeed"), value: data.takeoffSpeed, unit: "rpm" },
            { label: t("productDetailMotorPower"), value: data.motorPower, unit: "KW" },
          ]}
          detailedParams={[
            { label: t("productDetailBladeDiametr"), value: data.bladeDiamter, unit: "m" },
            { label: t("productDetailExitDiameter"), value: data.exitDiameter, unit: "m" },
            { label: t("productDetailDuctChord"), value: data.ductChord, unit: "m" },
            { label: t("productDetailHubDiameter"), value: data.hubDiameter, unit: "m" },
            { label: t("productDetailMaximumThrust"), value: data.maximumThrust, unit: "kg" },
            { label: t("productDetailBladeNUmber"), value: data.bladeNumber, unit: "" },
            { label: t("productDetailStrutNumber"), value: data.stutNumber, unit: "" },
            { label: t("productDetailTakeoffRateSpeed"), value: data.takeoffSpeed, unit: "rpm" },
            { label: t("productDetailCuiseRatedSpeed"), value: data.cruiseSpeed, unit: "rpm" },
            { label: t("productDetailMotorPower"), value: data.motorPower, unit: "KW" },
          ]}
          textContent={"This is a description"}
        />
        <Footer />
      </React.Fragment>
    );
  }
  
  export default ProductDetail;
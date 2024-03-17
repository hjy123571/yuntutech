import React from "react";
import { Stack, useMediaQuery } from "@mui/material";
import FanSpecCard from "./FanSpecCard";
import * as images from "../../assets/assets";
import { useTranslation } from "react-i18next";
import theme from "../../Theme";
import { useNavigate } from "react-router-dom";
import { fanCardsData } from "./FanProductsData";

export default function FanCardList() {
  const { t } = useTranslation();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      spacing={0}
      sx={{
        width: "100%",
      }}
    >
      {fanCardsData.map((data, index) => (
        <FanSpecCard key={index} data={data} />
      ))}
    </Stack>
  );
}

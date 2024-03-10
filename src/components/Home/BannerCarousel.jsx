import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Navigation, Pagination, Autoplay } from "swiper/core";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerCarousel = ({ banners }) => {
  const theme = useTheme();
  const isCompact = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{}}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: `calc(100vw * ${834 / 1920})`,
              backgroundImage: `url(${banner.imageUrl})`,
              backgroundSize: "contain",
              display: "flex",
              flexDirection: "row",
              justifyContent:
                banner.textPosition === "left" ? "flex-start" : "flex-end",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyItems:
                  banner.textPosition === "left" ? "flex-start" : "flex-end",
                justifyContent:
                  banner.textPosition === "left" ? "flex-start" : "flex-end",
                ...(banner.textPosition === "left" && {
                  top: "20%",
                  ml: "5%",
                }),
                ...(banner.textPosition === "right" && {
                  mr: "5%",
                  bottom: "12%",
                }),
                maxWidth: isCompact ? "90%" : "40%",
              }}
            >
              <Typography
                variant="h3"
                color="white"
                gutterBottom
                sx={{
                  fontSize: "2.77rem",
                }}
              >
                {banner.title}
              </Typography>
              <Typography
                variant="h1"
                color="white"
                sx={{
                  fontSize: "0.845rem",
                  lineHeight: "1.12rem",
                }}
              >
                {banner.description}
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerCarousel;

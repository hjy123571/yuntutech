import * as images from "../../assets/assets";
import React, { useState, useEffect } from "react";
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";

const ImageComponent = () => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("md"));
  const imagePaths = [images.gallery1, images.gallery2, images.gallery1];
  const spacing = theme.spacing(3.25);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        pt: theme.spacing(18),
        gap: spacing,
      }}
    >
      <Grid container columnSpacing={isNarrowScreen ? 0 : spacing}>
        {imagePaths.map((image, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                paddingTop: "calc(100% * (428 /623))",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageComponent;

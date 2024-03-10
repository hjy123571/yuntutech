import React from "react";
import { Box, Grid, Typography, CardMedia, useTheme } from "@mui/material";

const SpecificationItem = ({ label, value }) => (
  <Grid item xs={6} sm={3}>
    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
      {label}
    </Typography>
    <Typography variant="body1" color="textPrimary">
      {value}
    </Typography>
  </Grid>
);

const ProductDetailedParameters = ({ imageUrl, title, specs }) => {
  const theme = useTheme();

  const specificationItems = specs.map((spec, index) => (
    <Grid
      item
      xs={6}
      key={index}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="body1" component="div" color="primary">
        {spec.label}
      </Typography>
      <Typography variant="h6" component="div" color="white">
        {spec.value}
      </Typography>
    </Grid>
  ));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "#000",
        color: "#aeaeae",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CardMedia
            component="img"
            image={imageUrl}
            alt="MOTOR REB60"
            sx={{ maxWidth: "100%", maxHeight: 400 }} // Adjust size as needed
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          {specificationItems}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailedParameters;

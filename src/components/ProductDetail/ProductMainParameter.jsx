import React from "react";
import { Box, Grid, Typography, CardMedia, useTheme } from "@mui/material";
import CountUp from "react-countup";

const Parameter = ({ label, value, unit }) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Typography variant="h4" color="primary">
      <CountUp end={value} duration={3} /> {unit}
    </Typography>
    <Typography variant="body2" color="black">
      {label}
    </Typography>
  </Box>
);

const ProductMainParameters = ({ imageUrl, stats }) => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "#fafafa", padding: theme.spacing(6, 0) }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ padding: theme.spacing(0, 6) }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <CardMedia
              component="img"
              image={imageUrl}
              alt="product"
              sx={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center" height="100%">
            <Grid container alignItems="center">
              {stats.map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <Parameter
                    label={stat.label}
                    value={stat.value}
                    unit={stat.unit}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductMainParameters;

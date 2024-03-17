import React, { useState, useEffect } from "react";
import { Paper, Box, Typography, Grid, useTheme } from "@mui/material";

const ServiceCircleComponent = ({
  title,
  subTitle,
  scopes,
  image,
  themeColor,
  textColor,
  shouldEmphasizeTitle,
}) => {
  const theme = useTheme();
  const [circleSize, setCircleSize] = useState(window.innerWidth * 0.2); // 修改这一行

  useEffect(() => {
    const handleResize = () => {
      setCircleSize(window.innerWidth * 0.2);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (!Array.isArray(scopes)) {
    console.error("Expected scopes to be an array but got:", scopes);
    return null;
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: `calc(100vw * ${798 / 1740})`,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: themeColor,
          fontSize: "1.69rem",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant={shouldEmphasizeTitle ? "h3" : "h2"}
        sx={{
          color: themeColor,
          mb: 4,
          fontSize: shouldEmphasizeTitle ? "3rem" : "1.69rem",
        }}
      >
        {subTitle}
      </Typography>
      <Box
        sx={{
          paddingX: "5%",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          {scopes.map((text, index) => (
            <Grid item key={index} sm={6} md={3}>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: "50%",
                  width: circleSize,
                  height: circleSize,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: themeColor,
                  color: textColor,
                  overflow: "hidden",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: textColor,
                    fontSize: "1.22rem",
                    p: 2,
                    maxWidth: "100%",
                  }}
                >
                  {text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceCircleComponent;

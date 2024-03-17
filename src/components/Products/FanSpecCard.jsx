import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const FanSpecCard = ({ data }) => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    // 创建一个函数来更新scaleFactor
    const updateScaleFactor = () => {
      const screenWidth = window.innerWidth;
      const baseScreenWidth = 1920;
      const newScaleFactor =
        screenWidth < baseScreenWidth ? screenWidth / baseScreenWidth : 1;
      setScaleFactor(newScaleFactor);
    };

    updateScaleFactor();

    window.addEventListener("resize", updateScaleFactor);

    return () => {
      window.removeEventListener("resize", updateScaleFactor);
    };
  }, []);

  const handleClickAction = () => {
    navigate("/productDetail", { state: { data } });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: isNarrowScreen ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        marginX: "4.8%",
        backgroundColor: "#ffffff",
        borderBottom: "1pt solid #989898",
        height: isNarrowScreen ? `calc(100vw * 0.725)` : `calc(100vw * 0.3625)`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          width: isNarrowScreen ? "100%" : "50%",
          maxWidth: "none",
          height: "auto",
        }}
      >
        <Box
          component="img"
          src={data.imageUrl}
          alt={data.title}
          onClick={handleClickAction}
          sx={{
            width: scaleFactor * data.imgWidth,
            height: scaleFactor * data.imageHeight,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          width: isNarrowScreen ? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: theme.palette.primary.main,
            fontSize: "3.71rem",
            lineHeight: 1,
          }}
        >
          {data.title}
          <Typography
            component="span"
            variant="h3"
            sx={{
              paddingLeft: "0.5rem",
              color: "#000000",
              fontSize: "2.55rem",
              lineHeight: 1,
            }}
          >
            {t("productTitleClass")}
          </Typography>
        </Typography>
        <Typography
          variant="h3"
          sx={{
            pt: "0.5rem",
            color: "#000000",
            fontSize: "2.55rem",
            lineHeight: 1,
          }}
        >
          {t("productTitleContent")}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            my: `${46 * scaleFactor}px`,
            color: "#000000",
            fontSize: "1.03rem",
          }}
        >
          {data.subTitle}
        </Typography>
        <Button
          variant="contained"
          onClick={handleClickAction}
          // href={data.link}
          sx={{
            width: "33.3%",
            height: "54px",
            borderRadius: "27px",
            backgroundColor: theme.palette.primary.main,
            color: "#ffffff",
            padding: "0",
            textTransform: "none",
            mt: `${(46 * scaleFactor) / 2}px`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // alignContent: "center",
          }}
        >
          <Typography
            variant="h1"
            color="white"
            textAlign="center"
            sx={{
              fontSize: "1.5rem",
            }}
          >
            {t("productMore")}
          </Typography>
        </Button>
      </Box>
    </Paper>
  );
};

export default FanSpecCard;

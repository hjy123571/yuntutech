import React from "react";
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

  const handleClickAction = () => {
    navigate('/productDetail', {state: { data }});
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: isNarrowScreen ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(2),
        marginX: theme.spacing(2),
        gap: theme.spacing(2),
        marginX: theme.spacing(2),
        backgroundColor: "#fafafa"
      }}
    >
      {/* <Link href={data.link} sx={{ width: isNarrowScreen ? "100%" : "50%" }}> */}
        <Box
          component="img"
          src={data.imageUrl}
          alt={data.title}
          onClick={handleClickAction}
          sx={{
            // width: "100%",
            width: isNarrowScreen ? "100%" : "50%",
            height: "auto",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        />
      {/* </Link> */}
      <Box
        sx={{
          width: isNarrowScreen ? "100%" : "50%",
          padding: theme.spacing(1),
          textAlign: "left",
        }}
      >
        <Typography variant="h4">{data.title}</Typography>
        <Typography variant="subtitle1" sx={{ my: 1 }}>
          {data.thrust + " | " + data.diameter + " | " + data.speed + " | " + data.power}
        </Typography>
        <Button
          variant="text"
          endIcon={<ArrowForwardIosIcon />}
          // component={Link}
          onClick={handleClickAction}
          // href={data.link}
          sx={{ 
            paddingLeft: "0"
          }}
        >
          {t("productMore")}
        </Button>
      </Box>
    </Paper>
  );
};

export default FanSpecCard;

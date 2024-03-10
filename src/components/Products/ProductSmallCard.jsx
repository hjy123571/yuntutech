import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  useTheme,
  ButtonBase,
} from "@mui/material";

const ProductSmallCard = ({ image, title, subtitle, isSelected, onClick }) => {
  const theme = useTheme();

  return (
    <ButtonBase
      onClick={onClick}
      style={{ width: "100%", display: "block", textAlign: "initial" }}
      sx={{
        "&:active::after": {
          content: '""',
          display: "block",
          height: "8px",
          backgroundColor: theme.palette.primary.main,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        },
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "auto",
          paddingBottom: "calc(100% * (820 / 550))",
          position: "relative",
          overflow: "hidden", // Ensures nothing spills out
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "&::after": {
            content: '""',
            display: isSelected ? "block" : "none",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "12px",
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        <CardContent
          sx={{
            top: "65%",
            position: "absolute",
            px: "10%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            color="#000000"
            sx={{
              fontSize: "1.5rem",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h1"
            color="#808080"
            pt="7%"
            sx={{
              fontSize: "1.12rem",
            }}
          >
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

export default ProductSmallCard;

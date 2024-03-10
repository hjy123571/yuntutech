import React from "react";
import { Box } from "@mui/material";
import ProductMainParameters from "./ProductMainParameter";
import ProductTextContent from "./ProductTextContent";
import ProductDetailedParameters from "./ProductDetailParameters";
import theme from "../../Theme";

const ProductDetailComponent = ({
  imageUrl,
  title,
  mainParams,
  textContent,
  detailedParams,
}) => {
  return (
    <Box sx={{ paddingX: theme.spacing(6) }}>
      <ProductMainParameters imageUrl={imageUrl} stats={mainParams} />
      <ProductTextContent text={textContent} />
      <ProductDetailedParameters
        imageUrl={imageUrl}
        title={title}
        specs={detailedParams}
      />
    </Box>
  );
};

export default ProductDetailComponent;

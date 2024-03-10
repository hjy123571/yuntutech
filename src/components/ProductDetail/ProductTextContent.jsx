import React from "react";
import { Typography } from "@mui/material";

const ProductTextContent = ({ text }) => {
  return (
    <Typography variant="body1" sx={{ marginTop: 4, marginBottom: 4 }}>
      {text}
    </Typography>
  );
};

export default ProductTextContent;

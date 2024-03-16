import React, { useState } from "react";
import {
  useTheme,
  useMediaQuery,
  Box,
  Tabs,
  Tab,
  Typography,
  Grid,
  ButtonBase,
} from "@mui/material";
import ProductBannerCard from "../Products/ProductBannerCard";
import ProductSmallCard from "../Products/ProductSmallCard";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ProductsComponent = ({ products }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleProductClick = (cardId, data) => {
    setSelectedProduct(cardId);
    navigate("/productDetail", { state: { data } });
  };

  return (
    <Box>
      {/* Top grey line */}
      <Box
        sx={{
          width: "80%",
          height: "1pt",
          bgcolor: "#989898",
          margin: "0 auto",
        }}
      />

      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          sx={{
            ".MuiTabs-indicator": {
              top: 0,
              height: "8px",
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <Tab
            label={
              <Box
                sx={{
                  mt: theme.spacing(3.5),
                  mb: theme.spacing(7),
                }}
              >
                {t("homeFanTab")}
              </Box>
            }
            sx={{
              color: "#000000",
              fontSize: "1.3rem",
              "&.Mui-selected": {
                color: "#000000",
              },
            }}
          />
          <Tab
            label={
              <Box
                sx={{
                  mt: theme.spacing(3.5),
                  mb: theme.spacing(7),
                }}
              >
                {t("homeAircraftTab")}
              </Box>
            }
            sx={{
              color: "#000000",
              fontSize: "1.3rem",
              "&.Mui-selected": {
                color: "#000000",
              },
            }}
          />
        </Tabs>
      </Box>

      {/* Content for Electric Ducted Fan */}
      {selectedTab === 0 && (
        <Box
          sx={{
            px: "4.6%",
          }}
        >
          <ProductBannerCard
            isNarrowScreen={isNarrowScreen || isMiddleScreen}
            image={products[0][0].image}
            title={products[0][0].title}
            subtitle={products[0][0].subtitle}
            onClick={() =>
              handleProductClick(products[0][0].key, products[0][0])
            }
          />
          <Box mt={4.5} />
          <Grid container spacing={isNarrowScreen ? 0 : theme.spacing(5.75)}>
            {products[0].slice(1).map((product, index) => (
              <Grid item xs={12} md={4} key={product.key}>
                <ProductSmallCard
                  image={product.image}
                  title={product.title}
                  subtitle={product.subtitle}
                  isSelected={product.key === selectedProduct}
                  onClick={() => handleProductClick(product.key, product)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Content for Ducted Fan Erivative Aircraft */}
      {selectedTab === 1 && (
        <Box
          sx={{
            px: "4.6%",
          }}
        >
          <Grid container spacing={isNarrowScreen ? 0 : theme.spacing(5.75)}>
            {products[0].slice(1).map((product, index) => (
              <Grid item xs={12} md={4} key={product.key}>
                <ProductSmallCard
                  image={product.image}
                  title={product.title}
                  subtitle={product.subtitle}
                  isSelected={product.key === selectedProduct}
                  onClick={() => handleProductClick(product.key, product)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ProductsComponent;

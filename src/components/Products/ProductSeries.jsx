import React from "react";
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useNavigate } from "react-router-dom";

const ProductImage = ({ imageUrl, title, description}) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleClickAction = () => {
        navigate('/productDetail', {state: { title }});
    };

    return (<Box sx={{
        textAlign: "center",
        position: "relative",
        // pt: theme.spacing(4),
        // pb: theme.spacing(2)
        width: "100%"
    }}>
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          onClick={handleClickAction}
          sx={{
            width: "100%",
            maxWidth: "200px",
            display: "block",
            margin: "auto",
            "&:hover": {
                transform: "scale(1.2)",
              },
          }}
        />
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: theme.spacing(2)
        }}>
            <Box sx={{width: "100%", height: "2px", bgcolor: "black", position: "relative"}}>
            <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateY(-50%)",
            width: theme.spacing(1),
            height: theme.spacing(1),
            bgcolor: "black",
            borderRadius: "50%"
            }} />
            </Box>
        </Box>
        <Box sx={{
            position: "relative",
            mt: theme.spacing(2)
        }}>
            <Typography variant="subtitle1" sx={{fontWeight: "bold"}}>
            {title}
            </Typography>
            <Typography variant="body2">
            {description}
            </Typography>
        </Box>
    </Box>
    );
};

const ProductSeries = ({ products }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            flexGrow: 1,
            bgcolor: "white",
            color: "black",
            py: theme.spacing(4),
            paddingX: theme.spacing(6)
        }}>
            <Typography variant="h4" component="h2" sx={{
                textAlign: "center",
                mb: theme.spacing(4),
                color: "#1f6aa3",
                fontWeight: "bold"
            }}>
                DUCTED FAN DERIVATIVE AIRCRAFT
            </Typography>
            <Grid container justifyContent="center" alignItems="center">
                {products.map((product, index) => (
                    <Grid item xs={12} sm={4} key={index} sx={{
                        // px: theme.spacing(2)
                    }}>
                        <ProductImage imageUrl={product.imageUrl} title={product.title} description={product.description} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductSeries;

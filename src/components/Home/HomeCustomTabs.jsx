import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

const CustomTabs = () => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabProps = (index) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
      style: {
        width: "25%",
        maxWidth: "25%",
        height: 144,
        minHeight: 144,
      },
    };
  };

  const Indicator = ({ color }) => (
    <Box
      sx={{
        backgroundColor: color,
        height: "8px",
        width: "100%",
      }}
    />
  );

  return (
    <>
      <Box
        sx={{
          width: "50%",
          margin: "0 auto",
          height: "1pt",
          backgroundColor: "grey",
        }}
      />
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="Electric Ducted Fan Tabs"
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
        centered
      >
        <Tab label="Electric Ducted Fan" {...tabProps(0)} />
        {value === 0 && <Indicator color="#2b70a2" />}
        <Tab label="Ducted Fan Erivative Aircraft" {...tabProps(1)} />
        {value === 1 && <Indicator color="#2b70a2" />}
      </Tabs>
    </>
  );
};

export default CustomTabs;

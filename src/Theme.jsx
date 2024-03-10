// theme.js
import { createTheme } from "@mui/material";

const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "8px", // 按钮的圆角
      },
      containedPrimary: {
        backgroundColor: "#1f6aa3",
        "&:hover": {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#2870a2", // 设置主题中的主色
      secondary: "#17278a",
    },
    background: {
      paper: "#fafafa",
    },
    // 可以添加其他颜色配置
  },
  typography: {
    fontFamily: "PingFangSC-Regular, Arial, sans-serif",
    h1: {
      fontFamily: "PingFangSC-Light, Arial, sans-serif",
    },
    h2: {
      fontFamily: "PingFangSC-Medium, Arial, sans-serif",
    },
    h3: {
      fontFamily: "PingFangSC-Semibold, Arial, sans-serif",
    },
    navFontSize: "0.825rem",
  },
  spacing: 8, // 间距基准
  tabs: {
    selectedColor: "#ffffff",
    hoverColor: "#1565c0",
  },
});

export default theme;

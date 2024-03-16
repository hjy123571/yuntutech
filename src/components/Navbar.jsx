// Navbar.js
import { styled } from "@mui/system";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Typography,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Menu as MenuIcon } from "@mui/icons-material";
import * as images from "../assets/assets";
import { Link, Route } from "react-router-dom";

export const NavTabType = {
  HOME: "home",
  ELECTRIC_FAN: "electricFan",
  SERVICE_RANGE: "serviceRange",
  ABOUT_US: "aboutUs",
  CONTACT_US: "contactUs",
};

const Navbar = ({ selectedTab }) => {
  const { t, i18n } = useTranslation();
  const [mainMenuAnchorEl, setMainMenuAnchorEl] = useState(null);
  const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = useState(null);
  const isCompact = useMediaQuery("(max-width: 1060px)");
  const theme = useTheme();

  // const StyledAppBar = styled(AppBar)`
  //   background-color: ${theme.palette.primary.main};
  //   height: 0.53%;
  // `;
  const StyledAppBar = styled(AppBar)`
    background-color: ${theme.palette.primary.main};
    height: 102px;
  `;

  const Logo = styled("img")`
    height: 54px;
  `;
  const TabsContainer = styled("div")`
    margin-left: auto;
  `;

  const StyledButton = styled(Button)(({ isSelected }) => ({
    textDecoration: "none",
    fontSize: theme.typography.navFontSize,
    lineHeight: "34px",
    backgroundColor: "transparent",
    // color: isSelected ? "black" : "white",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: "transparent",
      color: "black",
    },
    "&.MuiButton-disableRipple": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    "& + &": {
      marginLeft: "56px", // Add this line to set the space between texts
    },
  }));

  const LanguageMenuButton = styled(Button)(({ theme }) => ({
    fontSize: theme.typography.navFontSize,
    lineHeight: "34px",
    padding: "6px 8px",
    backgroundColor: "transparent",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: "transparent",
      color: "black",
    },
    "&.MuiButton-disableRipple": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  }));

  const CompactContainer = styled("div")`
    margin-left: auto;
  `;

  const StyledToolbar = styled(Toolbar)({
    paddingLeft: "84px !important",
    paddingRight: "84px !important",
    display: "flex",
    alignItems: "center",
    height: "102px",
    // height: "0.53%",
  });

  const StyledTypography = styled(Typography)({
    fontSize: "0.825rem",
  });

  const StyledDivider = styled(Divider)(({ theme }) => ({
    height: "34px",
    width: "1.5px",
    backgroundColor: "white",
    alignSelf: "center",
    margin: "0 42px",
  }));

  const handleMainMenuClick = (event) => {
    setMainMenuAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClick = (event) => {
    setLanguageMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMainMenuAnchorEl(null);
    setLanguageMenuAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <Logo src={images.LogoWhite}></Logo>

        {isCompact ? (
          // 窄窗口时的下拉框
          <>
            <CompactContainer>
              <IconButton
                disableRipple
                edge="end"
                color="inherit"
                onClick={handleMainMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mainMenuAnchorEl}
                keepMounted
                open={Boolean(mainMenuAnchorEl)}
                onClose={handleClose}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <MenuItem
                    disableRipple
                    onClick={handleClose}
                    selected={selectedTab === NavTabType.HOME}
                  >
                    <StyledTypography>{t("home")}</StyledTypography>
                  </MenuItem>
                </Link>
                <Link to="/products" style={{ textDecoration: "none" }}>
                  <MenuItem
                    disableRipple
                    onClick={handleClose}
                    selected={selectedTab === NavTabType.ELECTRIC_FAN}
                  >
                    <StyledTypography>{t("electricFan")}</StyledTypography>
                  </MenuItem>
                </Link>
                <MenuItem
                  disableRipple
                  onClick={handleClose}
                  selected={selectedTab === NavTabType.SERVICE_RANGE}
                >
                  <StyledTypography>{t("serviceRange")}</StyledTypography>
                </MenuItem>
                <MenuItem
                  disableRipple
                  onClick={handleClose}
                  selected={selectedTab === NavTabType.ABOUT_US}
                >
                  <StyledTypography>{t("aboutUs")}</StyledTypography>
                </MenuItem>
                <MenuItem
                  disableRipple
                  onClick={handleClose}
                  selected={selectedTab === NavTabType.CONTACT_US}
                >
                  <StyledTypography>{t("contactUs")}</StyledTypography>
                </MenuItem>
              </Menu>
            </CompactContainer>
          </>
        ) : (
          <TabsContainer>
            {/* 普通窗口大小的按钮 */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <StyledButton
                disableRipple
                color="inherit"
                isSelected={selectedTab === NavTabType.HOME}
              >
                {t("home")}
              </StyledButton>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <StyledButton
                disableRipple
                color="inherit"
                isSelected={selectedTab === NavTabType.ELECTRIC_FAN}
              >
                {t("electricFan")}
              </StyledButton>
            </Link>
            <Link to="/service" style={{ textDecoration: "none" }}>
              <StyledButton
                disableRipple
                color="inherit"
                isSelected={selectedTab === NavTabType.SERVICE_RANGE}
              >
                {t("serviceRange")}
              </StyledButton>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <StyledButton
                disableRipple
                color="inherit"
                isSelected={selectedTab === NavTabType.ABOUT_US}
              >
                {t("aboutUs")}
              </StyledButton>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <StyledButton
                disableRipple
                color="inherit"
                isSelected={selectedTab === NavTabType.CONTACT_US}
              >
                {t("contactUs")}
              </StyledButton>
            </Link>
          </TabsContainer>
        )}
        <StyledDivider orientation="vertical" flexItem />
        {/* 中英文切换按钮 */}
        <LanguageMenuButton
          disableRipple
          color="inherit"
          onClick={handleLanguageMenuClick}
        >
          {i18n.language === "en" ? "English" : "中文"}
        </LanguageMenuButton>
        <Menu
          anchorEl={languageMenuAnchorEl}
          open={Boolean(languageMenuAnchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleLanguageChange("en")}>
            English
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange("zh")}>中文</MenuItem>
        </Menu>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;

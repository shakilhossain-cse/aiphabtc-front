import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "next/link";
import styled from "@emotion/styled";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { useRouter } from "next/router";

const pages = [
  {
    label: "Dashboard",
    uri: "/",
  },
  {
    label: "Community",
    uri: "/community",
  },
  {
    label: "Rewards",
    uri: "/rewards",
  },
  {
    label: "AI Bot",
    uri: "/ai-bot",
  },
  {
    label: "Whitepapers",
    uri: "/whitepapers",
  },
  {
    label: "About Us",
    uri: "/about-us ",
  },
];

const Navbar = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const route = useRouter().pathname;

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const SignInBtn = styled(Box)({
    width: isMediumScreen ? "25%" : "40%",
    padding: "5px",
    color: "#ffffff",
    textAlign: "center",
    border: "1px solid #5D6588",
    borderRadius: 10,
    textTransform: "uppercase",
    cursor: "pointer",
  });

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        paddingY: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", lg: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AIPHABTC
          </Typography>
          {/* small device menu item */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              {pages.map((item, index) => (
                <Link
                  href={item.uri}
                  key={index}
                  style={{ textDecoration: "none" }}
                  onClick={handleCloseNavMenu}
                >
                  {route === item.uri ? (
                    <LinkActiveItem> {item.label}</LinkActiveItem>
                  ) : (
                    <LinkGridItem item xs>
                      {item.label}
                    </LinkGridItem>
                  )}
                </Link>
              ))}
            </Menu>
          </Box>

          {/* small device logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", lg: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AIPHABTC
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
            }}
          >
            {pages.map((item, index) => (
              <Link
                href={item.uri}
                key={index}
                style={{ textDecoration: "none" }}
              >
                {route === item.uri ? (
                  <LinkActiveItem> {item.label}</LinkActiveItem>
                ) : (
                  <LinkGridItem item xs>
                    {item.label}
                  </LinkGridItem>
                )}
              </Link>
            ))}
          </Box>

          <Box
            sx={{ display: "flex", flexGrow: 0, gap: 2, alignItems: "center" }}
          >
            <SearchContainer>
              <SearchBar />
            </SearchContainer>
            <SignInBtn>
              <Typography>Sign in</Typography>
            </SignInBtn>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

const LinkGridItem = styled(Grid)({
  color: "#5D6588",
  textAlign: "start",
  fontSize: 18,
  marginRight: 15,
  textTransform: "capitalize",
  padding: "5px 10px",
});

const LinkActiveItem = styled(Grid)({
  color: "#ffff",
  textAlign: "start",
  fontSize: 18,
  marginRight: 15,
  textTransform: "capitalize",
  padding: "5px 10px",
});

const SearchContainer = styled(Box)({
  width: "75%",
  color: "#5D6588",
  textAlign: "center",
  textTransform: "capitalize",
});

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import AdminPanel from "../admin/AdminPanel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Tooltip } from "@mui/material";
import { useAuthContext } from "../context/AuthContextProvider";
import { ADMIN_USER } from "../../helpers/const";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const { user, logOut } = useAuthContext();

  const handleLogOut = () => {
    handleMenuClose();
    logOut();
  };

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user ? (
        <Link to={"/menu"}>
          <MenuItem onClick={handleLogOut}>Выйти</MenuItem>
        </Link>
      ) : (
        <>
          <Link to={"/login"}>
            <MenuItem onClick={handleMenuClose}>Войти</MenuItem>
          </Link>
          <Link to={"/register"}>
            <MenuItem onClick={handleMenuClose}>Зарегистрироваться</MenuItem>
          </Link>
        </>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{ display: "flex", gap: 25 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={() => navigate("/")}
            >
              ZERNO
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={() => navigate("/menu")}
            >
              Меню
            </Typography>
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {ADMIN_USER.map((elem, index) =>
            user && elem.email === user.email ? (
              <IconButton
                key={index}
                size="large"
                edge="start"
                color="inherit"
                aria-label="card"
                sx={{ mr: 2 }}
                onClick={() => navigate("/admin")}
              >
                <AdminPanel />
              </IconButton>
            ) : (
              ""
            )
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "25px" }}>
            <IconButton
              color="inherit"
              aria-label="card"
              onClick={() => navigate("/card")}
            >
              <ShoppingCartIcon />
            </IconButton>
            {user ? (
              <Tooltip title={user.email}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar alt={user.displayName} src={user.photoUrl} />
                </IconButton>
              </Tooltip>
            ) : (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </Box>
  );
}

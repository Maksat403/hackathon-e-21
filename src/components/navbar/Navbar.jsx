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
import MicIcon from "@mui/icons-material/Mic";
import ClearIcon from "@mui/icons-material/Clear"; // Import ClearIcon
import AccountCircle from "@mui/icons-material/AccountCircle";
import AdminPanel from "../admin/AdminPanel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");
  const { getProducts } = useProducts();
  const { user, logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    handleMenuClose();
    logOut();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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

  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "ru-RU";

  const startVoiceSearch = () => {
    recognition.start();
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setSearch(transcript);
    setSearchParams({
      q: transcript,
    });
    getProducts();
  };

  const clearSearch = () => {
    setSearch("");
    setSearchParams({
      q: "",
    });
    getProducts();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(95deg, #333333 10%, #000000 90%)",
        }}
      >
        <Toolbar>
          <div style={{ display: "flex", gap: 25 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={() => navigate("/")}
            >
              FLAVORIZE
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск…"
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="mic"
              onClick={startVoiceSearch}
            >
              <MicIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="clear"
              onClick={clearSearch}
            >
              <ClearIcon />
            </IconButton>
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

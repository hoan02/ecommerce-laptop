/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useSignOut, useIsAuthenticated, RequireAuth } from "react-auth-kit";

import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  styled,
  useTheme,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChipIcon from "@mui/icons-material/Memory";
import RamIcon from "@mui/icons-material/Storage";
import CapacityIcon from "@mui/icons-material/SdCard";
import CardIcon from "@mui/icons-material/QueuePlayNext";
import BrandIcon from "@mui/icons-material/FeaturedPlayList";
import ProductIcon from "@mui/icons-material/LaptopMac";
import LogoutIcon from "@mui/icons-material/Logout";
import OrderIcon from "@mui/icons-material/ShoppingCartCheckout";

import Home from "../../pages/Home";
import Items from "../../pages/Items";
import Products from "../../pages/Products";
import Login from "../../pages/Login";
import MyAccount from "../../pages/MyAccount";
import Orders from "../../pages/Orders";
import OrderDetail from "../../pages/OrderDetail";
import toastService from "../../utils/toastService";
import NewProduct from "../product/NewProduct";
import UpdateProduct from "../product/UpdateProduct";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const theme = useTheme();
  const signOut = useSignOut();
  const authState = useIsAuthenticated();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    signOut();
    toastService.success("Đăng xuất thành công!");
    navigate(`login`);
  };

  const menuProducts = [
    {
      name: "Sản phẩm",
      slug: "board",
      icon: <ProductIcon />,
    },
  ];
  const menuItems = [
    {
      name: "Thương hiệu",
      slug: "brand",
      icon: <BrandIcon />,
    },
    {
      name: "CPU",
      slug: "chip",
      icon: <ChipIcon />,
    },
    {
      name: "Card màn hình",
      slug: "card",
      icon: <CardIcon />,
    },
    {
      name: "Ram",
      slug: "ram",
      icon: <RamIcon />,
    },
    {
      name: "Ổ cứng",
      slug: "capacity",
      icon: <CapacityIcon />,
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {path}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box
            sx={{
              mr: 10,
              fontSize: 22,
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/`)}
          >
            ADMIN
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {menuProducts.map((item) => (
            <ListItem key={item.slug} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => navigate(`products/${item.slug}`)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.slug} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => navigate(`items/${item.slug}`)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => navigate(`orders`)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <OrderIcon />
              </ListItemIcon>
              <ListItemText primary="Đơn hàng" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => handleLogout()}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Đăng xuất" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/items/:slug"
            element={<RequireAuth loginPath="/login">{<Items />}</RequireAuth>}
          />
          <Route
            path="/products/:slug"
            element={
              <RequireAuth loginPath="/login">{<Products />}</RequireAuth>
            }
          />
          <Route
            path="/products/create"
            element={
              <RequireAuth loginPath="/login">{<NewProduct />}</RequireAuth>
            }
          />
          <Route
            path="/products/update/:id"
            element={
              <RequireAuth loginPath="/login">{<UpdateProduct />}</RequireAuth>
            }
          />
          <Route
            path="/orders"
            element={<RequireAuth loginPath="/login">{<Orders />}</RequireAuth>}
          />
          <Route
            path="/orders/:id"
            element={
              <RequireAuth loginPath="/login">{<OrderDetail />}</RequireAuth>
            }
          />
          <Route
            path="/my-account"
            element={
              <RequireAuth loginPath="/login">{<MyAccount />}</RequireAuth>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

export default Sidebar;

import MenuIcon from "@mui/icons-material/Menu";
import {
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  useTheme,
  AppBar,
  Box,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import * as React from "react";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { HelpIcon, HomeIcon, ProfileIcon, Setting, Wallet } from "../svgs";
import Profile from "./profile";

const drawerWidth = 180;
const appHeight = 80;
const sAppHeight = 100;
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: ReactElement;
}
const data = [
  {
    id: "1",
    icon: <HomeIcon />,
    label: "Home",
    link: "/dashboard",
  },
  {
    id: "2",
    icon: <Wallet />,
    label: "wallet",
    link: "/wallet",
  },
  {
    id: "3",
    icon: <ProfileIcon />,
    label: "Profile",
    link: "/profile",
  },
  {
    id: "4",
    icon: <Setting />,
    label: "Settings",
    link: "/settings",
  },
];
const NavList = styled(List)<{ component?: React.ElementType }>(
  ({ theme }) => ({
    marginTop: 20,
    "& .MuiListItemButton-root": {
      padding: "8px 18px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0px auto",
      color: Colors.black,
      "&.Mui-selected": {
        background:
          theme.palette.mode === "dark" ? Colors.primary : Colors.gredient,
        color: Colors.light,
        borderRadius: 8,
        "&:focused": {
          background:
            theme.palette.mode === "dark" ? Colors.primary : Colors.gredient,
          color: Colors.light,
          borderRadius: 8,
        },
        "&:hover": {
          background:
            theme.palette.mode === "dark" ? Colors.primary : Colors.gredient,
          color: Colors.light,
          borderRadius: 8,
        },
      },
      "&:focused": {
        background:
          theme.palette.mode === "dark" ? Colors.primary : Colors.gredient,
        color: Colors.light,
        borderRadius: 8,
      },
      "&:hover": {
        background:
          theme.palette.mode === "dark"
            ? Colors.secondary
            : `rgba(243,152,27,0.2)`,
        color: Colors.black,
        borderRadius: 8,
      },
    },
    "& .MuiListItemIcon-root": {
      minWidth: 0,
      marginRight: 16,
    },
    "& .MuiSvgIcon-root": {
      fontSize: 20,
      color: "currentColor",
    },
  })
);

export default function AdminDashboardLayout(props: Props) {
  const { window } = props;
  const router = useRouter();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleClick = (item: {
    id: string;
    icon: ReactElement;
    label: string;
    link: string;
  }) => {
    router.push(item.link), setMobileOpen(false);
  };
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <div>
      <Toolbar sx={{ minHeight: `${appHeight}px !important` }}>
        <Link href="/" prefetch={false}>
          <a style={{ paddingTop: "8px" }}>
            <Image
              src={"/icons/logo/full_logo.svg"}
              alt="logo"
              width={140}
              height={38}
              layout="fixed"
              priority
            />
          </a>
        </Link>
      </Toolbar>
      <NavList component="nav" disablePadding>
        {data?.map((item) => {
          return (
            <Box
              component="div"
              sx={{ width: "100%", display: "flex" }}
              key={item.id}
            >
              {router.pathname === item.link ? (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    border: `2px solid ${Colors.primary}`,
                    mr: 1.5,
                    my: 0.625,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    //   padding: "10px 24px",
                  }}
                />
              ) : null}

              <ListItemButton
                onClick={() => handleClick(item)}
                sx={{ minHeight: 32, color: Colors.greyDark }}
                selected={router.pathname.startsWith(item.link)}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: "normal",
                    lineHeight: "20px",
                    fontFamily: Fonts.secondary,
                  }}
                />
              </ListItemButton>
            </Box>
          );
        })}
      </NavList>
      <NavList component="nav" disablePadding sx={{ mt: "45vh" }}>
        <Box component="div" sx={{ width: "100%", display: "flex" }}>
          {router.pathname === "/get-help" ? (
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                border: `2px solid ${Colors.primary}`,
                mr: 1.5,
                my: 0.625,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              }}
            />
          ) : null}
          <ListItemButton
            onClick={() => router.push("/get-help")}
            sx={{ minHeight: 32, color: Colors.greyDark }}
            selected={router.pathname.startsWith("/get-help")}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText
              primary="Get Help"
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: 500,
                fontStyle: "normal",
                lineHeight: "20px",
                fontFamily: Fonts.secondary,
              }}
            />
          </ListItemButton>
        </Box>
      </NavList>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, sm: `${drawerWidth}px` },
          height: { xs: sAppHeight, sm: appHeight },
          background:
            theme.palette.mode === "dark" ? Colors.black : Colors.light,
          boxShadow: "none",
          borderBottom: {
            xs: "none",
            sm:
              theme.palette.mode === "dark"
                ? `1px solid ${Colors.greyDark}`
                : `1px solid ${Colors.greyLight}`,
          },
          px: { xs: 1, sm: 4.5 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", sm: "flex-end" },
            py: { xs: 3, sm: 6 },
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              color: theme.palette.mode === "dark" ? "#9CA3AF" : Colors.black,
              display: { sm: "none" },
              top: -6,
            }}
          >
            <MenuIcon sx={{ fontSize: "35px" }} />
          </IconButton>
          <Box
            component="div"
            sx={{
              width: 70,
              mr: 2,
              mb: 2,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              cursor: "pointer",
            }}
          >
            <Profile />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                theme.palette.mode === "dark"
                  ? "url(/images/culy.png) #F69018"
                  : "url(/images/culy.png) #FFF",
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
              borderRight: {
                xs: "none",
                sm:
                  theme.palette.mode === "dark"
                    ? `1px solid ${Colors.greyDark}`
                    : `1px solid ${Colors.greyLight}`,
              },
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                theme.palette.mode === "dark"
                  ? "url(/images/culy.png) #F69018"
                  : "#FFF",
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
              borderRight: {
                xs: "none",
                sm:
                  theme.palette.mode === "dark"
                    ? `1px solid ${Colors.greyDark}`
                    : `1px solid ${Colors.greyLight}`,
              },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
          px: { xs: 2, sm: 3, md: 4, xl: 6 },
          width: {
            xs: "100%",
            sm: `calc(100% - ${drawerWidth}px)`,
          },
          mx: { xs: 0, sm: `${drawerWidth}px` },
          background:
            theme.palette.mode === "dark" ? Colors.black : Colors.light,
          color:
            theme.palette.mode === "dark" ? Colors.light : Colors.textColor,
          minHeight: "100vh",
          backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff",
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url(/images/culy.png)"
              : "url(/images/culy.png)",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 35%",
          backdropFilter: "blur(1px)",
        }}
      >
        <Toolbar
          sx={{
            minHeight: {
              xs: `${sAppHeight}px !important`,
              sm: `${appHeight}px !important`,
            },
          }}
        />
        {props.children}
      </Box>
    </Box>
  );
}

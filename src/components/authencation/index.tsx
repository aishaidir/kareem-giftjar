import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import type { ReactElement } from "react";
import { Fonts } from "../../theme/fonts";
// import { useTheme } from "next-themes";

const drawerWidth = 500;
const middrawerWidth = 400;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: ReactElement;
}
export default function AuthLayout(props: Props) {
  const theme = useTheme();
  return (
    <Box>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { md: middrawerWidth, xl: drawerWidth },
            background:
              theme.palette.mode === "dark"
                ? "url(/images/culy.png) #F69018"
                : "url(/images/culy.png) #000",

            // background:
            //   theme === "dark"
            //     ? "url(/images/culy.png) #F69018"
            //     : "url(/images/culy.png) #000",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            py: 1,
            px: 4,
          },
        }}
        open
      >
        <Toolbar />
        <Divider />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem: "center",
            marginTop: "70vh",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              font: `normal normal 700 23px/35px ${Fonts.primary}`,
              color: "#FFF",
            }}
          >
            Making the process of requesting, giving and receiving gifts
            simpler.
          </Typography>{" "}
          <Typography
            variant="subtitle1"
            sx={{
              font: `normal normal 300 18px/30px ${Fonts.primary}`,
              color: "#FFF",
              mt: 2,
            }}
          >
            Free yourself from how to recieve gifts. Everything you need in
            requesting, giving, and receiving gifts.
          </Typography>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
          px: { xs: 2, sm: 3, md: 4 },
          height: "100vh",
          width: {
            xs: "100%",
            md: `calc(100% - ${middrawerWidth}px)`,
            xl: `calc(100% - ${drawerWidth}px)`,
          },
          mx: { xs: 0, md: `${middrawerWidth}px`, xl: `${drawerWidth}px` },
          backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff",
          backgroundImage:
            theme.palette.mode === "dark"
              ? "url(/images/culy.png)"
              : "url(/images/culy.png)",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 35%",
          backdropFilter: "blur(0.5px)",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

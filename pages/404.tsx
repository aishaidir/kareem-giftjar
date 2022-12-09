import { CssBaseline, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { SubmitButton } from "../src/components/form/button";
import { Logo, NotFound } from "../src/components/svgs";
import { Colors } from "../src/theme/colors";

const appHeight = 80;
const sAppHeight = 100;

export default function AdminDashboardLayout() {
  const router = useRouter();
  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          height: { xs: sAppHeight, sm: appHeight },
          background: Colors.black,
          boxShadow: "none",
          borderBottom: `1px solid ${Colors.greyDark}`,
          px: { xs: 1, sm: 4.5 },
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: { xs: 3, sm: 6 },
          }}
        >
          <Logo />
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
          px: { xs: 2, sm: 4, md: 6, xl: 10 },
          width: "100%",
          color: Colors.textColor,
          minHeight: "100vh",
          backgroundColor: Colors.black,
          backgroundImage: "url(/images/culy.png)",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 35%",
          backdropFilter: "blur(1px)",
        }}
      >
        <Toolbar
          sx={{
            minHeight: {
              xs: `${sAppHeight + 50}px !important`,
              sm: `${appHeight + 100}px !important`,
            },
          }}
        />
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
          }}
        >
          <NotFound />
          <Box
            component="div"
            sx={{
              width: 200,
              mt: 10,
            }}
          >
            <SubmitButton onClick={() => router.push("/")}>
              Go back to Home page
            </SubmitButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

import {
  Button,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { Box } from "@mui/system";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import AdminDashboardLayout from "../../src/components/adminLayout";
import Callout, { MenuNav } from "../../src/components/callout";
import {
  PageSubTitle,
  PageTitle,
} from "../../src/components/form/textFields/styles";
import { EditIcon, EmptyWishlist, GiftBox } from "../../src/components/svgs";
import DeleteWishlist from "../../src/components/views/wishList/delete";
import { Colors } from "../../src/theme/colors";
import { Fonts } from "../../src/theme/fonts";

// const events: [] = [];
const events = [
  {
    id: "12233",
    name: "baby showers",
    days: 3,
    image: "/images/baby-shower.jpg",
  },
  {
    id: "543567",
    name: "wedding ceremony",
    days: 2,
    image: "/images/wedding.jpg",
  },
];
export default function DasboardPage() {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%" }}>
      <Head>
        <title>Dashboard - kareem</title>
        <meta name="description" content="Kareem giftjar dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle color={theme.palette.mode === "dark" ? "#fff" : "#000"}>
        Welcome to Giftjar, Sam
      </PageTitle>
      <PageSubTitle color={theme.palette.mode === "dark" ? "#fff" : "#000"}>
        See your activities for the day
      </PageSubTitle>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-start", sm: "flex-end" },
          alignItems: { xs: "flex-start", sm: "flex-end" },
          my: { xs: 3, sm: 4 },
        }}
      >
        <Box
          component="div"
          sx={{
            width: 250,
            px: 3,
            py: { xs: 1, sm: 1.5 },
            font: `normal normal 400 15px/18px ${Fonts.secondary}`,
            background:
              theme.palette.mode === "dark" ? Colors.gredient : Colors.black,
            color:
              theme.palette.mode === "dark"
                ? Colors.black
                : Colors.secondaryLight,
            border: "1.13394px solid #000000",
            borderRadius: "7.93757px",
          }}
        >
          Gift Balance
          <Box
            component="span"
            sx={{
              width: "100%",
              display: "block",
              font: {
                xs: `normal normal 400 15px/30px ${Fonts.secondary}`,
                sm: `normal normal 400 22px/46px ${Fonts.secondary}`,
              },
              color: "#FBFBFF",
            }}
          >
            {events.length === 0 ? "₦ 0.00" : "₦ 800,000.00"}
          </Box>
        </Box>
      </Box>
      <Badge
        showZero
        badgeContent={events.length}
        sx={{
          color: theme.palette.mode === "dark" ? Colors.light : Colors.black,
          mt: 3.5,
          mb: 1.4,
          font: {
            xs: `normal normal 400 16px/28px ${Fonts.secondary}`,
            sm: `normal normal 400 20px/24px ${Fonts.secondary}`,
          },
          "& .MuiBadge-badge": {
            color: Colors.black,
            right: { xs: -16, sm: -22 },
            height: { xs: 25, sm: 30 },
            width: { xs: 25, sm: 30 },
            top: { xs: 6, sm: 8 },
            border:
              theme.palette.mode === "dark"
                ? `2px solid ${Colors.light}`
                : `2px solid rgba(243, 152, 27, 0.42)`,
            padding: { xs: "0 2px", sm: "0px 8px" },
            borderRadius: "50%",
            background:
              theme.palette.mode === "dark"
                ? Colors.light
                : "rgba(243, 152, 27, 0.42)",
            font: {
              xs: `normal normal 400 16px/25px ${Fonts.secondary}`,
              sm: `normal normal 400 18px/30px ${Fonts.secondary}`,
            },
          },
        }}
      >
        My Wishlists
      </Badge>
      <Box
        sx={{
          width: "100%",
          mt: 3,
        }}
      >
        <Grid container spacing={3}>
          {events.length === 0 ? (
            <Box
              component="div"
              sx={{
                width: { xs: "100%", sm: "100%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // background:
                //   theme.palette.mode === "dark"
                //     ? Colors.greyLight
                //     : Colors.light,
                color:
                  theme.palette.mode === "dark" ? Colors.light : Colors.black,
                pt: 2,
                pb: 3,
              }}
            >
              <EmptyWishlist />
            </Box>
          ) : (
            events?.map(
              (
                event: {
                  id: string;
                  name: string;
                  days: number;
                  image: string;
                },
                i: number
              ) => (
                <Grid item xs={12} sm={6} lg={4} key={i}>
                  <Box
                    component="div"
                    sx={{
                      width: { xs: "100%" },
                      display: "block",
                      backgroundImage: `url("${event.image}"), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      height: { xs: 200, sm: 280 },
                      font: `normal normal 400 22px/46px ${Fonts.secondary}`,
                      color: "#000",
                      borderRadius: "8px",
                      cursor: "pointer",
                      p: "10px 20px 20px",
                    }}
                    onClick={() =>
                      router.push(`/dashboard/wishlist/${event.id}`)
                    }
                  >
                    <Box
                      component="div"
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                      }}
                    >
                      <Callout
                        TopAction={
                          <MenuNav
                            onClick={() =>
                              router.push("/dashboard/edit-wishlist")
                            }
                          >
                            <ListItemButton
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color: Colors.greyDark,
                              }}
                            >
                              <ListItemIcon sx={{ color: "inherit" }}>
                                <EditIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary="Edit wishlist"
                                primaryTypographyProps={{
                                  fontFamily: Fonts.primary,
                                  fontStyle: "normal",
                                  fontWeight: 600,
                                  fontSize: 12,
                                  lineHeight: "20px",
                                  color: Colors.greyDark,
                                }}
                              />
                            </ListItemButton>
                          </MenuNav>
                        }
                        BottomAction={<DeleteWishlist />}
                      />
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        font: {
                          xs: `normal normal 500 12px/22px ${Fonts.secondary}`,
                          sm: `normal normal 500 12px/22px ${Fonts.secondary}`,
                          lg: `normal normal 500 20px/22px ${Fonts.secondary}`,
                        },
                        color: Colors.light,
                        position: "relative",
                        top: { xs: 95, sm: 160 },
                      }}
                    >
                      <Box component="span" sx={{ textTransform: "uppercase" }}>
                        {event.name}
                      </Box>{" "}
                      <Box component="span">{event.days} days left</Box>
                    </Box>
                  </Box>
                </Grid>
              )
            )
          )}
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          alignItems: { xs: "center", sm: "flex-end" },
          position: { xs: "sticky", sm: "relative" },
          left: "auto",
          top: { sm: 100 },
          bottom: { xs: 28 },
          cursor: "pointer",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          startIcon={<GiftBox />}
          onClick={() => router.push("/dashboard/add-wishlist")}
          sx={{
            backgroundColor: Colors.secondaryLight,
            color: Colors.black,
            width: 150,
            textTransform: "uppercase",
            fontFamily: Fonts.primary,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 0,
            borderRadius: "5px",

            p: "10px 14px",
            "&:hover": {
              backgroundColor: Colors.primary,
              transform: "scale(1.02)",
            },
          }}
        >
          Add Wishlist
        </Button>
      </Box>
    </Box>
  );
}
DasboardPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

import {
  Badge,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Link,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import * as React from "react";
import { Logo } from "../../src/components/svgs";
import { Colors } from "../../src/theme/colors";
import { Fonts } from "../../src/theme/fonts";

const appHeight = 80;
const sAppHeight = 100;
export default function Contributions() {
  const theme = useTheme();
  const router = useRouter();
  function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number }
  ) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          {...props}
          sx={{ color: Colors.secondaryLight }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color={Colors.black}
            sx={{
              font: "normal normal 400 10px/10px 'SF Pro Display',sans-serif",
            }}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  const events = [
    {
      id: 1,
      name: "Macbook - ",
      days: 3,
      image: "/images/laptop.jpg",
      price: 500000,
      acquired: 200000,
    },
    {
      id: 2,
      name: "Macbook - ",
      days: 2,
      image: "/images/laptop.jpg",
      price: 500000,
      acquired: 240000,
    },
    {
      id: 3,
      name: "Macbook - ",
      days: 1,
      image: "/images/laptop.jpg",
      price: 500000,
      acquired: 400000,
    },
  ];
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
          px: { xs: 1, sm: 4.5 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            py: { xs: 3, sm: 6 },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              font: {
                xs: `normal normal 14px/40px 'SF Pro', sans-serif`,
                sm: `normal normal 18px/30px 'SF Pro', sans-serif`,
              },
              color: Colors.light,
            }}
          >
            Like this wishlish list?{" "}
            <Link
              underline="always"
              href="/signup"
              sx={{
                color: "#F69318",
                cursor: "pointer",
                ml: 1,
                textDecorationColor: "#F69318",
                "&.MuiLink-underlineAlways": {
                  textDecorationColor: "#F69318",
                },
              }}
            >
              Create your own for free
            </Link>
          </Box>
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
              xs: `${sAppHeight + 50}px !important`,
              sm: `${appHeight + 100}px !important`,
            },
          }}
        />
        <Box
          component="div"
          sx={{
            width: { xs: "100%", xl: "90%" },
            display: "block",
            backgroundImage: `url("/images/baby-shower.jpg")`,
            backgroundColor:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            height: { xs: 200, sm: 400 },
            font: `normal normal 400 22px/46px ${Fonts.secondary}`,
            color: "#000",
            borderRadius: "8px",
            p: "10px 20px 20px",
            m: "0 auto",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              px: { xs: 1, sm: 2 },
              justifyContent: "space-between",
              font: {
                xs: `normal normal 500 16px/32px ${Fonts.secondary}`,
                lg: `normal normal 500 20px/22px ${Fonts.secondary}`,
              },
              color: Colors.light,
              position: "relative",
              top: { xs: 140, sm: 230, md: 320 },
            }}
          >
            <Box component="span" sx={{ textTransform: "uppercase" }}>
              Baby shower
            </Box>{" "}
            <Box component="span">3 days left</Box>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", xl: "90%" }, m: "0 auto 24px" }}>
          <Box
            sx={{
              boxSizing: "border-box",
              width: { xs: "100%", xl: "90%" },
              display: "flex",
              mt: 4,
            }}
          >
            <Badge
              badgeContent={2}
              sx={{
                color:
                  theme.palette.mode === "dark" ? Colors.light : Colors.black,
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
                    sm: `normal normal 400 20px/35px ${Fonts.secondary}`,
                  },
                },
              }}
            >
              My Wishlists
            </Badge>
          </Box>
          <Grid container spacing={3}>
            {events?.map((evt, i) => {
              const value = (evt.acquired / evt.price) * 100;
              return (
                <Grid item xs={12} md={6} lg={4} key={i}>
                  <Card
                    onClick={() => {
                      router.push(`/contributions/detail/${evt.id}`);
                    }}
                    sx={{
                      maxWidth: "100%",
                      background: "#FFF",
                      border: "10.2375px 10.2375px 0px 0px",
                      borderRadius: "8px",
                      borderWidth: "0.566969px",
                      borderStyle: "solid",
                      borderColor: "#E8E8E8",
                      boxShadow:
                        "0px 10.9688px 21.9375px rgba(122, 122, 122, 0.2)",
                      cursor: "pointer",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="wishlist"
                      height="190"
                      image={evt.image}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            color: "#1E0F37",
                            font: `normal normal 600 20px/24px ${Fonts.secondary}`,
                          }}
                        >
                          {evt.name}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            color: "#1E0F37",
                            font: `normal normal 600 20px/24px ${Fonts.secondary}`,
                          }}
                        >
                          {"₦" +
                            evt.price.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                            })}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#565559",
                      }}
                    >
                      <Box
                        sx={{
                          color: "#565559",
                          font: `normal normal 400 18px/21px ${Fonts.secondary}`,
                        }}
                      >
                        {"₦ " +
                          evt.acquired.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}{" "}
                        Given
                      </Box>
                      <CircularProgressWithLabel value={value} />
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

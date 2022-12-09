import { ContentCopy } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import SnackbarContent from "@mui/material/SnackbarContent";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import React from "react";
import AdminDashboardLayout from "../../../src/components/adminLayout";
import Callout, { MenuNav } from "../../../src/components/callout";
import { EditIcon, GiftBox } from "../../../src/components/svgs";
import DeleteWishlist from "../../../src/components/views/wishList/delete";
import ShareWishlist from "../../../src/components/views/wishList/share";
import { Colors } from "../../../src/theme/colors";
import { Fonts } from "../../../src/theme/fonts";

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
    name: "Macbook - ",
    days: 3,
    image: "/images/laptop.jpg",
    price: 500000,
    acquired: 200000,
  },
  {
    name: "Macbook - ",
    days: 2,
    image: "/images/laptop.jpg",
    price: 500000,
    acquired: 240000,
  },
  {
    name: "Macbook - ",
    days: 1,
    image: "/images/laptop.jpg",
    price: 500000,
    acquired: 400000,
  },
];
export default function WishlistDetailPage() {
  const theme = useTheme();
  const router = useRouter();
  const textToCopy = "http://ww.giftjar.com/emald/Sharebycopy";
  const copyMessage = "link Copied!";
  const [showMessage, setShowMessage] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showMessage]);
  return (
    <Box>
      <Head>
        <title>Wishlist detail - Kareem</title>
        <meta
          name="description"
          content="Kareem giftjar wishlist detail page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          color: theme.palette.mode === "dark" ? "#fff" : Colors.textColor,
          textTransform: "capitalize",
          cursor: "pointer",
          font: {
            xs: `normal normal 400 14px/16px ${Fonts.secondary}`,
            sm: `normal normal 400 16px/30px ${Fonts.secondary}`,
          },
          my: { xs: 4, md: 5 },
        }}
      >
        <Link
          underline="hover"
          onClick={() => router.push("/dashboard")}
          sx={{
            color: theme.palette.mode === "dark" ? Colors.light : Colors.black,
          }}
        >
          <IconButton
            sx={{
              background: Colors.secondaryLight,
              color: Colors.light,
              mr: 1,
              "&:hover": {
                background: Colors.primary,
                color: Colors.light,
              },
            }}
            onClick={() => router.push("/dashboard")}
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} />
          </IconButton>
          Back to dashboard
        </Link>
      </Box>
      {showMessage ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: { xs: "relative", md: "absolute" },
            top: { xs: 0, md: 100 },
          }}
        >
          <SnackbarContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(52, 52, 52, 0.78)",
              color: Colors.light,
              font: `normal normal 400 18px/20px ${Fonts.secondary}`,
            }}
            message={copyMessage}
          />
        </Box>
      ) : null}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: { xs: "center", sm: "flex-start" },
            position: { xs: "sticky", sm: "relative" },
            left: "20px",
            top: { sm: 70 },
            bottom: { xs: 0 },
            cursor: "pointer",
          }}
        >
          <Button
            variant="contained"
            disableElevation
            endIcon={
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <ContentCopy
                  sx={{
                    color: "#3D5A80",
                    fontSize: 18,
                    mr: 1.6,
                    "&:hover": {
                      color: Colors.greyLight,
                      transform: "scale(1.05)",
                    },
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(textToCopy);
                    setShowMessage(true);
                  }}
                />{" "}
                <ShareWishlist />
              </Box>
            }
            sx={{
              backgroundColor: "rgba(52, 52, 52, 0.78)",
              color: Colors.light,
              width: { xs: "100%", sm: 320 },
              justifyContent: "space-between",
              alignItems: "flex-start",
              textAlign: "left",
              textTransform: "lowercase",
              letterSpacing: 0.3,
              fontFamily: Fonts.primary,
              fontSize: 12,
              fontWeight: 700,
              borderRadius: "5px",
              position: { xs: "absolute", sm: "inherit" },
              top: { xs: 244, sm: 0 },
              left: { xs: 14, sm: 0 },
              p: "10px 14px",
              "&:hover": {
                backgroundColor: "rgba(52, 52, 52, 0.78)",
              },
            }}
          >
            <Box
              component="div"
              sx={{
                maxWidth: 208,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {textToCopy}
            </Box>
          </Button>
        </Box>

        <Box sx={{ position: "relative", top: 70, right: 20 }}>
          <Callout
            TopAction={
              <MenuNav onClick={() => router.push("/dashboard/edit-wishlist")}>
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
      </Box>{" "}
      <CardMedia
        component="img"
        alt="wishlist"
        height="250"
        image={"/images/baby-shower.jpg"}
        sx={{
          maxWidth: "100%",
          borderRadius: "8px",
          backgroundColor: "rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      />
      <Box
        sx={{
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          mt: 4,
        }}
      >
        <Badge
          badgeContent={2}
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
                sm: `normal normal 400 20px/35px ${Fonts.secondary}`,
              },
            },
          }}
        >
          My Wishlists
        </Badge>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={3}>
          {events?.map((evt, i) => {
            const value = (evt.acquired / evt.price) * 100;
            return (
              <Grid item xs={12} md={6} lg={4} key={i}>
                <Card
                  sx={{
                    maxWidth: "100%",
                    background: "#FFF",
                    border: "10.2375px 10.2375px 0px 0px",
                    borderRadius: "8px",
                    borderWidth: 0.566969,
                    borderStyle: "solid",
                    borderColor: "#E8E8E8",
                    boxShadow:
                      " 0px 10.9688px 21.9375px rgba(122, 122, 122, 0.2)",
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
      {}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          alignItems: { xs: "center", sm: "flex-end" },
          position: { xs: "sticky", sm: "relative" },
          left: "auto",
          top: { xs: 90, sm: 50 },
          // bottom: { xs: 0 },
          cursor: "pointer",
          mb: { xs: 3, sm: 8 },
          mt: { xs: 3, sm: 0 },
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

WishlistDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  AvatarGroup,
  CardMedia,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import * as React from "react";
import { TypeAnimation } from "react-type-animation";
import { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SubmitButton } from "../src/components/form/button";
import { ButtonsRow } from "../src/components/form/button/styles";
import { AnimatedGradientText } from "../src/components/form/textFields/styles";
import { FacebookIcon, HelpIcon, Logo } from "../src/components/svgs";
import ThemeUpdater from "../src/components/ThemeUpdater";
import { Colors } from "../src/theme/colors";
import { Fonts } from "../src/theme/fonts";

const drawerWidth = 180;
const data = [
  {
    id: "1",
    icon: <HelpIcon />,
    label: "FAQs",
    link: "/faqs",
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
      color: theme.palette.mode === "dark" ? Colors.light : Colors.black,
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

const appHeight = 80;
const sAppHeight = 100;
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}
export default function Home(props: Props) {
  const { window } = props;
  const router = useRouter();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleButtonClick = (item: {
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
        <Link href="/">
          <Logo />
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
                onClick={() => handleButtonClick(item)}
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
      <Box
        component="div"
        sx={{
          mt: 4,
          p: 2,
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <SubmitButton
          ghost={theme.palette.mode === "dark" ? true : false}
          onClick={(e: any) => {
            e.preventDefault();
            router.push("/auth/login");
          }}
          style={{
            width: 150,
          }}
        >
          Login
        </SubmitButton>
      </Box>
    </div>
  );
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
            py: { xs: 3, sm: 3 },
          }}
        >
          <Logo />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <ThemeUpdater />
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: "#9CA3AF",
                  display: { md: "none" },
                  top: -6,
                }}
              >
                <MenuIcon
                  sx={{
                    fontSize: "35px",
                    "&:hover": {
                      transform: "skew(15deg)",
                    },
                  }}
                />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link
                href="/faqs"
                underline="none"
                sx={{
                  color: Colors.light,
                  width: 80,
                  font: `normal normal 500 18px/30px ${Fonts.secondary}`,
                }}
              >
                FAQ
              </Link>
              <SubmitButton
                ghost
                onClick={(e: any) => {
                  e.preventDefault();
                  router.push("/auth/login");
                }}
                style={{
                  width: 65,
                  padding: "8px 10px",
                  position: "relative",
                  top: -4,
                }}
              >
                Login
              </SubmitButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                theme.palette.mode === "dark"
                  ? "url(/images/culy.png) #000"
                  : "url(/images/culy.png) #FFF",
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
              boxShadow: "rgba(0, 0, 0, 0.8) 0px 7px 29px 0px",
              borderRight:
                theme.palette.mode === "dark"
                  ? `1px solid ${Colors.greyDark}`
                  : `1px solid ${Colors.greyLight}`,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          color: Colors.textColor,
          backgroundColor: "#F5F5F5",
          backgroundImage: "url(/images/culy.png)",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 35%",
          backdropFilter: "blur(1px)",
        }}
      >
        <Toolbar
          sx={{
            background: Colors.black,
            minHeight: {
              xs: `${sAppHeight + 50}px !important`,
              sm: `${appHeight + 100}px !important`,
            },
          }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "82vh",
            pb: 12,
            px: 4,
            backgroundColor: Colors.black,
          }}
        >
          <Box
            component="h1"
            sx={{
              width: { xs: "100%", md: "75%", xl: "65%" },
              color: Colors.light,
              textAlign: "center",
              font: {
                xs: `normal normal 400 30px/40px ${Fonts.secondary}`,
                sm: `normal normal 400 60px/85px ${Fonts.secondary}`,
                md: `normal normal 400 65px/90px ${Fonts.secondary}`,
                xl: `normal normal 400 95px/107px ${Fonts.secondary}`,
              },
            }}
          >
            Share your wishlist for your{" "}
            <AnimatedGradientText>
              {" "}
              <TypeAnimation
                sequence={[
                  "birthday",
                  3000,
                  "wedding",
                  3000,
                  "baby shower",
                  3000,
                  "Anniversary",
                  3000,
                  "special occasions",
                  3000,
                ]}
                speed={20}
                wrapper="span"
                repeat={Infinity}
              />
            </AnimatedGradientText>
          </Box>
          <Box
            component="h1"
            sx={{
              width: { xs: "100%", md: "80%", xl: "46%" },
              color: Colors.light,
              textAlign: "center",
              font: {
                xs: `normal normal 400 18px/30px ${Fonts.secondary}`,
                sm: `normal normal 400 26px/40px ${Fonts.secondary}`,
              },
            }}
          >
            Create your wishlist, share it with your friends and family and get
            contribution from them to purchase it. <strong>100% FREE.</strong>
          </Box>
          <Box
            component="div"
            sx={{
              width: { xs: "100%", sm: "80%", xl: "50%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
            }}
          >
            <SubmitButton
              style={{
                width: 220,
                margin: "0 20px 0",
                borderRadius: "6px",
                padding: "14px 16px",
              }}
              onClick={(e: any) => {
                e.preventDefault();
                router.push("/signup");
              }}
            >
              Create wish list
            </SubmitButton>
          </Box>
          <Box
            component="div"
            sx={{
              width: { xs: "100%", md: "95%", xl: "46%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: Colors.light,
              textAlign: "center",
              mt: { xs: 3, sm: 4 },
              font: {
                xs: `normal normal 500 18px/30px ${Fonts.secondary}`,
                sm: `normal normal 500 20px/23px ${Fonts.secondary}`,
              },
            }}
          >
            JOIN 700+ OTHERS{" "}
            <AvatarGroup sx={{ ml: 1 }}>
              <Avatar
                alt="Orange dress guy"
                src="/images/orange.jpg"
                sx={{ width: "26.87px", height: "26.87px" }}
              />
              <Avatar
                alt="Cheerful woman"
                src="/images/cheerful.jpg"
                sx={{ width: "26.87px", height: "26.87px" }}
              />
              <Avatar
                alt="Young man"
                src="/images/young.jpg"
                sx={{ width: "26.87px", height: "26.87px" }}
              />
              <Avatar
                alt="Black happy guy"
                src="/images/black.jpg"
                sx={{ width: "26.87px", height: "26.87px" }}
              />
            </AvatarGroup>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: { xs: 2, md: 6 },
            px: 4,
          }}
        >
          <Box
            component="h1"
            sx={{
              width: { xs: "100%", md: "90%", xl: "60%" },
              color: "#1E0F37",
              textAlign: "center",
              font: {
                xs: `normal normal 600 26px/35px ${Fonts.secondary}`,
                sm: `normal normal 600 40px/65px ${Fonts.secondary}`,
                md: `normal normal 600 50px/65px ${Fonts.secondary}`,
                xl: `normal normal 600 55px/75px ${Fonts.secondary}`,
              },
            }}
          >
            Because there’s always something to celebrate.
          </Box>
          <Box
            component="h4"
            sx={{
              width: { xs: "100%", md: "58%", xl: "55%" },
              color: "rgba(30, 15, 55, 0.87)",
              textAlign: "center",
              mt: 0,
              font: {
                xs: `normal normal 400 17px/25px ${Fonts.secondary}`,
                sm: `normal normal 400 26px/40px ${Fonts.secondary}`,
                md: `normal normal 400 20px/30px ${Fonts.secondary}`,
                xl: `normal normal 400 32px/50px ${Fonts.secondary}`,
              },
            }}
          >
            Free yourself from how to recieve gifts. Everything you need in
            requesting, giving, and receiving gifts.
          </Box>
          <Box
            component="div"
            sx={{
              width: { xs: "100%", md: "90%", xl: "80%" },
              py: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container columnSpacing={6} rowSpacing={{ xs: 3, md: 0 }}>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  component="div"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "end",
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.79) 100%),url(/images/birthday.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backdropFilter: "blur(10px)",
                    height: 230,
                    border: "8px",
                    py: 2,
                    px: 2,
                  }}
                >
                  <Box
                    sx={{
                      textTransform: "uppercase",
                      color: Colors.light,
                      font: `normal normal 500 22px/26px ${Fonts.secondary}`,
                    }}
                  >
                    Birthday
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  component="div"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "end",
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.79) 100%),url(/images/marriage.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backdropFilter: "blur(10px)",
                    height: 232,
                    border: "8px",
                    py: 2,
                    px: 2,
                  }}
                >
                  <Box
                    sx={{
                      textTransform: "uppercase",
                      color: Colors.light,
                      font: `normal normal 500 22px/26px ${Fonts.secondary}`,
                    }}
                  >
                    Marriage
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  component="div"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "end",
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.79) 100%),url(/images/wedding.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backdropFilter: "blur(10px)",
                    height: 232,
                    border: "8px",
                    py: 2,
                    px: 2,
                  }}
                >
                  <Box
                    sx={{
                      textTransform: "uppercase",
                      color: Colors.light,
                      font: `normal normal 500 22px/26px ${Fonts.secondary}`,
                    }}
                  >
                    Anniversary
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            component="div"
            sx={{
              width: { xs: "100%", md: "90%", xl: "80%" },
              py: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="h1"
              sx={{
                width: { xs: "100%", xl: "70%" },
                color: "#1E0F37",
                textAlign: "center",
                font: {
                  xs: `normal normal 600 26px/35px ${Fonts.secondary}`,
                  sm: `normal normal 600 40px/60px ${Fonts.secondary}`,
                  md: `normal normal 600 48px/66px ${Fonts.secondary}`,
                  xl: `normal normal 600 50px/66px ${Fonts.secondary}`,
                },
              }}
            >
              No more paper wish lists to manage. Free yourself and use,{" "}
              <Box
                component="span"
                sx={{
                  backgroundImage: "url('/images/svgs/line.svg')",
                  backgroundPosition: "bottom center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 50%",
                  backdropFilter: "blur(1px)",
                  color: "#1E0F37",
                  fontWeight: 800,
                  pb: 3,
                }}
              >
                GiftJar.
              </Box>
            </Box>
            <Box
              component="h4"
              sx={{
                width: { xs: "100%", md: "90%", xl: "50%" },
                color: "rgba(30, 15, 55, 0.87)",
                textAlign: "center",
                mt: 0,
                font: {
                  xs: `normal normal 400 17px/25px ${Fonts.secondary}`,
                  sm: `normal normal 400 26px/40px ${Fonts.secondary}`,
                  md: `normal normal 400 22px/35px ${Fonts.secondary}`,
                  xl: `normal normal 400 32px/50px ${Fonts.secondary}`,
                },
              }}
            >
              Share your list with anyone, and make it easy on them. They won’t
              need to download an app or even open an account to see it.
            </Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                py: { xs: 2, lg: 3 },
                px: { xs: 0, md: 1, lg: 3 },
              }}
            >
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={25}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {[
                  {
                    img: "baby-shower.jpg",
                  },
                  {
                    img: "wedding.jpg",
                  },
                  {
                    img: "marriage.jpg",
                  },
                  {
                    img: "birthday.jpg",
                  },
                  {
                    img: "smiling-woman.jpg",
                  },
                ].map((card, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      height: 300,
                      width: 350,
                      borderRadius: "8px",
                      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.79) 100%),url(/images/${card.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      color: Colors.light,
                    }}
                  ></SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              width: { xs: "100%", md: "90%", xl: "80%" },
              borderRadius: 1,
              background: Colors.black,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 5, sm: 10 },
            }}
          >
            <Grid container columnSpacing={0}>
              <Grid
                item
                xs={12}
                sm={5}
                xl={4}
                sx={{ display: { xs: "flex", sm: "none" } }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  width="100%"
                  image="/images/smiling-woman.jpg"
                  alt="Smiling woman"
                  sx={{ color: Colors.black, borderRadius: 1.2 }}
                />
              </Grid>
              <Grid item xs={12} sm={7} xl={8}>
                <Box
                  component="div"
                  sx={{
                    pt: 4,
                    pb: 4,
                    pr: { xs: 2, xl: 0 },
                    pl: { xs: 3, sm: 6, xl: 20 },
                    display: "flex",
                    flexDirection: "column",
                    color: "rgba(30, 15, 55, 0.87)",
                    maxWidth: { xs: "100%", sm: 480, xl: "100%" },
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      color: Colors.secondary,
                      font: `normal normal 700 14px/25px ${Fonts.secondary}`,
                      my: 1,
                    }}
                  >
                    Testimonies
                  </Box>
                  <Box
                    sx={{
                      color: "#ECECEC",
                      font: `normal normal 700 20px/30px ${Fonts.secondary}`,
                      mb: 2,
                    }}
                  >
                    Why People Love Giftjar
                  </Box>
                  <Box
                    sx={{
                      width: { xs: "100%", xl: "65%" },
                    }}
                  >
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={25}
                      loop={true}
                      modules={[Autoplay, Pagination, FreeMode]}
                      className="swiper-container"
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                    >
                      {[
                        {
                          name: "Daniel",
                          title: ` I travel a lot and I've had different customer service
                          experiences. Spleet platform is the first time I'm
                          speaking to a pleasant customer service person in
                          Nigeria or anywhere.`,
                        },
                        {
                          name: "Aisha",
                          title: ` I travel a lot and I've had different customer service
                          experiences. Spleet platform is the first time I'm
                          speaking to a pleasant customer service person in
                          Nigeria or anywhere.`,
                        },
                        {
                          name: "Sam",
                          title: ` I travel a lot and I've had different customer service
                          experiences. Spleet platform is the first time I'm
                          speaking to a pleasant customer service person in
                          Nigeria or anywhere.`,
                        },
                      ].map((item, index) => (
                        <SwiperSlide
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            background: Colors.black,
                          }}
                        >
                          <Box
                            component="div"
                            sx={{
                              width: "100%",
                              background: Colors.black,
                              color: Colors.light,
                              font: `normal normal 700 14px/25px ${Fonts.secondary}`,
                            }}
                          >
                            {item.title}
                          </Box>
                          <Box
                            component="h6"
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "start",
                              color: Colors.light,
                              font: `normal normal 700 14px/8px ${Fonts.secondary}`,
                            }}
                          >
                            {item.name}
                          </Box>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={5}
                xl={4}
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  width="100%"
                  image="/images/smiling-woman.jpg"
                  alt="Smiling woman"
                  sx={{ color: Colors.black, borderRadius: 1.2 }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            component="div"
            sx={{
              width: { xs: "100%", md: "90%", xl: "80%" },
              mt: { xs: 5, sm: 10, xl: 12 },
              py: { xs: 4, sm: 6, xl: 11 },
              px: 6,
              borderRadius: 1,
              background: Colors.gredient,
              display: "flex",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={7}>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "rgba(30, 15, 55, 0.87)",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      textAlign: "center",
                      color: Colors.light,
                      font: {
                        xs: `normal normal 800 14px/30px ${Fonts.primary}`,
                        sm: `normal normal 800 18px/30px ${Fonts.primary}`,
                        md: `normal normal 800 23px/30px ${Fonts.primary}`,
                      },
                      my: 1,
                    }}
                  >
                    Save yourself from gift giving anxiety.
                  </Box>
                  <Box
                    sx={{
                      textAlign: "center",
                      color: Colors.light,
                      font: {
                        xs: `normal normal 900 28px/53px ${Fonts.primary}`,
                        sm: `normal normal 900 35px/53px ${Fonts.primary}`,
                        md: `normal normal 900 38px/53px ${Fonts.primary}`,
                      },
                    }}
                  >
                    Start using Kareem
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={5}>
                <ButtonsRow>
                  <SubmitButton ghost style={{ width: 190 }}>
                    Create wishlist
                  </SubmitButton>
                </ButtonsRow>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          component="footer"
          sx={{
            width: { xs: "100%", md: "90%", xl: "80%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: "80px auto 0",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <List
                  sx={{
                    "& .MuiListItemButton-root": {
                      paddingLeft: 24,
                      paddingRight: 24,
                    },
                    "& .MuiListItemIcon-root": {
                      minWidth: 0,
                      marginRight: 16,
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                >
                  <ListItem component="div">
                    <ListItemText
                      sx={{ my: 0 }}
                      primary="Kareem"
                      primaryTypographyProps={{
                        fontFamily: Fonts.secondary,
                        fontStyle: "normal",
                        fontSize: 22,
                        lineHeight: 0.8,
                        fontWeight: "700",
                        letterSpacing: 0,
                        color: Colors.black,
                      }}
                    />
                  </ListItem>
                  <ListItem component="div">
                    <ListItemText
                      primary="©2022. Kareem Technologies Inc. All rights reserved"
                      primaryTypographyProps={{
                        width: 190,
                        fontFamily: Fonts.secondary,
                        fontStyle: "normal",
                        fontSize: 12,
                        fontWeight: "500",
                        letterSpacing: 0,
                        color: "#220022",
                      }}
                    />
                  </ListItem>
                  <ListItem
                    component="div"
                    sx={{
                      p: "4px 0",
                    }}
                  >
                    <Box
                      sx={{
                        width: 150,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        onClick={() =>
                          router.push("https://www.linkedin.com/kareem/")
                        }
                        sx={{
                          color: "#F69F3B",
                          background: "rgba(241, 207, 167, 0.29)",
                          height: 35,
                          width: 35,
                          mx: 2,
                          "&:hover": {
                            background: "rgba(241, 207, 167, 0.29)",
                            transform: "scale(0.9)",
                          },
                        }}
                      >
                        <FacebookIcon />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          router.push("https://www.instagram.com/kareem/")
                        }
                        sx={{
                          color: "#F69F3B",
                          background: "rgba(241, 207, 167, 0.29)",
                          height: 35,
                          width: 35,
                          mx: 2,
                          "&:hover": {
                            background: "rgba(241, 207, 167, 0.29)",
                            transform: "scale(0.9)",
                          },
                        }}
                      >
                        <Instagram fontSize="small" />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          router.push("https://www.instagram.com/kareem/")
                        }
                        sx={{
                          color: "#F69F3B",
                          background: "rgba(241, 207, 167, 0.29)",
                          height: 35,
                          width: 35,
                          mx: 2,
                          "&:hover": {
                            background: "rgba(241, 207, 167, 0.29)",
                            transform: "scale(0.9)",
                          },
                        }}
                      >
                        <LinkedIn fontSize="small" />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          router.push("https://www.twitter.com/kareem/")
                        }
                        sx={{
                          color: "#F69F3B",
                          background: "rgba(241, 207, 167, 0.29)",
                          height: 35,
                          width: 35,
                          mx: 2,
                          "&:hover": {
                            background: "rgba(241, 207, 167, 0.29)",
                            transform: "scale(0.9)",
                          },
                        }}
                      >
                        <Twitter fontSize="small" />
                      </IconButton>{" "}
                    </Box>
                  </ListItem>
                  <ListItem component="div">
                    <Link
                      underline="hover"
                      href="mailto: hello@kareem.com"
                      sx={{
                        width: 190,
                        fontFamily: Fonts.secondary,
                        fontStyle: "normal",
                        fontSize: 12,
                        fontWeight: "500",
                        letterSpacing: 0,
                        color: "#220022",
                      }}
                    >
                      hello@kareem.com
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <List
                  sx={{
                    "& .MuiListItemButton-root": {
                      paddingLeft: 24,
                      paddingRight: 24,
                    },
                    "& .MuiListItemIcon-root": {
                      minWidth: 0,
                      marginRight: 16,
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                >
                  <ListItem component="div">
                    <ListItemText
                      sx={{ my: 0 }}
                      primary="Legal"
                      primaryTypographyProps={{
                        fontFamily: Fonts.secondary,
                        fontStyle: "normal",
                        fontSize: 22,
                        lineHeight: 0.8,
                        fontWeight: "700",
                        letterSpacing: 0,
                        color: Colors.black,
                      }}
                    />
                  </ListItem>
                  <ListItem component="div">
                    <Link
                      underline="hover"
                      href="/privacy-policy"
                      sx={{
                        width: 100,
                        fontFamily: Fonts.secondary,
                        fontStyle: "normal",
                        fontSize: 12,
                        fontWeight: "500",
                        letterSpacing: 0,
                        color: "#220022",
                      }}
                    >
                      Terms of service Privacy policy Security
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <div
                className="line"
                style={{ borderTop: "1px solid #E8ECF5", marginBottom: 60 }}
              ></div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

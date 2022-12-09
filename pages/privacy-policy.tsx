// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import {
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
  Typography,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import * as React from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SubmitButton } from "../src/components/form/button";
import { ButtonsRow } from "../src/components/form/button/styles";
import { ShadowedSearch } from "../src/components/form/textFields";
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

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  background: "transparent",
  padding: "0",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  textAlign: "left",
  font: `normal normal 600 16px/30px ${Fonts.primary}`,
  color: "#1E0F37",
  flexDirection: "row",
  borderBottom: "1px solid #E5E7EB",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: 0,
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "16x 10px 16px 0",
  textAlign: "left",
  font: `normal normal 500 14px/21px ${Fonts.primary}`,
  color: "#262626",
}));
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
  const [search, setSearch] = React.useState("");
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const handleButtonClick = (item: {
    id: string;
    icon: ReactElement;
    label: string;
    link: string;
  }) => {
    router.push(item.link), setMobileOpen(false);
  };
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handlePrevious = () => {
    setOffset((prev) => prev - 10);
    setLimit((prev) => prev - 10);
  };
  const handleNext = () => {
    setOffset(limit);
    setLimit((prev) => prev + 10);
  };
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
                href="#"
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
          minHeight: "100vh",
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
            pb: 12,
            px: 4,
            backgroundColor: Colors.black,
          }}
        >
          <Box
            component="h1"
            sx={{
              width: "100%",
              color: Colors.light,
              textAlign: "center",
              font: {
                xs: `normal normal 400 25px/40px ${Fonts.secondary}`,
                sm: `normal normal 400 55px/85px ${Fonts.secondary}`,
                md: `normal normal 400 60px/90px ${Fonts.secondary}`,
                xl: `normal normal 400 85px/107px ${Fonts.secondary}`,
                m: 0,
              },
            }}
          >
            Priavcy policy
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
            component="div"
            sx={{
              width: { xs: "100%", md: "90%", xl: "80%" },
              py: { xs: 4, sm: 6, xl: 11 },
            }}
          >
            <Box
              component="div"
              sx={{
                width: "100%",
                color: "rgba(38, 38, 38, 0.8)",
                textAlign: "left",
                font: {
                  xs: `normal normal 500 14px/26px ${Fonts.secondary}`,
                  sm: `normal normal 500 16px/30px ${Fonts.secondary}`,
                },
              }}
            >
              This Privacy Statement describes Our policies and procedures for
              collecting, using, and disclosing Your information when You use
              the Service, as well as Your privacy rights and how the law
              protects You. We collect and use Your Personal Information to
              provide and improve the Service. You agree to the collection and
              use of information in accordance with this Privacy Policy by using
              the Service. The Privacy Policy Generator was used to create this
              Privacy Policy.
            </Box>
            <Box
              component="h4"
              sx={{
                width: "100%",
                color: "#1E0F37",
                textAlign: "left",
                font: {
                  xs: `normal normal 711 14px/26px 'SF Arabic', sans-serif`,
                  sm: `normal normal 711 16px/30px 'SF Arabic', sans-serif`,
                },
              }}
            >
              1.Interpretation and Defination
            </Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                color: "rgba(38, 38, 38, 0.8)",
                textAlign: "left",
                font: {
                  xs: `normal normal 500 14px/26px ${Fonts.secondary}`,
                  sm: `normal normal 500 16px/30px ${Fonts.secondary}`,
                },
              }}
            >
              This Privacy Statement describes Our policies and procedures for
              collecting, using, and disclosing Your information when You use
              the Service, as well as Your privacy rights and how the law
              protects You. We collect and use Your Personal Information to
              provide and improve the Service. You agree to the collection and
              use of information in accordance with this Privacy Policy by using
              the Service. The Privacy Policy Generator was used to create this
              Privacy Policy.
            </Box>
            <Box
              component="h4"
              sx={{
                width: "100%",
                color: "#1E0F37",
                textAlign: "left",
                font: {
                  xs: `normal normal 711 14px/26px 'SF Arabic', sans-serif`,
                  sm: `normal normal 711 16px/30px 'SF Arabic', sans-serif`,
                },
              }}
            >
              2.Interpretation and Defination
            </Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                color: "rgba(38, 38, 38, 0.8)",
                textAlign: "left",
                font: {
                  xs: `normal normal 500 14px/26px ${Fonts.secondary}`,
                  sm: `normal normal 500 16px/30px ${Fonts.secondary}`,
                },
              }}
            >
              This Privacy Statement describes Our policies and procedures for
              collecting, using, and disclosing Your information when You use
              the Service, as well as Your privacy rights and how the law
              protects You. We collect and use Your Personal Information to
              provide and improve the Service. You agree to the collection and
              use of information in accordance with this Privacy Policy by using
              the Service. The Privacy Policy Generator was used to create this
              Privacy Policy.
            </Box>
            <Box
              component="h4"
              sx={{
                width: "100%",
                color: "#1E0F37",
                textAlign: "left",
                font: {
                  xs: `normal normal 711 14px/26px 'SF Arabic', sans-serif`,
                  sm: `normal normal 711 16px/30px 'SF Arabic', sans-serif`,
                },
              }}
            >
              3.Interpretation and Defination
            </Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                color: "rgba(38, 38, 38, 0.8)",
                textAlign: "left",
                font: {
                  xs: `normal normal 500 14px/26px ${Fonts.secondary}`,
                  sm: `normal normal 500 16px/30px ${Fonts.secondary}`,
                },
              }}
            >
              This Privacy Statement describes Our policies and procedures for
              collecting, using, and disclosing Your information when You use
              the Service, as well as Your privacy rights and how the law
              protects You. We collect and use Your Personal Information to
              provide and improve the Service. You agree to the collection and
              use of information in accordance with this Privacy Policy by using
              the Service. The Privacy Policy Generator was used to create this
              Privacy Policy.
            </Box>
            <Box
              component="h4"
              sx={{
                width: "100%",
                color: "#1E0F37",
                textAlign: "left",
                font: {
                  xs: `normal normal 711 14px/26px 'SF Arabic', sans-serif`,
                  sm: `normal normal 711 16px/30px 'SF Arabic', sans-serif`,
                },
              }}
            >
              4.Interpretation and Defination
            </Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                color: "rgba(38, 38, 38, 0.8)",
                textAlign: "left",
                font: {
                  xs: `normal normal 500 14px/26px ${Fonts.secondary}`,
                  sm: `normal normal 500 16px/30px ${Fonts.secondary}`,
                },
              }}
            >
              This Privacy Statement describes Our policies and procedures for
              collecting, using, and disclosing Your information when You use
              the Service, as well as Your privacy rights and how the law
              protects You. We collect and use Your Personal Information to
              provide and improve the Service. You agree to the collection and
              use of information in accordance with this Privacy Policy by using
              the Service. The Privacy Policy Generator was used to create this
              Privacy Policy.
            </Box>
            <Box
              component="h4"
              sx={{
                width: "100%",
                color: "#1E0F37",
                textAlign: "left",
                font: {
                  xs: `normal normal 711 14px/26px 'SF Arabic', sans-serif`,
                  sm: `normal normal 711 16px/30px 'SF Arabic', sans-serif`,
                },
              }}
            >
              5. How to contant us
            </Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                color: "rgba(38, 38, 38, 0.8)",
                textAlign: "left",
                font: {
                  xs: `normal normal 500 14px/26px ${Fonts.secondary}`,
                  sm: `normal normal 500 16px/30px ${Fonts.secondary}`,
                },
              }}
            >
              If you have any questions about this Privacy Policy, You can
              contact us:{" "}
              <Link
                underline="hover"
                href="mailto: hello@kareem.com"
                sx={{ color: "#F23A13" }}
              >
                hello@kareem.com
              </Link>
            </Box>
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

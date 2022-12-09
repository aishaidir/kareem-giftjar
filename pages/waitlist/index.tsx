import {
  FacebookOutlined,
  Instagram,
  Share,
  Twitter,
} from "@mui/icons-material";
import {
  CssBaseline,
  Grid,
  IconButton,
  Popover,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { TransitionProps } from "@mui/material/transitions";
import { useRouter } from "next/router";
import * as React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { TypeAnimation } from "react-type-animation";
import { SubmitButton } from "../../src/components/form/button";
import { TextField } from "../../src/components/form/textFields";
import { AnimatedGradientText } from "../../src/components/form/textFields/styles";
import { Logo } from "../../src/components/svgs";
import { Colors } from "../../src/theme/colors";
import { Fonts } from "../../src/theme/fonts";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const appHeight = 80;
const sAppHeight = 100;

export default function AdminDashboardLayout() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const url = "http://ww.giftjar.com/emald/Sharebycopy";
  const handleClose = () => setAnchorEl(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
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
          <Box
            sx={{
              //   width: 200,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              font: {
                xs: `normal normal 14px/40px 'SF Pro', sans-serif`,
                sm: `normal normal 18px/30px 'SF Pro', sans-serif`,
              },
              color: Colors.light,
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {" "}
              Follow us on{" "}
            </Box>
            <IconButton
              onClick={() => router.push("https://www.twitter.com/kareem/")}
              sx={{
                color: Colors.light,
                background: "#1DA1F2",
                height: 25,
                width: 25,
                mx: 2,
                "&:hover": {
                  background: "#1DA1F2",
                },
              }}
            >
              <Twitter fontSize="small" />
            </IconButton>{" "}
            <IconButton
              onClick={() => router.push("https://www.facebook.com/kareem/")}
              sx={{
                background: "#4267B2",
                height: 25,
                width: 25,
                mr: 2,
                "&:hover": {
                  background: "#4267B2",
                },
              }}
            >
              <FacebookOutlined
                fontSize="small"
                sx={{
                  color: Colors.light,
                }}
              />
            </IconButton>
            <IconButton
              onClick={() => router.push("https://www.instagram.com/kareem/")}
              sx={{
                color: Colors.light,
                height: 25,
                width: 25,
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                "&:hover": {
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                },
              }}
            >
              <Instagram fontSize="small" />
            </IconButton>
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
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
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
                md: `normal normal 400 80px/95px ${Fonts.secondary}`,
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
            }}
          >
            <TextField
              name="email"
              value={email}
              type="email"
              placeholder="Your email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <Box
              sx={{
                display: "flex",
                margin: { xs: "20px 0", sm: 0 },
              }}
            >
              <SubmitButton
                style={{
                  width: 130,
                  margin: "0 20px 0",
                  borderRadius: "6px",
                }}
              >
                Join wishlist
              </SubmitButton>
              <IconButton
                onClick={handleClick}
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: Colors.light,
                  color: Colors.black,
                  "&:hover": {
                    backgroundColor: Colors.light,
                  },
                }}
              >
                <Share
                  sx={{
                    color: Colors.black,
                    fontSize: 18,
                  }}
                />
              </IconButton>
              <Popover
                id="simple-popover"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                TransitionComponent={Transition}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                sx={{
                  "& .MuiPopover-paper": {
                    width: 400,
                    background: "#ffffff 0% 0% no-repeat padding-box",
                    boxShadow: "0px 2px 10px #00000027",
                    borderRadius: 1,
                    color: Colors.black,
                    py: 3,
                    px: 2,
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <Grid container>
                    <Grid item xs={3}>
                      <TelegramShareButton title={"Kareem"} url={url}>
                        <IconButton
                          sx={{
                            background: "rgba(157, 157, 157, 0.2)",
                            "&:hover": {
                              background: "rgba(157, 157, 157, 0.1)",
                              transform: "scale(1.03)",
                            },
                          }}
                        >
                          <TelegramIcon
                            size={25}
                            iconFillColor="#3D5A80"
                            bgStyle={{ fill: "transparent" }}
                            round
                          />
                        </IconButton>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{
                            color: "#3D5A80",
                            font: `normal normal 400 10px/30px ${Fonts.mainText}`,
                            cursor: "pointer",
                          }}
                        >
                          Telegram
                        </Typography>
                      </TelegramShareButton>{" "}
                    </Grid>
                    <Grid item xs={3}>
                      <TwitterShareButton
                        title={"Kareem"}
                        url={url}
                        hashtags={["Kareem", "gift"]}
                      >
                        <IconButton
                          sx={{
                            background: "rgba(157, 157, 157, 0.2)",
                            "&:hover": {
                              background: "rgba(157, 157, 157, 0.1)",
                              transform: "scale(1.03)",
                            },
                          }}
                        >
                          <TwitterIcon
                            size={25}
                            iconFillColor="#3D5A80"
                            bgStyle={{ fill: "transparent" }}
                            round
                          />
                        </IconButton>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{
                            color: "#3D5A80",
                            font: `normal normal 400 10px/30px ${Fonts.mainText}`,
                            cursor: "pointer",
                          }}
                        >
                          Twitter
                        </Typography>
                      </TwitterShareButton>
                    </Grid>
                    <Grid item xs={3}>
                      {" "}
                      <WhatsappShareButton url={url}>
                        <IconButton
                          sx={{
                            background: "rgba(157, 157, 157, 0.2)",
                            "&:hover": {
                              background: "rgba(157, 157, 157, 0.1)",
                              transform: "scale(1.03)",
                            },
                          }}
                        >
                          <WhatsappIcon
                            size={25}
                            iconFillColor="#3D5A80"
                            bgStyle={{ fill: "transparent" }}
                            round
                          />
                        </IconButton>

                        <Typography
                          variant="caption"
                          component="div"
                          sx={{
                            color: "#3D5A80",
                            font: `normal normal 400 10px/30px ${Fonts.mainText}`,
                            cursor: "pointer",
                          }}
                        >
                          WhatsApp
                        </Typography>
                      </WhatsappShareButton>
                    </Grid>
                    <Grid item xs={3}>
                      {" "}
                      <FacebookShareButton url={url} hashtag={"#wishlist"}>
                        <IconButton
                          sx={{
                            background: "rgba(157, 157, 157, 0.2)",
                            "&:hover": {
                              background: "rgba(157, 157, 157, 0.1)",
                              transform: "scale(1.03)",
                            },
                          }}
                        >
                          <FacebookIcon
                            size={25}
                            iconFillColor="#3D5A80"
                            bgStyle={{ fill: "transparent" }}
                            round
                          />
                        </IconButton>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{
                            color: "#3D5A80",
                            font: `normal normal 400 10px/30px ${Fonts.mainText}`,
                            cursor: "pointer",
                          }}
                        >
                          Facebook
                        </Typography>
                      </FacebookShareButton>
                    </Grid>
                    <Grid item xs={3}>
                      <LinkedinShareButton title={"Kareem"} url={url}>
                        <IconButton
                          sx={{
                            background: "rgba(157, 157, 157, 0.2)",
                            "&:hover": {
                              background: "rgba(157, 157, 157, 0.1)",
                              transform: "scale(1.03)",
                            },
                          }}
                        >
                          <LinkedinIcon
                            size={25}
                            iconFillColor="#3D5A80"
                            bgStyle={{ fill: "transparent" }}
                            round
                          />
                        </IconButton>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{
                            color: "#3D5A80",
                            font: `normal normal 400 10px/30px ${Fonts.mainText}`,
                            cursor: "pointer",
                          }}
                        >
                          Linkedin
                        </Typography>
                      </LinkedinShareButton>{" "}
                    </Grid>{" "}
                    <Grid item xs={3}>
                      {" "}
                      <PinterestShareButton
                        url={url}
                        media={url}
                        description=""
                      >
                        <IconButton
                          sx={{
                            background: "rgba(157, 157, 157, 0.2)",
                            "&:hover": {
                              background: "rgba(157, 157, 157, 0.1)",
                              transform: "scale(1.03)",
                            },
                          }}
                        >
                          <PinterestIcon
                            size={25}
                            iconFillColor="#3D5A80"
                            bgStyle={{ fill: "transparent" }}
                            round
                          />
                        </IconButton>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{
                            color: "#3D5A80",
                            font: `normal normal 400 10px/30px ${Fonts.mainText}`,
                            cursor: "pointer",
                          }}
                        >
                          Pinterest
                        </Typography>
                      </PinterestShareButton>{" "}
                    </Grid>
                    <Grid item xs={3}>
                      <RedditShareButton url={url}>
                        <IconButton
                          sx={{
                            background: "rgba(157, 157, 157, 0.2)",
                            "&:hover": {
                              background: "rgba(157, 157, 157, 0.1)",
                              transform: "scale(1.03)",
                            },
                          }}
                        >
                          <RedditIcon
                            size={25}
                            iconFillColor="#3D5A80"
                            bgStyle={{ fill: "transparent" }}
                            round
                          />
                        </IconButton>

                        <Typography
                          variant="caption"
                          component="div"
                          sx={{
                            color: "#3D5A80",
                            font: `normal normal 400 10px/30px ${Fonts.mainText}`,
                            cursor: "pointer",
                          }}
                        >
                          Reddit
                        </Typography>
                      </RedditShareButton>
                    </Grid>
                  </Grid>{" "}
                </Box>
              </Popover>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

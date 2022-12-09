import { Share } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, IconButton, Popover, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box } from "@mui/system";
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
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { SubmitButton } from "../../form/button";
import { TextArea } from "../../form/textFields";
import { FormTitle } from "../../form/textFields/styles";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShareWishlist() {
  const [open, setOpen] = React.useState(false);
  const [showTextField, setShowTextField] = React.useState(false);
  const [description, setDescription] = React.useState(
    "Thank You 😊, I sincerely appreciate you for this gesture, you don't know how much it means to me, but I want you to know it means a lot. I can't thank you enough"
  );
  const url = "http://ww.giftjar.com/emald/Sharebycopy";
  const id = open ? "simple-popover" : undefined;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleShowTextField = () => setShowTextField(true);
  const handleDescirptionChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handlePopOverClose = () => setAnchorEl(null);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowTextField(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Share
        sx={{
          color: "#3D5A80",
          fontSize: 20,
          "&:hover": {
            color: Colors.greyLight,
            transform: "scale(1.03)",
          },
        }}
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            backgroundColor: "#FFF",
            width: { xs: "100%", sm: 500 },
            padding: "20px 16px",
            borderRadius: 1,
          },
        }}
      >
        <Box
          component="div"
          sx={{
            fontFamily: Fonts.primary,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "24px",
            color: Colors.textColor,
            padding: "10px 10px 20px",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: Colors.greyDark,
            }}
          >
            <CloseIcon />
          </IconButton>
          <FormTitle>share wishlist</FormTitle>
          <Divider
            sx={{
              borderWidth: "1px",
              borderColor: "#E5E7EB",
              borderRadius: "9999px",
              mb: 2,
            }}
          />
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              background: Colors.black,
              font: `normal normal 400 18px/20px ${Fonts.secondary}`,
              padding: "40px 20px 20px",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: Colors.light,
                font: "normal normal 400 14px/35px 'SF Pro Display',sans-serif",
              }}
            >
              Appreciation Note.
            </Typography>
            {showTextField ? (
              <form
                onSubmit={handleSubmit}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextArea
                  id="description"
                  htmlFor="description"
                  name="description"
                  value={description}
                  height={50}
                  onChange={handleDescirptionChange}
                />
                <Box
                  sx={{
                    mt: 2,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SubmitButton>Save</SubmitButton>
                </Box>
              </form>
            ) : (
              <>
                <Typography
                  variant="body1"
                  sx={{
                    color: Colors.light,
                    font: "normal normal 400 14px/25px 'SF Pro Display',sans-serif",
                  }}
                >
                  {description}
                </Typography>
                <Box
                  component="div"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "underline",
                    color: Colors.light,
                    font: "normal normal 400 14px/35px 'SF Pro Display',sans-serif",
                    mt: 1,
                    cursor: "pointer",
                  }}
                  onClick={handleShowTextField}
                >
                  Edit appreciation
                </Box>
              </>
            )}
          </Box>
          <FormTitle
            style={{
              font: "normal normal 800 14px/35px 'SF Pro Display',sans-serif",
              marginTop: 16,
            }}
          >
            Share with
          </FormTitle>
          <Divider
            sx={{
              borderWidth: "1px",
              borderColor: "#E5E7EB",
              borderRadius: "9999px",
              mb: 2,
              mt: -1,
            }}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, sm: 3 },
              mt: 3,
            }}
          >
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
            </TwitterShareButton>{" "}
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
            <Box component="div">
              <IconButton
                sx={{
                  background: "rgba(157, 157, 157, 0.2)",
                  "&:hover": {
                    background: "rgba(157, 157, 157, 0.1)",
                    transform: "scale(1.03)",
                  },
                }}
                onClick={handleClick}
              >
                <Share
                  sx={{
                    color: "#3D5A80",
                    fontSize: 20,
                  }}
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
                more
              </Typography>
            </Box>
            <Popover
              id={id}
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handlePopOverClose}
              TransitionComponent={Transition}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{
                "& .MuiPopover-paper": {
                  width: 324,
                  background: "#ffffff 0% 0% no-repeat padding-box",
                  boxShadow: "0px 2px 10px #00000027",
                  borderRadius: 1,
                  color: Colors.black,
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 1, sm: 3 },
                }}
              >
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
                <PinterestShareButton url={url} media={url} description="">
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
              </Box>
            </Popover>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}

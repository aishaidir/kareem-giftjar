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
  Switch,
  styled,
  Stack,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import React from "react";
import { SubmitButton } from "../../../src/components/form/button";
import {
  MoneyTextField,
  TextField,
} from "../../../src/components/form/textFields";
import { Logo } from "../../../src/components/svgs";
import { Colors } from "../../../src/theme/colors";
import { Fonts } from "../../../src/theme/fonts";

const appHeight = 80;
const sAppHeight = 100;

export default function Contributions() {
  const router = useRouter();
  const [amount, setAmount] = React.useState<number>(0);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [annon, setAnnon] = React.useState(false);
  const handleValueChange = (value: string) => {
    let newValue = String(value);
    let numberValue = newValue.substring(1);
    // eslint-disable-next-line
    numberValue = numberValue.replace(/\,/g, "");
    let numberval = parseFloat(numberValue);
    return numberval;
  };
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

  const amounts = [20000, 30000, 40000];
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
                ml: 1,
                textDecorationColor: "#F69318",
                cursor: "pointer",
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
          px: { xs: 2, sm: 1.5 },
          width: { xs: "100%", xl: "80%" },
          m: "0 auto",
          color: Colors.textColor,
          backgroundColor: { xs: "#000", sm: "#fff" },
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
            display: "block",
            backgroundImage: `url("/images/laptop.jpg")`,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            height: { xs: 200, sm: 400 },
            px: 1,
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
              Mac book
            </Box>{" "}
            <Box component="span">3 days left</Box>
          </Box>
        </Box>
        <Box sx={{ width: "100%", m: "50px auto" }}>
          <Grid container columnSpacing={4}>
            <Grid item xs={12} sx={{ display: { md: "none" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background: "black",
                    maxWidth: "100%",
                  }}
                >
                  <Box
                    component="h4"
                    sx={{
                      textAlign: "center",
                      color: Colors.light,
                      font: `normal normal 510 15px/36px ${Fonts.secondary}`,
                      pb: 1.2,
                      borderBottom: "2px solid rgba(229, 231, 235, 0.39)",
                      mt: 0,
                      mb: 4,
                    }}
                  >
                    Enter an amount to contribute to Sam’s Macbook
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 2,
                    }}
                  >
                    {amounts?.map((amt) => (
                      <Card
                        sx={{
                          background:
                            amount === amt
                              ? "#F3F3F3"
                              : "rgba(157, 157, 157, 0.3)",
                          color: amount === amt ? "#484B50" : "#FAFAFA",
                          transform:
                            amount === amt ? "scale(1.02)" : "scale(1)",
                          borderRadius: 1,
                          width: 108,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          py: 2,
                          font: `normal normal 600 15px/25px ${Fonts.secondary}`,
                          cursor: "pointer",
                        }}
                        onClick={() => setAmount(amt)}
                      >
                        {"₦" +
                          amt.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                      </Card>
                    ))}
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      width: "100%",
                      mt: 3,
                    }}
                  >
                    <form>
                      <MoneyTextField
                        id="amount"
                        name="amount"
                        value={amount}
                        placeholder="Enter a different account"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          let newAmount = handleValueChange(e.target.value);
                          setAmount(newAmount);
                        }}
                      />
                      <TextField
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter your name"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setName(e.target.value);
                        }}
                      />
                      <TextField
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email address"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <SubmitButton
                        style={{ marginTop: 30, padding: "16px 20px" }}
                      >
                        Contribute
                      </SubmitButton>
                    </form>
                  </Box>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  width: "100%",
                  textAlign: { xs: "center", md: "left" },
                  color: { xs: Colors.light, sm: Colors.black },
                  font: {
                    xs: `normal normal 600 15px/30px ${Fonts.secondary}`,
                    md: `normal normal 600 20px/30px ${Fonts.secondary}`,
                  },
                  mb: 2,
                  mt: { xs: 8, sm: 0 },
                }}
              >
                Select another item to contribute to Sam.
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Grid container spacing={3}>
                  {events?.map((evt, i) => {
                    const value = (evt.acquired / evt.price) * 100;
                    return (
                      <Grid item xs={12} key={i + 1}>
                        <Card
                          sx={{
                            maxWidth: "100%",
                            background: "#FFF",
                            borderWidth: "0.566969px",
                            borderStyle: "solid",
                            borderColor: "#E8E8E8",
                            boxShadow:
                              "0px 10.9688px 21.9375px rgba(122, 122, 122, 0.2)",
                            borderRadius: 0,
                          }}
                          onClick={() => router.push(`/contribution/${evt.id}`)}
                        >
                          <CardMedia
                            component="img"
                            alt="wishlist"
                            height="150"
                            image={evt.image}
                            sx={{ borderRadius: 0 }}
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
            </Grid>
            <Grid item md={8} sx={{ display: { xs: "none", md: "inline" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "relative",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#1A1C1F",
                    px: 4,
                    py: 2.5,
                    maxWidth: { xs: "100%", md: 650 },
                    borderRadius: 1,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#1A1C1F",
                    boxShadow:
                      "0px 10.9688px 21.9375px rgba(122, 122, 122, 0.2)",
                  }}
                >
                  <Box
                    component="h4"
                    sx={{
                      textAlign: "center",
                      color: Colors.light,
                      font: `normal normal 510 20px/36px ${Fonts.secondary}`,
                      pb: 2,
                      borderBottom: "2px solid #fff",
                    }}
                  >
                    Enter an amount to contribute to Sam’s Macbook
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",

                      justifyContent: "space-between",
                    }}
                  >
                    {amounts?.map((amt) => (
                      <Card
                        sx={{
                          background:
                            amount === amt
                              ? "#F3F3F3"
                              : "rgba(157, 157, 157, 0.3)",
                          color: amount === amt ? "#484B50" : "#FAFAFA",
                          transform:
                            amount === amt ? "scale(1.05)" : "scale(1)",
                          borderRadius: 1,
                          width: 130,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          py: 2,
                          font: `normal normal 600 20px/36px ${Fonts.secondary}`,
                          cursor: "pointer",
                        }}
                        onClick={() => setAmount(amt)}
                      >
                        {"₦" +
                          amt.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                      </Card>
                    ))}
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      width: "100%",
                      mt: 3,
                    }}
                  >
                    <form>
                      <MoneyTextField
                        id="amount"
                        name="amount"
                        value={amount}
                        placeholder="Enter a different account"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          let newAmount = handleValueChange(e.target.value);
                          setAmount(newAmount);
                        }}
                      />
                      <TextField
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter your name"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setName(e.target.value);
                        }}
                      />
                      <TextField
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email address"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            textAlign: "center",
                            color: Colors.light,
                            font: `normal normal 510 15px/30px ${Fonts.secondary}`,
                            pt: 1,
                            pl: 1,
                          }}
                        >
                          Send as Anonymous
                        </Box>
                        <Switch
                          id="annon"
                          name="annon"
                          value={annon}
                          onChange={(e: any) => setAnnon(e.target.checked)}
                          sx={{
                            width: 28,
                            height: 16,
                            padding: 0,
                            display: "flex",
                            "&:active": {
                              "& .MuiSwitch-thumb": {
                                width: 15,
                              },
                              "& .MuiSwitch-switchBase.Mui-checked": {
                                transform: "translateX(9px)",
                              },
                            },
                            "& .MuiSwitch-switchBase": {
                              padding: "2px",
                              "&.Mui-checked": {
                                transform: "translateX(12px)",
                                color: "#fff",
                                "& + .MuiSwitch-track": {
                                  opacity: 1,
                                  backgroundColor: "#F69318",
                                },
                              },
                            },
                            "& .MuiSwitch-thumb": {
                              boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
                              width: 12,
                              height: 12,
                              borderRadius: "6px",
                              transition: "all 0.3s",
                            },
                            "& .MuiSwitch-track": {
                              borderRadius: 8,
                              opacity: 1,
                              backgroundColor: "rgba(255,255,255,.35)",
                              boxSizing: "border-box",
                            },
                          }}
                        />
                      </Box>
                      <SubmitButton
                        style={{ marginTop: 30, padding: "16px 20px" }}
                      >
                        Contribute
                      </SubmitButton>
                    </form>
                  </Box>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

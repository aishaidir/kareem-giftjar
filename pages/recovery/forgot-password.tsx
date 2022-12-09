import { yupResolver } from "@hookform/resolvers/yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Grid, IconButton, Link, useTheme } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IforgotPassword } from "../../features/types";
import AuthLayout from "../../src/components/authencation";
import { SubmitButton } from "../../src/components/form/button";
import { TextField } from "../../src/components/form/textFields";
import {
  FormSubTitle,
  FormTitle,
} from "../../src/components/form/textFields/styles";
import { Colors } from "../../src/theme/colors";
import { Fonts } from "../../src/theme/fonts";

const schema = yup
  .object({
    email: yup.string().email().required().label("email address"),
    password: yup.string().min(6).required().label("password"),
  })
  .required();
export default function ForgotPasswordPage() {
  const router = useRouter();
  const theme = useTheme();
  //   const [serverErrors, setServerError] = React.useState<
  //     string[] | string | null
  //   >(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IforgotPassword>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IforgotPassword) => {
    console.log("data", data);
  };
  const hasError = (field: keyof IforgotPassword) =>
    errors[field] ? true : false;

  return (
    <Box>
      <Head>
        <title>Login - Kareem</title>
        <meta name="description" content="Kareem giftjar login page" />
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
          onClick={() => router.push("/auth/login")}
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
                background: Colors.secondary,
                color: Colors.light,
              },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} />
          </IconButton>
          Back to login
        </Link>
      </Box>
      <Box
        component="div"
        sx={{
          boxSizing: "border-box",
          width: { xs: "100%", sm: "70%", md: "80%", xl: "60%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItem: "center",
          my: { xs: 2, sm: 3 },
          mx: { xs: 0, sm: "auto" },
          cursor: "pointer",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            flexDirection: "column",
            color: theme.palette.mode === "dark" ? "#fff" : Colors.textColor,
            font: `normal normal 400 18px/20px ${Fonts.secondary}`,
            mt: { xs: 4, md: 7, xl: 12 },
            px: { xs: 1, md: 2 },
          }}
        >
          <Box sx={{ mb: { xs: 1, sm: 2, md: 3 } }}>
            <FormTitle color={theme.palette.mode === "dark" ? "#fff" : "#000"}>
              Forgot your password?
            </FormTitle>
            <FormSubTitle
              color={theme.palette.mode === "dark" ? "#fff" : "000"}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "75%", lg: "53%", xl: "55%" },
                  mb: 2,
                }}
              >
                We all forget things from time to time, and that's okay. Enter
                the email address linked with your account here.
              </Box>
            </FormSubTitle>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    htmlFor="email"
                    name="email"
                    type="email"
                    label="Email address"
                    error={hasError("email")}
                    helper={errors.email?.message}
                    register={register}
                    placeholder="Email address"
                    // disabled={isLoading}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ mt: { xs: 2, md: 5 } }}>
                    <SubmitButton>send reset link</SubmitButton>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
ForgotPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

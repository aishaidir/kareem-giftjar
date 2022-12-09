import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Link, useTheme } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IregisterUser } from "../../features/types";
import AuthLayout from "../../src/components/authencation";
import { SubmitButton } from "../../src/components/form/button";
import { PasswordField, TextField } from "../../src/components/form/textFields";
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
export default function LoginPage() {
  const router = useRouter();
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  //   const [serverErrors, setServerError] = React.useState<
  //     string[] | string | null
  //   >(null);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IregisterUser>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IregisterUser) => {
    console.log("data", data);
  };
  const hasError = (field: keyof IregisterUser) =>
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
          boxSizing: "border-box",
          width: { xs: "100%", xl: "70%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItem: "center",
          my: { xs: 2, md: 3 },
          mx: { xs: 0, md: "auto" },
          cursor: "pointer",
        }}
      >
        <Box
          component="h1"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            color: theme.palette.mode === "dark" ? "#fff" : Colors.textColor,
            font: {
              xs: `normal normal 400 14px/16px ${Fonts.secondary}`,
              sm: `normal normal 400 18px/20px ${Fonts.secondary}`,
            },
            mb: { xs: 4, md: 12 },
          }}
        >
          Already have an account?{" "}
          <Link
            underline="hover"
            sx={{ color: Colors.primary, ml: 0.5 }}
            onClick={() => router.push("/signup")}
          >
            Signup
          </Link>
        </Box>
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
            mt: { xs: 4, md: 12 },
            px: { xs: 1, md: 2 },
          }}
        >
          <Box sx={{ mb: { xs: 1, sm: 2, md: 4 } }}>
            <FormTitle color={theme.palette.mode === "dark" ? "#fff" : "#000"}>
              Welcome back
            </FormTitle>
            <FormSubTitle
              color={theme.palette.mode === "dark" ? "#fff" : "#000"}
            >
              Sign into your account to continue
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
                  <PasswordField
                    id="password"
                    htmlFor="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    showPassword={showPassword}
                    onClick={handleClickShowPassword}
                    register={register}
                    error={errors.password ? true : false}
                    helper={errors.password?.message}
                    placeholder="Enter password"
                    //   disabled={loading}
                  />
                </Grid>
                <Box
                  component="div"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    color: Colors.primary,
                    mt: 1,
                    font: `normal normal 400 14px/18px ${Fonts.secondary}`,
                  }}
                >
                  <Link
                    underline="hover"
                    onClick={() => router.push("/recovery/forgot-password")}
                  >
                    Forgot password
                  </Link>
                </Box>
                <Grid item xs={12}>
                  <SubmitButton>login</SubmitButton>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

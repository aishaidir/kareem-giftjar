import { yupResolver } from "@hookform/resolvers/yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Grid, IconButton, Link, useTheme } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IresetPassword } from "../../features/types";
import AuthLayout from "../../src/components/authencation";
import { SubmitButton } from "../../src/components/form/button";
import { PasswordField } from "../../src/components/form/textFields";
import {
  FormSubTitle,
  FormTitle,
} from "../../src/components/form/textFields/styles";
import { Colors } from "../../src/theme/colors";
import { Fonts } from "../../src/theme/fonts";

const schema = yup
  .object({
    password: yup.string().min(6).required().label("password"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();
export default function ResetPasswordPage() {
  const router = useRouter();
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  //   const [serverErrors, setServerError] = React.useState<
  //     string[] | string | null
  //   >(null);

  function handleClickShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IresetPassword>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IresetPassword) => {
    console.log("data", data);
  };
  const hasError = (field: keyof IresetPassword) =>
    errors[field] ? true : false;

  return (
    <Box>
      <Head>
        <title>Reset password - Kareem</title>
        <meta name="description" content="Kareem giftjar reset password page" />
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
            xs: `normal normal 400 14px/32px ${Fonts.secondary}`,
            sm: `normal normal 400 16px/30px ${Fonts.secondary}`,
          },
          my: { xs: 4, md: 5 },
        }}
      >
        <Link
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
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            flexDirection: "column",
            color: Colors.textColor,
            font: `normal normal 400 18px/20px ${Fonts.secondary}`,
            mt: { xs: 4, md: 12 },
            px: { xs: 1, md: 2 },
          }}
        >
          <Box sx={{ mb: { xs: 1, sm: 2, md: 4 } }}>
            <FormTitle color={theme.palette.mode === "dark" ? "#fff" : "#000"}>
              Reset Password
            </FormTitle>{" "}
            <FormSubTitle
              color={theme.palette.mode === "dark" ? "#fff" : "#000"}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "75%", lg: "53%", xl: "65%" },
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
                <Grid item xs={12}>
                  <PasswordField
                    id="confirmPassword"
                    htmlFor="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    label="Confirm password"
                    showPassword={showConfirmPassword}
                    onClick={handleClickShowConfirmPassword}
                    register={register}
                    error={errors.confirmPassword ? true : false}
                    helper={errors.confirmPassword?.message}
                    placeholder="Confirm password"
                    //   disabled={loading}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ width: "100%", mt: 5 }}>
                    <SubmitButton>Reset Password</SubmitButton>
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
ResetPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

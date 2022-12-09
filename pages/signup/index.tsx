import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Link, useTheme } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { IregisterUser } from "../../features/types";
import AuthLayout from "../../src/components/authencation";
import { SubmitButton } from "../../src/components/form/button";
import {
  PasswordField,
  PhoneInput,
  TextField,
} from "../../src/components/form/textFields";
import { FormTitle } from "../../src/components/form/textFields/styles";
import { Colors } from "../../src/theme/colors";
import { Fonts } from "../../src/theme/fonts";

const schema = yup
  .object({
    firstName: yup.string().required().label("first name"),
    lastName: yup.string().required().label("last name"),
    phone: yup.string().required().label("phone number"),
    email: yup.string().email().required().label("email address"),
    password: yup.string().min(6).required().label("password"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();
export default function SignupPage() {
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
    control,
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
        <title>Signup - Kareem</title>
        <meta name="description" content="Kareem giftjar Signup page" />
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
          Have an account?{" "}
          <Link
            underline="hover"
            sx={{ color: Colors.primary, ml: 0.5 }}
            onClick={() => router.push("/auth/login")}
          >
            Login
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
            color: Colors.textColor,
            font: `normal normal 400 18px/20px ${Fonts.secondary}`,
            mt: { xs: 4, md: 12 },
            px: { xs: 1, md: 2 },
          }}
        >
          <Box sx={{ mb: { xs: 1, sm: 2, md: 4 } }}>
            <FormTitle color={theme.palette.mode === "dark" ? "#fff" : "#000"}>
              Let’s get started
            </FormTitle>
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={hasError("firstName")}
                    id="firstName"
                    htmlFor="firstName"
                    name="firstName"
                    type="text"
                    label="First Name"
                    helper={errors.firstName?.message}
                    register={register}
                    placeholder="Enter your first name"
                    // disabled={isLoading}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={hasError("lastName")}
                    id="lastName"
                    htmlFor="lastName"
                    name="lastName"
                    type="text"
                    label="Last Name"
                    helper={errors.lastName?.message}
                    register={register}
                    placeholder="Enter your last name"
                    // disabled={isLoading}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field: { name, onBlur, onChange, value } }) => (
                      <PhoneInput
                        id="phone"
                        htmlFor="phone"
                        label="Phone"
                        name={name}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        placeholder="Enter phone number"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
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
                  <Box
                    component="div"
                    sx={{
                      width: { xs: "80", sm: "100%" },
                      display: { xs: "block", sm: "flex" },
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      font: `normal normal 400 12px/16px ${Fonts.secondary}`,
                      m: { xs: "0 auto", sm: 0 },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: { xs: "none", sm: "inline-flex" },
                        color:
                          theme.palette.mode === "dark"
                            ? Colors.greyDark
                            : "#000",
                        fontSize: 70,
                        position: "relative",
                        top: 0,
                      }}
                    >
                      &#8226;
                    </Box>
                    By clicking on this checkbox, you agree to our{" "}
                    <Link
                      underline="hover"
                      sx={{ color: Colors.primary, mx: 0.5 }}
                      onClick={() => router.push("/auth/login")}
                    >
                      Terms of Service{" "}
                    </Link>{" "}
                    and{" "}
                    <Link
                      underline="hover"
                      sx={{ color: Colors.primary, ml: 0.5 }}
                      onClick={() => router.push("/auth/login")}
                    >
                      Privacy Policy
                    </Link>{" "}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <SubmitButton>Get started</SubmitButton>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
SignupPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

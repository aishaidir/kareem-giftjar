import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import type { ReactElement } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IchangePassword } from "../../features/types";
import AdminDashboardLayout from "../../src/components/adminLayout";
import { SubmitButton } from "../../src/components/form/button";
import { ButtonsRow } from "../../src/components/form/button/styles";
import { PasswordField } from "../../src/components/form/textFields";
import {
  FormTitle,
  PageTitle,
} from "../../src/components/form/textFields/styles";

const schema = yup
  .object({
    oldpassword: yup.string().required().label("Old password is required"),
    password: yup.string().min(6).required().label("password"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();
export default function SettingPage() {
  const theme = useTheme();
  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  function handleClickShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowOldPassword = () => setShowOldPassword(!showOldPassword);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IchangePassword>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IchangePassword) => {
    console.log("data", data);
  };
  const hasError = (field: keyof IchangePassword) =>
    errors[field] ? true : false;

  return (
    <Box sx={{ width: "100%" }}>
      <Head>
        <title>Setttings - kareem</title>
        <meta name="description" content="Kareem giftjar setttings page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle color={theme.palette.mode === "dark" ? "#fff" : "#000"}>
        Settings
      </PageTitle>
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid #E5E7EB",
          mt: 4,
        }}
      >
        <FormTitle
          color={theme.palette.mode === "dark" ? "#fff" : "#000"}
          style={{ fontSize: 14 }}
        >
          Change password
        </FormTitle>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", lg: 600 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <PasswordField
                id="oldpassword"
                htmlFor="oldpassword"
                name="oldpassword"
                type={showOldPassword ? "text" : "password"}
                label="Old password"
                showPassword={showOldPassword}
                onClick={handleClickShowOldPassword}
                register={register}
                error={errors.oldpassword ? true : false}
                helper={errors.oldpassword?.message}
                placeholder="Enter old password"
                //   disabled={loading}
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
              <ButtonsRow>
                <SubmitButton style={{ width: 140 }}>save changes</SubmitButton>
              </ButtonsRow>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
SettingPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

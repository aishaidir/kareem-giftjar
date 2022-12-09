import { yupResolver } from "@hookform/resolvers/yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Grid, IconButton, Link, styled, useTheme } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { IOTP } from "../../features/types";
import AuthLayout from "../../src/components/authencation";
import { SubmitButton } from "../../src/components/form/button";
import { CssTextField } from "../../src/components/form/textFields";
import {
  FormSubTitle,
  FormTitle,
} from "../../src/components/form/textFields/styles";
import { Colors } from "../../src/theme/colors";
import { Fonts } from "../../src/theme/fonts";

const schema = yup
  .object({
    otp: yup.string().required().label("email address"),
  })
  .required();
export default function VerifyOTPPage() {
  const router = useRouter();
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IOTP>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IOTP) => {
    console.log("data", data);
  };
  const hasError = (field: keyof IOTP) => (errors[field] ? true : false);

  return (
    <Box>
      <Head>
        <title>Verify otp - Kareem</title>
        <meta
          name="description"
          content="Kareem giftjar otp verification page"
        />
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
            xs: `normal normal 400 14px/30px ${Fonts.secondary}`,
            sm: `normal normal 400 16px/30px ${Fonts.secondary}`,
          },
          my: { xs: 4, md: 5 },
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
          onClick={() => router.push("/auth/login")}
        >
          <ArrowBackIcon sx={{ fontSize: 16 }} />
        </IconButton>
        Back to login
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
              OTP Verification
            </FormTitle>
            <FormSubTitle
              color={theme.palette.mode === "dark" ? "#fff" : "#000"}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "75%", lg: "53%", xl: "50%" },
                  mb: 2,
                }}
              >
                Please enter the code sent to +2348128563675 via SMS to validate
                your account.
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
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    <Controller
                      name="otp"
                      control={control}
                      render={({ field: { onBlur, onChange, value } }) => (
                        <CssTextField
                          id="otp"
                          value={value}
                          onBlur={onBlur}
                          onChange={onChange}
                          length={6}
                        />
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    component="h1"
                    sx={{
                      width: "100%",
                      display: "block",
                      color:
                        theme.palette.mode === "dark"
                          ? "#fff"
                          : Colors.textColor,
                      font: {
                        xs: `normal normal 400 14px/30px ${Fonts.secondary}`,
                        sm: `normal normal 400 18px/20px ${Fonts.secondary}`,
                      },
                      mb: { xs: 4, md: 12 },
                      mt: 2,
                    }}
                  >
                    If you didn’t receive the code,
                    <Link
                      underline="hover"
                      sx={{ color: Colors.primary, mx: 0.5 }}
                      onClick={() => console.log("hello")}
                    >
                      Click Here
                    </Link>{" "}
                    to resend code.
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ mt: { xs: 2, md: 5 } }}>
                    <SubmitButton>Validate</SubmitButton>
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
VerifyOTPPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

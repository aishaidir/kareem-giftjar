import { yupResolver } from "@hookform/resolvers/yup";
import { Box, useTheme } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
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
export default function PasswordRecoverySuccessPage() {
  const router = useRouter();
  const theme = useTheme();
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
          width: { xs: "100%", xl: "50%" },
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
            color: theme.palette.mode === "dark" ? "#fff" : Colors.textColor,
            font: `normal normal 400 18px/20px ${Fonts.secondary}`,
            mt: { xs: 4, md: 12 },
            px: { xs: 1, md: 2 },
          }}
        >
          <Box sx={{ mb: { xs: 1, sm: 2, md: 4 } }}>
            <FormTitle color={theme.palette.mode === "dark" ? "#fff" : "#000"}>
              Password Successful!
            </FormTitle>
            <FormSubTitle
              color={theme.palette.mode === "dark" ? "#fff" : "000"}
            >
              Click on Login to sign into your account.
            </FormSubTitle>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/svgs/sent.svg"
              alt="success svg"
              width={400}
              height={300}
              priority
              layout="fixed"
            />

            <Box sx={{ width: "100%", mt: 6 }}>
              <SubmitButton onClick={() => router.push("/auth/login")}>
                login
              </SubmitButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
PasswordRecoverySuccessPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

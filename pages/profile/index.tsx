import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Grid,
  Stack,
  Avatar,
  ListItemText,
  useTheme,
  Badge,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Box } from "@mui/system";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import AdminDashboardLayout from "../../src/components/adminLayout";
import { IregisterUser } from "../../features/types";
import {
  FormTitle,
  PageSubTitle,
  PageTitle,
} from "../../src/components/form/textFields/styles";
import { EditIcon, EmptyWishlist, GiftBox } from "../../src/components/svgs";
import DeleteWishlist from "../../src/components/views/wishList/delete";
import { Colors } from "../../src/theme/colors";
import { Fonts } from "../../src/theme/fonts";
import { SubmitButton } from "../../src/components/form/button";
import { PhoneInput, TextField } from "../../src/components/form/textFields";
import { ButtonsRow } from "../../src/components/form/button/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const StyledAvatar = styled(Avatar)(() => ({
  width: 70,
  height: 70,
}));

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: Colors.light,
    color: Colors.greyDark,
    boxShadow: "0px 10.9688px 21.9375px rgba(122, 122, 122, 0.2)",
    fontSize: 11,
  },
}));
const schema = yup
  .object({
    firstName: yup.string().required().label("first name"),
    lastName: yup.string().required().label("last name"),
    phone: yup.string().required().label("phone number"),
    email: yup.string().email().required().label("email address"),
  })
  .required();
export default function ProfilePage() {
  const router = useRouter();
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
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
    <Box sx={{ width: "100%" }}>
      <Head>
        <title>Profile - kareem</title>
        <meta name="description" content="Kareem giftjar profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle color={theme.palette.mode === "dark" ? "#fff" : "#000"}>
        Profile
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
          Personal Information
        </FormTitle>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", lg: 700 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ mb: { xs: 3, md: 4 } }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <IconButton
                    sx={{ background: Colors.gredient, width: 30, height: 30 }}
                  >
                    <LightTooltip title="Edit photo" placement="right-end">
                      <CameraAltIcon
                        sx={{
                          color: Colors.greyLight,
                          fontSize: 16,
                          cursor: "pointer",

                          "&:hover": {
                            color: Colors.light,
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                    </LightTooltip>
                  </IconButton>
                }
              >
                <StyledAvatar
                  alt="profile image"
                  src="/images/profileman.jpg"
                />
              </Badge>
            </Grid>
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
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
                    error={hasError("phone")}
                    helper={errors.phone?.message}
                  />
                )}
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
ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

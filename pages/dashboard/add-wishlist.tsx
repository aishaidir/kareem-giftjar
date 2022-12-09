import { yupResolver } from "@hookform/resolvers/yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Grid, IconButton, Link, useTheme } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { IWishList } from "../../features/types";
import AdminDashboardLayout from "../../src/components/adminLayout";
import { SubmitButton } from "../../src/components/form/button";
import {
  MoneyTextField,
  Select,
  TextField,
} from "../../src/components/form/textFields";
import { FormTitle } from "../../src/components/form/textFields/styles";
import { AddIcon, EditIcon } from "../../src/components/svgs";
import { Colors } from "../../src/theme/colors";
import { Fonts } from "../../src/theme/fonts";

const SUPPORTED_FORMAT = ["PNG", "JPEG", "JPG", "WEBP"]
  .map(function (x) {
    return "." + x;
  })
  .join(",");

const schema = yup
  .object({
    coverImage: yup
      .mixed()
      .test(
        "required",
        "Cover image is required",
        (value) => value && value.length
      ),
    name: yup.string().required().label("Wishlist name is required"),
    price: yup.string().required().label("Wishlist price is required"),
    day: yup.string().required().label("Day is required"),
    month: yup.string().required().label("Month is required"),
    year: yup.string().required().label("Year is required address"),
  })
  .required();
export default function AddWishlistPage() {
  const router = useRouter();
  const theme = useTheme();
  const [options, setOptions] = React.useState<number[]>([]);

  //   const [serverErrors, setServerError] = React.useState<
  //     string[] | string | null
  //   >(null);
  React.useEffect(() => {
    let date = new Date();
    let year = date.getFullYear();
    let opts = [];
    for (let i = 0; i <= 100; i++) {
      let newYear = year - i;
      opts.push(newYear);
      setOptions(opts);
    }
  }, []);
  const handleChange = (e: any) => {
    e.preventDefault();
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setValue("coverImage", reader.result?.toString());
    };
    reader.readAsDataURL(file);
  };
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<IWishList>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      price: "",
      coverImage: "",
      year: "",
      month: "",
      day: "",
    },
  });
  const coverImage = watch("coverImage");
  const handleValueChange = (value: string) => {
    let newValue = String(value);
    let numberValue = newValue.substring(1);
    // eslint-disable-next-line
    numberValue = numberValue.replace(/\,/g, "");
    let numberval = parseFloat(numberValue);
    return numberval;
  };
  const onSubmit = (data: IWishList) => {
    const newPrice = handleValueChange(data.price);
  };
  const hasError = (field: keyof IWishList) => (errors[field] ? true : false);
  return (
    <Box>
      <Head>
        <title>Add wishlist - Kareem</title>
        <meta name="description" content="Kareem giftjar add wishlist page" />
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
          onClick={() => router.push("/dashboard")}
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
                background: Colors.primary,
                color: Colors.light,
              },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} />
          </IconButton>
          Back to dashboard
        </Link>
      </Box>
      <Box
        component="div"
        sx={{
          boxSizing: "border-box",
          width: { xs: "100%", xl: "60%" },
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
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.mode === "dark" ? "#fff" : Colors.black,
            font: {
              xs: `normal normal 400 14px/16px ${Fonts.secondary}`,
              sm: `normal normal 400 18px/20px ${Fonts.secondary}`,
            },
            mt: { xs: 1.4, md: 4, xl: 6 },
            mb: { xs: 1.4, md: 2 },
          }}
        >
          <FormTitle
            color={theme.palette.mode === "dark" ? Colors.light : Colors.black}
            style={{ font: `normal normal 700 30px/36px ${Fonts.secondary}` }}
          >
            Add Wishlist
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
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    minHeight: { xs: 200, md: 350 },
                    backgroundImage: coverImage
                      ? `url('${coverImage}'), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)`
                      : "",
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? Colors.greyDark
                        : "#6B6D6E",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    color: Colors.light,
                  }}
                >
                  <label
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      font: `normal normal 400 18px/20px ${Fonts.secondary}`,
                      color: Colors.light,
                    }}
                  >
                    <Controller
                      name="coverImage"
                      control={control}
                      render={({ field: { value, ...field } }) => (
                        <>
                          <input
                            {...field}
                            type="file"
                            required
                            accept={SUPPORTED_FORMAT}
                            style={{
                              display: "none",
                            }}
                            onChange={(e) => {
                              handleChange(e);
                              field.onChange(e.target.files);
                            }}
                          />
                          <Link
                            underline="hover"
                            component="span"
                            sx={{
                              cursor: "pointer",
                              color: Colors.light,
                              m: { xs: "90px 0", md: "190px 0" },
                            }}
                          >
                            {coverImage ? (
                              <>
                                <EditIcon /> Change a cover
                              </>
                            ) : (
                              <>
                                <AddIcon /> Select a cover
                              </>
                            )}
                          </Link>
                        </>
                      )}
                    />
                  </label>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={hasError("name")}
                  id="name"
                  htmlFor="name"
                  name="name"
                  type="text"
                  label="Event Name"
                  helper={errors.name?.message}
                  register={register}
                  placeholder="example: Birthday"
                  // disabled={isLoading}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <MoneyTextField
                      {...field}
                      id="price"
                      htmlFor="price"
                      label="Price"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Select
                  error={hasError("year")}
                  id="year"
                  htmlFor="year"
                  name="year"
                  label="Year"
                  helper={errors.day?.message}
                  register={register}
                  placeholder="Year"
                  required
                >
                  {options?.map((opt) => (
                    <option value={opt} key={opt}>
                      {opt}
                    </option>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Select
                  id="month"
                  htmlFor="month"
                  name="month"
                  label="Month"
                  error={hasError("month")}
                  helper={errors.month?.message}
                  register={register}
                  placeholder="Month"
                  required
                  // disabled={isLoading}
                >
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((mnt) => (
                    <option value={mnt} key={mnt}>
                      {mnt}
                    </option>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Select
                  id="day"
                  htmlFor="day"
                  name="day"
                  label="Day"
                  error={hasError("day")}
                  helper={errors.day?.message}
                  register={register}
                  placeholder="Day"
                  required
                  // disabled={isLoading}
                >
                  {" "}
                  {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                  ].map((day) => (
                    <option value={day} key={day}>
                      {day}
                    </option>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    m: "32px 0 18px",
                  }}
                >
                  <SubmitButton width="50%">Save</SubmitButton>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

AddWishlistPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

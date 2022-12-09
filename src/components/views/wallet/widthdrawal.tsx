import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Divider, Grid, IconButton, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box } from "@mui/system";
import * as React from "react";
import { IWithdrawal } from "../../../../features/types";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { SubmitButton } from "../../form/button";
import {
  MoneyTextField,
  MultipleSelectField,
  TextField,
} from "../../form/textFields";
import { FormSubTitle, FormTitle } from "../../form/textFields/styles";
import { Banks } from "../../data";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const schema = yup
  .object({
    amount: yup.string().required().label("Amount is required"),
    bankName: yup.string().required().label("Bank name is required"),
    accountNumber: yup.string().required().label("Account umber is required"),
  })
  .required();
const bankoptions = Banks.map((bank) => {
  return {
    value: bank.name,
    label: bank.name,
  };
});
export default function Withdrawal() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleValueChange = (value: string) => {
    let newValue = String(value);
    let numberValue = newValue.substring(1);
    // eslint-disable-next-line
    numberValue = numberValue.replace(/\,/g, "");
    let numberval = parseFloat(numberValue);
    return numberval;
  };
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors },
  } = useForm<IWithdrawal>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IWithdrawal) => {
    const newPrice = handleValueChange(data.amount);
    console.log("data", data);
  };
  const hasError = (field: keyof IWithdrawal) => (errors[field] ? true : false);

  return (
    <Box sx={{ display: "flex" }}>
      <Button
        variant="outlined"
        disableElevation
        onClick={handleClickOpen}
        sx={{
          color: theme.palette.mode === "dark" ? "#FEB044" : "#F34114",
          width: 150,
          textTransform: "uppercase",
          fontFamily: Fonts.primary,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 0,
          borderRadius: "5px",
          border:
            theme.palette.mode === "dark"
              ? "1px solid #FEB044"
              : "1px solid #F34114",
          p: "10px 14px",
          "&:hover": {
            border:
              theme.palette.mode === "dark"
                ? "1px solid #FEB044"
                : "1px solid #F34114",
            backgroundColor: "transparent",
            transform: "scale(1.02)",
          },
        }}
      >
        Withdraw
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            backgroundColor: "#FFF",
            width: { xs: "100%", sm: 500, xl: 800 },
            padding: "20px 16px",
            borderRadius: 1,
          },
        }}
      >
        <Box
          component="div"
          sx={{
            fontFamily: `normal normal 400 14px/24px ${Fonts.primary}`,
            color: Colors.textColor,
            padding: "10px 10px 20px",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: Colors.greyDark,
            }}
          >
            <CloseIcon />
          </IconButton>
          <FormTitle>Add settlement account</FormTitle>
          <FormSubTitle>Enter your account information</FormSubTitle>
          <Divider
            sx={{
              borderWidth: "1px",
              borderColor: "#E5E7EB",
              borderRadius: "9999px",
              mb: 4,
            }}
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container rowSpacing={1}>
              <Grid item xs={12}>
                <Controller
                  name="amount"
                  control={control}
                  render={({ field: { onBlur, onChange, value } }) => (
                    <MoneyTextField
                      id="amount"
                      htmlFor="amount"
                      label="Amount"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      dialoglabel
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="bankName"
                  control={control}
                  render={({ field: { name, onBlur, onChange, value } }) => (
                    <MultipleSelectField
                      id="bankName"
                      htmlFor="bankName"
                      label="Bank name"
                      placeholder=""
                      name={name}
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      options={bankoptions}
                      isMulti={false}
                      isSearchable={true}
                      getOptionLabel={(bankoptions: any) => bankoptions.label}
                      getOptionValue={(bankoptions: any) => bankoptions.value}
                      dialoglabel
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="accountNumber"
                  htmlFor="accountNumber"
                  label="Account number"
                  name="accountNumber"
                  type="text"
                  error={hasError("accountNumber")}
                  helper={errors.accountNumber?.message}
                  register={register}
                  dialoglabel
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ mt: { xs: 2, md: 5 } }}>
                  <SubmitButton>Withdraw</SubmitButton>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Dialog>
    </Box>
  );
}

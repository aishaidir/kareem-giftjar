import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Divider, Grid, IconButton, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box } from "@mui/system";
import * as React from "react";
import { IOTP } from "../../../../features/types";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { SubmitButton } from "../../form/button";
import { CssTextField } from "../../form/textFields";
import { FormTitle } from "../../form/textFields/styles";

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
    otp: yup.string().required().label("Otp  is required"),
  })
  .required();

export default function WithdrawalVerificationCode() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
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
          <FormTitle>Enter verification code</FormTitle>
          <Divider
            sx={{
              borderWidth: "1px",
              borderColor: "#E5E7EB",
              borderRadius: "9999px",
              mb: 2,
            }}
          />
          <Box
            sx={{
              fontFamily: `normal normal 500 18px/36px ${Fonts.mainText}`,
              color: Colors.greyDark,
            }}
          >
            To authorize withdrawal, you need to enter the code sent to your
            email.
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: 3,
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
                <Box sx={{ mt: { xs: 2, md: 5 } }}>
                  <SubmitButton>Validate</SubmitButton>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Dialog>
    </Box>
  );
}

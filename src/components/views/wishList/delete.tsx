import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box } from "@mui/system";
import * as React from "react";
import { MenuNav } from "../../callout";
import { DeleteButton } from "../../form/button";
import { CancelButton } from "../../form/button";
import { ButtonsRow } from "../../form/button/styles";
import { TextField } from "../../form/textFields";
import { DeleteTitle } from "../../form/textFields/styles";
import { Fonts } from "../../../theme/fonts";
import { DeleteIcon } from "../../svgs";
import { Colors } from "../../../theme/colors";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function DeleteWishlist() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <MenuNav onClick={handleClickOpen}>
        <ListItemButton
          sx={{
            width: "100%",
            py: 0,
            minHeight: 32,
            color: Colors.greyDark,
          }}
        >
          <ListItemIcon sx={{ color: "inherit" }}>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText
            primary="Delete wishlist"
            primaryTypographyProps={{
              fontFamily: Fonts.primary,
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 12,
              lineHeight: "20px",
              color: Colors.deleteButton,
            }}
          />
        </ListItemButton>
      </MenuNav>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            backgroundColor: "#FFF",
            width: "100%",
            padding: "20px 16px",
            "@media only screen and (min-width: 600px)": {
              width: 500,
            },
          },
        }}
      >
        <DeleteTitle>Whoops caution!</DeleteTitle>
        <Box
          component="div"
          sx={{
            fontFamily: Fonts.primary,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "24px",
            color: Colors.textColor,
          }}
        >
          Are you sure that you want to delete this <strong>wish list</strong>?
          The data will be gone forever.
        </Box>
        <ButtonsRow style={{ padding: "8px 0 8px" }}>
          <CancelButton onClick={handleClose} style={{ width: "120px" }}>
            cancel
          </CancelButton>
          <DeleteButton
            onClick={handleClose}
            style={{ width: "120px" }}
            // disabled={disabled}
          >
            Yes Delete
          </DeleteButton>
        </ButtonsRow>
      </Dialog>
    </div>
  );
}

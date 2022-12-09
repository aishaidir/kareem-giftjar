import * as React from "react";
import {
  Popover,
  Typography,
  IconButton,
  styled,
  List,
  Box,
} from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";

interface StyleProps {
  TopAction?: string | React.ReactNode;
  BottomAction?: string | React.ReactNode;
  ThirdAction?: string | React.ReactNode;
  FourthAction?: string | React.ReactNode;
  trans?: boolean;
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(() => ({
  "& .MuiPaper-root": {
    borderRadius: "8px",
    border: " 1px solid #E5E7EB",
    minWidth: 160,
    width: "auto",
    color: Colors.textColor,
    background: "#FFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    font: `normal normal 600 12px/25px ${Fonts.primary}`,
    boxShadow: "0px 2px 16px rgba(17, 24, 39, 0.08)",
    padding: "4px 0",
    "& .MuiMenu-list": {
      width: "100%",
      padding: "4px 0",
    },
  },
}));
export const MenuNav = styled(List)<{ component?: React.ElementType }>({
  width: "100%",
  padding: "0 4px",
  "& .MuiListItemButton-root": {
    padding: "0 8px",
    borderRadius: "8px",
    "&:hover": {
      background: "rgba(86, 128, 137, 0.2)",
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});
export const MenuCheckbox = styled(List)<{ component?: React.ElementType }>({
  width: "100%",
  padding: 0,
  "& .MuiListItemButton-root": {
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: "4px",
    "&:hover": {
      background: "#fff",
    },
  },
});

export default function Callout({
  TopAction,
  BottomAction,
  ThirdAction,
  FourthAction,
  trans,
}: StyleProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <MoreHorizIcon
        onClick={handleClick}
        sx={{
          backgroundColor: trans ? "transparent" : "rgba(243,244,246,0.9)",
          borderRadius: "8px",
          fontSize: 8,
          width: 35,
          height: 35,
          my: 0.5,
          p: "2px 5px",
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {TopAction && (
            <div>
              {TopAction}
              {BottomAction ? <div className="line" /> : null}
            </div>
          )}

          {BottomAction && (
            <div>
              {BottomAction}
              {ThirdAction ? <div className="line" /> : null}
            </div>
          )}

          {ThirdAction && (
            <div>
              {ThirdAction}
              {FourthAction ? <div className="line" /> : null}
            </div>
          )}

          {FourthAction && FourthAction}
        </StyledMenu>
      </Popover>
    </Box>
  );
}

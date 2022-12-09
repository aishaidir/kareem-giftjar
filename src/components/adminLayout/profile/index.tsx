import { alpha, Avatar, Button, Menu, MenuItem, styled } from "@mui/material";
import { MenuProps } from "@mui/material/Menu";
import * as React from "react";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { ArrowDown } from "../../svgs";

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
))(({ theme }) => ({
  "& .MuiPaper-root": {
    minWidth: 100,
    backgroundColor: "#fcfdff",
    borderLeft: "1px solid #eee",
    color: "#282828",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 2px 16px rgba(17, 24, 39, 0.08)",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    marginTop: 1,
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "#568089",
        marginRight: "12px",
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        onClick={handleClick}
        size="small"
        endIcon={<ArrowDown />}
        sx={{
          width: 50,
          color: { xs: Colors.light, sm: "#9CA3AF" },
        }}
      >
        <Avatar
          alt="User image"
          src="/images/profileman.jpg"
          sx={{ width: 30, height: 30, mr: 1 }}
        />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem
          onClick={handleClose}
          disableRipple
          sx={{
            p: "0px 18px",
            "&:hover": {
              background: "#FFFFFF",
            },
          }}
        >
          <Button
            sx={{
              color: "#F43F5E",
              textTransform: "none",
              font: `normal nnormal 600 12/20px ${Fonts.primary} `,
            }}
          >
            Sign out
          </Button>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

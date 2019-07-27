import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const options = [
  "Favorilerime kaydet",
  "Bu gonderiyi sikayet et",
  "Bu kisiyi engelle",
  "Gonderiyi daha seyrek goster"
];

export default function PostCardMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="More"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem key={option} disabled={index === 0}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

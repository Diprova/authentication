import { useState } from "react";
import { Avatar } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useHistory } from "react-router-dom";

const RegisterDropDown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="signUp">
      <Avatar
        sx={{ bgcolor: "deepOrange[500]" }}
        src="/broken-image.jpg"
        className="avatar"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ horizontal: "center" }}
      >
        <MenuItem onClick={() => history.push("/signUp")}>Sign Up</MenuItem>
        <MenuItem onClick={() => history.push("/signIn")}>Sign In</MenuItem>
        <MenuItem onClick={() => history.push("/")}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
};

export default RegisterDropDown;

import { useState } from "react";
import { Avatar } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from './Action/authAction';

const RegisterDropDown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear()
    window.location.href = "/"

  }

  return (
    <div className="signUp">
      <Avatar
        src="/broken-image.jpg"
        className="avatar"
        aria-controls={open ? "simple-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        style={{ cursor: "pointer" }}
        sx={{ width: 70, height: 70 }}
        onClick={handleClick}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        style={{ marginTop: '0.5rem' }}
        transformOrigin={{ horizontal: "center" }}
      >
        <MenuItem onClick={() => history.push("/signUp")}>Sign Up</MenuItem>
        <MenuItem onClick={() => history.push("/signIn")}>Sign In</MenuItem>
        <MenuItem onClick={logout}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
};

export default RegisterDropDown;

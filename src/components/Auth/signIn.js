import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  InputAdornment,
  IconButton,
  Alert
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getUser } from '../Action/authAction'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import "./index.css";

const SignIn = () => {
  const { userAccess } = useSelector(state => state.auth)
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    showPassword: false
  });
  const dispatch = useDispatch()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    delete formValues.showPassword
    console.log(formValues);
    dispatch(getUser(formValues))
  };

  const handleMouseDownPassword = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword
    });
  };

  const handleMouseUpPassword = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword
    });
  };

  return (
    <Card className="signup_structure">
      <CardContent>
        {userAccess && <Redirect to="/profile" />}
        <form onSubmit={handleSubmit} className="signup_form ">
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            rowSpacing={1}
          >
            <Grid item>
              <h4>Sign In</h4>
            </Grid>
            <Grid item>
              <TextField
                id="outlined-name"
                name="email"
                label="Email"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-name"
                name="password"
                label="Password"
                type={formValues.showPassword ? "text" : "password"}
                value={formValues.password}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {formValues.showPassword ? (
                          <Visibility fontSize="small" />
                        ) : (
                          <VisibilityOff fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignIn;

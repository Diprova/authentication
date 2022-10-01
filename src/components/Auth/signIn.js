import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  InputAdornment,
  IconButton
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import "./index.css";

const SignIn = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    showPassword: false
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
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

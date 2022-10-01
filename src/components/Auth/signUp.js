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

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false
  });
  const [error, setError] = useState({ state: false, errorInfo: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleMouseDownPassword = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword
    });
  };

  const handleMouseUpPassword = (event) => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError((error.state = false));
    let validatedFields = validate(formValues).isValid;
    let errors = validate(formValues).errors;
    if (!Object.keys(errors).length > 0) {
      console.log(validatedFields);
    } else {
      setError({ ...error, state: true, errorInfo: errors });
    }
  };

  const validate = (values) => {
    let isValid = true;
    let errors = {};

    if (values.name !== undefined && values.name === "") {
      isValid = false;
      errors["name"] = "Required";
    }

    if (
      values.email !== undefined &&
      (values.email === "" || values.email !== "")
    ) {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(values.email)) {
        isValid = false;
        errors["email"] = "Enter a valid Email";
      }
    }

    if (values.password !== undefined) {
      let pattern = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,}$/;
      if (!pattern.test(values.password)) {
        isValid = false;
        errors["password"] = "Enter a Valid Password";
      }
    }

    if (values.confirmPassword !== undefined) {
      if (values.confirmPassword !== values.password) {
        isValid = false;
        errors["confirmPassword"] = "Your password does not match";
      }
    }

    return { isValid, errors };
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
              <h4>Sign Up</h4>
            </Grid>
            <Grid item>
              <TextField
                id={
                  error.length && error.errorInfo.name
                    ? "outlined-error"
                    : "outlined-name"
                }
                name="name"
                label="Name"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
                error={
                  error.state && error.errorInfo && error.errorInfo.name
                    ? true
                    : false
                }
                helperText={error.state ? error.errorInfo.name : ""}
              />
            </Grid>
            <Grid item>
              <TextField
                id={
                  error.state && error.errorInfo.email
                    ? "outlined-error"
                    : "outlined-name"
                }
                name="email"
                label="Email"
                type="email"
                value={formValues.email}
                onChange={handleInputChange}
                error={
                  error.state && error.errorInfo && error.errorInfo.email
                    ? true
                    : false
                }
                helperText={error.state ? error.errorInfo.email : ""}
              />
            </Grid>
            <Grid item>
              <TextField
                id={
                  error.state && error.errorInfo.password
                    ? "outlined-error"
                    : "outlined-name"
                }
                name="password"
                label="Create Password"
                type={formValues.showPassword ? "text" : "password"}
                value={formValues.password}
                onChange={handleInputChange}
                error={
                  error.state && error.errorInfo && error.errorInfo.password
                    ? true
                    : false
                }
                helperText={error.state ? error.errorInfo.password : ""}
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
              <TextField
                id={
                  error.state && error.errorInfo.confirmPassword
                    ? "outlined-error"
                    : "outlined-name"
                }
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                error={
                  error.state &&
                  error.errorInfo &&
                  error.errorInfo.confirmPassword
                    ? true
                    : false
                }
                helperText={error.state ? error.errorInfo.confirmPassword : ""}
              />
            </Grid>
            {error && error.errorInfo && error.errorInfo.password ? (
              <Card className="error_info">
                <CardContent>
                  <p>
                    It contains at least 8 characters and at most 20 characters.
                  </p>
                  <p>It contains at least one digit.</p>
                  <p>It contains at least one upper case alphabet.</p>
                  <p>It contains at least one lower case alphabet.</p>
                  <p>
                    It contains at least one special character which includes
                    !@#$%&*()-+=^.
                  </p>
                  <p>It doesn’t contain any white space.</p>
                </CardContent>
              </Card>
            ) : null}
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
export default SignUp;

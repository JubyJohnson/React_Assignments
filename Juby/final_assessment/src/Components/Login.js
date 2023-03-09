import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Link,
  TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";

function Login() {
  const navigate = useNavigate();

  const FieldValidation = yup.object().shape({
    userName: yup.string().required("Please enter user name"),
    password: yup.string().required("Please enter Password"),
  });

  const initialValue = {
    userName: "",
    password: "",
  };

  const onSubmit = (values, props) => {
    console.log(values);
  };
  const submitButtonClick = () => {
    navigate("/dashboard");
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "inline-flex",
        width: 500,
        height: 400,
        justifyContent: "center",
        border: 5,
        borderColor: "purple",
        paddingTop: 3,
      }}
    >
      <div>
        <img
          src="https://winningbets-aus.com/login-purple.png"
          alt="Login"
          width="300px"
          height="100px"
        />
        <Formik
          initialValues={initialValue}
          validationSchema={FieldValidation}
          validateOnChange={true}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Field
                  as={TextField}
                  required
                  name="userName"
                  label="User Name"
                  onChange={props.handleChange}
                  helperText={<ErrorMessage name="userName" />}
                  error={props.errors.userName && props.touched.userName}
                  style={{ width: 300 }}
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <AccountCircleIcon />
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Field
                  as={TextField}
                  required
                  name="password"
                  type="password"
                  label="Password"
                  onChange={props.handleChange}
                  helperText={<ErrorMessage name="password" />}
                  error={props.errors.password && props.touched.password}
                  style={{ width: 300 }}
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <LockIcon />
                      </IconButton>
                    ),
                  }}
                />
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  style={{ marginLeft: "100px" }}
                >
                  <Button
                    type="submit"
                    disabled={!props.isValid}
                    onClick={submitButtonClick}
                  >
                    {" "}
                    Submit{" "}
                  </Button>
                </ButtonGroup>
                <Link
                  href="/register"
                  underline="always"
                  style={{ paddingLeft: "15px" }}
                >
                  {"Create Account"}
                </Link>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Box>
  );
}

export default Login;

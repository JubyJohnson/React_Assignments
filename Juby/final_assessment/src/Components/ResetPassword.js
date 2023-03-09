import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from 'yup';

function ResetPassword() {
  const PasswordRegEx =
    /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

  const FieldValidation = yup.object().shape({
    userName: yup.string().required("Please enter user name"),

    newPassword: yup
      .string()
      .matches(PasswordRegEx, "Uppercase Lowercase Special char Required")
      .min(8, "Password Should be minimum 8 character")
      .required("Please enter Password"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Password does not matched")
      .required("Please Confirm Password"),
  });

  const initialValue = {
    userName: "",
    newPassword: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, props) => {
    console.log(values);
    props.resetForm();
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
          onSubmit={handleSubmit}
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
                  name="newPassword"
                  label="New Password"
                  type="password"
                  onChange={props.handleChange}
                  helperText={<ErrorMessage name="newPassword" />}
                  error={props.errors.newPassword && props.touched.newPassword}
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
                <Field
                  as={TextField}
                  required
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  onChange={props.handleChange}
                  helperText={<ErrorMessage name="confirmPassword" />}
                  error={
                    props.errors.confirmPassword &&
                    props.touched.confirmPassword
                  }
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
                  style={{ marginTop: "20px", marginLeft: "100px" }}
                >
                  <Button disabled={!props.isValid}>Submit</Button>
                </ButtonGroup>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Box>
  );
}

export default ResetPassword;
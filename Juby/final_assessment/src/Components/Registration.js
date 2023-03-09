import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";

function Registration() {
  const navigateTo = useNavigate();

  const phoneNumberRegEx = /^[0-9]{10}/;

  const FieldValidation = yup.object().shape({
    firstName: yup.string().required("Please enter First Name"),

    lastName: yup.string().required("Please enter Last Name"),

    phone: yup
      .string()
      .matches(phoneNumberRegEx, "Invalid Phone Number")
      .max(11, "Invalid Phone Number")
      .required("Please enter Phone number"),

    email: yup
      .string()
      .email("Please enter a Vaid Email")
      .required("Please enter Email"),

    age: yup.string().required("Please enter Year"),
  });

  const initialValue = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
  };

  const registerButtonClick = () => {
    navigateTo("/reset");
  };

  const cancelButtonClick = () => {
    navigateTo("/");
  };

  const handleSubmit = (values, props) => {
    console.log(values);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "inline-flex",
        width: 800,
        height: 500,
        bgcolor: "lightblue",
        justifyContent: "center",
        border: 5,
        borderColor: "darkblue",
      }}
    >
      <div>
        <img
          src="https://info.nrao.edu/do/odi/TownHallNM/regba.jpg/image"
          alt="Register"
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
                style={{ paddingTop: "20px", paddingLeft: "30px" }}
              >
                <Field
                  as={TextField}
                  required
                  name="firstName"
                  label="First Name"
                  onChange={props.handleChange}
                  helperText={<ErrorMessage name="firstName" />}
                  error={props.errors.firstName && props.touched.firstName}
                />

                <Field
                  as={TextField}
                  required
                  name="lastName"
                  label="Last Name"
                  onChange={props.handleChange}
                  helperText={<ErrorMessage name="lastName" />}
                  error={props.errors.lastName && props.touched.lastName}
                />
              </Grid>

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ paddingLeft: "30px" }}
              >
                <Field
                  as={TextField}
                  required
                  name="phone"
                  label="Phone"
                  onChange={props.handleChange}
                  helperText={<ErrorMessage name="phone" />}
                  error={props.errors.phone && props.touched.phone}
                />

                <Field
                  as={TextField}
                  required
                  name="email"
                  label="Email"
                  type="Email"
                  onChange={props.handleChange}
                  helperText={<ErrorMessage name="email" />}
                  error={props.errors.email && props.touched.email}
                />
              </Grid>

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ paddingLeft: "30px" }}
              >
                <Field
                  as={TextField}
                  required
                  name="age"
                  label="Age"
                  onChange={props.handleChange}
                  helperText={<ErrorMessage name="age" />}
                  error={props.errors.age && props.touched.age}
                />

                <RadioGroup
                  required
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="gender"
                  defaultValue="female"
                  style={{ paddingLeft: "20px" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ paddingLeft: "30px" }}
              >
                <FormLabel style={{ marginLeft: "10px" }}>Skills</FormLabel>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Java"
                  style={{ paddingLeft: "20px" }}
                />
                <FormControlLabel control={<Checkbox />} label="React" />
                <FormControlLabel control={<Checkbox />} label="Mongo Db" />
                <FormControlLabel control={<Checkbox />} label="Spring Boot" />
                <FormControlLabel control={<Checkbox />} label="JUnit" />
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ paddingLeft: "80px", paddingTop: "20px" }}
              >
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  style={{ marginLeft: "70px" }}
                >
                  <Button
                    type="submit"
                    disabled={!props.isValid}
                    onClick={registerButtonClick}
                  >
                    Register
                  </Button>
                  <Button onClick={cancelButtonClick}>Cancel</Button>
                </ButtonGroup>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Box>
  );
}

export default Registration;
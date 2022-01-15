import React, { useState } from "react";

// formik
import { Formik, Form, Field } from "formik";

// yup
import * as Yup from "yup";

// formik mui
import { TextField, CheckboxWithLabel, RadioGroup, Select, SimpleFileUpload, Switch } from "formik-mui";

// mui
import { Box, Button, FormControlLabel, Radio, MenuItem, Rating, Slider } from "@mui/material";

// date
import AdapterDateFns from "@mui/lab/AdapterDateFns"; // Depending on the library you radioValues
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "formik-mui-lab";

const InformationForm = () => {
  const [firstNameState, setFirstNameState] = useState("");

  console.log(firstNameState);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        initialValues={{ firstName: firstNameState, lastName: "", email: "", phone: "", address: "", date: "", checkoutValues: false, radioValues: "", selectJobType: "", selectHoppy: [], file: "", switch: false, sliderValue: 30, rating: 5 }}
        validationSchema={Yup.object({
          // Text Field
          firstName: Yup.string().uppercase().max(15, "Must be 15 characters or less").required("Required"),
          lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"),
          phone: Yup.number().integer("Should be integer number!").positive("Should be positive number!"),
          address: Yup.string().uppercase().max(15, "Must be 15 characters or less").required("Required"),
          // Date
          date: Yup.date().required("Required"),
          // Check Box
          checkoutValues: Yup.boolean().required("Required").oneOf([true], "You must accept the terms and conditions."),
          // Radio Box
          radioValues: Yup.string().required("Required"),
          // Select Single
          selectJobType: Yup.string().oneOf(["developer", "hr", "artist"], "Invalid Job Type").required("Select Job Title"),
          // Select Multi
          //
          // File Upload
          file: Yup.string().required("Required"),
          // Switch
          switch: Yup.boolean().required("Required"),
          // Slider
          sliderValue: Yup.number().required("Required"),
          // Rating
          rating: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setFirstNameState(values.firstName);
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(props, isSubmitting) => (
          <Form>
            <Box sx={{ padding: "20px", borderRadius: "6px", backgroundColor: "#24253C", color: "#F0F3F4", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", marginTop: "200px", boxShadow: "0 0 18px 0px #006f54", border: "2px solid #006f54" }}>
              {/* Formik-MUI  */}
              <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
                {/* ------------- TextField --------------- */}
                <Field component={TextField} label="First Name" name="firstName" type="text" placeholder="Jane" />
                <Field component={TextField} label="Last Name" name="lastName" type="text" placeholder="Doe" />
                <Field component={TextField} name="email" type="email" label="Email" />
                <Field component={TextField} label="Phone" name="phone" type="number" placeholder="Phone" />
                <Field component={TextField} label="Address" name="address" type="text" placeholder="Address" />

                {/* ------------- DatePicker --------------- */}
                <Field component={DatePicker} name="date" label="Date" textField={{ variant: "outlined" }} />
              </Box>

              <Box>
                {/* ------------- CheckboxWithLabel --------------- */}
                <Field component={CheckboxWithLabel} type="checkbox" name="checkoutValues" Label={{ label: "Checkbox" }} />
              </Box>

              {/* ------------- RadioGroup --------------- */}
              <Field component={RadioGroup} name="radioValues">
                <FormControlLabel value="painting" control={<Radio disabled={isSubmitting} />} label="Painting" disabled={isSubmitting} />
                <FormControlLabel value="drawing" control={<Radio disabled={isSubmitting} />} label="Drawing" disabled={isSubmitting} />
              </Field>

              {/* ------------- Select --------------- */}
              <Field component={Select} formHelperText={{ children: "your job ?" }} id="selectJobType" name="selectJobType" labelId="age-simple" label="Job Title">
                <MenuItem value="developer">Defeloper</MenuItem>
                <MenuItem value="hr">Hr</MenuItem>
                <MenuItem value="artist">Artist</MenuItem>
              </Field>

              {/* ------------- Multi Select --------------- */}
              <Field sx={{ width: "100%" }} component={Select} multiple formHelperText={{ children: "your  hoppy ?" }} id="hoppy" name="selectHoppy" labelId="age-simple" label="Hoppy">
                <MenuItem disabled value="">
                  Select a Hoppy
                </MenuItem>
                <MenuItem value="Read">Read</MenuItem>
                <MenuItem value="Travel">Travel</MenuItem>
                <MenuItem value="Swim">Swim</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Field>

              {/* ------------ File Upload --------------- */}
              <Field component={SimpleFileUpload} name="file" label="Simple File Upload" textField={{ variant: "outlined" }} />

              {/* ------------- Switch --------------- */}
              <Field component={Switch} type="checkbox" name="switch" />

              {/* ------------- Slider --------------- */}
              <Field sx={{ width: "200px" }} defaultValue={30} component={Slider} name="sliderValue" />

              {/* ------------- Rating --------------- */}
              <Field sx={{ width: "200px" }} defaultValue={3} component={Rating} name="rating" />

              <button onClick={props.handleReset}>Reset</button>
              <button type="submit">Submit</button>
            </Box>
          </Form>
        )}
      </Formik>
    </LocalizationProvider>
  );
};

export default InformationForm;

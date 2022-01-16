import React, { useState, useRef, useEffect } from "react";

// formik
import { Formik, Form, Field } from "formik";

// yup
import * as Yup from "yup";

// formik mui
import { TextField, CheckboxWithLabel, RadioGroup, Select, SimpleFileUpload, Switch } from "formik-mui";

// mui
import { Box, Button, FormControlLabel, Radio, MenuItem, Rating, Slider, FormControl } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

// date
import AdapterDateFns from "@mui/lab/AdapterDateFns"; // Depending on the library you radioValues
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "formik-mui-lab";

// styled
import { CssTextField, CssDatePicker, CssSelect, MaterialUISwitch } from "./formStyels";

const InformationForm = () => {
  const [firstNameState, setFirstNameState] = useState("");
  const [dayCondition, setDayCondition] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    console.log(formRef?.current?.values);
  }, [formRef]);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        innerRef={formRef}
        initialValues={{ firstName: firstNameState, lastName: "", email: "", phone: "", address: "", date: "", checkoutValues: false, radioValues: "", selectJobType: "", selectHoppy: [], file: "", switch: dayCondition, sliderValue: 30, rating: 5 }}
        validationSchema={Yup.object({
          // Text Field
          firstName: Yup.string().uppercase().max(15, "Must be 15 characters or less").required(),
          lastName: Yup.string().max(20, "Must be 20 characters or less").required(),
          email: Yup.string().email("Invalid email address").required(),
          phone: Yup.number().required().integer("Should be integer number!").positive("Should be positive number!"),
          address: Yup.string().uppercase().max(15, "Must be 15 characters or less").required(),
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
            <Box sx={{ padding: "20px", borderRadius: "6px", backgroundColor: "#DDE2E6", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", margin: "100px 0px", boxShadow: "0 0 18px 0px black" }}>
              {/* Formik-MUI  */}
              <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridGap: "10px", marginBottom: "10px" }}>
                {/* ------------- TextField --------------- */}
                <Field component={TextField} label="First Name" name="firstName" type="text" placeholder="Jane" color="warning" />
                <Field component={TextField} label="Last Name" name="lastName" type="text" placeholder="Doe" />
                <Field component={TextField} name="email" type="email" label="Email" />
                <Field component={TextField} label="Phone" name="phone" type="number" placeholder="Phone" />
                <Field component={TextField} label="Address" name="address" type="text" placeholder="Address" />

                {/* ------------- DatePicker --------------- */}
                <Field component={DatePicker} name="date" label="Date" />
              </Box>

              <FormControl sx={{ width: "100%", marginBottom: "10px" }}>
                {/* ------------- Select --------------- */}
                <Field component={Select} id="selectJobType" name="selectJobType" labelId="age-simple" label="Job Title" autoWidth>
                  <MenuItem value="developer">Defeloper</MenuItem>
                  <MenuItem value="hr">Hr</MenuItem>
                  <MenuItem value="artist">Artist</MenuItem>
                </Field>
              </FormControl>

              {/* ------------- Multi Select --------------- */}
              <FormControl sx={{ width: "100%", marginBottom: "10px" }}>
                <Field component={Select} multiple id="hoppy" name="selectHoppy" labelId="age-simple" label="Hoppy">
                  <MenuItem disabled value="">
                    Select a Hoppy
                  </MenuItem>
                  <MenuItem value="Read">Read</MenuItem>
                  <MenuItem value="Travel">Travel</MenuItem>
                  <MenuItem value="Swim">Swim</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Field>
              </FormControl>

              {/* ------------- RadioGroup --------------- */}
              <FormLabel component="legend">Gender</FormLabel>
              <Field component={RadioGroup} name="radioValues">
                <FormControlLabel value="female" control={<Radio disabled={isSubmitting} />} label="Female" disabled={isSubmitting} />
                <FormControlLabel value="male" control={<Radio disabled={isSubmitting} />} label="male" disabled={isSubmitting} />
              </Field>

              <Box sx={{ margin: "5px 0px", border: "1px solid ", border: "1px solid #aaaeb1", padding: "10px", borderRadius: "4px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "96%" }}>
                {/* ------------- Slider --------------- */}
                <FormLabel component="legend">Salary Expectation</FormLabel>
                <Field defaultValue={30} component={Slider} name="sliderValue" />
              </Box>

              {/* ------------- CheckboxWithLabel --------------- */}
              <Field component={CheckboxWithLabel} type="checkbox" name="checkoutValues" Label={{ label: "Checkbox" }} />

              <Box sx={{ margin: "5px 0px", border: "1px solid ", border: "1px solid #aaaeb1", padding: "10px", borderRadius: "4px", display: "flex", justifyContent: "center", width: "96%" }}>
                {/* ------------ File Upload --------------- */}
                <Field component={SimpleFileUpload} name="file" accept="image/*" />
              </Box>

              {/* ------------- Switch --------------- */}
              <Box sx={{ margin: "5px 0px" }}>
                <FormLabel component="legend">preferred Working Time</FormLabel>
                <Field component={MaterialUISwitch} type="checkbox" name="switch" label="Disabled" />
              </Box>

              {/* ------------- Rating --------------- */}
              <Box sx={{ margin: "5px 0px", border: "1px solid ", border: "1px solid #aaaeb1", padding: "10px", borderRadius: "4px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "96%" }}>
                <FormLabel component="legend">Rate Us</FormLabel>
                <Field defaultValue={3} component={Rating} name="rating" />
              </Box>
              <Box sx={{ margin: "5px 0px", padding: "10px", display: "flex", justifyContent: "end", width: "96%" }}>
                <Button onClick={props.handleReset} variant="contained" color="error" sx={{ marginRight: "5px" }}>
                  Reset
                </Button>
                <Button type="submit" variant="contained" color="success">
                  Submit
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </LocalizationProvider>
  );
};

export default InformationForm;

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useField } from "formik";

export const RadioButtonsGroup = ({ ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" defaultValue="female" {...field} {...props}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </FormControl>
  );
};

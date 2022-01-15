import React from "react";
import TextField from "@mui/material/TextField";
import { useField } from "formik";

import DatePicker from "@mui/lab/DatePicker";
const MyFormDate = ({ ...props }) => {
  const [field, meta] = useField(props);
  console.log(field, props);
  return (
    <>
      <DatePicker value={field.value} onChange={() => field.onChange} {...props} renderInput={(params) => <TextField {...params} />} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default MyFormDate;

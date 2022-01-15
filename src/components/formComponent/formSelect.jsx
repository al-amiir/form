import { FormControl, InputLabel, Select } from "@mui/material";
import { useField } from "formik";

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select labelId="demo-simple-select-label" {...field} {...props} placeholder="Select" />
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </FormControl>
    </>
  );
};

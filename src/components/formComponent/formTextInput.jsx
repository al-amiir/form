import { useField } from "formik";
import TextField from "@mui/material/TextField";

// reusableComponent
export const MyTextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField {...field} {...props} variant="outlined" sx={{ color: "warning" }} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

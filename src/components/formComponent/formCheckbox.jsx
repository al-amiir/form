import { useField } from "formik";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      {/* <label className="checkbox-input">
        <input {...field} {...props} />
        {children}
      </label> */}
      <FormGroup>
        <FormControlLabel control={<Checkbox {...field} {...props} />} label="Label" />
      </FormGroup>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

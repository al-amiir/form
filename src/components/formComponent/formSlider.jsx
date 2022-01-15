import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { useField } from "formik";

// import VolumeDown from "@mui/icons-material/VolumeDown";
// import VolumeUp from "@mui/icons-material/VolumeUp";

export default function ContinuousSlider({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        {/* <VolumeDown /> */}
        <Slider aria-label="Volume" {...field} {...props} />
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}

        {/* <VolumeUp /> */}
      </Stack>
      {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
    </Box>
  );
}

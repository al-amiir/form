import { Box } from "@mui/system";
import React from "react";
import InformationForm from "./components/InformationForm";

const App = () => {
  return (
    <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#367559" }}>
      <InformationForm />
    </Box>
  );
};

export default App;

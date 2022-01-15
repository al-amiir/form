import { Box } from "@mui/system";
import React from "react";
import InformationForm from "./components/InformationForm";

const App = () => {
  return (
    <Box sx={{ position: "relative", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1B1D31" }}>
      <InformationForm />
    </Box>
  );
};

export default App;

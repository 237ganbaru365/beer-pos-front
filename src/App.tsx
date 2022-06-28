import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSignup from "./views/pages/admin/AdminSignup";

function App() {
  return (
    <Routes>
      <Route path="/admin/signup" element={<AdminSignup />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

import AdminLogin from "./views/pages/admin/AdminLogin";
import AdminSignup from "./views/pages/admin/AdminSignup";

function App() {
  return (
    <Routes>
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;

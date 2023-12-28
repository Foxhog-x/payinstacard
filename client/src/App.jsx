import "./App.css";
import { Homepage } from "./pages/Homepage";

import { Loginpage } from "./pages/Loginpage";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import SignUp from "./pages/Signup";

import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProtectedRoute Component={Homepage} />} />
      </Routes>
    </>
  );
}

export default App;

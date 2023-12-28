import React from "react";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();
  const handleToken = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    console.log("clicked");
  };

  return (
    <div>
      <h1>Protected Home route</h1>
      <div>
        <button onClick={handleToken}>lOGOUT</button>
      </div>
    </div>
  );
};

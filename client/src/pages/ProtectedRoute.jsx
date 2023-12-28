import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  console.log(token);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

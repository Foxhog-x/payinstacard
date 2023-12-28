import React, { useState, useEffect } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export const Loginpage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  console.log(loginData);

  const token = localStorage.getItem("authToken");
  console.log(token);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    });

    const jsonObj = await response.json();
    if (!jsonObj) {
      window.alert("a wrong crendentials");
    }
    if (jsonObj.success) {
      localStorage.clear();
      localStorage.setItem("authToken", jsonObj.authToken);
      console.log("success");
      navigate("/");
    }
  };
  const onChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img
          src="https://media.licdn.com/dms/image/C560BAQHgM31qg1jK-A/company-logo_200_200/0/1675077137487?e=1711584000&v=beta&t=xmZeb48Fmed11OPcFLNGYqHJAl2d32pvh2N0J3unE2g"
          alt="brandlogo"
        ></img>
      </div>
      <div className="text-center mt-4 name">PayinstaCard</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="email"
            name="email"
            id="userName"
            placeholder="Username"
            value={loginData.email}
            onChange={onChange}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            value={loginData.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn mt-3" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        {/* <a href="#">Forget password?</a> or <a href="#">Sign up</a> */}
        <Link to={"/signup"}>signUp</Link>
      </div>
    </div>
  );
};

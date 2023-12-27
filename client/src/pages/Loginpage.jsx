import React, { useState } from "react";
import "../App.css";
export const Loginpage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  console.log(loginData);
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
  );
};

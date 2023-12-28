import { useState } from "react";
import "../App.css";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const respones = await fetch(`http://localhost:5000/api/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const json = respones.json();
    if (json) {
      alert("account has been created");
    }
    setEmail("");
    setPassword("");
  };

  const changeHandlepassword = (e) => {
    setPassword(e.target.value);
  };
  const changeHandleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <div className="griddiv">
        <h3>Sign Up</h3>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={changeHandleEmail}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              placeholder="Password"
              onChange={changeHandlepassword}
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

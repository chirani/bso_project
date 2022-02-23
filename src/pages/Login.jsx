import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
function Login() {
  const { login } = React.useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => {
    console.log(d);
    login(d);
  };
  return (
    <>
      {" "}
      <div className="note">
        <h2>Note:</h2>
        <p className="subtitle">
          If you have trouble sign in use these credentials:
        </p>
        <p>
          Email: <span>a@a.com</span>{" "}
        </p>
        <p>
          Password: <span>a</span>
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <p className="sub-title"></p>
        <input
          {...register("email")}
          type="email"
          placeholder="email here"
          required
        ></input>
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          required
        ></input>

        <button type="submit">Register</button>
        <p>
          Don't have an account{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </p>
      </form>
    </>
  );
}

export default Login;

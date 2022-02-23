import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
function Register() {
  const { register, handleSubmit } = useForm();

  const { registering } = useContext(UserContext);
  const onSubmit = (d) => {
    registering({ email: d.email, password: d.password });
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <p className="sub-title">
        if you're a new user sign up using email and a password
      </p>
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
      <input
        {...register("re_password")}
        type="password"
        placeholder="retype password"
        required
      ></input>
      <button type="submit">Register</button>
      <p>
        Already have an account{" "}
        <Link to="/login">
          <span>login</span>
        </Link>
      </p>
    </form>
  );
}

export default Register;

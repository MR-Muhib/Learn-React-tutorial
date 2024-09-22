import React from "react";
import style from "./LoginForm.css";
import { Link } from "react-router-dom";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().min(6, "Must be 6 characters or less").required(),
      password: Yup.string().min(8, "Must be 8 characters or less").required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  //Error display using yup
  const usernameError = formik.touched.username && formik.errors.username && (
    <span style={{ color: "red" }}>{formik.errors.username}</span>
  );

  const passwordErrror = formik.touched.password && formik.errors.password && (
    <span style={{ color: "red" }}>{formik.errors.password}</span>
  );

  return (
    <div className="login-div">
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <h1 className="form-login">Log in</h1>
        <div>
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            className="input-fild"
            type="text"
            name="username"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            required
            placeholder="Enter your username"
          />
        </div>
        {usernameError}
        <div>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input-fild"
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
            placeholder="Enter your password"
          />
        </div>
        {passwordErrror}
        <div className="check-div">
          <input type="checkbox" className="checkbox" />
          <span>Keep me logged in (for up to one year)</span>
        </div>
        <button className="btn" type="submit">
          Log in
        </button>
        <div>
          <p className="help-logging">Help with logging in</p>
          <Link to="#">Forgot your password?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

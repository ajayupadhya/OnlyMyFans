import Link from "next/link";
import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

import dbConnect from "../../../lib/dbConnect";
const Login = ({ pageStatus = "login" }) => {
  const [heading, setHeading] = useState("Sign Up");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = data;

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signUp = () => {
    fetch("/api/user", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("authorization", res.token);

        setData({
          name: "",
          email: "",
          password: "",
        });
      });
  };
  return (
    <div className="login__container">
      <h4>{heading}</h4>
      <div className="login__container__field">
        <div className="form__field">
          <input
            className="login__container__input__field"
            placeholder="Email"
            required
            name="email"
            value={email}
            onChange={(e) => handelChange(e)}
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>

        <div className="form__field">
          <input
            className="login__container__input__field"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={(e) => handelChange(e)}
          />
          <label htmlFor="password" className="form__label">
            Password
          </label>
        </div>
        {heading === "Sign Up" ? (
          <div className="form__field">
            <input
              className="login__container__input__field"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={(e) => handelChange(e)}
            />
            <label htmlFor="name" className="form__label">
              Name
            </label>
          </div>
        ) : null}
      </div>
      <button className="login__container__button" onClick={() => signUp()}>
        {heading}
      </button>
      {heading === "Sign Up" ? (
        <div className="login__container_privacy">
          <p className="login__container_privacy__content">
            By signing up you agree to our
            <Link href="/"> Terms of Service</Link> and
            <Link href="/"> Privacy Policy </Link> , and confirm that you are at
            least 18 years old.
          </p>

          <p className="login__container_privacy__content_login">
            Already have an account?
            <span onClick={() => setHeading("Sign In")}> Log In</span>
          </p>
        </div>
      ) : null}
      {heading === "Sign In" ? (
        <div className="login__container__link">
          <p>Forgot Password?</p>

          <p onClick={() => setHeading("Sign Up")}>Sign Up for OnlyMyFans?</p>
        </div>
      ) : null}
      <button className="login__container__twitter">
        <FaTwitter size={25} />
        <span>SIGN IN WITH TWITTER</span>
      </button>
      <button className="login__container__google">
        <AiOutlineGoogle size={25} />
        <span> SIGN IN WITH GOOGLE</span>
      </button>
    </div>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */

  return { props: {} };
}

export default Login;

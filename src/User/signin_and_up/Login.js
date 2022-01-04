import Link from "next/link";
import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
const Login = ({ pageStatus = "login" }) => {
  const [heading, setHeading] = useState("Sign Up");
  return (
    <div className="login__container">
      <h4>{heading}</h4>
      <div className="login__container__field">
        <div className="form__field">
          <input
            className="login__container__input__field"
            placeholder="Name"
            required
          />
          <label for="name" class="form__label">
            Email
          </label>
        </div>

        <div className="form__field">
          <input
            className="login__container__input__field"
            placeholder="Password"
          />
          <label for="name" class="form__label">
            Password
          </label>
        </div>
        {heading === "Sign Up" ? (
          <div className="form__field">
            <input
              className="login__container__input__field"
              placeholder="Password"
            />
            <label for="name" class="form__label">
              Name
            </label>
          </div>
        ) : null}
      </div>
      <button className="login__container__button">{heading}</button>
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

export default Login;

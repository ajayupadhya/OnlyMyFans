import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
const Login = ({ heading = "Login", pageStatus = "login" }) => {
  return (
    <div className="login__container">
      <h4>{heading}</h4>
      <div className="login__container__field">
        <div className="form__field">
          <input
            className="login__container__input__field"
            placeholder="Name"
          />
          <label for="name" class="form__label">
            Name
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
      </div>
      <button className="login__container__button">{heading}</button>
      <div className="login__container__link">
        <Link href="/">Forgot Password?</Link>

        <Link href="/">Sign Up for OnlyMyFans?</Link>
      </div>
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

import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [rememberMeChecked, setRememberMeChecked] = useState(true);
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="login">
      <Header />
      <form className="p-[4rem] bg-black md:w-[450px] mx-auto flex flex-col rounded-lg bg-opacity-85 mt-8 text-white">
        <h1 className="p-3 font-medium text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 rounded-sm bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 m-2 rounded-sm bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-2 rounded-sm bg-gray-700 "
        />
        <button className="p-3 m-2 text-white rounded-sm bg-red-600">
          {isSignInForm ? "Sign In" : "Sign Up "}
        </button>
        <div className="flex justify-between p-2 text-white">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMeChecked}
            />
            Remember Me
          </label>
          <a href="#">Need help?</a>
        </div>

        <div className="p-2">
          <span className="text-gray-500 mr-2">
            {isSignInForm ? "New to Netflix?" : "Already a user?"}
          </span>
          <span onClick={toggleSignInForm} className="cursor-pointer">
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;

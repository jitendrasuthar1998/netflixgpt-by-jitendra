import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  validateEmailAndPassword,
  validateSignUpData,
} from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const [rememberMeChecked, setRememberMeChecked] = useState(true);
  const [isSignInForm, setIsSignInForm] = useState(true);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleLoginButton = () => {
    // validate the form data
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    let message = validateEmailAndPassword(email, password);
    setErrorMessage(message);

    if (message) return;
    if (isSignInForm) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const { email, uid, displayName } = userCredential.user;
          dispath(addUser({ email: email, uid, name: displayName }));
          console.log("user signed in successfully");
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          console.log("error at sign in == ", error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      const name = nameRef.current.value;
      message = validateSignUpData(name, email, password);
      setErrorMessage(message);
      if (message) return;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
          }).then(() => {
            const { email, displayName, uid } = auth.currentUser;
            console.log("updated user == ", auth);
            dispath(addUser({ email: email, uid, displayName }));
            navigate("/browse");
          });
          // ...
        })
        .catch((error) => {
          console.log("error while signup user", error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
    }
    //create a new user
  };

  return (
    <div className="login">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-[4rem] bg-black md:w-[450px] mx-auto flex flex-col rounded-lg bg-opacity-85 mt-8 text-white"
      >
        <h1 className="p-3 font-medium text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 rounded-sm bg-gray-700"
          />
        )}
        <input
          ref={emailRef}
          type="email"
          required
          placeholder="Email Address"
          className="p-3 m-2 rounded-sm bg-gray-700"
        />
        <input
          ref={passwordRef}
          type="password"
          required
          placeholder="Password"
          className="p-3 m-2 rounded-sm bg-gray-700 "
        />
        <p className="py-2  m-2 text-red-500 font-bold text-lg">
          {errorMessage}
        </p>
        <button
          onClick={() => handleLoginButton()}
          className="p-3 m-2 text-white rounded-sm bg-red-600"
        >
          {isSignInForm ? "Sign In" : "Sign Up "}
        </button>
        <div className="flex justify-between p-2 text-white">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              onChange={() => setRememberMeChecked(!rememberMeChecked)}
              checked={rememberMeChecked}
            />
            Remember Me
          </label>
          <span>Need help?</span>
        </div>

        <div className="p-2">
          <span className="text-gray-500 mr-2">
            {isSignInForm ? "New to Netflix?" : "Already a user?"}
          </span>
          <span onClick={() => toggleSignInForm()} className="cursor-pointer">
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;

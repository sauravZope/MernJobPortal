import React, { useContext, useState } from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import {database } from "../firebase/firebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");


  const handleLogin = (event) =>
  {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email)
    console.log(password)
    console.log(database)
    signInWithEmailAndPassword(database,email, password)
      .then((data) => {
        console.log(data,"authdata");
        alert("Login successful!");
        window.location.assign("http://localhost:5173/home")
      })
      .catch((error) => {
       
        setErrorMessage("Wrong Email and Password");
      });
  };

  const handleRegister = () => {
    signUpWithGmail()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-screen mx-auto container flex items-center justify-center">
      <div className="w-full max-w-xs mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4"  onSubmit={(e)=>handleLogin(e)}>
        
          <h3 className="text-xl font-semibold mb-4">Please Login!</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="name@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />

            {/* show errors */}
            {errorMessage && (
              <p className="text-red-500 text-xs italic">{errorMessage}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-500-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Login"
           
            />

            <a
              className="inline-block align-baseline font-bold text-sm text- hover:text-blue-500-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>

          {/* social login */}
          <div className="mt-8 text-center w-full mx-auto">
            <p className="mb-4">Sign up with Social</p>

            <div className="flex items-center justify-center gap-4 w-full mx-auto">
              <button
                className=" border-2 text-blue-500 hover:text-white hover:bg-blue-500 font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                type="button"
                onClick={handleRegister}
              >
                <FaGoogle />
              </button>
              <button
                className=" border-2 text-blue-500 hover:text-white hover:bg-blue-500 font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                type="button"
              >
                <FaFacebookF />
              </button>
              <button
                className=" border-2 text-blue-500 hover:text-white hover:bg-blue-500 font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                type="button"
              >
                <FaLinkedin />
              </button>
              <button
                className=" border-2 text-blue-500 hover:text-white hover:bg-blue-500 font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                type="button"
              >
                <FaInstagram />
              </button>
            </div>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 JobPortal. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;

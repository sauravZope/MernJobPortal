import React, { useContext, useState } from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import {database } from "../firebase/firebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");

const history=useNavigate();
  const handleLogin = (event) =>
  {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const Confirm_password=form.Confirm_password.value
    
    
    if(Confirm_password!=password)
    {
        alert("Password and Confirm Password not matched,please recheck! ")
    }else{
        
     createUserWithEmailAndPassword(database,email, password)
      .then((data) => {
        console.log(data,"authdata");
        alert("Login successful!");
        history('/home')
      })
      .catch((error) => {
        console.log("dsa")
        setErrorMessage(error.message);
      });
    }
  };

  const handleRegister = () => {
    signUpWithGmail()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  const handle_lo=()=>
  {
    window.location.assign("http://localhost:5173/login")
  }

  return (
    <div className="h-screen mx-auto container flex items-center justify-center pl-20">
       <a href='/' className="flex item-center gap-2 text-2xl text-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height='55'
                        viewBox="0 0 29 30"
                        fill="none"
                    >
                        <circle
                            cx="12.0143"
                            су="12.5143"
                            r="12.0143"
                            fill="#3575E2"
                            fillOpacity="0.4"
                        />
                        <circle cx="16.9857" су="17.4857" r="12.0143" fill="#3575E2" />
                    </svg>{" "}
                    <span >NeuroNexus Innovations Jobs</span>
                </a>
      <div className="w-full max-w-xs mx-auto">
        <form  onSubmit={(e)=>handleLogin(e)}
          
          className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4"
        >
          <h3 className="text-xl font-semibold mb-4">Hey New User Please SignUp!</h3>
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
      
          <label className="block text-gray-700 text-sm font-bold mb-2">
             Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Confirm_password"
              type="password"
              placeholder="******************"
            />

            {/* show errors */}
            {errorMessage && (
              <p className="text-red-500 text-xs italic">{errorMessage}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-500-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Sign Up"

            />
            
          </div>
             <br></br>
             <div className="flex items-center justify-between">
              <input
              className="bg-blue-500 hover:bg-blue-500-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Login"
              onClick={handle_lo}
            /></div>
             

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
          &copy;2023 JobPortal. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignUp;

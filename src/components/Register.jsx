/* eslint-disable no-useless-escape */

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [regError, setRegError] = useState("");
  const navigate = useNavigate();


  const handleRegister = (e) => {
    
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const name = from.get("name");
    const photo = from.get("photo");
    const email = from.get("email");
    const password = from.get("password");
    console.log(name, photo, email, password);
    if (password.length < 6) {
      setRegError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegError("Password must contain at least one capital letter");
      return;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setRegError("Password must contain at least one special character");
      return;
    }

    createUser(email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      return updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
    })
    .then(() => {
        e.target.reset();
        toast.success("Congratulations,  You are now part of Our Platform", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          
          navigate('/');
        }, 2000); 
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="imageUrl"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="photo"
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="form-control mt-6">
            <p className="text-black -mt-4 mb-4 text-center">
              Already have a account ?{" "}
              <Link to="/login" className="text-red-500 underline">
                Login
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50"
          >
            Register
          </button>
          <ToastContainer />
        </form>
        <div className="text-red-500 px-4 -mt-4">
          {regError && <p>{regError}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;

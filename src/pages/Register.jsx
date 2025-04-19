import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    // You can now send `email` and `password` to your backend or auth system
    console.log("Registered:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-4 ">
      <h2 className="text-2xl font-bold text-center text-gray-600 mb-6">
        Register for ReferralHub
      </h2>
      <div className="w-full max-w-[470px] lg:p-12 p-6 bg-white rounded-md  ">
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm  text-gray-700">Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full mt-1 px-4 placeholder:text-sm placeholder:text-gray-400 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm  text-gray-700">
              Create Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full mt-1 px-4 py-2 placeholder:text-sm placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm  text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              placeholder="Re-enter your password "
              required
              className="w-full mt-1 px-4 py-2 placeholder:text-sm placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-100  hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-lg transition"
            >
              Register
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center my-4">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">or</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          {/* Google */}
          <button
            onClick={() => console.log("Google login")}
            className="bg-gray-200  border  p-2 rounded-full shadow transition"
            aria-label="Login with Google"
          >
            <FcGoogle className="text-xl" />
          </button>

          {/* Facebook */}
          <button
            onClick={() => console.log("Facebook login")}
            className="bg-gray-200 text-blue-500 p-2 rounded-full shadow transition"
            aria-label="Login with Facebook"
          >
            <FaFacebookF className="text-xl" />
          </button>

          {/* X (Twitter) */}
          <button
            onClick={() => console.log("X login")}
            className="bg-gray-200 text-black p-2 rounded-full shadow transition"
            aria-label="Login with X"
          >
            <FaXTwitter className="text-xl" />
          </button>

          {/* LinkedIn */}
          <button
            onClick={() => console.log("LinkedIn login")}
            className="bg-gray-200 text-blue-500 p-2 rounded-full shadow transition"
            aria-label="Login with LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </button>
        </div>
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

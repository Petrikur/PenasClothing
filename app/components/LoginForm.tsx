"use client";
import { useState } from "react";

const LoginForm = () => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

  const toggleForm = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className=" my-12 flex items-center justify-center ">
      <div className="bg-white w-96 p-8 rounded shadow-lg border">
        <h2 className="text-2xl font-semibold mb-4 ">
          {isLoginMode ? "Login" : "Sign Up"}
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="loginInput"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="loginInput"
              required
            />
          </div>

          {!isLoginMode && (
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="loginInput"
                required
              />
            </div>
          )}

          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              {isLoginMode ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p>
            {isLoginMode
              ? "Don't have an account? "
              : "Already have an account? "}
            <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>
              {isLoginMode ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

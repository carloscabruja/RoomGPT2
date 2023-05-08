import React from "react";
import { useState } from "react";

export const LoginForm = () => {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = credentials;

    // Validate the input
    if (!email || !password) return;

    const response = fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <p className="text-xs italic text-red-500">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <a
          className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;

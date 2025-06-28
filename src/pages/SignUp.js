import React, { useState } from "react";

const SignUp = ({ onSignUp, switchToSignIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "user@foo.com") {
      setError("Email already taken. Try another.");
    } else {
      setError("");
      onSignUp(name);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-2 border rounded"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full px-4 py-2 border rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full px-4 py-2 border rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            className="w-full bg-black text-white py-2 rounded font-semibold"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <button className="text-blue-600 underline" onClick={switchToSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

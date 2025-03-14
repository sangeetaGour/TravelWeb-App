import { useState } from "react";

const SignIn = ({ onToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-md text-black outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-md text-black outline-none"
          />
          <button type="submit" className="bg-blue-600 w-full p-3 rounded-md hover:bg-blue-700">
            Sign In
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <button onClick={onToggle} className="text-blue-400 hover:underline">
            Register Here
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

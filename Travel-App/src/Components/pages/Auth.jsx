import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      // Register user
      const userData = { name, email };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Registration successful! Please sign in.");
      setIsRegister(false); // Switch to Sign In after registration
    } else {
      // Sign In user
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (savedUser && savedUser.email === email) {
        alert(`Welcome back, ${savedUser.name}!`);

        // 🔥 Trigger Navbar re-render by updating localStorage event
        localStorage.setItem("user", JSON.stringify(savedUser));

        // 🔥 Force update for Navbar to reflect changes
        window.dispatchEvent(new Event("storage"));

        navigate("/"); // Redirect to home page after login
      } else {
        alert("User not found. Please register first.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isRegister ? "Register" : "Sign In"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 rounded-md text-black outline-none"
            />
          )}
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
            {isRegister ? "Register" : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsRegister(!isRegister)} className="text-blue-400 hover:underline">
            {isRegister ? "Sign In Here" : "Register Here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Function to check if a user is logged in
    const checkUser = () => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser)); // Update user state
      } else {
        setUser(null);
      }
    };

    checkUser(); // Run once when the component mounts

    // Listen for changes in localStorage
    window.addEventListener("storage", checkUser);

    return () => {
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };




  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50  transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">TravelApp</Link>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-white hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400 transition">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-yellow-400 transition">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>  <div>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="font-semibold">{user.name}</span>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={() => navigate("/signin")} className="bg-blue-500 px-4 py-2 rounded">
            Sign In
          </button>
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

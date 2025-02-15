import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Sign In</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Sign Up</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: support@travelx.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Travel St, New York, USA</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p>&copy; 2025 TravelX. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

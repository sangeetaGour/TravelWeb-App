import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero'
import FeaturedDestinations from './Components/FeaturedDestination'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'
import SignIn from "./Components/pages/SignIn";
import Auth from "./Components/pages/Auth";
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';


function App() {


  return (
    <>
    <div className="bg-gray-900 min-h-screen">
      
      <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Hero />} />
      {/* <Route path="/SignIn" element={<SignIn />} /> */}
      <Route path="/signin" element={<Auth />} />
      <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <About/>
      <FeaturedDestinations/>
      <Newsletter/>
      <Services/>
      <Contact/>
      <Footer/>
      </Router>
      
     </div>
    </>
  )
}

export default App

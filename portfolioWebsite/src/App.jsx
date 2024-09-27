// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/Intro.jsx";
import About from "./Components/About/About.jsx";
import Works from "./Components/Works/Works.jsx";
import MiniProjects from "./Components/MiniProjects/MiniPojects.jsx";
// import IndiKart from "./Components/Indikart/Indikart.jsx";
// import News from './Components/News/News.jsx';
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Footer from './Components/Footer/Footer.jsx'
import Link from './Components/Link/Link.jsx'

function App() {
  return (
    <Router>
      <Navbar /> 
      <Intro /> 
      <About />
      <Works />
      <Link />
      <ContactUs />
      <Footer />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/miniprojects" element={<MiniProjects/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;


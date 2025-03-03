import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../Components/nav";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Contact from "./Pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact/:id" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );               
};

export default App;

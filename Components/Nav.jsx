import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <div className="flex justify-between px-6 py-5 bg-blue-800 underline">
      <Link to='/'>Home</Link>
      <div className="flex gap-4">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default nav;

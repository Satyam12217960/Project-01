import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Booking from "../Pages/Booking"; // Import Booking Page

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} /> {/* Added Booking Route */}
    </Routes>
  );
}

export default AppRoutes;

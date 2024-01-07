import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Humanities from "./components/Humanities";
import Business from "./components/Business";
import Science from "./components/Science";
import Home from "./Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="/humanities" element={<Humanities />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-background-700 text-text-500 p-4 fixed top-0 w-full z-10">
      <div className="flex items-center justify-between md:max-w-[80%] lg:max-w-[83%] mx-auto">
        <Link to="/" className="text-lg font-bold text-primary-500">
          Home
        </Link>

        <div className="flex space-x-4">
          <NavLink to="/science" className="nav-link">
            Science
          </NavLink>
          <NavLink to="/humanities" className="nav-link">
            Humanities
          </NavLink>
          <NavLink to="/business" className="nav-link">
            Business
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;

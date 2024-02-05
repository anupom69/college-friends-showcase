import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Humanities from "./components/Humanities";
import Business from "./components/Business";
import Science from "./components/Science";
import Home from "./Home";
import Footer from "./Footer";
import { Navigation } from "./Navigation";
function App() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Navigation query={query} setQuery={setQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science query={query} />} />
          <Route path="/humanities" element={<Humanities query={query} />} />
          <Route path="/business" element={<Business query={query} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Humanities from "./components/Humanities";
import Business from "./components/Business";
import Science from "./components/Science";
import Home from "./Home";
import Footer from "./Footer";
import { Navigation } from "./Navigation";
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

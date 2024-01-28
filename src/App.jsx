import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentsList from "./components/StudentsList";
import Home from "./Home";
import Footer from "./Footer";
import { Navigation } from "./Navigation";
import scienceSt from "../jsons/college-science.json"
import humanitiesSt from "../jsons/college-humanities.json"
import businessSt from "../jsons/college-business.json"
function App() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Navigation query={query} setQuery={setQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<StudentsList query={query} students={scienceSt}/>} />
          <Route path="/humanities" element={<StudentsList query={query} students={humanitiesSt}/>} />
          <Route path="/business" element={<StudentsList query={query} students={businessSt}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

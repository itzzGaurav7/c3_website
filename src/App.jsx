import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Themes from "./components/Themes";
import FeeTable from "./components/FeeTable";
import Committee from "./components/Committee";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Submission from "./components/Submission";
import Speakers from "./components/Speakers";
import Awards from "./components/Awards";
import Reach from "./components/Reach";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-saf-200 selection:text-saf-900">
        <Navbar />
        <div className="pt-12">
          {" "}
          {/* Added padding for fixed navbar */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Timeline />
                </>
              }
            />
            <Route path="/tracks" element={<Themes />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/registration" element={<FeeTable />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/reach" element={<Reach />} />
            <Route path="/submission" element={<Submission />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

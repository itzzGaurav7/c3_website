import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Themes from "./components/Themes";
import FeeTable from "./components/FeeTable";
import Committee from "./components/Committee";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Submission from "./components/Submission";

function App() {
  return (
    <div className="min-h-screen bg-steel-50">
      <Navbar />
      <Hero />
      <Themes />
      <Submission />
      <FeeTable />
      <Timeline />
      <Committee />
      <Footer />
    </div>
  );
}

export default App;

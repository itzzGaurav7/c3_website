import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Themes from './components/Themes';
import FeeTable from './components/FeeTable';
import Committee from './components/Committee';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-steel-50">
      <Navbar />
      <Hero />
      <Themes />
      <FeeTable />
      <Committee />
      <Footer />
    </div>
  );
}

export default App;
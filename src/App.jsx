import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import FutureVision from './components/FutureVision';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-pastel-blue selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FutureVision />
      </main>
      <Footer />
    </div>
  );
}

export default App;

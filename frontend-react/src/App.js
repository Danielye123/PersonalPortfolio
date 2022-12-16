import React from 'react';

import { Hero, About, Skills, Contact, Footer, Work, TestimonialsAndClients } from './pages';
import { Navbar } from './components';

const App = () => (
  <div className="bg-[#363636] text-white overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Work />
    <Skills />
    <TestimonialsAndClients />
    <Contact />
    <Footer />
  </div>
);
export default App;

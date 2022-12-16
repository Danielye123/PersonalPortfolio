import React from 'react';

import { Hero, About, Programming, EducationAndExperience, TestimonialsAndClients, Projects, Contact, Footer, Work } from './pages';
import { Navbar } from './components';

const App = () => (
  <div className="bg-[#363636] text-white overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Work />
    <Programming />
    <EducationAndExperience />
    <TestimonialsAndClients />
    <Projects />
    <Contact />
    <Footer />
  </div>
);
export default App;

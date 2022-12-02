import React from 'react';

import { Hero, About, Services, Programming, EducationAndExperience, TestimonialsAndClients, Projects, Contact, Footer } from './pages';
import { Navbar, Rings } from './components';

const App = () => (
  <div className="bg-[#363636] text-white overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Programming />
    <EducationAndExperience />
    <TestimonialsAndClients />
    <Projects />
    <Contact />
    <Footer />
  </div>
);
export default App;

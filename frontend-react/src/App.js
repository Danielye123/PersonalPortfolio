import React from 'react';

import { Hero, About, Services, Programming, EducationAndExperience, TestimonialsAndClients, Projects, Contact, Footer } from './pages';
import { Navbar } from './components';

const App = () => (
  <div>
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

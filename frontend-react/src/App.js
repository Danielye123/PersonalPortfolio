import React from 'react';

import { Hero, About, Services, Programming, EducationAndExperience, TestimonialsAndClients, Projects, Contact, Footer } from './pages';
import { Navbar } from './components';

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
/*
      {/* <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[image.htmlImage, image.cssImage, image.javascriptImage].map((circle, index) => (
          <div className="" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div> }
*/
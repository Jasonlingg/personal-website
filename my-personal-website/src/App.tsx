import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      {/* Enables smooth scrolling */}
      <style>
        {`html { scroll-behavior: smooth; }`}
      </style>

      <Box>
        <Header />

        {/* Sections with IDs for scrolling */}
        <Box as="section" id="home">
          <Home />
        </Box>

        {/* <Box as="section" id="about">
          <About />
        </Box> */}

        <Box as="section" id="skills">
          <Skills />
        </Box>

        <Box as="section" id="experience">
          <Experience />
        </Box>

        {/* <Box as="section" id="education">
          <Education />
        </Box> */}

        <Box as="section" id="contact">
          <Contact />
        </Box>

        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;

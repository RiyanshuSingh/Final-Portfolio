
import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    console.log(
      `%cWelcome to my portfolio!`,
      "color: #0e7490; font-size: 20px; font-weight: bold; background: #ecfdf5; padding: 10px; border-radius: 5px;"
    );
     console.log(
      `%cFeel free to look around. The source code for this site is part of the project itself. 😉`,
      "color: #1f2937; font-size: 14px;"
    );
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 font-sans">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

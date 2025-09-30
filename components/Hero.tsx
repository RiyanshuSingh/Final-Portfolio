import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useTypewriter';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

const Hero: React.FC = () => {
  const typedRole = useTypewriter(portfolioData.roles);
  
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 64; // h-16 = 4rem = 64px
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
      window.scrollTo({
         top: offsetPosition,
         behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-blue-200 to-indigo-300 dark:from-slate-800 dark:via-cyan-900 dark:to-slate-900 animate-[gradient_15s_ease_infinite]"></div>
       <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20100%20100%22%3E%3Cpath%20d=%22M0%2050%20L50%20100%20L100%2050%20L50%200%20Z%22%20fill=%22none%22%20stroke=%22rgba(100,100,120,0.05)%22%20stroke-width=%221%22/%3E%3C/svg%3E')] bg-repeat bg-[length:2rem_2rem]"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-cyan-600 dark:text-cyan-400">{portfolioData.name}</span>
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
          I'm a <span className="text-cyan-600 dark:text-cyan-400 border-b-4 border-cyan-500">{typedRole}</span><span className="animate-ping">|</span>
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-transform duration-300 hover:scale-125">
            <GitHubIcon className="w-8 h-8" />
          </a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-transform duration-300 hover:scale-125">
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-transform duration-300 hover:scale-125">
            <TwitterIcon className="w-8 h-8" />
          </a>
        </div>
        <div className="space-x-4">
          <a href="#contact" onClick={(e) => handleCTAClick(e, '#contact')} className="inline-block bg-cyan-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/50">
            Hire Me
          </a>
          <a href="#projects" onClick={(e) => handleCTAClick(e, '#projects')} className="inline-block bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 font-bold py-3 px-8 rounded-full shadow-lg hover:ring-2 hover:ring-cyan-500 transition-all duration-300 transform hover:scale-105">
            My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce-slow">
         <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
      </div>
    </section>
  );
};

export default Hero;
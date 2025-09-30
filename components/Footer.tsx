
import React from 'react';
import { portfolioData } from '../data/portfolioData';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 transform hover:scale-125">
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 transform hover:scale-125">
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 transform hover:scale-125">
            <TwitterIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

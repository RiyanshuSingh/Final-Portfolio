
import React, { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import Section from './Section';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TimelineItem: React.FC<{ item: any; isLeft: boolean }> = ({ item, isLeft }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });
  const alignmentClass = isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8';
  const transformClass = isLeft ? 'md:translate-x-[-1.5rem]' : 'md:translate-x-[1.5rem]';
  const transitionClass = `transform transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : `${isLeft ? '-translate-x-10' : 'translate-x-10'} opacity-0`}`;

  return (
    <div ref={ref} className={`mb-8 flex md:justify-between items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-5/12"></div>
      <div className={`z-10 flex items-center bg-cyan-500 shadow-xl w-8 h-8 rounded-full ${transformClass}`}>
        <div className="w-3 h-3 bg-white rounded-full mx-auto"></div>
      </div>
      <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full md:w-5/12 p-6 ${transitionClass}`}>
        <p className="text-cyan-600 dark:text-cyan-400 font-semibold">{item.period}</p>
        <h3 className="font-bold text-lg mb-1">{item.role || item.degree}</h3>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{item.company || item.institution}</p>
        {item.description && <p className="text-sm text-gray-500 dark:text-gray-300">{item.description}</p>}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={portfolioData.about.profilePicUrl}
            alt={portfolioData.name}
            className="rounded-full w-64 h-64 object-cover shadow-lg transition-all duration-500 filter grayscale hover:grayscale-0 transform hover:scale-105"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg text-center md:text-left leading-relaxed text-gray-600 dark:text-gray-300">
            {portfolioData.about.bio}
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="hidden md:block border-l-4 border-cyan-300 dark:border-cyan-700 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
        <h3 className="text-2xl font-bold text-center mb-12">Career Timeline</h3>
        {portfolioData.experience.map((item, index) => (
          <TimelineItem key={`exp-${index}`} item={item} isLeft={index % 2 !== 0} />
        ))}
        {portfolioData.education.map((item, index) => (
          <TimelineItem key={`edu-${index}`} item={item} isLeft={(portfolioData.experience.length + index) % 2 !== 0} />
        ))}
      </div>
    </Section>
  );
};

export default About;

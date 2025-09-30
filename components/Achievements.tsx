
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { portfolioData } from '../data/portfolioData';
import Section from './Section';
import { useCountUp } from '../hooks/useCountUp';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const StatCounter: React.FC<{ stat: { label: string; value: number } }> = ({ stat }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{count}+</p>
      <p className="text-lg text-gray-600 dark:text-gray-400">{stat.label}</p>
    </div>
  );
};

const Achievements: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const certificates = portfolioData.achievements.certificates;
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === certificates.length - 1 ? 0 : prevIndex + 1));
  }, [certificates.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Section id="achievements" title="Achievements & Certifications" className="bg-gray-100 dark:bg-slate-800/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {portfolioData.achievements.stats.map(stat => (
          <StatCounter key={stat.label} stat={stat} />
        ))}
      </div>

      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certificates.map((cert, index) => (
            <div key={index} className="w-full flex-shrink-0 bg-white dark:bg-slate-800 p-8 md:p-12 text-center">
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-md font-semibold text-cyan-600 dark:text-cyan-400 mb-4">{cert.source}</p>
              <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-cyan-500' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Achievements;

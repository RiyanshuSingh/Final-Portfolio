
import React, { useRef, ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {title}
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded"></div>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;


import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import Section from './Section';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <div className="group rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20" style={{ transformStyle: 'preserve-3d' }}>
        <div className="relative overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                 <div className="flex space-x-4">
                    {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700/80 rounded-full text-white hover:bg-cyan-600 transition-all transform hover:scale-110">
                        <GitHubIcon className="w-6 h-6" />
                    </a>
                    )}
                    {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700/80 rounded-full text-white hover:bg-cyan-600 transition-all transform hover:scale-110">
                        <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                    )}
                 </div>
            </div>
        </div>
      <div className="p-6 transition-transform duration-500 group-hover:[transform:translateZ(20px)]">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300 text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(portfolioData.projects.map(p => p.category)))];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return portfolioData.projects;
    }
    return portfolioData.projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <Section id="projects" title="My Projects">
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeFilter === category ? 'bg-cyan-600 text-white shadow-md' : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-cyan-200 dark:hover:bg-cyan-800'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={`${project.title}-${index}`} className="transition-all duration-500 ease-in-out">
             <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

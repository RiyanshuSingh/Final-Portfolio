
import React, { useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { portfolioData } from '../data/portfolioData';
import Section from './Section';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-white">{skill.name}</span>
        <span className="text-sm font-medium text-cyan-700 dark:text-cyan-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-cyan-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillFlipCard: React.FC<{ skill: Skill; category: string }> = ({ skill, category }) => {
  return (
    <div className="group h-28 w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-xl flex flex-col justify-center items-center p-4">
          <h4 className="font-bold text-lg text-center">{skill.name}</h4>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-800 dark:bg-slate-900 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] p-4 flex flex-col justify-center items-center">
          <h5 className="font-semibold mb-2">Tools & Libraries:</h5>
          <ul className="text-center text-sm">
            {skill.tools && skill.tools.length > 0 ? (
              skill.tools.map(tool => <li key={tool}>{tool}</li>)
            ) : (
              <li>N/A</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};


const Skills: React.FC = () => {
  const allSkills = [
    ...portfolioData.skills.languages.map(s => ({ ...s, category: 'Languages' })),
    ...portfolioData.skills.frontend.map(s => ({ ...s, category: 'Frontend' })),
    ...portfolioData.skills.backend.map(s => ({ ...s, category: 'Backend' })),
    ...portfolioData.skills.databases.map(s => ({ ...s, category: 'Databases' })),
    ...portfolioData.skills.tools.map(s => ({ ...s, category: 'Tools' })),
  ];

  const chartData = allSkills.slice(0, 7).map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));
  
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <Section id="skills" title="My Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Languages</h3>
          {portfolioData.skills.languages.map(skill => <SkillBar key={skill.name} skill={skill} />)}
           <h3 className="text-xl font-semibold mb-4 mt-8 text-center md:text-left">Databases</h3>
          {portfolioData.skills.databases.map(skill => <SkillBar key={skill.name} skill={skill} />)}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Frontend</h3>
          {portfolioData.skills.frontend.map(skill => <SkillBar key={skill.name} skill={skill} />)}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Backend & Tools</h3>
          {portfolioData.skills.backend.map(skill => <SkillBar key={skill.name} skill={skill} />)}
          {portfolioData.skills.tools.map(skill => <SkillBar key={skill.name} skill={skill} />)}
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
        {allSkills.map((skill) => (
          <SkillFlipCard key={skill.name} skill={skill} category={skill.category} />
        ))}
      </div>

      <div ref={ref} className="w-full h-96 mt-10">
        <h3 className="text-xl font-semibold mb-4 text-center">Skills Overview</h3>
        {isVisible && (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  borderColor: '#0891b2',
                  color: '#ffffff',
                  borderRadius: '0.5rem'
                }}
              />
              <Radar name={portfolioData.name} dataKey="A" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        )}
      </div>
    </Section>
  );
};

export default Skills;

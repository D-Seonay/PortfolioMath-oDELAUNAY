// Projects.tsx
import React from 'react';
import { ProjectNumber } from './Project';
import { projectsData } from '@/lib/data';

const Projects: React.FC = () => {
  return (
    <div className="w-full h-full p-5 relative flex flex-col items-center">
      <div className="text-[6em] md:text-[128px]  w-full font-bold text-transparent text-center md:text-left" style={{ WebkitTextStroke: '1px white' }}>PROJECT</div>
      <div className='flex flex-col items-center justify-center'>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {projectsData.map((project, index) => (
            <ProjectNumber key={index} {...project} />
          ))}
        </div>  
      </div>
    </div>
  );
};

export { Projects };

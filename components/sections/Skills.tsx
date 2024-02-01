// Skills.tsx
"use client";   // Correct import statement 

import React from 'react';
import { SkillCategory } from './Skill'; // Correct import statement
import { skillsData } from '@/lib/data';

const Skills: React.FC = () => {
    return (
        <div className="w-full h-full p-5 relative flex flex-col items-center ">
            <div className="text-[6em] md:text-[128px]  w-full font-bold text-transparent text-center md:text-left" style={{ WebkitTextStroke: '1px white' }}>SKILLS</div>
            <div className='flex flex-col items-center justify-center'>
                <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    {skillsData.map((skill, index) => (
                        <SkillCategory key={index} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export { Skills };

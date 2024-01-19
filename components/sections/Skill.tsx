import React from 'react';
import { IconType } from 'react-icons';

interface SkillCategoryProps {
    title: string;
    description: string;
    icon: IconType;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ 
    title,
    description, 
    icon,
}) => {
    const IconComponent = icon as React.ComponentType<any>;
    return (
        <div className="w-full md:w-1/4 h-96 p-5 bg-black-100 rounded-2xl border-4 border-neutral-800 flex flex-col items-start space-y-5 hover:border-secondary my-5 md:m-9 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="text-6xl text-white"><IconComponent /></div>
            <div className="text-center text-gray-400 text font-normal">{title}</div>
            <div className="text-gray-400 text-xl font-normal">{description}</div>
        </div>
    );
};

export { SkillCategory };


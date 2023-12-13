import React from 'react';
import Image from 'next/image';

interface SkillCategoryProps {
    title: string;
    description: string;
    icon: string;
}

const SkillsPage: React.FC = () => {
    return (
        <div className="w-full h-full p-5 relative flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-between">
                <SkillCategory title="FRONT END" description="Designing intuitive interfaces" icon="../FrontEnd.svg" />
                <SkillCategory title="BACK END" description="Building robust server-side applications" icon="../BackEnd.svg" />
                <SkillCategory title="DEVTOOLS" description="Working with development tools" icon="./DevTools.svg" />
                <SkillCategory title="CREATIVE" description="Expressing creativity in design" icon="./Creative.svg" />
            </div>
        </div>
    );
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, description, icon }) => {
    return (
        <div className="w-full md:w-1/4 h-96 p-5 bg-black-100 rounded-2xl border-4 border-neutral-800 flex flex-col items-start space-y-5 hover:border-secondary my-5 md:m-9 transition duration-300 ease-in-out transform hover:scale-105">
            <Image src={icon} width={40} height={40} alt={title} />
            <div className="text-center text-gray-400 text font-normal">{title}</div>
            <div className="text-gray-400 text-xl font-normal">{description}</div>
        </div>
    );
};


export { SkillsPage };

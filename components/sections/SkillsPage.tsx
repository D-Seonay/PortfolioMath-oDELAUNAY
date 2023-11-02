import React from 'react';

interface SkillCategoryProps {
    title: string;
    description: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, description }) => {
    return (
        <div className="w-72 h-96 p-5 bg-zinc-900 rounded-lg border-2 border-neutral-800 flex flex-col justify-end items-start space-y-5">
            <div className="w-20 h-20 relative" />
            <div className="text-center text-gray-400 text-3xl font-normal font-LilitaOne">{title}</div>
            <div className="text-gray-400 text-xl font-normal font-LilitaOne">{description}</div>
        </div>
    );
};

const SkillsPage: React.FC = () => {
    return (
        <div className="w-full h-auto p-5 relative">
            <h1 className="absolute left-0 top-0 text-6xl font-black font-Poppins">SKILLS</h1>
            <div className="flex justify-between space-x-5">
                <SkillCategory title="FRONT END" description="Designing intuitive interfaces" />
                <SkillCategory title="BACK END" description="Building robust server-side applications" />
                <SkillCategory title="DEVTOOLS" description="Working with development tools" />
                <SkillCategory title="CREATIVE" description="Expressing creativity in design" />
            </div>
        </div>
    );
};

export { SkillsPage };

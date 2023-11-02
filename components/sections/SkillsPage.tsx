import React from 'react';

interface SkillCategoryProps {
    title: string;
    description: string;
    icon: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, description, icon }) => {
    return (
        <div className="w-72 h-96 p-5 bg-zinc-900 rounded-md border-2 border-neutral-800 flex flex-col justify-end items-start space-y-5 hover:border-primary">
            <img src={icon} width={40} height={40} alt={title} />
            <div className="text-center text-gray-400 text-3xl font-normal font-LilitaOne">{title}</div>
            <div className="text-gray-400 text-xl font-normal font-LilitaOne">{description}</div>
        </div>
    );
};

const SkillsPage: React.FC = () => {
    return (
        <div className="w-full h-auto p-5 relative">
            <h1 className="absolute left-0 top-0 text-12xl font-black font-Poppins">SKILLS</h1>
            <div className="flex justify-between space-x-5">
                <SkillCategory title="FRONT END" description="Designing intuitive interfaces" icon="../FrontEnd.svg"/>
                <SkillCategory title="BACK END" description="Building robust server-side applications" icon='../BackEnd.svg' />
                <SkillCategory title="DEVTOOLS" description="Working with development tools" icon='./DevTools.svg'/>
                <SkillCategory title="CREATIVE" description="Expressing creativity in design" icon='./Creative.svg'/>
            </div>
        </div>
    );
};

export { SkillsPage };

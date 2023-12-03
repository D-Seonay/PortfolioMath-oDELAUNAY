import React from 'react';
import Image from 'next/image';

interface SkillCategoryProps {
    title: string;
    description: string;
    icon: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, description, icon }) => {
    return (
        <div className="w-72 h-96 p-5 bg-black-100 rounded-md border-2 border-neutral-800 flex flex-col items-start space-y-5 hover:border-secondary m-9">
            <Image src={icon} width={40} height={40} alt={title} />
            <div className="text-center text-gray-400 text font-normal font-LilitaOne">{title}</div>
            <div className="text-gray-400 text-xl font-normal font-LilitaOne">{description}</div>
        </div>
    );
};

const SkillsPage: React.FC = () => {
    return (
        <div className="w-full h-auto p-5 relative flex flex-col items-center">
            <h1 className="absolute left-0 top-0 text-4xl font-black font-Poppins text-black text-opacity-10 text-stroke-500 ">SKILLS</h1>
            <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center text-white text-9xl font-black font-Poppins text-opacity-10 text-stroke-500 ">SEONAY</div>
            <div className="flex flex-col md:flex-row justify-between space-x-5">
                <SkillCategory title="FRONT END" description="Designing intuitive interfaces" icon="../FrontEnd.svg"/>
                <SkillCategory title="BACK END" description="Building robust server-side applications" icon='../BackEnd.svg' />
                <SkillCategory title="DEVTOOLS" description="Working with development tools" icon='./DevTools.svg'/>
                <SkillCategory title="CREATIVE" description="Expressing creativity in design" icon='./Creative.svg'/>
            </div>
        </div>
    );
};

export { SkillsPage };

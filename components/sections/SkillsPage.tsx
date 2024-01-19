import React from 'react';
import Image from 'next/image';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiTerminal } from "react-icons/hi";
import { RiToolsFill } from "react-icons/ri";
import { FaPaintRoller } from "react-icons/fa6";




interface SkillCategoryProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const SkillsPage: React.FC = () => {
    return (
        
        <div className="w-full h-full p-5 relative flex flex-col items-center ">
            <div className="text-[6em] md:text-[128px]  w-full font-bold text-transparent text-center md:text-left" style={{ WebkitTextStroke: '1px white' }}>SKILLS</div>
            <div className='flex flex-col items-center justify-center'>
                <div className="flex flex-col md:flex-row justify-between items-center">

                    <SkillCategory title="FRONT END" description="Designing intuitive interfaces" icon={<IoPhonePortraitOutline />} />
                    <SkillCategory title="BACK END" description="Developing server-side applications" icon={<HiTerminal />} />
                    <SkillCategory title="DEVTOOLS" description="Working with development tools" icon={<RiToolsFill />} />
                    <SkillCategory title="CREATIVE" description="Expressing creativity in design" icon={<FaPaintRoller />}/>
                </div>
            </div>
        </div>
    );
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, description, icon }) => {
    return (
        <div className="w-full md:w-1/4 h-96 p-5 bg-black-100 rounded-2xl border-4 border-neutral-800 flex flex-col items-start space-y-5 hover:border-secondary my-5 md:m-9 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="text-center text-5xl text-gray-400">{icon}</div>
            <div className="text-center text-gray-400 text font-normal">{title}</div>
            <div className="text-gray-400 text-xl font-normal">{description}</div>
        </div>
    );
};


export { SkillsPage };

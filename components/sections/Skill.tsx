import React from 'react';
import { IconType } from 'react-icons';
import { motion, useScroll, useTransform } from "framer-motion";


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
    const IconComponent = icon as React.ComponentType<any>; // Convert IconType to ReactNode
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
    });
    const xProgess = useTransform(scrollYProgress, [0, 1], [-200, 0]);
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [3, 6]);

    return (
        <motion.div
        ref={ref}
        style={{
            x: xProgess,
            scale: scaleProgess,
            opacity: opacityProgess,
        }}
        className="mb-3 sm:mb-8 w-full"
        >
            <div className=":w-full mb:w-1/4 h-96 p-1 bg-black-100 rounded-xl flex flex-col items-start space-y-5 hover:border-secondary my-5 md:m-9 transition duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-tr from-neutral-800 to-neutral-500  hover:from-secondary hover:to-primary hover:shadow-2xl">
                <div className="flex flex-col items-start bg-black-100 p-3 rounded-lg w-full h-full ">
                    <div className="text-6xl text-white my-2"><IconComponent /></div>
                    <div className="text-center text-gray-400 text font-normal my-4">{title}</div>
                    <div className="text-gray-400 text-xl font-normal my-4">{description}</div>
                </div>
            </div>
        </motion.div>
    );
};

export { SkillCategory };


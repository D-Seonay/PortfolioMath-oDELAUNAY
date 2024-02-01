"use client";

import React from "react";
import { Hero } from "@/components/sections/Hero";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiGoogledocs } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { Tooltip } from 'react-tooltip'







const AboutMePage = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const xProgess = useTransform(scrollYProgress, [0, 1], [300, 0]);
    const scaleProgess = useTransform(scrollYProgress, [0, 10], [1, 1.1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [3, 6]);
    return (
        <div className="flex justify-center items-center flex-col">


<Tooltip anchorSelect=".my-anchor-element-email" place="bottom">Email</Tooltip>
<Tooltip anchorSelect=".my-anchor-element-cv" place="bottom">CV</Tooltip>
<Tooltip anchorSelect=".my-anchor-element-link" place="bottom">LinkedIn</Tooltip>
<Tooltip anchorSelect=".my-anchor-element-github" place="bottom">Github</Tooltip>



            <div className="text-center text-sky-700 text-xl font-extrabold font-Poppins">CULTIVATING QUIET ELEGANCE</div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="">
                    <Hero/>
                </div>
                <div className="text-center text-white text-[25px] flex flex-col items-start">
                    <div className="text-center text-white text-[25px] md:text-[40px] text-bold ">—ABOUT ME—</div>
                    <div className=" text-white text-[15px] md:text-[20px] text-start p-3">I &apos; Mathéo DELAUNAY, a computer engineering student at EPSI Nantes. Passionate about programming and computing in general, I &apos; ve acquired skills in HTML, CSS, PHP, MySQL and Adobe suites. I also enjoy mountain sports and video games. Check out my portfolio to find out more about my skills and achievements.</div>
                    <motion.div
                        ref={ref}
                        style={{
                        x: xProgess,
                        scale: scaleProgess,
                        opacity: opacityProgess,
            }}
            className="mb-3 sm:mb-8">
                    <div className="flex p-4 ">
                        <motion.button
                            className={`my-anchor-element-cv group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-primary text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-secondary active:scale-105 dark:bg-white dark:bg-opacity-10 mx-3`}
                            data-tip="CV"
                        >
                            <a href="/docs/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Go to CV page"
                            >
                                    <SiGoogledocs className="text-s opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        </motion.button>
                        <motion.button
                            className={`my-anchor-element-email group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-primary text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-secondary active:scale-105 dark:bg-white dark:bg-opacity-10 mx-3`}>
                                <a href="mailto:matheodelaunay04@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    about="Email"
                                    title="Go to Email page"
                                >
                                    <MdEmail className="text-s opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                                </a> 
                        </motion.button>
                        

                        <motion.button
                            className={`my-anchor-element-link group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-primary text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-secondary active:scale-105 dark:bg-white dark:bg-opacity-10 mx-3`}>
                                <a href="https://www.linkedin.com/in/math%C3%A9o-delaunay/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    about="LinkedIn"
                                    title="Go to LinkedIn page"
                                >
                                    <FaLinkedin className="text-s opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                                </a> 
                        </motion.button>

                        <motion.button
                            className={`my-anchor-element-github group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-primary text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-secondary active:scale-105 dark:bg-white dark:bg-opacity-10 mx-3`}>
                                <a href="https://github.com/D-Seonay"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    about="Github"
                                    title="Go to GitHub page"
                                >
                                    <GrGithub className="text-s opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                                </a>
                        </motion.button>
                    </div>
                    </motion.div>



                </div>
            </div>
            
        </div>
    );
};

export { AboutMePage };

import React from "react";
import { Hero } from "@/components/sections/Hero";

const AboutMePage = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="text-center text-sky-700 text-xl font-extrabold font-Poppins">CULTIVATING QUIET ELEGANCE</div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="">
                    <Hero/>
                </div>
                <div className="text-center text-white text-[25px] flex flex-col items-start">
                    <div className="text-center text-white text-[25px] md:text-[40px] text-bold ">—ABOUT ME—</div>
                    <div className=" text-white text-[15px] md:text-[20px] text-start p-3">I &apos; Mathéo DELAUNAY, a computer engineering student at EPSI Nantes. Passionate about programming and computing in general, I &apos; ve acquired skills in HTML, CSS, PHP, MySQL and Adobe suites. I also enjoy mountain sports and video games. Check out my portfolio to find out more about my skills and achievements.</div>
                    <button className="text-center text-white text-[15px] md:text-[25px] flex flex-col items-start transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:border hover:border-transparent hover:shadow-lg mt-4 px-6 py-3 border rounded-lg border-primary">
                        <div className="text-center text-white text-[15px] md:text-[25px] text-bold">CONTACT ME</div>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export { AboutMePage };

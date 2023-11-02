import Image from "next/image";
import React from "react";
import { ContactPage } from "@/components/sections/ContactPage";
import { SkillsPage } from "@/components/sections/SkillsPage";

const Page = () => {
    return (
        <div className="relative bg-gray-400">
            <div className="absolute bg-zinc-900 left-0 top-[798px] w-full h-[1208px]"></div>
            <div className="absolute text-center text-white left-[49px] top-[32px] text-[50px] font-extrabold font-['Poppins']">THE PORTFOLIO.</div>
            <div className="absolute text-center text-sky-700 left-[557px] top-[287px] text-[40px] font-extrabold font-['Poppins']">CULTIVATING QUIET ELEGANCE</div>
            {/* Autres éléments... */}
            
            <Image
                className="absolute left-[29px] top-[408px]"
                src="/hero.png"
                width={800}
                height={800}
                alt="hero"
            />
            {/* Autres éléments... */}
            {/*<ContactPage /> */}
            <SkillsPage />
        </div>

    );
};

export default Page;

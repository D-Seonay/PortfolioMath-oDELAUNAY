import Image from "next/image";
import React from "react";
import { ContactPage } from "@/components/sections/ContactPage";
import { SkillsPage } from "@/components/sections/SkillsPage";
import {AboutMePage} from "@/components/sections/AboutMePage";
import { HomePage } from "@/components/sections/HomePage";
import { Hero } from "@/components/sections/Hero";

const Page = () => {
    return (
        <div className="relative bg-gray-400">
            <div className="absolute bg-zinc-900 left-0 top-[798px] w-full h-[1208px]"></div>

            <Hero />
        </div>

    );
};

export default Page;


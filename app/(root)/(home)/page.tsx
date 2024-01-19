import React from "react";
import dynamic from "next/dynamic";
import { SkillsPage } from "@/components/sections/SkillsPage";
import {AboutMePage} from "@/components/sections/AboutMePage";
import { HomePage } from "@/components/sections/HomePage";
import ContactForm  from "@/components/sections/ContactPage";
import { Projects } from  "@/components/sections/Projects";


const Page = () => {
    return (
        <div className="mx-9">
            <HomePage />
            <AboutMePage />
            <SkillsPage />
            <Projects />
            <ContactForm />
            
        </div>

    );
};

export default Page;
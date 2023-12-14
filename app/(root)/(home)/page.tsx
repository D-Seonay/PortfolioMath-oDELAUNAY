import React from "react";
import dynamic from "next/dynamic";
import { SkillsPage } from "@/components/sections/SkillsPage";
import {AboutMePage} from "@/components/sections/AboutMePage";
import { HomePage } from "@/components/sections/HomePage";
import { ProjectsPage } from "@/components/sections/ProjectsPage";
import ContactForm  from "@/components/sections/ContactPage";


const Page = () => {
    return (
        <div className="mx-9">
            <HomePage />
            <AboutMePage />
            <SkillsPage />
            <ProjectsPage />
            <ContactForm />
        </div>

    );
};

export default Page;
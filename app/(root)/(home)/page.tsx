import Image from "next/image";
import React from "react";
import { ContactPage } from "@/components/sections/ContactPage";
import { SkillsPage } from "@/components/sections/SkillsPage";
import {AboutMePage} from "@/components/sections/AboutMePage";
import { HomePage } from "@/components/sections/HomePage";
import { ProjectsPage } from "@/components/sections/ProjectsPage";
import { Hero } from "@/components/sections/Hero";

const Page = () => {
    return (
        <div className="mx-9">
            <HomePage />
            <SkillsPage />
            <ProjectsPage />
        </div>

    );
};

export default Page;
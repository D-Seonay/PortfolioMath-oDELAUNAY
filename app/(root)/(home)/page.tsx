import Image from "next/image";
import React from "react";
import { ContactPage } from "@/components/sections/ContactPage";
import { SkillsPage } from "@/components/sections/SkillsPage";
import {AboutMePage} from "@/components/sections/AboutMePage";
import { HomePage } from "@/components/sections/HomePage";
import { Hero } from "@/components/sections/Hero";

const Page = () => {
    return (
        <div>
            <SkillsPage />
        </div>

    );
};

export default Page;
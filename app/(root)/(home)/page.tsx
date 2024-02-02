import React from "react";
import {AboutMePage} from "@/components/sections/AboutMePage";
import { HomePage } from "@/components/sections/HomePage";
import { Skills } from "@/components/sections/Skills";
import ContactForm  from "@/components/sections/ContactPage";
import { Projects } from  "@/components/sections/Projects";


const Page = () => {
    return (
        <div className="mx-9">
            <HomePage />
            <AboutMePage />
            <Skills />
            <Projects />
            <ContactForm />
        </div>
    );
};

export default Page;
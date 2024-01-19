import React from "react";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";




const Footer = () => {
    return (
        <div className="w-full flex-row bg-neutral-800 p-10 text-white absolute">
            <div className="justify-between flex flex-col md:flex-row">
                {/* Section des Liens de Navigation */}
                <div className="flex-col justify-center items-center m-4 p-4 md:m-0 mb:p-0">
                    <div className="text-center text-[22px] font-bold my-3">Pages</div>
                    <div className="text-center text-xl my-2">
                        <Link href="/" title="Go to Home page">Home</Link>
                    </div>
                    <div className="text-center text-xl my-2 m-4 p-4 md:m-0 md:0">
                        <Link href="/about" title="Go to About page">About me</Link>
                    </div>
                    <div className="text-center text-xl m-4 p-4 md:m-0 md:0">
                        <Link href="/projects" title="Go to Projects page">Projects</Link>
                    </div>
                    <div className="text-center text-xl m-4 p-4 md:m-0 md:0">
                        <Link href="/contact" title="Go to Contact page">Contact</Link>
                    </div>
                </div>
                {/* Section d'Abonnement à la Newsletter */}
                <div className="flex-col justify-center items-center my-2 m-4 p-4 md:m-0 md:0">
                    <div className="text-center text-[22px] font-bold my-3">Newsletter</div>
                    <div className="text-center text-xl">
                        <Link href="/newsletter" title="Subscribe to Newsletter">S &apos; abonner</Link>
                    </div>
                </div>


                {/* Section des Informations de Copyright */}
                <div className="flex-col justify-center items-center">
                    <div className="text-center text-xl font-bold">Copyright &copy; 2024 - Seonay.
                    </div>
                    <div className="text-center text-xl font-bold">All Rights Reserved - Legal notices
                    </div>
                </div>

                {/* Section des Liens vers les Projets */}
                <div className="flex-col justify-center items-center my-2 m-4 p-4 md:m-0 md:0">
                    <div className="text-center text-[22px] font-bold my-3">Projects</div>
                    <div className="text-center text-xl my-2">
                        <Link href="/project1" title="Go to Project 1 page">Project 1</Link>
                    </div>
                    <div className="text-center text-xl my-2">
                        <Link href="/project2" title="Go to Project 2 page">Project 2</Link>
                    </div>
                    <div className="text-center text-xl my-2">
                        <Link href="/project3" title="Go to Project 3 page">Project 3</Link>
                    </div>
                </div>
                {/* Section des Liens Légaux */}
                <div className="flex-col justify-center items-center my-2 m-4 p-4 md:m-0 md:0">
                    <div className="text-center text-[22px] font-bold my-3">Mentions Légales</div>
                    <div className="text-center text-xl my-2">
                        <Link href="/privacy-policy" title="Go to Privacy Policy page">Politique de confidentialité</Link>
                    </div>
                    <div className="text-center text-xl my-2">
                        <Link href="/faq" title="Go to FAQ page">FAQ</Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                {/* Logo LinkedIn */}
                <div className="mx-5 md:mx-20">
                    <Link
                        href="https://www.linkedin.com/in/math%C3%A9o-delaunay/"
                        target="_blank"
                        className="hover:text-primary transition duration-500 ease-in-out"
                    >
                        <FaLinkedin size={40} />    
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>

                {/* Logo GitHub */}
                <div className="mx-5 md:mx-20">
                    <Link
                        href="https://github.com/D-Seonay"
                        target="_blank"
                        className="hover:text-primary transition duration-500 ease-in-out"
                    >
                            <GrGithub size={40} />
                            <span className="sr-only">GitHub</span>
                    </Link>
                </div>

                {/* Logo Email */}
                <div className="mx-5 md:mx-20">
                    <a
                        href="mailto:contact@matheo-delaunay.fr"
                        target="_blank"
                        title="Contact me by email"
                        className="hover:text-primary transition duration-500 ease-in-out"
                    >
                        <MdEmail size={40} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
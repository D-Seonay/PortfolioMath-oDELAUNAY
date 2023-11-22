"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    return (
    
        <div className="lg:hidden">
            <button
                onClick={toggleMenu}
                className={`fixed top-6 right-6 z-50 p-2 bg-black-100 rounded-full ${isOpen ? "hidden" : ""}`}
            >
                <svg
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black-100 p-6 text-white transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex justify-end">
                    <button
                        onClick={toggleMenu}
                        className="p-2 bg-sky-700 rounded-full"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex-col flex-center flex-colmt-10 space-y-8 text-xl font-normal">

                    <div>
                        <Link href="/">HOME</Link>
                    </div>
                    <div>
                        <Link href="/about">ABOUT ME</Link>
                    </div>
                    <div>
                        <Link href="/projects">PROJECTS</Link>
                    </div>
                    <div>
                        <Link href="/contact">CONTACT</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;

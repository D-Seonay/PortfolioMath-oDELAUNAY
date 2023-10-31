import React from "react";
import Link from "next/link";
import Image from "next/image";
import {blue} from "@sanity/color";

const Footer = () => {
    return (
        <div className="bg-neutral-800 p-10 text-white ">
            <div className="justify-between flex flex-row">
                {/* Section des Liens de Navigation */}
                <div className="flex-col justify-center items-center">
                    <div className="text-center text-[22px] font-bold my-3">Pages</div>
                    <div className="text-center text-xl my-2">Home</div>
                    <div className="text-center text-xl my-2">About me</div>
                    <div className="text-center text-xl my-2">Projects</div>
                    <div className="text-center text-xl my-2">Contact</div>
                </div>
                {/* Section d'Abonnement à la Newsletter */}
                <div className="flex-col justify-center items-center">
                    <div className="text-center text-[22px] font-bold my-3">Newsletter</div>
                    <div className="text-center text-xl">S'abonner</div>
                </div>
                {/* Section des Informations de Copyright */}
                <div className="flex-col justify-center items-center">
                    <div className="text-center text-xl font-bold">Copyright ©2023 - D-Seonay.</div>
                    <div className="text-center text-xl font-bold">All Rights Reserved - Legal notices</div>
                </div>
                {/* Section des Liens vers les Projets */}
                <div className="flex-col justify-center items-center ">
                    <div className="text-center text-[22px] font-bold my-3">Projects</div>
                    <div className="text-center text-xl my-2">Project 1</div>
                    <div className="text-center text-xl my-2">Project 2</div>
                    <div className="text-center text-xl my-2">Project 3</div>
                </div>
                {/* Section des Liens Légaux */}
                <div className="flex-col justify-center items-center ">
                    <div className="text-center text-[22px] font-bold my-3">Mentions Légales</div>
                    <div className="text-center text-xl my-2">Politique de confidentialité</div>
                    <div className="text-center text-xl my-2">FAQ</div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="mx-20">
                    <Link
                        href="https://www.linkedin.com/in/math%C3%A9o-delaunay/"
                        target="_blank">
                        <Image
                            src="/logo-linkedin.svg"
                            alt="Logo-linkedin"
                            width={40}
                            height={40}
                        />
                    </Link>
                </div>
                <div className="mx-20">
                    <Link className="white hover:text-blue-500"
                        href="https://github.com/D-Seonay"
                        target="_blank">
                        <Image
                            src="/logo-github.svg"
                            alt="Logo-github"
                            width={40}
                            height={40}
                        />
                    </Link>
                </div>
                <div className="mx-20">
                    <Link
                    href="matheodelaunay04@gmail.com"
                    target="_blank">
                    <Image
                        src="/logo-mail.svg"
                        alt="Logo-mail"
                        width={40}
                        height={40}
                    />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;

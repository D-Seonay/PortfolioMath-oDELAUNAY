import React from "react";
import Link from "next/link";

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
                    <div className="text-center text-xl font-bold">Copyright &copy; 2023 - Seonay.
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
                <div className="mx-20">
                    <Link
                        href="https://www.linkedin.com/in/math%C3%A9o-delaunay/"
                        target="_blank"
                        className="hover:text-blue-500" // Classe de survol Tailwind
                    >
                        <svg className="
                        transition-colors 
                        duration-200 
                        ease-in-out
                        fill-white 
                        hover:fill-primary" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 66 65" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M57.7778 0C59.6932 0 61.5302 0.76091 62.8847 2.11534C64.2391 3.46977 65 5.30677 65 7.22222V57.7778C65 59.6932 64.2391 61.5302 62.8847 62.8847C61.5302 64.2391 59.6932 65 57.7778 65H7.22222C5.30677 65 3.46977 64.2391 2.11534 62.8847C0.76091 61.5302 0 59.6932 0 57.7778V7.22222C0 5.30677 0.76091 3.46977 2.11534 2.11534C3.46977 0.76091 5.30677 0 7.22222 0H57.7778ZM55.9722 55.9722V36.8333C55.9722 33.7111 54.7319 30.7168 52.5242 28.5091C50.3165 26.3014 47.3222 25.0611 44.2 25.0611C41.1306 25.0611 37.5556 26.9389 35.8222 29.7556V25.7472H25.7472V55.9722H35.8222V38.1694C35.8222 35.3889 38.0611 33.1139 40.8417 33.1139C42.1825 33.1139 43.4684 33.6465 44.4165 34.5946C45.3646 35.5427 45.8972 36.8286 45.8972 38.1694V55.9722H55.9722ZM14.0111 20.0778C15.6201 20.0778 17.1632 19.4386 18.3009 18.3009C19.4386 17.1632 20.0778 15.6201 20.0778 14.0111C20.0778 10.6528 17.3694 7.90833 14.0111 7.90833C12.3926 7.90833 10.8403 8.5513 9.69579 9.69579C8.5513 10.8403 7.90833 12.3926 7.90833 14.0111C7.90833 17.3694 10.6528 20.0778 14.0111 20.0778ZM19.0306 55.9722V25.7472H9.02778V55.9722H19.0306Z"/>
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>

                {/* Logo GitHub */}
                <div className="mx-20">
                    <Link
                        href="https://github.com/D-Seonay"
                        target="_blank"
                        className="hover:text-blue-500" // Classe de survol Tailwind
                    >
                        <svg className="
                        transition-colors 
                        duration-200 
                        ease-in-out
                        fill-white 
                        hover:fill-primary" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 66 65" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33 0.5C14.7675 0.5 0 15.1822 0 33.3094C0 47.8276 9.44625 60.0901 22.5637 64.4373C24.2137 64.7244 24.8325 63.7401 24.8325 62.8789C24.8325 62.0997 24.7913 59.5159 24.7913 56.7681C16.5 58.2856 14.355 54.7585 13.695 52.913C13.3237 51.9697 11.715 49.0579 10.3125 48.2787C9.1575 47.6635 7.5075 46.1461 10.2712 46.1051C12.87 46.0641 14.7262 48.4837 15.345 49.468C18.315 54.4305 23.0588 53.0361 24.9563 52.1748C25.245 50.0422 26.1112 48.6068 27.06 47.7865C19.7175 46.9663 12.045 44.1365 12.045 31.5869C12.045 28.0189 13.3238 25.066 15.4275 22.7694C15.0975 21.9491 13.9425 18.5862 15.7575 14.0749C15.7575 14.0749 18.5212 13.2136 24.8325 17.4379C27.4725 16.6996 30.2775 16.3305 33.0825 16.3305C35.8875 16.3305 38.6925 16.6996 41.3325 17.4379C47.6438 13.1726 50.4075 14.0749 50.4075 14.0749C52.2225 18.5862 51.0675 21.9491 50.7375 22.7694C52.8413 25.066 54.12 27.9779 54.12 31.5869C54.12 44.1775 46.4062 46.9663 39.0638 47.7865C40.26 48.8118 41.2913 50.7804 41.2913 53.8563C41.2913 58.2445 41.25 61.7716 41.25 62.8789C41.25 63.7401 41.8688 64.7654 43.5187 64.4373C50.0702 62.239 55.7632 58.0532 59.7961 52.4691C63.8291 46.885 65.9988 40.184 66 33.3094C66 15.1822 51.2325 0.5 33 0.5Z"/>
                        </svg>
                    </Link>
                </div>

                {/* Logo Email */}
                <div className="mx-20">
                    <a
                        href="mailto:contact@matheo-delaunay.fr"
                        target="_blank"
                        title="Contact me by email"
                    >
                        <svg className="
                        transition-colors 
                        duration-200 
                        ease-in-out
                        fill-white 
                        hover:fill-primary" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 66 65" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M6.5 55C4.7125 55 3.18175 54.3262 1.90775 52.9787C0.633755 51.6312 -0.00216115 50.0133 5.51783e-06 48.125V6.875C5.51783e-06 4.98438 0.637005 3.36532 1.91101 2.01782C3.185 0.670318 4.71467 -0.00228583 6.5 5.83617e-06H58.5C60.2875 5.83617e-06 61.8182 0.673755 63.0922 2.02125C64.3662 3.36875 65.0022 4.98667 65 6.875V48.125C65 50.0156 64.363 51.6347 63.089 52.9822C61.815 54.3297 60.2853 55.0023 58.5 55H6.5ZM32.5 30.9375L6.5 13.75V48.125H58.5V13.75L32.5 30.9375ZM32.5 24.0625L58.5 6.875H6.5L32.5 24.0625ZM6.5 13.75V6.875V48.125V13.75Z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
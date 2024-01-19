import Link from 'next/link';
import React from 'react';
import { GrGithub } from 'react-icons/gr';
import { CiCirclePlus } from "react-icons/ci";

interface ProjectProps {
    number: number;
    category: string;  // Scolaire, Professionnel, Personnel
    title: string;
    imageSrc: string;
    description: string;
    githubLink?: string;
}

const ProjectsPage: React.FC = () => {
    return (
        <div className="w-full h-full p-5 relative flex flex-col items-center ">
            <div className="text-[4em] md:text-[128px] w-full font-bold text-transparent text-center md:text-left" style={{ WebkitTextStroke: '1px white', fontFamily: 'Poppins'}}>PROJECTS</div>
            <div className='flex flex-col items-center justify-center'>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <ProjectNumber 
                        number={1} 
                        category='Scolaire' 
                        title="Photothèque de Chatons" 
                        imageSrc="/projects/Project1.jpg" 
                        description="Petite photothèque de chatons en Symfony avec une base de donnée développé dans le cadre d'un cours."  
                        githubLink='https://github.com/D-Seonay/ChatonsBDD'/>
                    <ProjectNumber 
                        number={2} 
                        category="Personnel" 
                        title="Card Flip Revision" 
                        imageSrc="/projects/Project2.jpg" 
                        description="FlipRevisionCard : Ce projet est une révision de la fonctionnalité de retournement de carte (card flip) en utilisant React." 
                        githubLink='https://github.com/D-Seonay/FRC'/>
                    <ProjectNumber 
                        number={3} 
                        category='Personnel' 
                        title="Pokedex" 
                        imageSrc="/projects/Project3.jpg" 
                        description="Pokedex développé en utilisant Node.js et l'API PokeApiV2" 
                        githubLink='https://github.com/D-Seonay/Pokedex'/>
                    <ProjectNumber 
                        number={4} 
                        category="Scolaire" 
                        title="Gestionnaire de bibliothèque" 
                        imageSrc="/projects/Project4.jpg" 
                        description="Projet gestionnaire de bibliothèque en Python." 
                        githubLink='https://github.com/D-Seonay/GestionnaireDeBibliotheque' />
                </div>
            </div>
        </div>
    );
};

const ProjectNumber: React.FC<ProjectProps> = ({ number, category, title, imageSrc, description, githubLink }) => {
    return (
        <div className="w-[373px] h-[600px] px-5 py-[19px] rounded-[10px] my-5 md:m-9 border-4 border-neutral-800 flex-col justify-start items-start gap-[21px] inline-flex transition duration-300 ease-in-out transform hover:scale-105 hover:border-secondary">
            <div className="justify-center items-center inline-flex">
                <div className="w-[46px] h-[46px] text-white text-[25px] font-normal" style={{ fontFamily: 'Poppins' }}>0{number}- </div>
                <div className="w-[117px] h-[46px] text-primary text-[25px] font-normal" style={{ fontFamily: 'Poppins' }}>{category}</div>
            </div>
            <div className="w-[329px] h-[305px] p-[3px] rounded-[10px] justify-center items-center gap-2.5 inline-flex relative">
                <img className="w-80 h-[299px] relative rounded-[10px] transition duration-300 ease-in-out transform hover:scale-105" src={imageSrc} alt={title} />
                
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="w-[333px] h-6 text-primary text-[18px] font-normal" style={{ fontFamily: 'Poppins' }}>{title.toUpperCase()}</div>
                <div className="w-[333px] h-[66px] text-gray-400 text-[15px] font-normal" style={{ fontFamily: 'Poppins' }}>{description}</div>
            </div>
            <div className="w-[333px] h-[66px] text-gray-400 text-[15px] font-normal flex justify-between px-4">
            <div>
                    <Link
                        href={githubLink ?? ""}
                        target="_blank" 
                        className='hover:text-primary transition duration-500 ease-in-out'
                    >
                            <GrGithub size={40} />
                            <span className="sr-only">GitHub</span>
                    </Link>
                </div>
                <div>
                    <Link
                        href={"" ?? ""}
                        target="_blank" 
                        className='hover:text-primary transition duration-500 ease-in-out'
                    >
                            <CiCirclePlus size={40} />
                            <span className="sr-only">Voir Plus</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { ProjectsPage };

import React from 'react';

interface ProjectProps {
    number: number;
    title: string;
    imageSrc: string;
    description: string;
    githubLink?: string;
}

const ProjectsPage: React.FC = () => {
    return (
        <div className="w-full h-full p-5 relative flex flex-col items-center ">
            <div className="text-[4em] md:text-[128px] w-full font-bold text-transparent text-center md:text-left" style={{ WebkitTextStroke: '1px white', fontFamily: 'Poppins' }}>PROJECTS</div>
            <div className='flex flex-col items-center justify-center'>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <ProjectNumber number={1} title="Project 1" imageSrc="/projects/Project1.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."  githubLink=''/>
                    <ProjectNumber number={2} title="Project 2" imageSrc="/projects/Project2.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod." githubLink=''/>
                    <ProjectNumber number={3} title="Project 3" imageSrc="/projects/Project3.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod." githubLink=''/>
                    <ProjectNumber number={4} title="Project 4" imageSrc="/projects/Project4.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod. lorem  " githubLink='' />
                </div>
            </div>
        </div>
    );
};

const ProjectNumber: React.FC<ProjectProps> = ({ number, title, imageSrc, description, githubLink }) => {
    return (
        <div className="w-[373px] h-[600px] px-5 py-[19px] rounded-[10px] my-5 md:m-9 border-4 border-neutral-800 flex-col justify-start items-start gap-[21px] inline-flex transition duration-300 ease-in-out transform hover:scale-105 hover:border-secondary">
            <div className="justify-center items-center inline-flex">
                <div className="w-[46px] h-[46px] text-white text-[25px] font-normal" style={{ fontFamily: 'Poppins' }}>0{number}- </div>
                <div className="w-[117px] h-[46px] text-sky-700 text-[25px] font-normal" style={{ fontFamily: 'Poppins' }}>{title}</div>
            </div>
            <div className="w-[329px] h-[305px] p-[3px] rounded-[10px] justify-center items-center gap-2.5 inline-flex relative">
                <img className="w-80 h-[299px] relative rounded-[10px] transition duration-300 ease-in-out transform hover:scale-105" src={imageSrc} alt={title} />
                
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="w-[333px] h-6 text-gray-400 text-2xl font-normal" style={{ fontFamily: 'Poppins' }}>{title.toUpperCase()}</div>
                <div className="w-[333px] h-[66px] text-gray-400 text-[15px] font-normal" style={{ fontFamily: 'Poppins' }}>{description}</div>
            </div>
            <div className="w-[333px] h-[66px] text-gray-400 text-[15px] font-normal">
                <button className="absolute bottom-5 right-5 px-4 py-2 bg-gray-800 hover:bg-primary text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105">Voir Plus</button>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="absolute bottom-5 left-5 px-4 py-2 bg-gray-800 hover:bg-primary text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105">GitHub</a>
            </div>
        </div>
    );
}

export { ProjectsPage };

// Project.tsx
import React from 'react';
import Link from 'next/link';
import { GrGithub } from 'react-icons/gr';
import { CiCirclePlus } from "react-icons/ci";

interface ProjectProps {
  number: number;
  category: string;
  title: string;
  imageSrc: string;
  description: string;
  githubLink?: string;
}

const ProjectNumber: React.FC<ProjectProps> = ({
  number,
  category,
  title,
  imageSrc,
  description,
  githubLink,
}) => {
  return (
    <div className="w-[373px] h-[600px] px-5 py-[19px] rounded-[10px] my-5 md:m-9 border-4 border-neutral-800 flex-col justify-start items-start gap-[21px] inline-flex transition duration-300 ease-in-out transform hover:scale-105 hover:border-secondary">
      <div className="justify-center items-center inline-flex">
        <div
          className="w-[46px] h-[46px] text-white text-[25px] font-normal"
          style={{ fontFamily: 'Poppins' }}
        >
          0{number}-{' '}
        </div>
        <div
          className="w-[117px] h-[46px] text-primary text-[25px] font-normal"
          style={{ fontFamily: 'Poppins' }}
        >
          {category}
        </div>
      </div>
      <div className="w-full h-[300px] rounded-[10px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="text-[25px] font-bold text-primary">{title}</div>
      <div className="text-[15px] text-white">{description}</div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="text-[20px] text-white">
          <Link href={`/project${number}`}>Learn more</Link>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="text-[20px] text-white mr-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-primary"> 
            <Link href={githubLink ?? ""}>
              <GrGithub size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectNumber,};

import React from 'react';
import Image from 'next/image';

const HomePage = () => {
    return (
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="top-0 left-0 h-full w-1/2 bg-primary rounded-full justify-center items-center flex flex-col ">
          <div className="flex text-[10em] md:text-[20em] w-full font-bold text-center md:text-left"
            style={{
                backgroundClip: 'text',
                backgroundImage: 'linear-gradient(to bottom, #000000, #1A4F8A)',
                WebkitBackgroundClip: 'text', // Pour une compatibilité avec Safari
                color: 'transparent', // Rendre le texte transparent pour afficher le dégradé
                display: 'flex',
            }}>
            SEONAY
        </div>
        
          <div className="relative">
            <div className="transform -rotate-90">Texte 1</div>
            <div className=" bg-zinc-300 rounded-full border-2 border-blue-900 flex">
            <Image 
                className="rounded-full shadow border-2 border-blue-900" 
                src="/fleur.jpg" 
                alt='#' 
                width={255.45} 
                height={255.45}
            />
            </div>
            <div className="transform rotate-90">Texte 2</div>
          </div>

        </div>
      </div>
    );
  }
  

export { HomePage };

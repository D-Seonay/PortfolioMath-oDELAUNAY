import React from 'react';
import Image from 'next/image';

const HomePage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full" >
        <div className="h-full justify-center items-center flex flex-col bg-cover bg-top bg-no-repeat" style={{ backgroundImage: "url('/rond.svg')" }}>
          <div className="flex text-[10em] md:text-[20em] w-full font-bold text-center md:text-left"
            style={{
                backgroundClip: 'text',
                backgroundImage: 'linear-gradient(to bottom, #FFF, #1A4F8A)',
                WebkitBackgroundClip: 'text', // Pour une compatibilité avec Safari
                color: 'transparent', // Rendre le texte transparent pour afficher le dégradé
                display: 'flex',
            }}>
              SEONAY
            </div>
            
            </div>
          </div>

    );
  }
  

export { HomePage };

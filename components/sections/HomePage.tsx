import React from 'react';
import Image from 'next/image';

const HomePage = () => {
    return (
      <div className="flex items-center justify-cente">
        <div className="flex flex-col  top-0 left-0 w-full h-full bg-primary rounded-full justify-center items-center">
          <h1 className="text-5xl text-center text-white font-bold flex">SEONAY</h1>
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
        {/* Textes disposés verticalement */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center gap-8 text-white text-2xl font-bold">
        </div>
    </div>
    );
  }
  

export { HomePage };

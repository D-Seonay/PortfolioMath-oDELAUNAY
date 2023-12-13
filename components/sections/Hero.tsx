import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
            <Image src="/../../hero.svg" alt="Picture of me Mathéo DELAUNAY | Seonay" width={900} height={500} />
    </div>
  );
};
export { Hero };
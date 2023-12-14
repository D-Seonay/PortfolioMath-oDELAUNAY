import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
            <Image src="/../../hero.svg" alt="Picture of me Mathéo DELAUNAY | Seonay" width={4500} height={1500} />
    </div>
  );
};
export { Hero };
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
            <Image src="/../../hero.svg" alt="Picture of me Mathéo DELAUNAY | Seonay" width={3500} height={100} />
    </div>
  );
};
export { Hero };
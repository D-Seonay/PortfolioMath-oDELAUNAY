import { Element } from "react-scroll";
import Image from 'next/image';
import HeroImage from '../../public/hero.svg'; // Vérifiez le chemin de votre image

const AboutMePage = () => {
    return (
        <Element name="about">
            <div className="flex justify-center items-center flex-col">
                <div className="w-[266px] h-[266px] relative">
                    <div className="w-[266px] h-[266px] bg-zinc-300 rounded-full border-2 border-blue-900" />
                    <Image 
                        className="rounded-full shadow border-2 border-blue-900" 
                        src={HeroImage} 
                        alt="Hero Image" 
                        width={255.45} 
                        height={255.45}
                    />
                </div>

                <div className="w-[432px] h-[997px] bg-zinc-900 flex flex-col justify-center items-center">
                    <div className="text-center text-sky-700 text-xl font-extrabold font-Poppins">CULTIVATING QUIET ELEGANCE</div>
                    <div className="w-[200px] h-[200px] bg-sky-700 rounded-full" />
                    <div className="w-[432px] h-[514px] flex flex-col justify-center items-start gap-[15px]">
                        <div className="text-center text-white text-[25px] font-normal font-Lilita">—ABOUT ME —</div>
                        <div className="w-[381px] text-neutral-100 text-sm font-normal font-Inter leading-7">
                            {/* Votre contenu ici */}
                        </div>
                        <div className="w-[171px] px-[35px] py-2.5 bg-sky-700 rounded-[10px] justify-between items-center inline-flex">
                            <div className="text-white text-xl font-normal font-Lilita">CONTACT ME</div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export { AboutMePage };

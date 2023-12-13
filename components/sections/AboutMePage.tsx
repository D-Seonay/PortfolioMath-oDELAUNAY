import { Element } from "react-scroll";
import Image from 'next/image';
const AboutMePage = () => {
    return (
        <Element name="about">
            <div>
            <div className="w-[266px] h-[266px] relative">
            <div className="w-[266px] h-[266px] bg-zinc-300 rounded-full border-2 border-blue-900" />
            <Image 
                className="rounded-full shadow border-2 border-blue-900" 
                src="hero.svg" 
                alt='#' 
                width={255.45} 
                height={255.45}
            />
        </div>

        <div className="w-[432px] h-[997px] bg-zinc-900">
            <div className="text-center text-sky-700 text-xl font-extrabold font-['Poppins']">CULTIVATING QUIET ELEGANCE</div>
            <div className="w-[200px] h-[200px] bg-sky-700 rounded-full" />
            <div className="w-[432px] h-[514px] flex-col justify-center items-center inline-flex">
                <div className="w-[432px] h-[514px] px-[35px] flex-col justify-center items-start gap-[15px] flex">
                    <div className="text-center text-white text-[25px] font-normal font-['Lilita One']">—ABOUT ME —</div>
                    <div className="w-[381px] text-neutral-100 text-sm font-normal font-['Inter'] leading-7">I&apos;m Mathéo DELAUNAY, a computer engineering student at EPSI Nantes. Passionate about programming and computing in general, I&apos;ve acquired skills in HTML, CSS, PHP, MySQL and Adobe suites. I also enjoy mountain sports and video games. Check out my portfolio to find out more about my skills and achievements.<br/><br/><br/>consequatur quod, tempore voluptate explicabo impedit, eum nemo officiis ratione enim id! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quis iste eos quia obcaecati, corrupti beatae non voluptas adipisci suscipit ipsum incidunt libero.<br/></div>
                    <div className="w-[171px] px-[35px] py-2.5 bg-sky-700 rounded-[10px] justify-between items-center inline-flex">
                    <div className="text-white text-xl font-normal font-['Lilita One']">CONTACT ME</div>
                </div>
            </div>
        </div>
        </div>

            </div>
        </Element>
    );
};

export {AboutMePage}
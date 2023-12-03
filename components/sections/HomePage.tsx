import React from 'react';
import Image from 'next/image';

const HomePage = () => {
    return (
    <div className="w-[430px] h-[8258px] relative bg-gray-400">
        <div className="w-[364px] h-[334.07px]">
        <div className="w-[364px] h-[229.07px]">
            <div className="w-[341.97px] h-[67.12px] rounded-full border-2 border-black" />
            <div className="w-[341.97px] h-[67.12px] rounded-full border-2 border-black" />
        </div>
    <div className="w-[75%] h-[75%] bg-sky-700 rounded-full justify-center inline-flex">
        <div className="w-[430px] h-[100px] text-center text-black text-[100px] font-black font-['Poppins']">SEONAY</div>
    </div>
    
    <div className="justify-center items-center gap-[21px] inline-flex">
        <div className="w-[330px] h-[50px] px-2.5 py-5 origin-top-left -rotate-90 bg-gradient-to-l from-black to-blue-900 rounded-[50px] justify-between items-center flex">
            <div className="w-[59px] h-[179px] origin-top-left rotate-90 text-center text-white text-[35px] font-black font-['Poppins'] leading-10">マテオ</div>
        </div>
        <div className="w-[266px] h-[266px] relative">
            <div className="w-[266px] h-[266px] bg-zinc-300 rounded-full border-2 border-blue-900" />
            <Image className="w-[255.45px] h-[255.45px] rounded-full shadow border-2 border-blue-900" src="https://via.placeholder.com/255x255" alt='#' />
        </div>
        <div className="w-[330px] h-[50px] px-2.5 py-5 origin-top-left -rotate-90 bg-gradient-to-l from-black to-blue-900 rounded-[50px] justify-between items-center flex">
            <div className="w-[52px] h-[265px] origin-top-left rotate-90 text-center text-white text-[35px] font-black font-['Poppins'] leading-10">ドロネイ</div>
        </div>
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
</div>

    );
};



export { HomePage };
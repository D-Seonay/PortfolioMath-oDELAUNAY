import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex-center top-0 z-50 w-full border-black-200 py-7 text-white">
            <div className="align-middle flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
                <div className="text-center text-sky-700 text-[50px] font-extrabold">SEONAY.</div>
                <div className="justify-center items-center inline-flex">
                    <span className="text-white text-2xl font-normal mx-2">HOME  </span>
                    <span className="text-zinc-900 text-2xl font-normal mx-2">/</span>
                    <span className="text-white text-2xl font-normal mx-2">  ABOUTE ME  </span>
                    <span className="text-zinc-900 text-2xl font-normal mx-2">/</span>
                    <span className="text-white text-2xl font-normal mx-2">  PROJECTS  </span>
                    <span className="text-zinc-900 text-2xl mx-2">/</span>
                    <span className="text-white text-2xl mx-2">  CONTACT</span>
                </div>
                <div className="py-2.5 rounded-[50px] border-2 border-black justify-center items-center gap-[30px] inline-flex">
                    <div className="text-center text-sky-700 text-[25px] font-extrabold px-4 py-1">CONTACT ME</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
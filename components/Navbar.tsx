import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex-center top-0 z-50 w-full border-black-200 py-7 text-white">
            <div className="align-middle flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
                <Link 
                    href="/" 
                    className="text-sky-700 text-xl font-extrabold">SEONAY.
                </Link>
                <div className="justify-center items-center inline-flex">
                    <Link 
                        href="/"
                        className="text-white text-xl font-normal mx-2">HOME
                    </Link>
                    <span className="text-zinc-900 text-xl font-normal mx-2">/</span>
                    <Link 
                        href="/about"
                        className="text-white text-xl font-normal mx-2">ABOUT ME
                    </Link>
                    <span className="text-zinc-900 text-xl font-normal mx-2">/</span>
                    <Link 
                        href="/projects"
                        className="text-white text-xl font-normal mx-2">PROJECTS
                    </Link>
                    <span className="text-zinc-900 text-xl mx-2">/</span>
                    <Link 
                        href="/contact"
                        className="text-white text-xl mx-2">CONTACT
                    </Link>
                </div>
                <div className="py-2.5 rounded-[50px] border-2 border-black justify-center items-center gap-[30px] inline-flex">
                    <Link 
                        href="/contact"
                        className="text-sky-700 text-xl font-extrabold px-4 py-1">CONTACT ME
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

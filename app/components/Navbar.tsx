import Link from "next/link";
import HeroSection from "./HeroSection";
import ContactMe from "./ContactMe";

export default function Navbar() {
    return (
        <>
            <header className="text-white">
                <div className="container mx-auto flex p-10 flex-col md:flex-row items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    >
                        <span className="ml-3 text-4xl font-bold text-[#F97300]">Logo</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap justify-between w-[45%] text-lg font-sans">
                        <Link href="#" className="mr-5 hover:text-[#F97300]">
                            Home
                        </Link>
                        <Link href="#" className="mr-5 hover:text-[#F97300]">
                            Service
                        </Link>
                        <Link href="#" className="mr-5 hover:text-[#F97300]">
                            About me
                        </Link>
                        <Link href="#" className="mr-5 hover:text-[#F97300]">
                            Portfolio
                        </Link>
                        <Link href="#" className="mr-5 hover:text-[#F97300]">
                            Contace me
                        </Link>
                    </nav>
                    {/* Button */}
                    <button className="inline-flex items-center bg-[#F97300] border-0 py-2 px-5 focus:outline-none hover:bg-[#F16D34] rounded text-base mt-4 md:mt-0">
                        Mire Me
                    </button>
                </div>
            </header>
        </>
    );
}

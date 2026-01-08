"use client";
import Image from "next/image";
const HeroSection = () => {
    const words = ["Web", "Development"];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="hero w-full flex justify-center items-center min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full px-6 gap-8">
                {/* Text Section */}
                <div className="lg:w-1.5/2 flex flex-col space-y-4 px-4 sm:px-6 md:px-8">

                    {/*Buttom */}
                    <section className="text-gray-300">
                        <p className="text-lg">
                            Hi I am
                        </p>
                        <h1 className="text-4xl">Ream Borey</h1>
                    </section>
                    <div className="text-8xl font-bold bg-gradient-to-r from-[#F97300] to-black bg-clip-text text-transparent">
                        Web Developer
                    </div>
                    {/* <TableExperience /> */}
                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap text-center justify-between">
                                <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transform transition duration-700 hover:scale-110">
                                        <h2 className="title-font font-medium text-3xl text-white">4+</h2>
                                        <p className="leading-relaxed flex justify-center">Experience</p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transform transition duration-700 hover:scale-110">
                                        <h2 className="title-font font-medium text-3xl text-white">3+</h2>
                                        <p className="leading-relaxed flex justify-center">Project</p>
                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transform transition duration-700 hover:scale-110">
                                        <h2 className="title-font font-medium text-3xl text-white">3+</h2>
                                        <p className="leading-relaxed flex justify-center">Done</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Image Section */}
                <div className="w-[500px] h-[500px] flex justify-center items-center relative overflow-visible">
                    <Image
                        src="/image/Borey-re.png"
                        alt="Profile"
                        width={450}  // bigger than the container
                        height={450} // bigger than the container
                        className="object-cover rounded-xl shadow-2xl -translate-y-8"
                    />
                </div>

            </div>
        </div>
    );
};

export default HeroSection;

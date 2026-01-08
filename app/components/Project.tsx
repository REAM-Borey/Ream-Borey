import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
    return (
        <>
            <div className="items-center w-full">
                <h1 className="flex justify-center text-white text-2xl sm:text-3xl font-medium mr-4">
                    Project
                </h1>
            </div>
            <section className="text-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    {/* Feature 1 */}
                    <div className="flex items-center lg:w-3/5 mx-auto mb-10 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h1 className="text-lg title-font font-medium mb-2">
                                Employees Management System
                            </h1>
                            <p>At IOneCambodia, I worked on both backend and frontend development using FastAPI and Next.js. I contributed to the Employee Management System (EMS) by developing APIs and building frontend components, gaining hands-on experience in full-stack web development.</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-center lg:w-3/5 mx-auto mb-10 sm:flex-row flex-col text-white">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">

                            <h2 className="text-lg title-font font-medium mb-2">
                                E-commerce Website Development
                            </h2>
                            <p className="leading-relaxed text-base">
                                Created a full-stack e-commerce website using React and Nextjs for the frontend and Spring-Boot for the backend, integrating payment gateways and user authentication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
};

export default FeaturesSection;

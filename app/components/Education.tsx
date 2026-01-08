export default function Education() {
    return (
        <>
            <div className="items-center w-full">
                <h1 className="flex justify-center text-white text-2xl sm:text-3xl font-medium mr-4">
                    Education
                </h1>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">

                    {/* Step 1 */}
                    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                        </div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-white mb-1 text-xl">SETEC Institute</h2>
                                <p className="leading-relaxed text-white">
                                    SETEC Institute – Bachelor’s Degree in Management informationSystem
                                    (2021 - 2026)
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Step 1 */}
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                        </div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-white mb-1 text-xl">KOREA SOFTWARE HRD CENTER Tranding (Basic Course)</h2>
                                <p className="leading-relaxed text-white">
                                    Led and managed a backend team to develop RESTful APIs using
                                    Spring Boot for both coding challenges and the final project.
                                    sovannak.kheng0309@gmail.com<br/>
                                    • Designed and analyzed the Entity Relationship Diagram (ERD) for the
                                    final project.
                                    • Handling authentication JWTs using Spring Security and Redis for
                                    caching OTP.<br/>
                                    • Resolved diverged branches and merge conflicts to maintain a smooth
                                    Git workflow for the team.<br/>
                                    • Deployed the final project using Docker and GitHub Actions for CI/CD,
                                    hosting it on a Linux server using Google Cloud Platform (GCP).
                                    (2025)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
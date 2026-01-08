import Link from "next/link";

export default function () {
    return (
        <>
            <footer className="bg-[#252526] text-white text-lg py-12">
                <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10 px-6">
                    <nav className="flex justify-center flex-wrap gap-6 text-lg font-medium">
                        <a className="hover:text-white transition" href="#">Home</a>
                        <a className="hover:text-white transition" href="#">Services</a>
                        <a className="hover:text-white transition" href="#">About me</a>
                        <a className="hover:text-white transition" href="#">Portfolio</a>
                        <a className="hover:text-white transition" href="#">Contact me</a>
                    </nav>

                    <div className="flex justify-center space-x-6">
                        <a href="https://facebook.com" target="_blank" className="hover:text-white transition">
                            <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.03 3.66 9.21 8.44 9.93v-7.02H8.1v-2.91h2.34V9.83c0-2.3 1.37-3.57 3.47-3.57.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.91h-2.1V22c4.78-.72 8.44-4.9 8.44-9.93z" />
                            </svg>
                        </a>

                        <a href="https://linkedin.com" target="_blank" className="hover:text-white transition">
                            <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.53-1 1.87-2.2 3.86-2.2 4.13 0 4.9 2.72 4.9 6.26V24h-4v-8.4c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.46V24h-4V8z" />
                            </svg>
                        </a>

                        <a href="https://instagram.com" target="_blank" className="hover:text-white transition">
                            <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.49 4.49 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8zm4.75-8.95a1.05 1.05 0 1 1-1.05-1.05 1.05 1.05 0 0 1 1.05 1.05z" />
                            </svg>
                        </a>

                        <a href="https://messenger.com" target="_blank" className="hover:text-white transition">
                            <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.49 2 2 6.03 2 11c0 2.57 1.21 4.88 3.2 6.52V22l3.05-1.67c1.15.32 2.37.49 3.75.49 5.51 0 10-4.03 10-9S17.51 2 12 2zm1.3 11.7l-2.25-2.4-4.2 2.4 4.65-5 2.25 2.4 4.2-2.4-4.65 5z" />
                            </svg>
                        </a>

                        <Link href="https://twitter.com" target="_blank" className="hover:text-white transition">
                            <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.35 8.59 8.59 0 0 1-2.72 1.04 4.24 4.24 0 0 0-7.23 3.87A12 12 0 0 1 3.15 4.7a4.25 4.25 0 0 0 1.32 5.67 4.23 4.23 0 0 1-1.92-.53v.05a4.25 4.25 0 0 0 3.4 4.16 4.31 4.31 0 0 1-1.91.07 4.26 4.26 0 0 0 3.97 2.95A8.52 8.52 0 0 1 2 19.54a12 12 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68v-.53A8.36 8.36 0 0 0 22.46 6z" />
                            </svg>
                        </Link>
                    </div>
                    <p className="text-center text-gray-400 text-sm">
                        &copy; 2022 Company Ltd. All rights reserved.
                    </p>

                </div>
            </footer>
        </>
    )
}
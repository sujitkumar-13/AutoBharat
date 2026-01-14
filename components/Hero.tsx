'use client';

import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section
            className="relative items-center bg-[url('https://readdy.ai/api/search-image?query=high%20speed%20luxury%20sports%20car%20racing%20on%20dark%20asphalt%20road%20at%20night%20with%20motion%20blur%20lights%20and%20dramatic%20lighting%20cinematic%20automotive%20photography%20black%20background%20premium%20feel&width=1920&height=1080&seq=hero001&orientation=landscape')] bg-cover bg-fixed box-border caret-transparent flex justify-center min-h-[700px] md:min-h-[1000px] bg-center text-white overflow-hidden"
        >
            {/* Advanced Floating Background Blobs - Hidden on mobile for better performance and layout stability */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full"
            />
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 70, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
            <div className="relative z-10 box-border caret-transparent max-w-screen-xl text-center w-full mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl font-black box-border caret-transparent leading-[55px] mb-6 md:text-8xl md:leading-[96px]"
                >
                    India&#39;s Auto Infotainment Hub
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-gray-300 text-xl font-light box-border caret-transparent leading-7 mb-8 md:text-2xl md:leading-8"
                >
                    Supercars • Reviews • Facts • Racing
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="box-border caret-transparent gap-x-6 flex flex-col justify-center gap-y-6 md:flex-row"
                >
                    {/* HeroButton 1 */}
                    <button className="font-bold items-center caret-transparent flex justify-center text-nowrap px-10 py-4 rounded-lg text-black bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95">
                        <i className="ri-play-line text-xl box-border caret-transparent block leading-7 text-nowrap mr-3 text-black"></i>
                        Watch Videos
                    </button>

                    {/* HeroButton 2 */}
                    <button className="font-bold items-center caret-transparent flex justify-center text-nowrap px-10 py-4 rounded-lg text-blue-600 bg-transparent shadow-[rgba(37,99,235,0.3)_0px_0px_20px_0px] border-blue-600 border-solid border-2 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
                        <i className="ri-roadster-line text-xl box-border caret-transparent block leading-7 text-nowrap mr-3 text-blue-600"></i>
                        Explore Garage
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

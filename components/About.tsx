'use client';
import AboutImage from "../app/Image.jpeg"

import { motion } from 'framer-motion';

export function About() {
    return (
        <section className="bg-gray-900 py-24 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 1, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <img
                                src={AboutImage.src}
                                alt="About Me"
                                className="relative rounded-2xl shadow-2xl border border-gray-800 object-cover w-full h-[400px] md:h-[600px] transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10"
                        >
                            <div className="text-3xl font-black text-red-600">12+</div>
                            <div className="text-sm text-gray-400">Hours of Daily Research</div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-8">
                            Driving the Future of <br />
                            <span className="text-red-600 italic">Automotive Hub</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I'm the creator behind TheAutoBharat, where we bridge the gap between automotive excellence and enthusiast passion. What started as a simple blog has evolved into India's premier destination for supercar reviews, technical deep-dives, and cutting-edge racing coverage.
                            </p>
                            <p>
                                Our mission is simple: to provide unapologetic, high-octane content that fuels your obsession with machines. From the roar of a V12 to the silent surge of electric hypercars, we cover it all with a focus on cinematic quality and technical accuracy.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Technical Insight", desc: "Deep dives into engineering and performance metrics." },
                                { title: "Cinematic Quality", desc: "Visual storytelling that captures every curve and sound." },
                                { title: "Global Coverage", desc: "From local launches to international motor shows." },
                                { title: "Community First", desc: "Building a space for every petrolhead in India." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                                >
                                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="mt-12"
                        >
                            <a href="#contact" className="inline-flex items-center text-red-600 font-bold hover:text-red-500 transition-colors group">
                                LEARN MORE ABOUT OUR VISION
                                <i className="ri-arrow-right-line ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

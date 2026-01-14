'use client';

import { motion } from 'framer-motion';

export function Footer() {
    const socialIcons = [
        { iconClassName: "ri-instagram-line" },
        { iconClassName: "ri-twitter-x-line" },
        { iconClassName: "ri-facebook-line" }
    ];

    const quickLinks = [
        { text: "Home", href: "#home" },
        { text: "About Me", href: "#about" },
        { text: "Blogs", href: "#blogs" },
        { text: "Contact", href: "#contact" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    } as any;

    return (
        <footer className="bg-black box-border caret-transparent border-gray-800 py-16 border-t border-solid text-white overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="box-border caret-transparent max-w-screen-xl mx-auto px-6"
            >
                <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mb-12 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
                    {/* Inlined FooterBrand */}
                    <motion.div
                        variants={itemVariants}
                        className="box-border caret-transparent col-end-auto col-start-auto md:col-end-[span_2] md:col-start-[span_2]"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="text-3xl box-border caret-transparent leading-9 mb-4 font-pacifico text-white cursor-default inline-block relative group"
                        >
                            TheAutoBharat
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></div>
                        </motion.div>
                        <p className="text-gray-400 box-border caret-transparent mb-6 max-w-md">
                            India&apos;s premier automotive content creator bringing you the latest
                            in supercars, reviews, and racing culture.
                        </p>
                    </motion.div>

                    {/* Inlined Quick Links */}
                    <motion.div variants={itemVariants} className="box-border caret-transparent">
                        <h4 className="text-lg font-bold box-border caret-transparent leading-7 mb-4">
                            Quick Links
                        </h4>
                        <div className="box-border caret-transparent">
                            {quickLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    whileHover={{ x: 5, color: "#fff" }}
                                    href={link.href}
                                    className={`text-gray-400 box-border caret-transparent block transition-all duration-300 ${index > 0 ? "mt-2" : ""}`}
                                >
                                    {link.text}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Inlined Social Follow */}
                    <motion.div variants={itemVariants} className="box-border caret-transparent">
                        <h4 className="text-lg font-bold box-border caret-transparent leading-7 mb-4">
                            Follow Us
                        </h4>
                        <div className="box-border caret-transparent flex">
                            {socialIcons.map((icon, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "#DC2626",
                                        boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)"
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`items-center bg-gray-800 box-border caret-transparent flex h-12 justify-center w-12 rounded-full transition-all duration-300 cursor-pointer ${index > 0 ? "ml-3" : ""}`}
                                >
                                    <i
                                        className={`text-lg box-border caret-transparent block leading-7 ${icon.iconClassName} text-white`}
                                    ></i>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Inlined Copyright */}
                <motion.div
                    variants={itemVariants}
                    className="box-border caret-transparent text-center border-gray-800 pt-8 border-t border-solid"
                >
                    <p className="text-gray-400 box-border caret-transparent">
                        © 2026 TheAutoBharat. All rights reserved. Built with passion for
                        automotive excellence.
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    );
}

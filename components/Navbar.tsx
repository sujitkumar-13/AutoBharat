'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About Me", href: "#about" },
        { name: "Blogs", href: "#blogs" },
        { name: "Contact", href: "#contact" }
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed backdrop-blur-lg bg-black/90 box-border caret-transparent w-full z-50 border-gray-800 border-b border-solid top-0"
        >
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="items-center box-border caret-transparent flex justify-between py-4">
                    {/* NavbarLogo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl box-border caret-transparent leading-8 font-pacifico text-white cursor-pointer"
                    >
                        TheAutoBharat
                    </motion.div>

                    {/* Desktop NavbarLinks */}
                    <div className="items-center box-border caret-transparent hidden md:flex text-white">
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                whileHover={{ y: -2 }}
                                href={link.href}
                                className={`font-medium hover:text-red-600 transition-colors ${idx > 0 ? 'ml-8' : ''}`}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Hamburger Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white text-3xl focus:outline-none"
                    >
                        <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="md:hidden overflow-hidden border-t border-gray-800"
                        >
                            <div className="flex flex-col py-6 space-y-4">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={idx}
                                        variants={linkVariants}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-xl font-bold hover:text-red-600 transition-colors"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

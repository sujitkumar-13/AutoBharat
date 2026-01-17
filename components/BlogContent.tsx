'use client';

import { motion, Variants } from 'framer-motion';
import { BlogCard } from './BlogCard';

interface BlogContentProps {
    featuredPost: any;
    otherPosts: any[];
}

export function BlogContent({ featuredPost, otherPosts }: BlogContentProps) {
    const sidebarPosts = otherPosts.slice(0, 3);
    const gridPosts = otherPosts.slice(3);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="relative bg-[#020617] py-24 overflow-hidden">
            {/* Background Aesthetic Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-[1400px] mx-auto px-6 relative z-10"
            >
                <motion.div variants={itemVariants} className="text-center mb-20">
                    <motion.h2
                        animate={{
                            scale: [1, 1.02, 1],
                            opacity: [1, 0.9, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-5xl md:text-6xl font-black inline-block relative text-white tracking-tighter"
                    >
                        Automotive <span className="text-white">Blog</span>
                        <motion.div
                            animate={{ width: ["100%", "120%", "100%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#F97316] rounded-full shadow-[0_0_15px_#F97316]"
                        />
                    </motion.h2>
                </motion.div>

                {/* Desktop Layout (lg+) - Gapless Sidebar */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-3 gap-8 items-start mb-8">
                        <motion.div variants={itemVariants} className="col-span-2">
                            {featuredPost && (
                                <BlogCard post={featuredPost} featured={true} />
                            )}
                        </motion.div>
                        <div className="col-span-1 flex flex-col gap-8">
                            {otherPosts.slice(0, 3).map((post: any) => (
                                <motion.div key={post._id || post.title} variants={itemVariants}>
                                    <BlogCard post={post} featured={false} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* Remaining Desktop Grid */}
                    <div className="grid grid-cols-3 gap-8">
                        {otherPosts.slice(3).map((post: any) => (
                            <motion.div key={post._id || post.title} variants={itemVariants}>
                                <BlogCard post={post} featured={false} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tablet / Mobile Layout (< lg) - Gapless Grid */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div variants={itemVariants} className="md:col-span-2">
                        {featuredPost && (
                            <BlogCard post={featuredPost} featured={true} />
                        )}
                    </motion.div>
                    {otherPosts.map((post: any) => (
                        <motion.div key={post._id || post.title} variants={itemVariants}>
                            <BlogCard post={post} featured={false} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

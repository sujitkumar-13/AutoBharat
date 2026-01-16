'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
            } else {
                const data = await response.json();
                setErrors({ submit: data.error || 'Failed to send message. Please try again later.' });
            }
        } catch (error) {
            setErrors({ submit: 'An error occurred. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFocus = () => {
        if (Object.keys(errors).length > 0) {
            setErrors({});
        }
    };

    return (
        <section id="contact" className="bg-black py-24 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-4">
                        Have a partnership proposal or just want to talk cars? Reach out and we'll get back to you as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        {[
                            { icon: "ri-mail-send-line", title: "Email Us", content: "contact@theautobharat.com" },
                            { icon: "ri-map-pin-line", title: "Location", content: "Varanasi & Delhi, India" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{
                                    scale: 1.02,
                                    borderColor: "rgba(220, 38, 38, 0.5)",
                                    boxShadow: "0 0 30px rgba(220, 38, 38, 0.15)"
                                }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="flex items-start bg-gray-900/50 p-6 rounded-2xl border border-gray-800 transition-all duration-300 cursor-default"
                            >
                                <motion.div
                                    whileHover={{ rotate: 15 }}
                                    className="bg-red-600/10 p-3 rounded-lg mr-6"
                                >
                                    <i className={`${item.icon} text-2xl text-red-600`}></i>
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    <p className="text-gray-400">{item.content}</p>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{
                                scale: 1.02,
                                borderColor: "rgba(220, 38, 38, 0.5)",
                                boxShadow: "0 0 30px rgba(220, 38, 38, 0.15)"
                            }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex items-start bg-gray-900/50 p-6 rounded-2xl border border-gray-800 transition-all duration-300 cursor-default"
                        >
                            <motion.div
                                whileHover={{ rotate: 15 }}
                                className="bg-red-600/10 p-3 rounded-lg mr-6"
                            >
                                <i className="ri-share-line text-2xl text-red-600"></i>
                            </motion.div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {[
                                        { icon: "ri-instagram-line", color: "hover:bg-red-600" },
                                        { icon: "ri-twitter-x-line", color: "hover:bg-red-600" },
                                        { icon: "ri-facebook-line", color: "hover:bg-red-600" }
                                    ].map((social, sIdx) => (
                                        <motion.a
                                            key={sIdx}
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 5,
                                                backgroundColor: "#DC2626",
                                                boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)"
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                            href="#"
                                            className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300"
                                        >
                                            <i className={social.icon}></i>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form / Success Message */}
                    <div className="relative min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="contact-form"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    onSubmit={handleSubmit}
                                    className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 shadow-2xl backdrop-blur-sm"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        {[
                                            { label: "First Name", placeholder: "John", name: "firstName" },
                                            { label: "Last Name", placeholder: "Doe", name: "lastName" }
                                        ].map((field) => (
                                            <div key={field.name}>
                                                <label className="block text-sm font-medium text-gray-400 mb-2">{field.label}</label>
                                                <motion.input
                                                    whileFocus={{ scale: 1.01 }}
                                                    type="text"
                                                    name={field.name}
                                                    value={formData[field.name as keyof typeof formData]}
                                                    onChange={handleChange}
                                                    onFocus={handleFocus}
                                                    className={`w-full bg-black border ${errors[field.name] ? 'border-red-600' : 'border-gray-800'} rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition-colors`}
                                                    placeholder={field.placeholder}
                                                />
                                                <AnimatePresence>
                                                    {errors[field.name] && (
                                                        <motion.p
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="text-red-500 text-xs mt-1 font-medium"
                                                        >
                                                            {errors[field.name]}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.01 }}
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            className={`w-full bg-black border ${errors.email ? 'border-red-600' : 'border-gray-800'} rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition-colors`}
                                            placeholder="john@example.com"
                                        />
                                        <AnimatePresence>
                                            {errors.email && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="text-red-500 text-xs mt-1 font-medium"
                                                >
                                                    {errors.email}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.01 }}
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            className={`w-full bg-black border ${errors.message ? 'border-red-600' : 'border-gray-800'} rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition-colors resize-none`}
                                            placeholder="Tell us more about your inquiry..."
                                        ></motion.textarea>
                                        <AnimatePresence>
                                            {errors.message && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="text-red-500 text-xs mt-1 font-medium"
                                                >
                                                    {errors.message}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <AnimatePresence>
                                        {errors.submit && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="text-red-500 text-sm mb-4 font-medium text-center"
                                            >
                                                {errors.submit}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-red-600 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 flex items-center justify-center disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : "Send Message"}
                                    </motion.button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success-message"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-gray-900/50 p-12 rounded-3xl border border-red-600/30 shadow-2xl backdrop-blur-sm flex flex-col items-center text-center h-full justify-center"
                                >
                                    <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mb-6">
                                        <i className="ri-checkbox-circle-fill text-5xl text-red-600"></i>
                                    </div>
                                    <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
                                    <p className="text-gray-400 text-lg mb-8">
                                        Thank you for reaching out. A member of the high-performance team will be in touch shortly.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-red-600 font-bold hover:text-red-500 transition-colors"
                                    >
                                        SEND ANOTHER MESSAGE
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

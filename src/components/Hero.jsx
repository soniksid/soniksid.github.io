
import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Professional_Profile_Siddharth.png';
import cvFile from '../assets/CV_SIDDHARTH_Kempten.pdf';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pastel-blue/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-pastel-blue text-lg md:text-xl font-medium tracking-widest mb-4 uppercase">
                        Portfolio
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Electrical Engineer by <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-blue to-white">Profession</span>.
                        <br />
                        Artist by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Heart</span>.
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                        B.Tech in Electrical Engineering (BTU Bikaner). Bridging the gap between technical precision and creative expression.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href={cvFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 glass-btn border border-transparent hover:border-white/10 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center"
                        >
                            Get CV
                        </a>
                        <a
                            href="#connect"
                            className="px-8 py-3 glass-btn border border-transparent hover:border-white/10 rounded-full transition-all duration-300"
                        >
                            Let's Connect
                        </a>
                    </div>
                </motion.div>

                {/* Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-pastel-blue to-purple-500 rounded-full opacity-20 blur-xl animate-pulse" />
                        <div className="relative w-full h-full rounded-full border-2 border-white/10 glass overflow-hidden flex items-center justify-center bg-black/50">
                            <img
                                src={profileImg}
                                alt="Siddharth Soni"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

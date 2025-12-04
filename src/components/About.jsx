import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About <span className="text-pastel-blue">Me</span></h2>

                    <div className="glass p-8 md:p-12 rounded-2xl text-lg leading-relaxed text-gray-300">
                        <p className="mb-6">
                            Born and raised in the vibrant city of <span className="text-white font-semibold">Jodhpur, Rajasthan</span>, I have always been fascinated by how things work—whether it's the intricate circuits of a machine or the subtle strokes of a paintbrush.
                        </p>
                        <p>
                            My journey is a blend of <span className="text-pastel-blue font-semibold">Engineering precision</span> and <span className="text-purple-400 font-semibold">Artistic expression</span>. While my professional path is rooted in Electrical Engineering and Automation, my heart finds solace in creativity. This duality allows me to approach problems with a unique perspective, combining logic with aesthetics.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Palette } from 'lucide-react';

const FutureVision = () => {
    return (
        <section id="vision" className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pastel-blue/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Future <span className="text-pastel-blue">Vision</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Looking ahead, I aim to merge my technical expertise with my passion for community and art.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Goal 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass p-8 rounded-2xl border-t-4 border-pastel-blue hover:scale-105 transition-transform duration-300"
                    >
                        <div className="w-14 h-14 bg-pastel-blue/20 rounded-xl flex items-center justify-center mb-6 text-pastel-blue">
                            <Cpu size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">PLC Automation Engineer</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Aspiring to become a leading professional in Industrial Automation, designing efficient control systems and driving innovation in the manufacturing sector.
                        </p>
                    </motion.div>

                    {/* Goal 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="glass p-8 rounded-2xl border-t-4 border-purple-400 hover:scale-105 transition-transform duration-300"
                    >
                        <div className="w-14 h-14 bg-purple-400/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                            <Palette size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Art Club for Learners</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Envisioning a free, open community for aspiring artists to learn, collaborate, and express themselves without financial barriers.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FutureVision;

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen, Globe } from 'lucide-react';

const Experience = () => {
    const timeline = [
        {
            year: '2022',
            title: 'B.Tech in Electrical Engineering',
            org: 'BTU Bikaner',
            description: 'Completed Bachelor of Technology with a focus on electrical systems and automation.',
            icon: <GraduationCap size={20} />,
            color: 'text-pastel-blue',
            bg: 'bg-pastel-blue/20'
        },
        {
            year: 'College Years',
            title: 'Freelance Web Designer',
            org: 'Self-Employed',
            description: 'Designed and developed websites for various clients, honing front-end skills.',
            icon: <Globe size={20} />,
            color: 'text-purple-400',
            bg: 'bg-purple-400/20'
        },
        {
            year: 'Early Career',
            title: 'GET (Graduate Engineer Trainee)',
            org: 'Simpolo Ceramics',
            description: 'Gained hands-on experience in industrial electrical systems and maintenance.',
            icon: <Briefcase size={20} />,
            color: 'text-pink-400',
            bg: 'bg-pink-400/20'
        },
        {
            year: '2 Years',
            title: 'Cambridge Science Educator',
            org: 'Educational Institute',
            description: 'Mentored students in science, fostering a love for learning and critical thinking.',
            icon: <BookOpen size={20} />,
            color: 'text-yellow-400',
            bg: 'bg-yellow-400/20'
        },
        {
            year: 'Current',
            title: 'Prospective Master\'s Student',
            org: 'Hochschule Kempten, Germany',
            description: 'Pursuing advanced studies in Electrical Engineering & Automation.',
            icon: <GraduationCap size={20} />,
            color: 'text-green-400',
            bg: 'bg-green-400/20'
        }
    ];

    return (
        <section id="experience" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                >
                    My <span className="text-pastel-blue">Journey</span>
                </motion.h2>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2" />

                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-background border-4 border-gray-800 z-10">
                                <div className={`w-3 h-3 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                            </div>

                            {/* Content Card */}
                            <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                                }`}>
                                <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                                    <div className={`inline-flex items-center justify-center p-2 rounded-lg mb-4 ${item.bg} ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <span className="block text-sm text-gray-400 mb-1">{item.year}</span>
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    <p className="text-pastel-blue text-sm mb-3">{item.org}</p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

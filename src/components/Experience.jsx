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

                <div className="max-w-4xl mx-auto space-y-8">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20 hover:shadow-2xl hover:backdrop-blur-xl group">
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                            <span className="hidden md:block text-gray-600">•</span>
                                            <p className="text-pastel-blue font-medium">{item.org}</p>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-3">{item.year}</p>
                                        <p className="text-gray-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
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

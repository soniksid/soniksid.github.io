import React from 'react';
import { Linkedin, Facebook, Calendar, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="connect" className="bg-black/40 pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">

                    {/* Brand & Tagline */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            SIDDHARTH<span className="text-pastel-blue">SONI</span>
                        </h2>
                        <p className="text-gray-400">Engineering the Future. Painting the Dreams.</p>
                    </div>

                    {/* Top Mate CTA */}
                    <div className="glass p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 max-w-md">
                        <div className="bg-white/10 p-3 rounded-full">
                            <Calendar size={24} className="text-pastel-blue" />
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="font-bold text-lg">Book a Session</h4>
                            <p className="text-sm text-gray-400 mb-3">Connect with me on Top Mate for guidance.</p>
                            <a
                                href="https://topmate.io/siddharthsoni"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-pastel-blue text-black text-sm font-bold rounded-lg hover:bg-white transition-colors"
                            >
                                Visit Top Mate
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Siddharth Soni. All rights reserved.
                    </p>

                    <div className="flex space-x-6">
                        <a href="https://linkedin.com/in/siddharth-soni" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pastel-blue transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="mailto:contact@siddharthsoni.com" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

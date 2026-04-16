import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Load theme from localStorage if available
        let savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'black') savedTheme = 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Vision', href: '#vision' },
        { name: 'Connect', href: '#connect' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'bg-transparent py-6 border-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-pastel-blue tracking-wider glass-btn border border-transparent">
                    SIDDHARTH<span style={{ color: 'var(--text-color)' }}>SONI</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{ color: 'var(--text-secondary)' }}
                            className="glass-btn border border-transparent text-sm uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    {/* Theme Toggle Button */}
                    <motion.button
                        onClick={toggleTheme}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        className={`overflow-hidden relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-500`}
                        style={{
                            backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
                            borderColor: theme === 'dark' ? 'var(--glass-border)' : 'var(--glass-border)',
                            color: theme === 'dark' ? 'var(--text-color)' : '#f59e0b',
                            boxShadow: theme === 'light' ? '0 0 15px rgba(245, 158, 11, 0.2)' : 'none'
                        }}
                        title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
                    >
                        <motion.div
                            initial={false}
                            animate={{ 
                                rotate: theme === 'light' ? 360 : 0,
                                scale: theme === 'light' ? 1.1 : 0.9,
                            }}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 10 }}
                        >
                            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} fill="currentColor" />}
                        </motion.div>
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl transition-colors"
                                    style={{ color: 'var(--text-color)' }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            
                            {/* Mobile Theme Toggle */}
                            <motion.button
                                onClick={() => {
                                    toggleTheme();
                                    setIsOpen(false);
                                }}
                                whileTap={{ scale: 0.9 }}
                                className={`flex items-center space-x-3 px-6 py-3 rounded-xl border transition-all duration-500`}
                                style={{
                                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
                                    borderColor: 'var(--glass-border)',
                                    color: theme === 'dark' ? 'var(--text-color)' : '#f59e0b',
                                    boxShadow: theme === 'light' ? '0 0 15px rgba(245, 158, 11, 0.2)' : 'none'
                                }}
                            >
                                <motion.div
                                    animate={{ rotate: theme === 'light' ? 360 : 0 }}
                                    transition={{ duration: 0.5, type: 'spring' }}
                                >
                                    {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} fill="currentColor" />}
                                </motion.div>
                                <span className="text-sm uppercase tracking-widest font-medium text-current">
                                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                                </span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

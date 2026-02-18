import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Globe, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Projetos', href: '#projects' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 text-2xl font-bold">
                    <div className="p-1 rounded-sm bg-white/5 border border-white/10">
                        <Code2 size={24} className="text-primary-green" />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-green">
                        simasw.dev
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-primary-green transition-colors font-medium text-sm tracking-wide"
                        >
                            {link.name.toUpperCase()}
                        </a>
                    ))}
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 hover:border-primary-green/50 transition-colors cursor-default">
                        <Globe size={18} className="text-gray-400" />
                        <span className="text-gray-300 text-xs font-medium">PT</span>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-primary-black border-b border-white/10 p-6 flex flex-col space-y-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-primary-green text-lg font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

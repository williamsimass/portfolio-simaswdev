import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Logo & Description */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="text-white p-1 rounded-sm">
                                <Code2 size={24} className="text-primary-green" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-green">
                                Simasw.dev
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Desenvolvendo experiências digitais modernas, performáticas e acessíveis.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Navegação</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-primary-green text-sm transition-colors">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-primary-green text-sm transition-colors">
                                    Projetos
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Conecte-se</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/williamsimass"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-green hover:text-black transition-all duration-300"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/williamsimas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-green hover:text-black transition-all duration-300"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:contato.simasw@gmail.com"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-green hover:text-black transition-all duration-300"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center bg-black">
                    <p className="text-gray-500 text-xs">
                        © 2026 William Simas. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

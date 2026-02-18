import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary-green/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-primary-green/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="col-span-2 text-center md:text-left"
                >
                    <div className="inline-block px-4 py-2 border border-primary-green/30 rounded-full bg-primary-green/5 backdrop-blur-sm mb-6">
                        <span className="flex items-center gap-2 text-primary-green text-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
                            Disponível para novos projetos
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                        Olá, meu nome é William
                    </h1>

                    <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600">
                        Desenvolvedor Full Stack
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed md:mx-0 mx-auto">
                        Especialista em criação de softwares, com experiência também em aplicativos móveis e páginas com foco em UX.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-primary-green text-black font-bold hover:bg-white transition-all duration-300 rounded-md"
                        >
                            Entrar em contato
                        </a>
                        <div className="flex gap-4">
                            <a href="https://github.com/williamsimass" target="_blank" rel="noopener noreferrer" className="p-3 text-white hover:text-primary-green transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/williamsimas/" target="_blank" rel="noopener noreferrer" className="p-3 text-white hover:text-primary-green transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                        </div>
                    </div>
                </motion.div>


            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
            </motion.div>

        </section>
    );
};

export default Hero;

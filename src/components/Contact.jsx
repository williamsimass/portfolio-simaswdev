import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "contato.simasw@gmail.com";
    const whatsapp = "https://wa.me/5571991333879";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 bg-primary-black relative flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-green/5 rounded-full blur-[120px]" />
            </div>

            <motion.div
                className="max-w-3xl w-full mx-6 bg-secondary-black border border-white/5 rounded-3xl p-8 md:p-16 text-center relative z-10 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Entre em <span className="text-primary-green">contato</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto">
                    Vamos conversar sobre seus projetos e o que você está procurando!
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    {/* Primary Action: Send Email */}
                    <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-green text-black font-bold rounded-lg hover:bg-white transition-colors duration-300"
                    >
                        <Mail size={20} />
                        Enviar e-mail
                    </a>

                    {/* Secondary Action: Copy Email */}
                    <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
                    >
                        {copied ? <Check size={20} className="text-primary-green" /> : <Copy size={20} />}
                        {copied ? "Copiado!" : "Copiar e-mail"}
                    </button>

                    {/* Tertiary Action: WhatsApp */}
                    <a
                        href={whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366]/10 text-[#25D366] font-bold rounded-lg border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors duration-300"
                    >
                        <MessageCircle size={20} />
                        WhatsApp
                    </a>
                </div>

                <div className="flex justify-center gap-6">
                    <a href="https://github.com/williamsimass" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                        <Github size={20} />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/williamsimas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                        <Linkedin size={20} />
                        LinkedIn
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;

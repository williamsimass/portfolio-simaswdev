import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "MCFINFO SOLUÇÕES EM TI",
        role: "Analista de desenvolvimento",
        period: "Out 2025 - Atualmente",
        description: [
            "Uso das linguagens Javascript, Python, React.JS, Next.Js, Node.js e SQLServer.",
            "Criação de aplicativo móvel usando Flutter.",
            "Criação de workflow para chatbot.",
            "Criação de website e e-commerce.",
            "Automação de atendimento no chatbot.",
            "Alteração de interface usando React.JS, Next.Js e Javascript.",
            "Atendimento de suporte nv2.",
            "Sistema Whitelabel Z-Pro.",
            "Sistema GLPI."
        ]
    },
    {
        company: "Pessoa & Pessoa Advogados",
        role: "Analista de suporte de TI",
        period: "Ago 2024 - Ago 2025",
        description: [
            "Analista de suporte.",
            "Sistema GLPI.",
            "Active Directory.",
            "Suporte técnico nv1."
        ]
    },
    {
        company: "Pessoa & Pessoa Advogados",
        role: "Estagiário de TI",
        period: "Nov 2023 - Ago 2024",
        description: [
            "Sistema GLPI.",
            "Suporte Técnico TI N1 e NV2."
        ]
    },
    {
        company: "Hospital ProHope",
        role: "Estagiário de TI",
        period: "Jul 2023 - Dez 2023",
        description: [
            "Suporte técnico N1.",
            "PIXEON - SMART e INFRA."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-secondary-black relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Minha <span className="text-primary-green">Experiência</span>.
                </motion.h2>

                <div className="space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row gap-8 items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[10px] md:left-1/2 top-0 w-5 h-5 bg-primary-green rounded-full border-4 border-secondary-black md:-translate-x-1/2 z-10" />

                            {/* Content */}
                            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                <h4 className="text-lg text-primary-green font-medium mb-2">
                                    {exp.company}
                                </h4>
                                <div className={`flex items-center gap-2 text-sm text-gray-500 mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                                    <Calendar size={14} />
                                    {exp.period}
                                </div>
                                <div className="text-gray-400 leading-relaxed text-sm">
                                    {Array.isArray(exp.description) ? (
                                        <ul className={`list-disc list-inside space-y-1 ${index % 2 === 0 ? '' : 'md:text-right md:list-none'}`}>
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{exp.description}</p>
                                    )}
                                </div>
                            </div>

                            {/* Empty Half for layout balance */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

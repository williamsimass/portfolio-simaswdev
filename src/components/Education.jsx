import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
    {
        school: "Faculdade Líbano",
        degree: "Pós-graduação Lato Sensu - Especialização, Desenvolvimento Full Stack",
        period: "Jan 2026 - Jan 2027",
        description: [
            "Desenvolvimento Full Stack.",
            "Integração backend, frontend e mobile.",
            "Desenvolvimento de APIs.",
            "Aplicações mobile.",
            "Arquitetura de software.",
            "Desenvolvimento Full Stack envolvendo backend, frontend e integração entre camadas, com foco em arquitetura de aplicações, comunicação via APIs e boas práticas de desenvolvimento.",
            "Desenvolvimento de aplicações mobile integradas a backend via APIs, garantindo comunicação eficiente, segurança e consistência de dados."
        ]
    },
    {
        school: "Unijorge",
        degree: "Bacharelado, Análise e Desenvolvimento de Sistemas",
        period: "Fev 2022 - Jul 2024",
        description: [
            "Nota: 8.5",
            "Graduado em ADS.",
            "Desenvolvedor Full Stack.",
            "C#, Desenvolvimento de software."
        ]
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-primary-black relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Formação <span className="text-primary-green">Acadêmica</span>.
                </motion.h2>

                <div className="space-y-8 relative">

                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="flex gap-6 items-start relative group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* Logo / Icon Placeholder */}
                            <div className="relative z-10 shrink-0">
                                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-green/50 transition-colors">
                                    <GraduationCap size={32} className="text-primary-green" />
                                </div>
                                {/* Vertical Line Connection */}
                                {index !== education.length - 1 && (
                                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+2rem)] bg-white/5" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-grow pt-2">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-primary-green transition-colors">
                                            {edu.degree}
                                        </h3>
                                        <h4 className="text-gray-400 font-medium text-lg">
                                            {edu.school}
                                        </h4>
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 font-mono whitespace-nowrap">
                                        {edu.period}
                                    </span>
                                </div>

                                <div className="text-gray-400 leading-relaxed text-sm pl-4 border-l border-white/5">
                                    <ul className="list-disc list-outside ml-4 space-y-2 marker:text-primary-green">
                                        {edu.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Formulário MCFINFO",
        description: "Landing page feita para captura de leads e vendas, com direcionamento de preenchimento de formulário.",
        tech: ["React", "Vite", "Node.js", "Tailwind"],
        image: "./projects/project1.png",
        github: "https://github.com/williamsimass/form-mcfinfo",
        live: "https://form.mcfinfo.com.br/"
    },
    {
        title: "CondoGate",
        description: "Aplicativo Mobile para administração completa de condomínio. Gestão de portaria, encomendas e reservas.",
        tech: ["Flutter", "Dart", "Firebase", "SQL Server"],
        images: ["./projects/project2 (1).png", "./projects/project2 (2).png"],
        github: "#",
        live: "#"
    },
    {
        title: "FinDash",
        description: "Dashboard financeiro para controle total das finanças. Gerencie receitas, gastos e parcelas em tempo real com análise por categoria e parcelas inteligentes.",
        tech: ["Tailwind", "Python", "PostgreSQL"],
        image: "./projects/project4.png",
        github: "https://github.com/williamsimass/findash",
        live: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-primary-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Projetos em <span className="text-primary-green">Destaque</span>.
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-secondary-black rounded-xl overflow-hidden border border-white/5 hover:border-primary-green/50 transition-all duration-300 transform hover:-translate-y-2 glow-box h-full flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Image */}
                            {/* Image(s) */}
                            <div className="h-48 overflow-hidden relative flex">
                                {project.images ? (
                                    // Multiple Images (Side by Side)
                                    <>
                                        {project.images.map((img, i) => (
                                            <div key={i} className="w-1/2 h-full relative border-r border-white/5 last:border-r-0 p-4 bg-black/20">
                                                <img
                                                    src={img}
                                                    alt={`${project.title} ${i + 1}`}
                                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    // Single Image
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                )}

                                {/* Overlay Links */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                                    <a href={project.github} className="p-2 bg-white text-black rounded-full hover:bg-primary-green transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.live} className="p-2 bg-white text-black rounded-full hover:bg-primary-green transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-green transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-primary-green border border-primary-green/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/williamsimass"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-green transition-colors text-lg group"
                    >
                        <Github size={20} className="group-hover:scale-110 transition-transform" />
                        Para outros projetos visite meu GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

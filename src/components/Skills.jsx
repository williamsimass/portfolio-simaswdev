import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const skillsTop = [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "Vite", icon: "vite" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Flutter", icon: "flutter" },
    { name: "Figma", icon: "figma" },
    { name: "Git", icon: "git" }
];

const skillsBottom = [
    { name: "Tailwind", icon: "tailwind" },
    { name: "Express", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Firebase", icon: "firebase" },
    { name: "Docker", icon: "docker" },
    { name: "Python", icon: "python" },
    { name: "Linux", icon: "linux" },
    { name: "VS Code", icon: "vscode" }
];

const SkillCard = ({ name, icon }) => (
    <div className="flex-[0_0_auto] min-w-0 pl-4 md:pl-6">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-900/50 border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-primary-green/50 hover:bg-zinc-900/80 transition-all duration-300 group cursor-default">
            <img
                src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
                alt={name}
                className="w-12 h-12 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg grayscale group-hover:grayscale-0"
                loading="lazy"
            />
            <span className="text-gray-400 font-medium text-sm group-hover:text-white transition-colors">
                {name}
            </span>
        </div>
    </div>
);

const CarouselRow = ({ items, direction = 'forward', speed = 1 }) => {
    const [emblaRef] = useEmblaCarousel(
        { loop: true },
        [AutoScroll({ playOnInit: true, speed: speed, direction: direction, stopOnInteraction: false })]
    );

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
                {items.map((skill, index) => (
                    <SkillCard key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-primary-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-primary-green/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-primary-green/5 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-full relative z-10 px-6">


                <div className="space-y-6">
                    <CarouselRow items={[...skillsTop, ...skillsTop]} direction="forward" speed={1} />
                    <CarouselRow items={[...skillsBottom, ...skillsBottom]} direction="backward" speed={1} />
                </div>
            </div>
        </section>
    );
};

export default Skills;

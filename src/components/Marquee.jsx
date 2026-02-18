import React from 'react';

const skills = [
    "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Node.js", "Framer Motion", "Vite", "UX/UI Design", "Figma",
    "Git", "Frontend Architecture", "SEO", "Performance"
];

const MarqueeItem = ({ text }) => (
    <div className="mx-8 text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-tighter hover:from-primary-green hover:to-primary-green/50 transition-all duration-300 cursor-default">
        {text}
    </div>
);

const Marquee = () => {
    return (
        <section className="py-20 relative overflow-hidden">

            {/* Gradient Fade Edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primary-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary-black to-transparent z-10 pointer-events-none" />

            {/* Row 1: Left to Right (Actually using marquee animation which goes right to left usually, let's allow CSS to handle) */}
            <div className="flex w-full mb-8 rotate-1">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <MarqueeItem key={`row1-${index}`} text={skill} />
                    ))}
                </div>
                <div className="flex animate-marquee whitespace-nowrap absolute top-0 left-full">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <MarqueeItem key={`row1-duplicate-${index}`} text={skill} />
                    ))}
                </div>
            </div>

            {/* Row 2: Right to Left (Reverse) */}
            <div className="flex w-full -rotate-1 mt-4">
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                    {[...skills, ...skills, ...skills].reverse().map((skill, index) => (
                        <MarqueeItem key={`row2-${index}`} text={skill} />
                    ))}
                </div>
                <div className="flex animate-marquee-reverse whitespace-nowrap absolute top-4 left-full">
                    {[...skills, ...skills, ...skills].reverse().map((skill, index) => (
                        <MarqueeItem key={`row2-duplicate-${index}`} text={skill} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Marquee;

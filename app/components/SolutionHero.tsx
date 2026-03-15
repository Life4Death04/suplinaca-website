"use client";

interface SolutionHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function SolutionHero({ title, subtitle, backgroundImage }: SolutionHeroProps) {
  return (
    <section 
      className="relative h-[400px] flex items-center justify-center text-white mt-14"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-950/70" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-200">{subtitle}</p>
      </div>
    </section>
  );
}

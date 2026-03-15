interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  marginTop?: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage,
  marginTop = "mt-14"
}: PageHeroProps) {
  return (
    <section 
      className={`relative h-[400px] flex items-center justify-center text-white ${marginTop}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-950/80" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-200">{subtitle}</p>
      </div>
    </section>
  );
}

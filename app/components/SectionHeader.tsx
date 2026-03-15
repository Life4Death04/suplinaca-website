interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = true 
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center mb-12" : "mb-12"}>
      <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 ${centered ? 'text-center' : ''} mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-600 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

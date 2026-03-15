interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  href?: string;
  target?: string;
}

export default function ContactInfoCard({ icon, title, content, href, target }: ContactInfoCardProps) {
  const cardContent = (
    <>
      <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-blue-600 flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-blue-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="flex-1 min-w-[250px] max-w-[300px] bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group block"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className="flex-1 min-w-[250px] max-w-[300px] bg-white rounded-lg shadow-md p-8 text-center">
      {cardContent}
    </div>
  );
}

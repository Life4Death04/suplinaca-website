interface ContactMethodItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  linkText: string;
}

export default function ContactMethodItem({ icon, label, href, linkText }: ContactMethodItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <a 
          href={href} 
          className="text-lg font-semibold hover:text-blue-600 transition-colors cursor-pointer"
          target={href.startsWith('https://') ? '_blank' : undefined}
          rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}

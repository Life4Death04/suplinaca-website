interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

export default function ContactInfoCard({ icon, title, content }: ContactInfoCardProps) {
  return (
    <div className="flex-1 min-w-[280px] max-w-[350px] bg-white rounded-lg shadow-md p-8 text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-blue-600 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  );
}

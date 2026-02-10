import { ReactNode } from "react";

interface EventDetailCardProps {
  icon: ReactNode;
  iconBgColor: string;
  title: string;
  line1: string;
  line2?: string;
}

export function EventDetailCard({ icon, iconBgColor, title, line1, line2 }: EventDetailCardProps) {
  return (
    <div className="card-custom bg-white p-8 text-center">
      <div className={`w-20 h-20 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-dark-blue">{title}</h3>
      <p className="text-gray-700 mb-2 text-lg">{line1}</p>
      {line2 && <p className="text-gray-700 text-lg">{line2}</p>}
    </div>
  );
}

import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  colorClass: string;
}

export function TestimonialCard({ quote, name, role, image, colorClass }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg relative">
      <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 ${colorClass} rounded-full flex items-center justify-center`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </div>
      <div className="pt-4">
        <p className="text-gray-700 italic mb-6">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`${name}, ${role}`}
                fill
                className="object-cover object-center"
                sizes="48px"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-dark-blue">{name}</h4>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

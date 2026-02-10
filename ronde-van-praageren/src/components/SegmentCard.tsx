import Image from "next/image";

interface SegmentCardProps {
  name: string;
  length: string;
  grade: string;
  image: string;
  position: "left" | "right";
}

export function SegmentCard({ name, length, grade, image, position }: SegmentCardProps) {
  const hoverPosition = position === "left"
    ? "left-0"
    : "left-0 md:right-0 md:left-auto";

  return (
    <div className="group relative">
      <div className={`flex items-center ${position === "right" ? "justify-end md:justify-start" : ""}`}>
        <div className="relative h-[67px] w-[67px] rounded-md overflow-hidden mr-4 border border-olive-500">
          <Image
            src={image}
            alt={`${name} segment: ${length} at ${grade} grade`}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <span className="text-xl font-medium tracking-wide text-gray-800 block">{name}</span>
          <p className="text-base font-medium text-gray-600 mt-1">Length: {length} | Grade: {grade}</p>
        </div>
      </div>
      {/* Hover Image */}
      <div className={`opacity-0 group-hover:opacity-100 absolute z-10 -top-3 ${hoverPosition} transform -translate-y-full transition-opacity duration-300 pointer-events-none`}>
        <div className="bg-white p-2 rounded-lg shadow-lg">
          <div className="relative max-w-[435px] w-[435px] h-[272px]">
            <Image
              src={image}
              alt={`${name} segment preview`}
              fill
              className="object-cover rounded"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

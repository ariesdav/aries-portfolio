import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({ title, description, image, tech, link }: Project) {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:scale-[1.02] hover:shadow-xl transition transform duration-300 ease-in-out ${
        link ? "cursor-pointer" : ""
      }`}
    >
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

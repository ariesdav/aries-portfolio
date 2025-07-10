"use client";

import {
  SiPython,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGooglecolab,
  SiJupyter,
  SiPostgresql,
} from "react-icons/si";

const techs = [
  {
    name: "Python",
    icon: <SiPython size={40} className="text-[#306998]" />,
    link: "https://www.python.org/doc/",
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow size={40} className="text-orange-500" />,
    link: "https://www.tensorflow.org/",
  },
  {
    name: "Pandas",
    icon: <SiPandas size={40} className="text-pink-500" />,
    link: "https://pandas.pydata.org/docs/",
  },
  {
    name: "NumPy",
    icon: <SiNumpy size={40} className="text-blue-500" />,
    link: "https://numpy.org/doc/",
  },
  {
    name: "Scikit-Learn",
    icon: <SiScikitlearn size={40} className="text-yellow-500" />,
    link: "https://scikit-learn.org/stable/documentation.html",
  },
  {
    name: "Google Colab",
    icon: <SiGooglecolab size={40} className="text-yellow-400" />,
    link: "https://colab.research.google.com/",
  },
  {
    name: "Jupyter",
    icon: <SiJupyter size={40} className="text-orange-400" />,
    link: "https://jupyter.org/",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={40} className="text-blue-400" />,
    link: "https://www.postgresql.org/docs/",
  },
];

export default function TechStack() {
  return (
    <section className="md:max-w-6xl mx-auto py-20 px-6 space-y-8 text-white">
      <h2 className="text-4xl font-bold text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {techs.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center text-center space-y-2 group">
            <a
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              title={`Go to ${tech.name} docs`}
            >
              {tech.icon}
            </a>
            <span className="text-sm text-gray-300 group-hover:text-white">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fish2Eat",
    description: "Discover Fish & Recipes is an innovative mobile app that identifies fish species using image recognition and suggests related recipes.",
    image: "/projects/Fish2Eat.png",
    tech: ["Kotlin", "TensorFlow Lite", "Firebase", "Android Studio"],
    link: "https://github.com/Fish2Eat-Discover-Fish-Recipes/Fish2Eat-Discover-Fish-Recipes",
  },
  {
    title: "Predictive Analytics Laptop Prices",
    description: "A machine learning project to predict laptop prices using brand and hardware specs with Random Forest and Gradient Boosting models.",
    image: "/projects/PredictiveAnalytics.png",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    link: "https://github.com/ariesdav/proyek-machine-learning-terapan/tree/main/submission1-predictive-analytics",
  },
  {
    title: "E-Commerce Data Analysis Dashboard",
    description: "Interactive Streamlit dashboard analyzing seasonal trends and product preferences in Brazilian e-commerce data.",
    image: "/projects/DataAnalysis.png",
    tech: ["Streamlit", "Python", "Pandas", "Seaborn", "Matplotlib"],
    link: "https://github.com/ariesdav/proyekAnalisisData/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="md:max-w-6xl mx-auto space-y-6 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white text-center">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

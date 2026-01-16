import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      heading: "Full-Stack Engineer · 2026",
      title: "Airline Performance Dashboard",
      description: "Analyzed quarterly sales data to identify trends and optimize revenue streams using Python and Tableau.",
      tags: ["AWS", "QuickSuite", "JSON", "Excel"],
      link: "#"
    },
    {
      heading: "Full-Stack Engineer · 2026",
      title: "Customer Segmentation Analysis",
      description: "Developed customer segmentation model to improve marketing targeting and increase conversion rates.",
      tags: ["SQL", "Power BI", "Excel"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="content-container">
        <h2 className="text-section-title text-gray-900 mb-10">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              heading={project.heading}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  heading: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({ heading, title, description, tags, link }: ProjectCardProps) {
  const CardContent = (
    <>
      <p className="text-xs text-light text-gray-600 pb-2">{heading}</p>
      <h3 className="text-md text-body text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm text-light mb-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="border border-gray-200 border-1 text-xs text-light bg-white px-2 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-gray-300 p-5 rounded-sm bg-zinc-50 bg-opacity-50 hover:border-gray-400 hover:shadow-md transition-colors cursor-pointer"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className="border border-gray-300 p-5 rounded-sm bg-zinc-50 bg-opacity-50">
      {CardContent}
    </div>
  );
}

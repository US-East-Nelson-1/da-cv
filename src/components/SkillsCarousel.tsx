export default function SkillsCarousel() {
  const skills = [
    "React",
    "Angular",
    "Design Systems",
    "AWS",
    "QuickSuite",
    "Power BI",
    "MySQL"
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
        {skills.map((skill, index) => (
          <li key={index} className="text-xs text-gray-700 whitespace-nowrap">
            {skill}
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
        {skills.map((skill, index) => (
          <li key={index} className="text-xs text-gray-700 whitespace-nowrap">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

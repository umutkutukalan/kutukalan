import type { IconType } from "react-icons";
import { technologiesForHome } from "../../constants";

export interface Tech {
  id: number;
  icon: IconType | null;
  title: string;
}

const AboutTechnologies = () => {
  const marqueeItems = [...technologiesForHome, ...technologiesForHome];

  return (
    <section className="px-5">
      <div className="tech-marquee">
        <ul className="tech-marquee-track">
          {marqueeItems.map((tech: Tech, index: number) => {
            const Icon = tech.icon;
            return (
              <li key={`${tech.id}-${index}`} className="flex items-center justify-center">
                {Icon && <Icon className="text-4xl sm:text-4xl md:text-4xl" />}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AboutTechnologies;

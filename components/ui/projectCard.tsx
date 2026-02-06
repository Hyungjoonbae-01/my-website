import { Card, CardContent } from "@/components/ui/card";

type ProjectCardProps = {
  title: string;
  image: string;
  period: string;
  description: string[];
  techs: string[];
  link?: string;
};

export default function ProjectCard({
  title,
  image,
  period,
  description,
  techs,
  link,
}: ProjectCardProps) {
  return (
    <Card
      className="
        w-full
        h-full
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-black/5
        rounded-xl border bg-gray-50 p-8
        shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]
      "
    >
      <CardContent className="p-6 h-full">
        <div className="flex h-full flex-col gap-6 md:flex-row">
          {/* Image (LOCKED SIZE) */}
          <div className="md:w-1/3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
              <img
                src={image}
                alt={title}
                className="
                  absolute inset-0
                  h-full w-full
                  object-contain
                  transition-transform duration-300
                  hover:scale-[1.02]
                "
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="md:w-2/3 flex flex-col">
            <h3 className="mb-1 text-xl font-semibold tracking-tight">
              {title}
            </h3>

            <p className="mb-3 text-sm text-muted-foreground">{period}</p>

            <div className="mb-4 space-y-3">
              {description.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {link && (
              <div className="mt-auto">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group inline-flex items-center gap-1
                    text-sm font-medium text-primary
                    transition hover:gap-2
                  "
                >
                  Visit site
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

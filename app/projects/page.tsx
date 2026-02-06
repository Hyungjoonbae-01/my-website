import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/projectCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container py-8">
        <h1 className="mb-6 text-3xl font-bold">Projects</h1>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}

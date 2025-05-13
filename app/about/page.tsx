import Header from "@/components/header"
import { BookOpen, Briefcase, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Header />

      <main className="container py-8">
        <h1 className="mb-8 text-3xl font-bold">About Me</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Introduction Section */}
          <section className="rounded-lg border bg-gray-50/80 p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Introduction</h2>
            <p className="mb-4 text-muted-foreground">
              I am a Computer Engineering student at the University of California, Irvine, with a focus on both computer
              hardware and software systems. 
            </p>

            {/* Hobbies Section */}
            <div className="mt-6">
              <div className="mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Hobbies & Interests</h2>
              </div>

              <div className="rounded-lg border bg-white p-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span>Playing League of Legends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span>Working Out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span>Watching Shows</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="rounded-lg border-4 border-gray-200 shadow-lg">
              <img
                src="/engineer-img.jpg"
                alt="Hengjun Pei - Computer Engineering Student"
                className="h-[350px] w-[450px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <section className="mt-10 rounded-lg border bg-gray-50/80 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Education</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-medium text-primary">University of California, Irvine</h3>
              <p className="font-medium">Bachelor of Science, Computer Engineering</p>
              <p className="text-sm text-muted-foreground">Expected March 2027</p>
            </div>

            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-medium text-primary">Pierce College, Woodland Hills</h3>
              <p className="font-medium">Associate's Degree: Physics, Computer Engineering, Mathematics</p>
              <p className="text-sm text-muted-foreground">Graduated June 2024</p>
            </div>

            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-medium text-primary">Granada Hills Charter High School</h3>
              <p className="font-medium">High School Diploma</p>
              <p className="text-sm text-muted-foreground">Graduated June 2021</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-10 rounded-lg border bg-gray-50/80 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Skills</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 font-bold text-primary">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">C</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">C++</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Java</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">JavaScript</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Python</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">HTML</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Shell scripting</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Verilog</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">React</span>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 font-bold text-primary">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">MATLAB</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">VIVADO</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Microsoft Office</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Git</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">GitHub</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">MySQL</span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">Firebase</span>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 font-bold text-primary">Languages</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Korean (Native)</li>
                <li>Chinese (Native)</li>
                <li>Japanese (Conversational)</li>
                <li>English (Proficient)</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

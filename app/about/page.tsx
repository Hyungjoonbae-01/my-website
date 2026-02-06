import Header from "@/components/header";
import { BookOpen, Briefcase, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="container py-12">
        {/* PAGE TITLE */}
        <h1 className="mb-12 text-4xl font-bold tracking-tight text-gray-900">
          About Me
        </h1>

        <div className="grid gap-10 md:grid-cols-1">
          {/* INTRODUCTION */}
          <section
            className="
              rounded-xl border bg-gray-50 p-8
              shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]
            "
          >
            <h2 className="mb-5 text-2xl font-semibold text-gray-900">
              Introduction
            </h2>

            <div className="space-y-5">
              <p className="text-base leading-relaxed text-gray-600">
                Hi, I'm Hengjun Pei. I am a Korean who was born in Russia and
                raised in China and the United States. Although I was born in
                Russia, ironically I don't speak any Russian at all. Luckily, I
                am fluent in both Korean and Chinese, and I can also speak
                conversational Japanese and proficient English.
              </p>

              <p className="text-base leading-relaxed text-gray-600">
                I am currently a Computer Engineering student at the University
                of California, Irvine, where I am pursuing my passion for
                technology and innovation. I have a strong interest in software
                development, hardware design, and everything in between. I am
                always eager to learn new skills and take on new challenges. I
                would love to connect with people with similar interests, so
                feel free to reach out to me!
              </p>
            </div>

            {/* HOBBIES */}
            <div className="mt-8">
              <div className="mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Hobbies & Interests
                </h3>
              </div>

              <ul className="space-y-3 rounded-lg border bg-white p-5">
                {[
                  "Solving LeetCode Problems",
                  "Playing League of Legends",
                  "Working Out",
                  "Watching TV Shows",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* EDUCATION */}
        <section
          className="
            mt-16 rounded-xl border bg-gray-50 p-8
            shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]
          "
        >
          <div className="mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                school: "University of California, Irvine",
                degree: "Bachelor of Science, Computer Engineering",
                date: "Expected March 2027",
              },
              {
                school: "Pierce College, Woodland Hills",
                degree:
                  "Associate's Degree: Physics, Computer Engineering, Mathematics",
                date: "Graduated June 2024",
              },
              {
                school: "Granada Hills Charter High School",
                degree: "High School Diploma",
                date: "Graduated June 2021",
              },
            ].map((edu) => (
              <div key={edu.school} className="rounded-lg border bg-white p-5">
                <h3 className="text-sm font-semibold text-primary">
                  {edu.school}
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-800">
                  {edu.degree}
                </p>
                <p className="mt-1 text-xs text-gray-500">{edu.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section
          className="
            mt-16 rounded-xl border bg-gray-50 p-8
            shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]
          "
        >
          <div className="mb-6 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold text-gray-900">Skills</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <SkillBlock
              title="Technical Skills"
              items={[
                "C",
                "C++",
                "Java",
                "JavaScript",
                "TypeScript",
                "Python",
                "HTML",
                "Shell scripting",
                "Verilog",
                "React",
                "Embedded Systems",
                "Computer Networks",
              ]}
            />

            <SkillBlock
              title="Tools"
              items={[
                "MATLAB",
                "VIVADO",
                "Microsoft Office",
                "Git",
                "GitHub",
                "MySQL",
                "Firebase",
                "MongoDB",
              ]}
            />

            <div className="rounded-lg border bg-white p-5">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                Languages
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
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
  );
}

/* ---------- Helper ---------- */

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border bg-white p-5">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-gray-100 px-3 py-1 text-[11px] text-gray-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

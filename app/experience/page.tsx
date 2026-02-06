import Header from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container py-12">
        <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900">
          Experiences
        </h1>

        <div className="flex flex-col gap-8">
          {/* CORSA LAB */}
          <Card
            className="rounded-xl border bg-gray-50 p-8
              shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]"
          >
            <CardContent className="p-6 space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Undergraduate Research Assistant — CORSA Lab
                </h2>
                <p className="mb-3 text-sm text-muted-foreground">
                  University of California, Irvine
                </p>
                <p className="text-sm text-gray-500">
                  Tiny & Ternary Large Language Models
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Assisted with ongoing research at the CORSA Lab focused on
                efficient and resource-constrained language models. My role
                involved supporting experiments and evaluations related to Tiny
                and Ternary Large Language Models (LLMs) designed to operate
                under limited memory and computational budgets.
              </p>

              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Assisted with testing and evaluation of small-scale language
                    models under different precision and efficiency settings
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Helped analyze performance trade-offs related to model size,
                    memory usage, and inference behavior
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Supported graduate researchers by running experiments,
                    organizing results, and documenting observations
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/* OPS PROGRAM */}
          <Card
            className="rounded-xl border bg-gray-50 p-8
              shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]"
          >
            <CardContent className="p-6 space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  IEEE OPS Program — Embedded Systems
                </h2>
                <p className="mb-3 text-sm text-muted-foreground">
                  August 2025 – Present
                </p>
                <p className="text-sm text-gray-500">
                  Hands-on hardware & microcontroller projects
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Participated in the IEEE OPS Program, where I completed multiple
                hands-on embedded systems projects focused on microcontrollers,
                sensors, and peripheral integration. These projects emphasized
                understanding hardware–software interaction, signal behavior,
                and real-world device control.
              </p>

              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong>RGB LED Wizard</strong> — Implemented programmable
                    RGB lighting patterns using microcontroller logic, enabling
                    dynamic color transitions and state-based control based on
                    real-time input from a potentiometer.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong>Ultrasonic Sensor Trash Can</strong> — Built an
                    automated trash can using cardboard materials and an
                    ultrasonic distance sensor to detect proximity and drive a
                    motor that opens the lid, combining sensor input processing
                    with motor control.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong>iPiduino</strong> — Developed a mini MP3 player
                    using a microcontroller and a DFPlayer Mini module with an
                    inserted storage card, enabling button-controlled audio
                    playback through a connected speaker.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* COMPUTER TECHNICIAN */}
          <Card
            className="rounded-xl border bg-gray-50 p-8
              shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]"
          >
            <CardContent className="p-6 space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Computer Technician
                </h2>
                <p className="text-sm text-gray-500">Computer Annex</p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Worked as a computer technician providing hands-on hardware and
                software support for customer systems. The role required
                diagnosing issues, performing repairs, and ensuring reliable
                system performance across a wide range of devices.
              </p>

              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Diagnosed and repaired desktop and laptop hardware issues,
                    including storage failures, memory problems, power issues,
                    and component replacements
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Installed, configured, and reinstalled operating systems,
                    drivers, and essential software to restore system
                    functionality and performance
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Performed system troubleshooting to identify software
                    conflicts, malware issues, and performance bottlenecks
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Assisted customers with system setup, data transfer, and
                    technical questions, ensuring clear communication and
                    reliable support
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

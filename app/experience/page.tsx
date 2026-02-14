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
          {/*<Card
            className="rounded-xl border bg-gray-50 p-8
              shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]"
          >
            <CardContent className="p-6 space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Undergraduate Research Assistant — CORSA Lab
                </h2>
                <p className="mb-3 text-sm text-muted-foreground">
                  September 2025 - present
                </p>
                <p className="mb-3 text-sm text-muted-foreground">
                  University of California, Irvine
                </p>
              </div>

              <p className="text-sm font-semibold ">
                Tiny & Ternary Large Language Models
              </p>

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
          </Card>*/}
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

                <p className="mb-3 text-sm text-muted-foreground">
                  June 2023 – September 2024
                </p>
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

          {/* HACKATHON — DREAM */}
          <Card
            className="rounded-xl border bg-gray-50 p-8
    shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]"
          >
            <CardContent className="p-6 space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Hackathon — DREAM AI Hackathon
                </h2>
                <p className="mb-3 text-sm text-muted-foreground">
                  June 21-22, 2025
                </p>
                <p className="text-sm text-gray-500">The Foundry, Boston</p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Participated in the DREAM AI Hackathon in Boston as part of a
                multidisciplinary team, addressing a real-world healthcare
                bottleneck where hospitals in Korea face limited bed
                availability and delayed patient routing during time-critical
                situations.
              </p>

              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong>MediRoute</strong> — Collaboratively developed an
                    AI-assisted system to streamline patient routing by
                    collecting patient information, contacting multiple
                    hospitals, and filtering facilities based on real-time bed
                    availability and response status.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Designed an AI-driven pipeline to convert structured patient
                    data into descriptive summaries and voice-based outputs to
                    support faster medical routing and communication.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Contributed to system logic, data flow design, and
                    integration between backend services, AI analysis, and
                    user-facing components within a tight hackathon timeline.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* HACKATHON */}
          <Card
            className="rounded-xl border bg-gray-50 p-8
    shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]"
          >
            <CardContent className="p-6 space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Hackathon — BitHacks @ UCI
                </h2>
                <p className="mb-3 text-sm text-muted-foreground">
                  April 11 – 13, 2025
                </p>
                <p className="text-sm text-gray-500">
                  University of California, Irvine
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Participated in BitHacks at UC Irvine, collaborating in a
                fast-paced hackathon environment to design and build an embedded
                systems project within a limited timeframe. The project focused
                on creative hardware– software integration and real-time user
                interaction.
              </p>

              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    <strong>GOOD-VIBE CLOCK</strong> — Built an interactive
                    talking clock using an ESP32, OLED display, and DFPlayer
                    Mini that supports a compliment mode and a time-speaking
                    mode controlled via physical buttons.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Implemented button input logic, display updates, and
                    synchronized audio playback to deliver real-time visual and
                    voice feedback.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Integrated multiple peripherals under time constraints,
                    demonstrating practical embedded programming, debugging, and
                    hardware–software coordination.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CERTIFICATIONS */}
          <Card
            className="rounded-xl border bg-gray-50 p-8
    shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]"
          >
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Certifications
                </h2>
                <p className="text-sm text-gray-500">
                  Machine Learning, Data Science, and AI Foundations
                </p>
              </div>

              <ul className="space-y-5 text-sm text-gray-600">
                {/* UDEMY */}
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Machine Learning, Data Science & AI Engineering with
                      Python
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Udemy · Sundog Education (Frank Kane)
                    </p>
                    <p className="mt-1 leading-relaxed">
                      Completed an end-to-end course covering supervised and
                      unsupervised learning, data preprocessing, model
                      evaluation, and practical AI workflows using Python and
                      industry-standard tools.
                    </p>
                    <a
                      href="https://www.udemy.com/certificate/UC-66f48f21-3ee1-4e73-a776-a13762b467aa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      View Certificate
                    </a>
                  </div>
                </li>

                {/* COURSERA / IBM */}
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Exploratory Data Analysis for Machine Learning
                    </p>
                    <p className="text-sm text-muted-foreground">
                      IBM · Coursera
                    </p>
                    <p className="mt-1 leading-relaxed">
                      Gained hands-on experience analyzing datasets for machine
                      learning, focusing on data visualization, statistical
                      insights, feature understanding, and preparing data for
                      downstream ML models.
                    </p>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/4SEGMP7HRDFH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      View Certificate
                    </a>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

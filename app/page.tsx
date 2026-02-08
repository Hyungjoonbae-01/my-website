"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { Mail, GithubIcon, LinkedinIcon } from "lucide-react";
import Typewriter from "@/components/typewriter";

type Phase =
  | "TYPE_TITLE"
  | "TYPE_SUBTITLE"
  | "DELETE_SUBTITLE"
  | "DELETE_TITLE";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("TYPE_TITLE");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="container flex-1 flex items-start sm:items-center justify-center pt-8 sm:pt-0">
        <div
          className="
    relative w-full max-w-3xl min-h-[60vh] sm:h-[45vh]
    rounded-xl overflow-hidden
    shadow-[0_-8px_24px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.12)]
  "
        >
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 sm:space-y-6 px-4 sm:px-6">
              {/* Title */}
              <h1 className="min-h-[1.2em] text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl">
                <Typewriter
                  text="Hi, I'm Hengjun Pei"
                  active={phase === "TYPE_TITLE" || phase === "DELETE_TITLE"}
                  mode={phase === "DELETE_TITLE" ? "delete" : "type"}
                  onDone={() => {
                    if (phase === "TYPE_TITLE") setPhase("TYPE_SUBTITLE");
                    if (phase === "DELETE_TITLE") setPhase("TYPE_TITLE");
                  }}
                />
              </h1>

              {/* Subtitle */}
              <p className="min-h-[1.2em] text-base text-muted-foreground sm:text-lg md:text-2xl">
                <Typewriter
                  text="Computer Engineering student at UC Irvine"
                  active={
                    phase === "TYPE_SUBTITLE" || phase === "DELETE_SUBTITLE"
                  }
                  mode={phase === "DELETE_SUBTITLE" ? "delete" : "type"}
                  speed={45}
                  onDone={() => {
                    if (phase === "TYPE_SUBTITLE") {
                      delay(2000, () => setPhase("DELETE_SUBTITLE"));
                    }
                    if (phase === "DELETE_SUBTITLE") {
                      setPhase("DELETE_TITLE");
                    }
                  }}
                />
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="/projects">View My Work</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/resume">View Resume</Link>
                </Button>
              </div>

              {/* Contact Links */}
              <div className="pt-6 border-t flex flex-col items-center gap-4">
                {/* Email */}
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:peihengjun1830@gmail.com"
                    className="text-primary hover:underline"
                  >
                    peihengjun1830@gmail.com
                  </a>
                </div>

                {/* GitHub & LinkedIn */}
                <div className="flex gap-6">
                  <a
                    href="https://github.com/Hyungjoonbae-01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                    <span className="text-sm">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/hengjun-pei-4070b9359/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const delay = (ms: number, cb: () => void) => {
  setTimeout(cb, ms);
};

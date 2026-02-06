"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { Mail } from "lucide-react";
import Typewriter from "@/components/typewriter";

type Phase =
  | "TYPE_TITLE"
  | "TYPE_SUBTITLE"
  | "DELETE_SUBTITLE"
  | "DELETE_TITLE";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("TYPE_TITLE");

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      <Header />

      <main className="container flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-3xl h-[45vh] rounded-xl overflow-hidden shadow-lg">
          {/* Image */}
          <img
            src="/browser.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6 px-6">
              {/* TITLE */}
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl min-h-[1.2em]">
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

              {/* SUBTITLE */}
              <p className="text-xl text-muted-foreground md:text-2xl min-h-[1.2em]">
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button asChild size="lg">
                  <Link href="/projects">View My Work</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/resume">View Resume</Link>
                </Button>
              </div>

              <div className="flex items-center gap-2 justify-center mt-8 pt-6 border-t">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:peihengjun1830@gmail.com"
                  className="text-primary hover:underline"
                >
                  peihengjun1830@gmail.com
                </a>
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

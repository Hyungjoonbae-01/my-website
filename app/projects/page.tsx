import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container py-8">
        <h1 className="mb-6 text-3xl font-bold">Projects</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold">BAPAGO</h3>
              <img src="Bapago Home.png" />
              <p className="mb-2 text-sm text-muted-foreground pt-8">
                April 2025 - June 2025
              </p>
              <p className="mb-4 text-muted-foreground">
                A restaurant discovery web application featuring a swipeable
                card interface that helps users find the best restaurants in
                their area in a fun and engaging way, integrated with the Yelp
                API. It includes filtering and favoriting features, allowing
                users to search based on their preferences and save restaurants
                for later.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  MySQL
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  React
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Bun
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Tailwind CSS
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  TypeScript
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Yelp API
                </span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold pb-5">Chess Game</h3>
              <img src="Chess Game.png" />
              <p className="mb-2 text-sm text-muted-foreground pt-10">
                April 2025
              </p>
              <p className="mb-4 text-muted-foreground">
                A terminal-based chess game with text-based instructions,
                implementing all standard chess rules including check,
                checkmate, castling, and pawn promotion. The project is
                modularized into components such as UI, board management, game
                loop, I/O handling, move validation, player logic, and check
                detection.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  C
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Software Development
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Make
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Modular Procedural Design
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold">GOOD-VIBE CLOCK</h3>
              <img src="GOOD-VIBE-CLOCK.png" />
              <p className="mb-2 text-sm text-muted-foreground pt-10">
                April 2025
              </p>
              <p className="ft-3 mb-4 text-muted-foreground">
                GOOD-VIBE CLOCK is a clock that displays and speaks either a
                compliment or the current time when one of two buttons is
                pressed, providing positive vibes to the user. Built using an
                ESP32, speaker, buttons, OLED display, and DFPlayer Mini, and
                programmed in C++ to integrate hardware and software
                functionality.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Arduino
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  C++
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Hardware Design
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Gemini API
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold">JJOA</h3>
              <img src="JJOA.png" />
              <p className="mb-2 text-sm text-muted-foreground pt-10">
                July 2025 - August 2025
              </p>
              <p className="ft-3 mb-4 text-muted-foreground">
                JJOA is a full-featured shopping mall website that allows users
                to browse and purchase clothing items. It provides admin user an
                admin page for managing products and orders, while customers can
                conveniently add items to their cart and complete a fast, secure
                checkout experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  MongoDB
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  JavaScript
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  React
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  CSS
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Node.js
                </span>
              </div>
              <div className="flex flex-wrap justify-center mt-4 gap-3">
                <a
                  href="https://my-shopping-mall-shopinity.netlify.app/"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Website
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold">MIRAEJIDO</h3>
              <img src="MIRAEJIDO.png" />
              <p className="mb-2 text-sm text-muted-foreground pt-10">
                Auguest 2025
              </p>
              <p className="ft-3 mb-4 text-muted-foreground">
                MIRAEJIDO is an AI resume builder app that helps users refine
                their resume using AI. Users can upload their resume in either
                PDF or text format, and the app will review each sentence,
                suggest improvements, and then generate a new version of the
                resume with improved sentences in PDF format.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  MongoDB
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  TypeScript
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  React
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Tailwind CSS
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Node.js
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                  Gemini API
                </span>
              </div>
              <div className="flex flex-wrap justify-center mt-4 gap-3">
                <a
                  href="https://dreammap-fe.netlify.app/"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Website
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

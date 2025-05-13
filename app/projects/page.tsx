import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"

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
              <img src="Bapago Home.png"/>
              <p className="mb-2 text-sm text-muted-foreground pt-8">April 2025 - Current</p>
              <p className="mb-4 text-muted-foreground">
                A restaurant discovery web application featuring a swipeable card interface that helps users find the best restaurants in their area in a fun 
                and engaging way, integrated with the Yelp API. It includes filtering and favoriting features, 
                allowing users to search based on their preferences and save restaurants for later.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">MySQL</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">React</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">Node.js</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">Tailwind CSS</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">TypeScript</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold pb-5">Chess Game</h3>
              <img src="Chess Game.png"/>
              <p className="mb-2 text-sm text-muted-foreground pt-10">April 2025</p>
              <p className="mb-4 text-muted-foreground">
                A terminal-based chess game with text-based instructions, implementing all standard chess rules including check, checkmate, castling, and pawn 
                promotion. The project is modularized into components such as UI, board management, game loop, I/O handling, move validation, 
                player logic, and check detection.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">C</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">Software Development</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">Make</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">Modular Procedural Design</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold">GOOD-VIBE CLOCK</h3>
              <img src="GOOD-VIBE-CLOCK.png"/>
              <p className="mb-2 text-sm text-muted-foreground pt-10">April 2025</p>
              <p className="ft-3 mb-4 text-muted-foreground">
                GOOD-VIBE CLOCK is a clock that displays and speaks either a compliment or the current time when one of two buttons is pressed, 
                providing positive vibes to the user. Built using an ESP32, speaker, buttons, OLED display, and DFPlayer Mini, 
                and programmed in C++ to integrate hardware and software functionality.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">Arduino</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">C++</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">Hardware Design</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">Gemini API</span>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </main>
    </div>
  )
}

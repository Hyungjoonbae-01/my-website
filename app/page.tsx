import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      <Header />

      <main className="container flex-1 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center">
              Hi, I'm Hengjun Pei
            </h1>
            <p className="text-xl text-muted-foreground text-center md:text-2xl">
              Computer Engineering student at UC Irvine 
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
              <a href="mailto:peihengjun1830@gmail.com" className="text-primary hover:underline">
                peihengjun1830@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

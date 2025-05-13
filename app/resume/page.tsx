import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Header from "@/components/header"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container py-8">
        <h1 className="mb-6 text-3xl font-bold">My Resume</h1>

        <div className="mb-6 flex justify-end">
          <Button asChild>
            <a href="/Hengjun-Pei-Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>

        <div className="rounded-lg border">
          <div className="h-[calc(100vh-250px)] w-full min-h-[1150px]">
            <iframe src="/hengjun-Pei-resume.pdf" className="h-full w-full" title="Hengjun Pei Resume"></iframe>
          </div>
        </div>
      </main>
    </div>
  )
}

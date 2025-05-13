import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b bg-white py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Hello, World!
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-sm hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-sm hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/resume" className="text-sm hover:text-primary">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

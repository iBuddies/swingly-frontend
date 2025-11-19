"use client"
import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-solid border-border-light bg-background-light/80 px-4 py-3 backdrop-blur-sm">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-6 text-primary">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">AI Pickleball Coach</h2>
        </div>
        <nav className="hidden items-center gap-6 md:flex text-sm font-medium">
          <Link className="text-text-secondary hover:text-text-primary" href="/">Home</Link>
          <Link className="text-text-secondary hover:text-text-primary" href="/library">My Videos</Link>
          <Link className="text-text-secondary hover:text-text-primary" href="/admin">Admin</Link>
          <Link href="/signup" className="flex min-w-[84px] items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white font-bold hover:opacity-90">Sign Up</Link>
        </nav>
      </div>
    </header>
  )
}


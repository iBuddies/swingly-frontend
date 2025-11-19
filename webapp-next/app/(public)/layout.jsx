export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      {children}
      <footer className="ml-64 mt-20 border-t border-border-light dark:border-zinc-700 bg-transparent">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row">
          <p className="text-text-secondary dark:text-white/70 text-sm">© 2025 AI Pickleball Coach. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-text-secondary dark:text-white/70">
            <a className="hover:text-text-primary dark:hover:text-white" href="#">Contact</a>
            <a className="hover:text-text-primary dark:hover:text-white" href="#">Terms</a>
            <a className="hover:text-text-primary dark:hover:text-white" href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

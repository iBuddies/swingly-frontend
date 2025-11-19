import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center">
      <div className="w-full max-w-4xl px-4">
        <section className="text-center py-20 sm:py-28">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">Elevate Your Pickleball Game with AI</h1>
              <h2 className="text-text-secondary text-base md:text-lg">Get personalized coaching through AI-powered video analysis and chat. Improve your skills, faster.</h2>
            </div>
            <Link to="/signup" className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90">Get Your Free Analysis</Link>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-center text-3xl font-bold tracking-tight mb-12">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: 'upload', title: '1. Upload Your Match', text: 'Upload a 15-min 1080p clip.' },
              { icon: 'spark', title: '2. Receive AI Analysis', text: 'We add expert notes and key moments.' },
              { icon: 'chat', title: '3. Improve with Your Coach', text: 'Chat with AI constrained to your notes.' }
            ].map((c) => (
              <div key={c.title} className="flex flex-1 flex-col items-center gap-4 rounded-lg border border-border-light bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{c.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="text-text-secondary text-sm">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}


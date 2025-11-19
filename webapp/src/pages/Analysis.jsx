import { useParams, Link } from 'react-router-dom'

const SAMPLE_MD = `# Match vs. John\n\n**Strengths**\n- Consistent serves\n- Strong forehand from baseline\n\n**Focus Areas**\n- Backhand footwork on wide balls\n- Transition to the NVZ after returns\n\n**Drills**\n- Cross-court dinks 3x5 min\n- Ladder footwork (2x each direction)`

// Minimal markdown renderer for demo (very limited)
function renderMarkdown(md) {
  const lines = md.split('\n')
  return lines.map((l, i) => {
    if (l.startsWith('# ')) return <h1 key={i} className="text-2xl font-bold mb-2">{l.replace('# ', '')}</h1>
    if (l.startsWith('**') && l.endsWith('**')) return <h2 key={i} className="text-xl font-semibold mt-4">{l.replace(/\*\*/g, '')}</h2>
    if (l.startsWith('- ')) return <li key={i} className="ml-5 list-disc">{l.replace('- ', '')}</li>
    if (l.trim() === '') return <br key={i} />
    return <p key={i} className="mb-2">{l}</p>
  })
}

export default function Analysis() {
  const { id } = useParams()
  return (
    <div className="min-h-screen max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analysis</h1>
          <p className="text-text-secondary">Video ID: {id}</p>
        </div>
        <Link to="/library" className="text-sm text-text-secondary hover:text-text-primary">Back to Library</Link>
      </div>

      <div className="rounded-lg border border-border-light bg-white p-6">
        <div className="prose max-w-none">
          {renderMarkdown(SAMPLE_MD)}
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-border-light bg-white p-6">
        <h2 className="text-xl font-semibold mb-2">Chat with your AI Coach</h2>
        <p className="text-sm text-text-secondary mb-4">Ask about drills and strategy. Chat is constrained to pickleball topics and this analysis.</p>
        <div className="flex gap-2">
          <input className="form-input flex-1 rounded-lg border border-gray-300 bg-gray-50 h-12 px-4" placeholder="Ask a question..." />
          <button className="rounded-lg bg-primary text-white px-5 font-semibold">Send</button>
        </div>
      </div>
    </div>
  )
}


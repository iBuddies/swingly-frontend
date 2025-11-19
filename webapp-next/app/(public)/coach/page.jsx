import Sidebar from '../../../components/Sidebar'

const MOCK_VIDEOS = [
  {
    id: 'v1',
    title: 'Match vs. The Johnsons',
    date: '08/15/2023',
    duration: '12:47',
    thumb:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4hF4vIm_oR_dcAmL45csvJz07n7ZniFEosBbscq-pzKnu9DX01yRWPVMXvmX3BN44EAnXB1b8DJ4XJJMa09LXBO7qsCXz1PPIWLWHQxAPuKzlKj1skqdxqHqVzahnib5H8knwDMQ2GS05b9ddQ_vrllt0-cKnGhNdqTpwpdgnYNaqp2EXN7L45II04aN9JhyQ5QlqaUj7DkjuyyRURGmjIyXZc8KQPBHSY3ZyYqUHgzErbL1hK_i4W4t_VCtHgkfYVIpfWXiL9pea'
  },
  {
    id: 'v2',
    title: 'Drills Session',
    date: '08/12/2023',
    duration: '08:12',
    thumb:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgbgXnAJaFXF3bTOuhqQk-MaB_uWYjiAto1UVqnHffn_rtb5q2yb8dxWag9HJEC7VbHKZhC2Xzvh2mJ27CDZGVvGER5kb3_le1TmuJIVnUBYmjRXHHI4RM8qF64ricPU0QW0F7Gn9d7WRWOjnNwhaWlfqUreF7-7vqtJqPdjmL2M0y3uG8IuB1JOspb0Wsyp03UaIFr93TTFbSJnoNsoW-M73oHtKWGRpaTocTffSf8sy2rscGalKr8rj9zEkGJQGPsJIeVZu6vAUC'
  },
  {
    id: 'v3',
    title: 'Casual Play w/ Sarah',
    date: '08/10/2023',
    duration: '21:03',
    thumb:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGT8Qlk9PmrgkCBNugdi1DEjMLFpRzrJ5J47D1h6uzwmWAyuDT2L07-yenJ2o9xrEJu0yW8_X6RVhquFWFpqYq64fE5yuulEBB235hNgToNbUXHtCX0PC7u6iEYulq1p8J0kV2R78FfagdbMpkJGMCHJn2SoSgqKNJWKiwzNQ2ZyHgVpF1ZPzdbRbR2OzMuZQK5bGzeAYEiQf712-V-onMaY24DX3FuroSp3gwWMFEb884IIDE5I75s2CajXRivHf1v-2qqzJnByj3'
  },
  {
    id: 'v4',
    title: 'League Match QF',
    date: '08/05/2023',
    duration: '15:56',
    thumb:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABgxlux3R_SxjTAZfkOTI4Khf7HauzTg_zpHE5lsfUO21wlfdym43fkOhFbAgoMPyitlEXHjXaCGbcnEnfK79un1Hvefn0fZrDNIYS0flh6Fcv0QXytYd4OlP2IOCZtF8YKEHr-sHB0N8y7yN-PKmMei2Il_1QdH-Sb_VMy68l8Hr_R1Vk20AtDQdl26u7H-q4jaRIm13bEKmZdd-lEpW7Xr8H-E-Qdraatz4k3-eAVqlCcLYO9iwCDzI9pH867efArqLf6NAIc37t'
  }
]

export default function CoachPage() {
  return (
    <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark text-text-primary dark:text-white">
      <Sidebar />
      <main className="flex-1 flex flex-col p-8 ml-64">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-light dark:border-zinc-700 pb-8">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold tracking-tight">AI Coach</p>
              <p className="text-gray-500 dark:text-gray-400">Ask questions about your game and analysis.</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col p-6">
          <div className="flex-1 flex flex-col bg-white dark:bg-background-dark border border-border-light dark:border-zinc-700 rounded-xl">
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              {/* Assistant greeting */}
              {[`Hello! I'm your AI Pickleball Coach. Select a video from the right to get started.`, `Once you've selected a video, feel free to ask me anything about technique, strategy, or drills.`].map((text, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex items-center justify-center shrink-0 size-10 rounded-full bg-neutral-100 dark:bg-zinc-800">
                    <span className="material-symbols-outlined text-neutral-500 dark:text-zinc-300" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}>smart_toy</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="bg-neutral-100 dark:bg-zinc-800 p-3 rounded-lg rounded-tl-none max-w-lg">
                      <p className="text-sm">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border-light dark:border-zinc-700">
              <div className="relative">
                <input className="w-full pl-10 pr-12 py-3 border border-border-light dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-neutral-200 focus:outline-none text-sm bg-white dark:bg-background-dark" placeholder="Ask about your game..." type="text" />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary dark:text-white/60">search</span>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-neutral-800 dark:bg-zinc-700 text-white rounded-md p-1.5 hover:bg-neutral-900 dark:hover:bg-zinc-600 transition-colors">
                  <span className="material-symbols-outlined text-base">arrow_upward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside className="w-96 bg-white dark:bg-background-dark border-l border-border-light dark:border-zinc-700 flex flex-col shrink-0">
        <div className="h-16 flex items-center justify-between px-6 border-b border-border-light dark:border-zinc-700">
          <h2 className="font-semibold">Select a Video</h2>
          <button className="text-text-secondary dark:text-white/70 hover:text-text-primary">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {MOCK_VIDEOS.map((v, i) => (
            <div key={v.id} className={`p-3 rounded-lg ${i === 0 ? 'border-2 border-neutral-600 bg-neutral-50 dark:bg-zinc-900' : 'border border-border-light dark:border-zinc-700 hover:bg-neutral-50 dark:hover:bg-zinc-900 cursor-pointer'}`}>
              <div className="flex gap-4">
                <div className="relative aspect-video w-28 rounded overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('${v.thumb}')` }}></div>
                  <p className="absolute bottom-1 right-1 bg-black/50 text-white text-xs px-1 py-0.5 rounded">{v.duration}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm">{v.title}</h3>
                  <p className="text-xs text-text-secondary dark:text-white/70 mt-1">{v.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}

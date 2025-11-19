import Sidebar from '../../../../components/Sidebar'

export default function AnalysisPage({ params }) {
  const { id } = params

  const timeline = [
    { t: '00:48', title: 'Third shot drop lands deep — soften touch', color: 'bg-yellow-400' },
    { t: '01:15', title: 'Great court positioning into the NVZ', color: 'bg-green-500' },
    { t: '01:32', title: 'Backhand volley pops up — stabilize face', color: 'bg-yellow-400' },
    { t: '02:05', title: 'Another deep drop — practice consistency', color: 'bg-yellow-400' }
  ]

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-text-primary dark:text-white">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden p-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-light dark:border-zinc-700 pb-8">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold tracking-tight">Video Analysis</p>
              <p className="text-gray-500 dark:text-gray-400">Key moments, notes, and drills for your match.</p>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 p-6 sm:p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <div className="mb-6">
                <h1 className="text-2xl font-bold tracking-tight">Match vs. John — Video {id}</h1>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-zinc-800 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    Analyzed
                  </span>
                  <span className="text-text-secondary dark:text-white/70">Uploaded Jul 22, 2024</span>
                </div>
              </div>

              {/* Timeline */}
              <section className="rounded-xl border border-border-light dark:border-zinc-700 bg-white dark:bg-background-dark p-6">
                <h3 className="text-lg font-semibold mb-4">Key Moments</h3>
                <ol className="space-y-3">
                  {timeline.map((m, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-1 h-2.5 w-2.5 rounded-full ${m.color}`}></span>
                      <p className="text-sm"><span className="font-semibold">[{m.t}]</span> {m.title}</p>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Notes (collapsible) */}
              <section className="mt-8 rounded-xl border border-border-light dark:border-zinc-700 bg-white dark:bg-background-dark p-6">
                <h3 className="text-lg font-semibold mb-2">Analysis Notes</h3>
                <details className="group mt-2" open>
                  <summary className="flex justify-between items-center cursor-pointer list-none -ml-5 pl-5 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800/50">
                    <h4 className="m-0 font-bold text-base">What went well</h4>
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-gray-500">expand_more</span>
                  </summary>
                  <div className="mt-3 pl-4 border-l border-border-light dark:border-zinc-700">
                    <ul className="space-y-1 text-sm">
                      <li><span className="font-semibold">Net Play:</span> Strong presence with quick reaction volleys.</li>
                      <li><span className="font-semibold">Serve Consistency:</span> &gt;95% in, setting up early advantages.</li>
                    </ul>
                  </div>
                </details>
                <details className="group mt-4" open>
                  <summary className="flex justify-between items-center cursor-pointer list-none -ml-5 pl-5 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800/50">
                    <h4 className="m-0 font-bold text-base">Areas for improvement</h4>
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-gray-500">expand_more</span>
                  </summary>
                  <div className="mt-3 pl-4 border-l border-border-light dark:border-zinc-700">
                    <ul className="space-y-1 text-sm">
                      <li><span className="font-semibold">Third Shot Drops:</span> Several landed deep. Work on softer touch. Ref: [00:48], [02:05]</li>
                      <li><span className="font-semibold">Backhand Volleys:</span> Keep paddle face stable. See [01:32]</li>
                    </ul>
                  </div>
                </details>
                <details className="group mt-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none -ml-5 pl-5 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800/50">
                    <h4 className="m-0 font-bold text-base">Drill suggestions</h4>
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-gray-500">expand_more</span>
                  </summary>
                  <div className="mt-3 pl-4 border-l border-border-light dark:border-zinc-700">
                    <ol className="list-decimal ml-5 space-y-1 text-sm">
                      <li>Wall dinks — 10 minutes to improve touch.</li>
                      <li>Third shot drop simulation — partner feeds deep serves.</li>
                    </ol>
                  </div>
                </details>
              </section>
            </div>

            {/* Sticky video */}
            <div className="xl:col-span-1 mt-2 xl:mt-0">
              <div className="sticky top-10">
                <div className="relative bg-black aspect-video rounded-xl border border-border-light dark:border-zinc-700 shadow-lg overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover" alt="Video frame" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnzovdAWCYYsXYlI4nAvo_Hz5ofQlagDDiaU17_yhbDSZroaLECA1POrYAcJW6mIMR0IBoBBX0qkaU4uzo0nVdHx_23XHdQ6Jf6zCeLTIAVOBWMB_YrOHXfZWSD1TvHFCcLk55X7Er0wvS3q6vTj9DgHyFjqilXc2CyRezi2GVx-yBaPPr1atP46gZ3xG2y53X7M4573Q72I_arbq9WwWnBTqagxdyY8kuoxc7MoCuxauFyHBLNyCrWalFn-LeHkYWduBjl5FuohFR" />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <button className="relative m-auto left-0 right-0 top-0 bottom-0 flex items-center justify-center rounded-full size-16 bg-white/20 text-white backdrop-blur-md transition-transform hover:scale-110">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </button>
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex h-5 items-center justify-center gap-3">
                      <p className="text-white text-xs">0:37</p>
                      <div className="flex-1 group flex items-center h-full">
                        <div className="relative w-full h-1.5 bg-white/30 rounded-full">
                          <div className="absolute h-full bg-white rounded-full" style={{ width: '25%' }}></div>
                          <div className="absolute size-4 -top-1.5 bg-white rounded-full transition-transform group-hover:scale-110" style={{ left: '25%', transform: 'translateX(-50%)' }}></div>
                        </div>
                      </div>
                      <p className="text-white text-xs">2:23</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating AI Coach button */}
        <div className="fixed bottom-6 right-6 z-40 group">
          <button className="flex items-center justify-center size-16 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg transition-transform hover:scale-110">
            <span className="material-symbols-outlined text-4xl">smart_toy</span>
          </button>
          <div className="absolute bottom-1/2 right-full mr-4 p-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black text-sm whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
            <p>Have questions? Ask your AI Coach!</p>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-gray-900 dark:bg-white rotate-45"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

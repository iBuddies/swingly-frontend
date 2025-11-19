import Sidebar from '../../../components/Sidebar'

const plans = [
  {
    name: 'Starter',
    price: 0,
    period: '/month',
    cta: 'Get Started',
    highlight: false,
    features: [
      '1 video upload / month',
      'Basic AI analysis summary',
      'Community access'
    ]
  },
  {
    name: 'Pro',
    price: 20,
    period: '/month',
    cta: 'Choose Pro',
    highlight: true,
    features: [
      '4 uploads / month',
      'Detailed markdown analysis',
      'Drill recommendations + chat'
    ]
  },
  {
    name: 'Champion',
    price: 50,
    period: '/month',
    cta: 'Go Champion',
    highlight: false,
    features: [
      'All Pro benefits',
      'Direct coach messaging',
      'Unlimited video analysis',
      'Priority support'
    ]
  }
]

export default function BillingPage() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-text-primary dark:text-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto w-full px-2 sm:px-4">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-center mb-10">Find the Perfect Plan for Your Game</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {plans.map((p) => (
              <div key={p.name} className={`flex flex-col gap-6 rounded-xl border border-[#dbdfe6] dark:border-zinc-700 bg-white dark:bg-background-dark p-8 min-h-[460px]` }>
                <div className="flex flex-col gap-2">
                  <h2 className="text-base font-bold">{p.name}</h2>
                  <p className="flex items-baseline gap-1">
                    <span className="text-5xl font-black leading-tight tracking-[-0.033em]">${p.price}</span>
                    <span className="text-base font-bold">{p.period}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {p.features.map((f) => (
                    <div key={f} className="text-[13px] font-normal flex gap-3 items-center">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <button className={`mt-auto h-10 rounded-lg text-sm font-bold ${p.name === 'Pro' ? 'bg-primary text-white hover:opacity-90' : 'bg-[#f0f2f4] dark:bg-white/10 text-text-primary dark:text-white hover:bg-gray-200 dark:hover:bg-white/20'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
          <p className="text-sm text-center underline mt-6 cursor-pointer text-text-secondary dark:text-white/70">Already subscribed? Manage your plan here.</p>
        </div>
      </main>
    </div>
  )
}

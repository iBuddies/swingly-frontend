import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark')
  }
  const item = (to, icon, label) => (
    <NavLink
      to={to}
      className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? 'bg-gray-100 dark:bg-zinc-800 text-black dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800'}`}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <p className="text-sm font-medium">{label}</p>
    </NavLink>
  )

  return (
    <aside className="flex w-64 flex-col justify-between border-r border-border-light dark:border-zinc-800 bg-background-light dark:bg-background-dark p-4">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3 px-3">
          <span className="material-symbols-outlined text-3xl">sports_tennis</span>
          <h2 className="text-xl font-bold">ApexPickle</h2>
        </div>
        <div className="flex flex-col gap-2">
          {item('/library', 'video_library', 'My Videos')}
          {item('/profile', 'person', 'My Profile')}
          {item('/coach', 'model_training', 'AI Coach')}
          {item('/billing', 'subscriptions', 'Subscription')}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-3 py-2 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">dark_mode</span>
            <p className="text-sm font-medium">Dark Mode</p>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input className="sr-only" type="checkbox" onChange={toggleDark} />
            <div className="h-6 w-11 rounded-full bg-gray-200 dark:bg-zinc-700 transition-colors relative">
              <div className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white dark:bg-zinc-400 transition-transform"></div>
            </div>
          </label>
        </div>
        {item('/settings', 'settings', 'Settings')}
        {item('/logout', 'logout', 'Logout')}
      </div>
    </aside>
  )
}


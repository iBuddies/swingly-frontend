import Sidebar from '../../../components/Sidebar'

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-text-primary dark:text-white">
      <Sidebar />
      <main className="flex-1 p-8 ml-64">
        <div className="max-w-7xl ml-0">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-light dark:border-zinc-700 pb-8">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold tracking-tight">Profile & Settings</p>
              <p className="text-gray-500 dark:text-gray-400">Manage your profile and account preferences.</p>
            </div>
          </div>
          <div className="mt-8"></div>

          {/* Personal Information (v2) */}
          <section className="bg-white dark:bg-background-dark border border-border-light dark:border-zinc-700 rounded-xl mb-8 shadow-sm">
            <div className="p-6 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Full Name</p>
                  <input className="form-input h-10 text-sm rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3" placeholder="Alex Morgan" />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Email</p>
                  <input className="form-input h-10 text-sm rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3" placeholder="alex.morgan@email.com" />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Skill Level</p>
                  <select className="form-select h-10 text-sm rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3">
                    <option>Beginner</option>
                    <option>Intermediate (3.5)</option>
                    <option>Advanced</option>
                    <option>Pro</option>
                  </select>
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Playing Hand</p>
                  <select className="form-select h-10 text-sm rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3">
                    <option>Left</option>
                    <option>Right</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-border-light dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900/50 rounded-b-xl flex justify-end gap-3">
              <button className="h-9 px-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium">Cancel</button>
              <button className="h-9 px-3 rounded-lg bg-gray-900 text-white hover:bg-black/80 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 text-sm font-medium">Save Changes</button>
            </div>
          </section>

          <section className="flex flex-col gap-2 mb-2">
            <h2 className="text-xl font-bold tracking-tight">Account Settings</h2>
            <p className="text-text-secondary dark:text-white/70">Manage your password and account preferences.</p>
          </section>
          {/* Account Settings (v2 with side description) */}
          <section className="bg-white dark:bg-background-dark border border-border-light dark:border-zinc-700 rounded-xl shadow-sm">
            <div className="p-6 border-b border-border-light dark:border-zinc-700">
              <h2 className="text-lg font-semibold">Account Settings</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your password and account preferences.</p>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h3 className="text-sm font-medium">Password</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Update your password here. It's recommended to use a strong, unique password.</p>
              </div>
              <div className="md:col-span-2 flex flex-col gap-4">
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Current Password</p>
                  <input className="form-input h-10 text-sm rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3" placeholder="Enter current password" type="password" />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">New Password</p>
                  <input className="form-input h-10 text-sm rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3" placeholder="Enter new password" type="password" />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Confirm New Password</p>
                  <input className="form-input h-10 text-sm rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3" placeholder="Confirm new password" type="password" />
                </label>
              </div>
            </div>
            <div className="p-4 flex justify-end gap-3 bg-gray-50 dark:bg-gray-900/50 rounded-b-xl border-t border-border-light dark:border-zinc-700">
              <button className="h-9 px-3 rounded-lg bg-gray-900 text-white hover:bg-black/80 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 text-sm font-medium">Update Password</button>
            </div>
          </section>

          {/* Delete Account panel */}
          <section className="bg-white dark:bg-background-dark border border-red-500/50 dark:border-red-500/30 rounded-xl shadow-sm mt-8">
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <h2 className="text-lg font-semibold text-red-700 dark:text-red-500">Delete Account</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Permanently delete your account and all associated data. This action cannot be undone.</p>
              </div>
              <div className="md:col-span-1 flex justify-start md:justify-end">
                <button className="h-9 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium">Delete My Account</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

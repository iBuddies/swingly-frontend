import Sidebar from '../../../components/Sidebar'

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-text-primary dark:text-white">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-5xl ml-0">
          <h1 className="text-2xl font-bold tracking-tight mb-6">Profile & Settings</h1>

          <section className="bg-white dark:bg-background-dark border border-border-light dark:border-zinc-700 rounded-xl mb-8">
            <div className="p-6 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Full Name</p>
                  <input className="form-input h-12 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3" placeholder="Alex Morgan" />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Email</p>
                  <input className="form-input h-12 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3" placeholder="alex.morgan@email.com" />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Skill Level</p>
                  <select className="form-select h-12 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3">
                    <option>Beginner</option>
                    <option>Intermediate (3.5)</option>
                    <option>Advanced</option>
                    <option>Pro</option>
                  </select>
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Playing Hand</p>
                  <select className="form-select h-12 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3">
                    <option>Left</option>
                    <option>Right</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-border-light dark:border-zinc-700 flex justify-end gap-3">
              <button className="h-10 px-4 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-sm font-bold">Cancel</button>
              <button className="h-10 px-4 rounded-lg bg-primary text-white hover:opacity-90 text-sm font-bold">Save Changes</button>
            </div>
          </section>

          <section className="flex flex-col gap-2 mb-2">
            <h2 className="text-2xl font-bold tracking-tight">Account Settings</h2>
            <p className="text-text-secondary">Manage your password and account preferences.</p>
          </section>
          <section className="bg-white dark:bg-background-dark border border-border-light dark:border-zinc-700 rounded-xl">
            <div className="p-6 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Current Password</p>
                  <input className="form-input h-12 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3" placeholder="Enter current password" type="password" />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">New Password</p>
                  <input className="form-input h-12 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3" placeholder="Enter new password" type="password" />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2">Confirm New Password</p>
                  <input className="form-input h-12 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-background-dark px-3" placeholder="Confirm new password" type="password" />
                </label>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-border-light dark:border-zinc-700 flex justify-between items-center">
              <button className="h-10 px-4 rounded-lg bg-transparent text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 text-sm font-bold">Delete Account</button>
              <div className="flex gap-3">
                <button className="h-10 px-4 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-sm font-bold">Cancel</button>
                <button className="h-10 px-4 rounded-lg bg-primary text-white hover:opacity-90 text-sm font-bold">Update Password</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

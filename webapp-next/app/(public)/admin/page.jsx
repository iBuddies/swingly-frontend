import Sidebar from '../../../components/Sidebar'

const rows = [
  { user: 'Jane Cooper', email: 'jane.cooper@example.com', video: 'Match vs. The Johnsons', submitted: 'Oct 26, 2023', status: { dot: 'bg-gray-500', text: 'Complete' } },
  { user: 'Cody Fisher', email: 'cody.fisher@example.com', video: 'Tournament Highlights', submitted: 'Oct 25, 2023', status: { dot: 'bg-blue-500', text: 'In Progress' } },
  { user: 'Esther Howard', email: 'esther.howard@example.com', video: 'Drills Session', submitted: 'Oct 24, 2023', status: { dot: 'bg-yellow-500', text: 'Pending' } }
]

export default function AdminPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-y-auto p-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-light dark:border-zinc-700 pb-8">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold tracking-tight">Admin Dashboard</p>
              <p className="text-gray-500 dark:text-gray-400">Review submissions and manage analyses.</p>
            </div>
          </div>
        </div>

        <div className="p-0 max-w-7xl w-full mx-auto mt-8">
          <div className="border border-border-light dark:border-zinc-700 rounded-lg overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-text-secondary dark:text-white/70 uppercase bg-white dark:bg-background-dark">
                <tr>
                  <th className="p-4 w-12"></th>
                  <th className="px-6 py-4 font-medium">User</th>
                  <th className="px-6 py-4 font-medium">Video</th>
                  <th className="px-6 py-4 font-medium">Submitted</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-b border-border-light hover:bg-gray-50">
                    <td className="p-4"><input type="checkbox" className="form-checkbox rounded border-gray-300" /></td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{r.user}</div>
                      <div className="text-text-secondary">{r.email}</div>
                    </td>
                    <td className="px-6 py-4 text-text-secondary">{r.video}</td>
                    <td className="px-6 py-4 text-text-secondary">{r.submitted}</td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-2">
                        <span className={`size-2 rounded-full ${r.status.dot}`}></span>
                        <span className="text-text-secondary font-medium">{r.status.text}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-2 rounded-md hover:bg-gray-200 text-text-secondary"><span className="material-symbols-outlined text-lg">play_circle</span></button>
                        <button className="p-2 rounded-md hover:bg-gray-200 text-text-secondary"><span className="material-symbols-outlined text-lg">edit</span></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

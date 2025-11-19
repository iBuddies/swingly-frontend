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
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border-light px-10 py-4 bg-background-light/80 backdrop-blur-sm">
          <div className="relative max-w-sm w-full">
            <div className="text-text-secondary absolute left-3 top-1/2 -translate-y-1/2">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input className="form-input w-full rounded-md border border-border-light bg-transparent h-10 pl-10 text-sm" placeholder="Search submissions..." />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-md hover:bg-gray-100 text-text-secondary"><span className="material-symbols-outlined">notifications</span></button>
            <button className="p-2 rounded-md hover:bg-gray-100 text-text-secondary"><span className="material-symbols-outlined">account_circle</span></button>
          </div>
        </header>

        <div className="p-8">
          <div className="border border-border-light rounded-lg overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-text-secondary uppercase bg-white">
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


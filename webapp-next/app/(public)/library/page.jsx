import Sidebar from '../../../components/Sidebar'
import Link from 'next/link'

const MOCK = [
  { id: '1', title: 'Match vs. John', date: '2024-07-22', status: 'Analyzed', color: 'bg-blue-500', thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPYv5C8UNr84Nv_jQWbNFv4p-D6e9lnV6fW3GR4fZ9UOy1t4RBg8jq8DcaI-PAfKIfUiyKKM-n513OddyCt7BZ0dMAHJkil-89rG3Uux_oDfKp3kje5pCZQ5h-ietILMmT6PBmrUa7ItTVPrO0szrZQUiJhKinlLjRzuR74ol6D76bF6S3gN0jF686QtPv5Kr7T6GleNNDNV12DV_Q1bAOJodyVQEWIhXUT2JOEU2M1k8jvYqrbQuN8sxlPUm6PV3hO3pWHca4fR7D' },
  { id: '2', title: 'Game vs. Sarah', date: '2024-07-20', status: 'Processing', color: 'bg-yellow-500', thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi1Nqy-wa8T2_Kl4RFDLNAe2MlJ5ptvyQUoJdn3vrtpR-BPetACaovom4pnnxYRPYcmHgiHyVhLQtbKDjDE0_nuPhcu6XQ41Tb7ikjbNTFv_VK7JFvHqho747-57EXNrZlxEFs6dFZZQx9Koty8rxtW2vRy8KfHd2RCNc1Q6P5CdysnV9J5koY5V-N0TS74C8LXdOkuuayywSA3lEgEPc5dxtqU9rZ9G2K7IXOyD5xcbvUCbBwlPRJSavcVPPBIv4_lOgko_xZyaz_' },
  { id: '3', title: 'Practice Session', date: '2024-07-18', status: 'Pending', color: 'bg-gray-400', thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaybZHBz6-vYf6Qa6dFhI0000RsXCFK3PdrzA6PKepcerJWIJfg3Omrr-h6iEG6xxS4F45nDT-eM1z4zR-dU7LbmQCT3K9EpiqsbHM161vuuOch362ZnI3rOOJAyBHO_bcrMImofCwswJNhDnGf4gjhhCWqHw7hglLKoTa8v-vsEk-BH8OJ3ouLUqJqbutzBXVjWEICgKOUs8ylGtdlLqDlCNIDLSOwTA8nenp5-ivL1NoweI6DWBON1hDm2w-pAEaQ9uDmkl5Jnby' }
]

export default function Page() {
  return (
    <div className="relative flex min-h-screen w-full font-display dark:bg-background-dark dark:text-white">
      <Sidebar />
      <main className="flex-1 p-8 ml-64">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-light dark:border-zinc-800 pb-8">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold tracking-tight">Video Library</p>
              <p className="text-gray-500 dark:text-gray-400">Upload and review your game footage for expert analysis.</p>
            </div>
          </div>

          <div className="mt-8 border border-border-light dark:border-zinc-800 rounded-lg overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="border-b border-border-light dark:border-zinc-800">
                <tr>
                  <th className="w-1/2 px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Video Title</th>
                  <th className="px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Upload Date</th>
                  <th className="px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Status</th>
                  <th className="relative px-4 py-4"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {MOCK.map(v => (
                  <tr key={v.id} className="border-b border-border-light dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900">
                    <td className="px-4 py-5 whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <div className="h-11 w-[72px] flex-shrink-0 rounded-md bg-cover bg-center" style={{ backgroundImage: `url(${v.thumb})` }}></div>
                        <p className="text-sm font-medium">{v.title}</p>
                      </div>
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{v.date}</td>
                    <td className="px-4 py-5 whitespace-nowrap">
                      <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium">
                        <span className={`h-2 w-2 rounded-full ${v.color}`}></span>
                        {v.status}
                      </span>
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/analysis/${v.id}`} className="material-symbols-outlined text-gray-400">chevron_right</Link>
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

import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="flex flex-col max-w-[480px] w-full gap-8 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight">Create your account</h1>
        <p className="text-base text-gray-500">Start your first analysis in minutes.</p>
      </div>
      <div className="flex flex-col gap-4">
        <label className="flex flex-col">
          <p className="text-sm font-medium pb-1.5 text-gray-700">Email</p>
          <input className="form-input rounded-lg border border-gray-300 bg-gray-50 h-12 px-4" placeholder="you@example.com" />
        </label>
        <label className="flex flex-col">
          <p className="text-sm font-medium pb-1.5 text-gray-700">Password</p>
          <input className="form-input rounded-lg border border-gray-300 bg-gray-50 h-12 px-4" type="password" placeholder="Create a password" />
        </label>
      </div>
      <div className="flex flex-col gap-4">
        <Link href="/library" className="flex items-center justify-center h-12 px-6 rounded-lg font-semibold text-white bg-primary hover:opacity-90">Create Account</Link>
      </div>
      <p className="text-center text-sm text-gray-500">Already have an account? <Link className="font-semibold text-gray-800 hover:underline" href="/login">Log In</Link></p>
    </div>
  )
}


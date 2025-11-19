import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 font-display">
      <div className="flex flex-col max-w-[480px] w-full gap-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight">Welcome Back</h1>
          <p className="text-base text-gray-500">Log in to access your personalized coaching.</p>
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            <p className="text-sm font-medium pb-1.5 text-gray-700">Email or Username</p>
            <input className="form-input rounded-lg border border-gray-300 bg-gray-50 h-12 px-4" placeholder="you@example.com" />
          </label>
          <label className="flex flex-col">
            <p className="text-sm font-medium pb-1.5 text-gray-700">Password</p>
            <input className="form-input rounded-lg border border-gray-300 bg-gray-50 h-12 px-4" type="password" placeholder="Enter your password" />
          </label>
          <Link className="text-gray-500 text-sm self-end underline hover:text-gray-800" to="#">Forgot Password?</Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/library" className="flex items-center justify-center h-12 px-6 rounded-lg font-semibold text-white bg-gray-900 hover:bg-gray-800">Log In</Link>
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-xs text-gray-400 uppercase">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <button className="flex items-center justify-center h-12 px-6 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 gap-3">
            <span className="material-symbols-outlined">account_circle</span>
            <span>Continue with Google</span>
          </button>
        </div>
        <p className="text-center text-sm text-gray-500">Don't have an account? <Link className="font-semibold text-gray-800 hover:underline" to="/signup">Sign Up</Link></p>
      </div>
    </div>
  )
}


// "use client"
// import Link from "next/link"
// import { useState } from "react"
// import { useRouter } from "next/navigation"

// export default function LoginPage() {
//   const router = useRouter()
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const handleLogin = (e) => {
//     e.preventDefault()
//     // After login, go to home page
//     router.push("/")
//   }

//   return (
//     <main className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
//       <div className="bg-[#111111] p-8 rounded-xl border border-[#333333] w-96">
//         {/* Logo */}
//         <h1 className="text-3xl font-bold text-center mb-2">
//           <span className="bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">
//             LINKO
//           </span>
//         </h1>
//         <p className="text-[#666666] text-center mb-8">Welcome back!</p>

//         {/* Login Form */}
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="text-[#CCCCCC] text-sm">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white mt-1 focus:outline-none focus:border-[#FF3366]"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label className="text-[#CCCCCC] text-sm">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white mt-1 focus:outline-none focus:border-[#FF3366]"
//               placeholder="••••••••"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-lg hover:scale-105 transition"
//           >
//             Log in
//           </button>
//         </form>

//         {/* Sign up link */}
//         <p className="text-center text-[#666666] mt-6">
//           Don't have an account?{" "}
//           <Link href="/signup" className="text-[#33CCFF] hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </main>
//   )
// }


"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === email && u.password === password)
    
    if (user) {
      // Save current user
      localStorage.setItem('currentUser', JSON.stringify(user))
      toast.success("Logged in successfully!")
      
      setTimeout(() => {
        router.push("/")
      }, 1500)
    } else {
      toast.error("Invalid email or password")
    }
  }

  return (
    <main className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
      <ToastContainer theme="dark" position="top-center" />
      <div className="bg-[#111111] p-8 rounded-xl border border-[#333333] w-96">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">
            LINKO
          </span>
        </h1>
        <p className="text-[#666666] text-center mb-8">Welcome back!</p>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="text-[#CCCCCC] text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white mt-1 focus:outline-none focus:border-[#FF3366]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="text-[#CCCCCC] text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white mt-1 focus:outline-none focus:border-[#FF3366]"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-lg hover:scale-105 transition"
          >
            Log in
          </button>
        </form>

        {/* Sign up link */}
        <p className="text-center text-[#666666] mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#33CCFF] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  )
}
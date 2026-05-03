// "use client"
// import Link from "next/link"
// import { useState } from "react"
// import { useRouter } from "next/navigation"

// export default function SignupPage() {
//   const router = useRouter()
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [handle, setHandle] = useState("")
//   const [showSuccess, setShowSuccess] = useState(false)

//   const handleSignup = (e) => {
//     e.preventDefault()
    
//     // Save user info to localStorage
//     const userData = {
//       name: name,
//       email: email,
//       handle: handle,
//       loggedIn: true
//     }
    
//     localStorage.setItem('user', JSON.stringify(userData))
    
//     // Show success message
//     setShowSuccess(true)
    
//     // Redirect to home after 2 seconds
//     setTimeout(() => {
//       router.push("/")
//     }, 2000)
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
//         <p className="text-[#666666] text-center mb-8">Create your account</p>

//         {/* Signup Form */}
//         <form onSubmit={handleSignup}>
//           <div className="mb-4">
//             <label className="text-[#CCCCCC] text-sm">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white mt-1 focus:outline-none focus:border-[#FF3366]"
//               placeholder="John Doe"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="text-[#CCCCCC] text-sm">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white mt-1 focus:outline-none focus:border-[#FF3366]"
//               placeholder="john@example.com"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="text-[#CCCCCC] text-sm">Choose Handle</label>
//             <div className="flex mt-1">
//               <span className="bg-[#1A1A1A] text-[#33CCFF] px-3 py-3 rounded-l-lg border border-[#333333] border-r-0">
//                 linko.gg/
//               </span>
//               <input
//                 type="text"
//                 value={handle}
//                 onChange={(e) => setHandle(e.target.value)}
//                 className="flex-1 px-4 py-3 bg-transparent border border-[#333333] rounded-r-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                 placeholder="yourname"
//                 required
//               />
//             </div>
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
//             Sign up
//           </button>
//         </form>

//         {/* Login link */}
//         <p className="text-center text-[#666666] mt-6">
//           Already have an account?{" "}
//           <Link href="/login" className="text-[#33CCFF] hover:underline">
//             Log in
//           </Link>
//         </p>
//       </div>

//       {/* Success Popup */}
//       {showSuccess && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-[#111111] p-8 rounded-xl border border-[#33CCFF] max-w-md text-center">
//             <div className="w-16 h-16 bg-gradient-to-r from-[#FF3366] to-[#9933FF] rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-white text-3xl">✓</span>
//             </div>
//             <h2 className="text-2xl font-bold text-white mb-2">Welcome to Linko! 🎉</h2>
//             <p className="text-[#CCCCCC] mb-4">
//               Your handle: <span className="text-[#33CCFF] font-bold">linko.gg/{handle}</span>
//             </p>
//             <p className="text-[#666666] text-sm">Redirecting you to home page...</p>
//           </div>
//         </div>
//       )}
//     </main>
//   )
// }

"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [handle, setHandle] = useState("")

  const handleSignup = (e) => {
    e.preventDefault()
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    
    // Check if email already exists
    const emailExists = users.some(u => u.email === email)
    if (emailExists) {
      toast.error("Email already registered!")
      return
    }
    
    // Check if handle already exists
    const handleExists = users.some(u => u.handle === handle)
    if (handleExists) {
      toast.error("Handle already taken!")
      return
    }
    
    // Create new user
    const newUser = {
      name: name,
      email: email,
      password: password,
      handle: handle,
      createdAt: new Date().toISOString()
    }
    
    // Save to users list
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    
    // Set as current user
    localStorage.setItem('currentUser', JSON.stringify(newUser))
    
    // Show success message
    toast.success("Account created successfully!")
    
    // Redirect to home after 2 seconds
    setTimeout(() => {
      router.push("/")
    }, 2000)
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
        <p className="text-[#666666] text-center mb-8">Create your account</p>

        {/* Signup Form */}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="text-[#CCCCCC] text-sm">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white mt-1 focus:outline-none focus:border-[#FF3366]"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-[#CCCCCC] text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white mt-1 focus:outline-none focus:border-[#FF3366]"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-[#CCCCCC] text-sm">Choose Handle</label>
            <div className="flex mt-1">
              <span className="bg-[#1A1A1A] text-[#33CCFF] px-3 py-3 rounded-l-lg border border-[#333333] border-r-0">
                linko.io/
              </span>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="flex-1 px-4 py-3 bg-transparent border border-[#333333] rounded-r-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
                placeholder="yourname"
                required
              />
            </div>
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
            Sign up
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-[#666666] mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-[#33CCFF] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  )
}
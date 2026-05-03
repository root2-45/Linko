// "use client"
// import React from "react";
// import Link from "next/link";
// import {usePathname } from "next/navigation";

// const Navbar = () => {
// const pathname = usePathname()
// const showNavbar = ["/","/generate"].includes(pathname)


//   return (<>{showNavbar && <nav className="bg-white w-[80vw] flex justify-between fixed top-5 right-[10vw] rounded-full p-1 px-10">
//       <div className="logo flex gap-20 items-center">
//         <Link href={"/"}>
//           <svg
//             className="h-8"
//             viewBox="0 0 1176 238"
//             xmlns="http://www.w3.org/2000/svg"
//             title="Linktree Logo"
//           >
//             <path
//               d="M85.5326 25.5326H133.7257V202.802H127.205V233.988H88V25.5326Z
// M160.564 25.5326C172.111 25.5326 181.642 34.469 181.642 45.9586C181.642 57.6307 172.111 66.9318 160.564 66.9318C148.833 66.9318 139.485 57.6307 139.485 45.9586C139.485 34.469 148.833 25.5326 160.564 25.5326Z
// M144.067 83.7103H176.51V233.988H144.067V83.7103Z
// M195.572 83.7103H228.015V104.501C237.546 88.6345 254.042 79.6981 275.854 79.6981C311.046 79.6981 333.041 107.054 333.041 150.46V233.988H300.598V153.378C300.598 125.292 288.318 109.425 265.956 109.425C241.579 109.425 228.015 126.021 228.015 156.113V233.988H195.572V83.7103Z
// M350.087 25.5326H382.53V157.391L443.016 83.8927L483.707 141.188V233.988H443.016L382.53 160.673V233.988H350.087V25.5326Z
// M496.354 45.4114H529.347V83.7103H567.838V110.519H529.347V187.847C529.347 197.695 535.395 203.713 544.743 203.713H566.372V233.988H540.344C512.117 233.988 496.354 217.392 496.354 187.847V45.4114Z
// M584.5 83.7103H614.577V102.313C622.642 88.0873 636.022 79.6981 652.519 79.6981C657.468 79.6981 660.217 79.8805 663.883 81.1571V111.249C661.683 110.702 658.384 110.155 651.786 110.155C627.958 110.155 614.761 130.034 614.761 164.503V233.988H582.318V83.7103H584.5Z
// M739.582 79.6981C775.324 79.6981 813.999 101.218 813.999 162.314V166.691H697.792C700.358 193.5 715.938 208.273 741.965 208.273C760.661 208.273 776.607 198.242 780.09 184.199H813.082C809.783 214.291 778.44 238 741.965 238C695.226 238 665.899 207.726 665.899 158.667C665.899 115.261 694.309 79.6981 739.582 79.6981ZM779.54 139.882C774.958 121.28 760.294 109.608 739.766 109.608C719.97 109.608 706.04 121.644 700.541 139.882H779.54Z
// M902.162 79.6981C937.904 79.6981 976.578 101.218 976.578 162.314V166.691H860.372C862.938 193.5 878.517 208.273 904.545 208.273C923.241 208.273 939.187 198.242 942.669 184.199H975.662C972.363 214.291 941.02 238 904.545 238C857.805 238 828.479 207.726 828.479 158.667C828.479 115.261 856.706 79.6981 902.162 79.6981ZM941.936 139.882C937.354 121.28 922.691 109.608 901.979 109.688C882.183 109.608 868.253 121.644 862.754 139.882H941.936Z
// M984.643 79.1509H1042.56L1001.32 40.1226L1024.05 16.9609L1063.28 57.0835V0H1097.37V57.0835L1136.59 16.9609L1159.32 40.1226L1118.08 79.1509H1176V111.431H1117.71L1159.14 151.554L1136.41 174.169L1080.14 117.815L1023.87 174.169L1001.14 151.554L1042.56 111.431H984.277V79.1509Z
// M1063.46 157.572H1097.55V234.17H1063.46V157.572Z"
//             ></path>
//           </svg>
//         </Link>

//         <ul className="flex gap-10">
//           <Link href="/">
//             <li>Templates </li>
//           </Link>
//           <Link href="/">
//             <li>Marketplace</li>
//           </Link>
//           <Link href="/">
//             <li>Discover</li>
//           </Link>
//           <Link href="/">
//             <li>Pricing</li>
//           </Link>
//           <Link href="/">
//             <li>Learn</li>
//           </Link>
//         </ul>
//       </div>

//       <div className="flex gap-3">
//         <button className="login bg-gray-400 p-4 rounded-lg">Log in</button>
//         <button className="signup  bg-gray-900 text-white font-bold p-4 rounded-full">
//           SignupFree
//         </button>
//       </div>
//     </nav>}</>
//   );
// };

// export default Navbar;


// "use client"
// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const pathname = usePathname();
//   const showNavbar = ["/", "/generate"].includes(pathname);

//   return (
//     <>
//       {showNavbar && (
//         <nav className="bg-white/80 backdrop-blur-md shadow-lg w-[80vw] flex justify-between items-center fixed top-5 right-[10vw] rounded-full px-10 py-3">

//           {/* Logo */}
//           <Link href="/" className="text-2xl font-extrabold tracking-wide">
//             <span className="text-blue-600">LiNk</span>
//             <span className="text-gray-900">O</span>
//           </Link>

//           {/* Nav Links */}
//           <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
//             <li><Link href="/templates" className="hover:text-blue-600 transition">Templates</Link></li>
//             <li><Link href="/marketplace" className="hover:text-blue-600 transition">Marketplace</Link></li>
//             <li><Link href="/discover" className="hover:text-blue-600 transition">Discover</Link></li>
//             <li><Link href="/pricing" className="hover:text-blue-600 transition">Pricing</Link></li>
//             <li><Link href="/learn" className="hover:text-blue-600 transition">Learn</Link></li>
//           </ul>

//           {/* Buttons */}
//           <div className="flex gap-3">
//             <Link href="/login">
//               <button className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
//                 Log in
//               </button>
//             </Link>

//             <Link href="/signup">
//               <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition transform hover:scale-105">
//                 Sign up Free
//               </button>
//             </Link>
//           </div>

//         </nav>
//       )}
//     </>
//   );
// };

// export default Navbar;


// "use client"

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname()
  
//   // Don't show on these pages
//   if (pathname === "/dashboard" || pathname === "/login") {
//     return null
//   }

//   return (
//     <nav className="bg-white/10 backdrop-blur-md w-[80vw] flex justify-between fixed top-5 right-[10vw] rounded-full p-1 px-10 border border-purple-200/20 shadow-lg z-50">
//       {/* Logo Section */}
//       <div className="logo flex gap-20 items-center">
//         <Link href="/" className="flex items-center gap-2 group">
//           {/* Linko Logo - Custom Design */}
//           <div className="relative">
//             {/* Animated background shape */}
//             <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-lg"></div>
            
//             {/* Chain/Link Icon */}
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//               </svg>
//             </div>
//           </div>
          
//           {/* Linko Text with Gradient */}
//           <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
//             Linko
//           </span>
//         </Link>

//         {/* Navigation Links */}
//         <ul className="flex gap-8">
//           <Link href="/templates">
//             <li className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 cursor-pointer">Templates</li>
//           </Link>
//           <Link href="/marketplace">
//             <li className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 cursor-pointer">Marketplace</li>
//           </Link>
//           <Link href="/discover">
//             <li className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 cursor-pointer">Discover</li>
//           </Link>
//           <Link href="/pricing">
//             <li className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 cursor-pointer">Pricing</li>
//           </Link>
//           <Link href="/learn">
//             <li className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 cursor-pointer">Learn</li>
//           </Link>
//         </ul>
//       </div>

//       {/* Auth Buttons */}
//       <div className="flex gap-3 items-center">
//         <button className="login px-6 py-2 text-purple-600 font-semibold hover:bg-purple-50 rounded-full transition-all duration-300">
//           Log in
//         </button>
//         <button className="signup px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
//           Sign up Free
//         </button>
//       </div>
//     </nav>
//   )
// }


// "use client"

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname()
  
//   // Don't show on these pages
//   if (pathname === "/dashboard" || pathname === "/login") {
//     return null
//   }

//   return (
//     <nav className="bg-[#0A0A0F]/90 backdrop-blur-md w-[80vw] flex justify-between fixed top-5 right-[10vw] rounded-full p-1 px-10 border border-[#333333] shadow-lg z-50">
//       {/* Logo Section */}
//       <div className="logo flex gap-20 items-center">
//         <Link href="/" className="flex items-center gap-2 group">
//           {/* Updated Icon with new colors */}
//           <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg" 
//                style={{ transform: 'rotate(45deg)' }}>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" 
//                  style={{ transform: 'rotate(-45deg)' }}>
//               <path d="M18 8c3 0 4 3 4 5s-1 5-4 5-4-3-4-5 1-5 4-5zM6 8c-3 0-4 3-4 5s1 5 4 5 4-3 4-5-1-5-4-5z"></path>
//               <path d="M10 13c0 2 1 4 3 4s3-2 3-4-1-4-3-4-3 2-3 4z"></path>
//             </svg>
//           </div>
          
//           {/* Updated Text with new gradient */}
//           <span style={{
//             fontSize: '32px',
//             fontWeight: 900,
//             letterSpacing: '5px',
//             background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             textShadow: '0 0 20px rgba(255,51,102,0.5)',
//             fontFamily: 'Georgia, serif',
//             display: 'inline-block'
//           }}>
//             LINKO
//           </span>
//         </Link>

//         {/* Navigation Links - Now white for visibility */}
//         <ul className="flex gap-8">
//           <Link href="/templates">
//             <li className="text-white hover:text-[#FF3366] font-medium transition-colors duration-300 cursor-pointer">Templates</li>
//           </Link>
//           <Link href="/marketplace">
//             <li className="text-white hover:text-[#FF3366] font-medium transition-colors duration-300 cursor-pointer">Marketplace</li>
//           </Link>
//           <Link href="/discover">
//             <li className="text-white hover:text-[#FF3366] font-medium transition-colors duration-300 cursor-pointer">Discover</li>
//           </Link>
//           <Link href="/pricing">
//             <li className="text-white hover:text-[#FF3366] font-medium transition-colors duration-300 cursor-pointer">Pricing</li>
//           </Link>
//           <Link href="/learn">
//             <li className="text-white hover:text-[#FF3366] font-medium transition-colors duration-300 cursor-pointer">Learn</li>
//           </Link>
//         </ul>
//       </div>

//       {/* Auth Buttons - Updated colors */}
//       <div className="flex gap-3 items-center">
//         <button className="login px-6 py-2 text-white font-semibold hover:text-[#33CCFF] transition-all duration-300">
//           Log in
//         </button>
//         <button className="signup px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300">
//           Sign up Free
//         </button>
//       </div>
//     </nav>
//   )
// }


// "use client"

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname()
//   const router = useRouter()
//   const [searchHandle, setSearchHandle] = useState("")
  
//   // Don't show on these pages
//   if (pathname === "/dashboard" || pathname === "/login") {
//     return null
//   }

//   const goToHandle = () => {
//     if (searchHandle.trim()) {
//       router.push(`/${searchHandle}`)
//       setSearchHandle("")
//     }
//   }

//   return (
//     <nav className="bg-[#0A0A0F]/90 backdrop-blur-md w-[80vw] flex justify-between fixed top-5 right-[10vw] rounded-full p-1 px-10 border border-[#333333] shadow-lg z-50">
//       {/* Logo Section */}
//       <div className="logo flex gap-20 items-center">
//         <Link href="/" className="flex items-center gap-2 group">
//           {/* Updated Icon with new colors */}
//           <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg" 
//                style={{ transform: 'rotate(45deg)' }}>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" 
//                  style={{ transform: 'rotate(-45deg)' }}>
//               <path d="M18 8c3 0 4 3 4 5s-1 5-4 5-4-3-4-5 1-5 4-5zM6 8c-3 0-4 3-4 5s1 5 4 5 4-3 4-5-1-5-4-5z"></path>
//               <path d="M10 13c0 2 1 4 3 4s3-2 3-4-1-4-3-4-3 2-3 4z"></path>
//             </svg>
//           </div>
          
//           {/* Updated Text with new gradient */}
//           <span style={{
//             fontSize: '32px',
//             fontWeight: 900,
//             letterSpacing: '5px',
//             background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             textShadow: '0 0 20px rgba(255,51,102,0.5)',
//             fontFamily: 'Georgia, serif',
//             display: 'inline-block'
//           }}>
//             LINKO
//           </span>
//         </Link>

//         {/* Navigation Links - Now white for visibility */}
//         <ul className="flex gap-8">
//           <Link href="/templates">
//             <li className="text-white hover:text-[#FF3366] font-medium transition-colors duration-300 cursor-pointer">Templates</li>
//           </Link>
//           <Link href="/marketplace">
//             <li className="text-white hover:text-[#FF3366] font-medium transition-colors duration-300 cursor-pointer">Marketplace</li>
//           </Link>
//           <Link href="/discover">
//             <li className="text-white hover:text-[#FF3366] font-medium transition-colors duration-300 cursor-pointer">Discover</li>
//           </Link>
//           <Link href="/pricing">
//             <li className="text-white hover:text-[#FF3366] font-medium transition-colors duration-300 cursor-pointer">Pricing</li>
//           </Link>
//           <Link href="/learn">
//             <li className="text-white hover:text-[#FF3366] font-medium transition-colors duration-300 cursor-pointer">Learn</li>
//           </Link>
//         </ul>
//       </div>

//       {/* Right side section with Search, My BitTrees, and Auth Buttons */}
//       <div className="flex gap-3 items-center">
//         {/* 🔍 NEW: Search Bar */}
//         <div className="flex items-center gap-2 mr-2">
//           <input 
//             type="text" 
//             placeholder="Go to @handle" 
//             className="px-3 py-1.5 rounded-full text-sm bg-white/10 border border-[#333333] text-white placeholder-gray-400 focus:outline-none focus:border-[#FF3366]"
//             value={searchHandle}
//             onChange={(e) => setSearchHandle(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && goToHandle()}
//           />
//           <button 
//             onClick={goToHandle}
//             className="px-4 py-1.5 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 transition-all duration-300"
//           >
//             Go
//           </button>
//         </div>

//         {/* 📁 NEW: My BitTrees Link */}
//         <Link href="/dashboard" className="text-white hover:text-[#FF3366] font-medium transition-colors duration-300 mr-2">
//           My BitTrees
//         </Link>

//         {/* Auth Buttons - Updated colors */}
//         <button className="login px-6 py-2 text-white font-semibold hover:text-[#33CCFF] transition-all duration-300">
//           Log in
//         </button>
//         <button className="signup px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300">
//           Sign up Free
//         </button>
//       </div>
//     </nav>
//   )
// }


// "use client"

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FiSearch, FiUser, FiLogIn, FiGrid } from "react-icons/fi";

// export default function Navbar() {
//   const pathname = usePathname()
//   const router = useRouter()
//   const [searchHandle, setSearchHandle] = useState("")
  
//   if (pathname === "/dashboard" || pathname === "/login") {
//     return null
//   }

//   const goToHandle = () => {
//     if (searchHandle.trim()) {
//       router.push(`/${searchHandle}`)
//       setSearchHandle("")
//     }
//   }

//   return (
//     <nav className="bg-[#0A0A0F]/80 backdrop-blur-xl w-[95vw] flex justify-between fixed top-5 left-[2.5vw] rounded-full p-3 px-6 border border-[#333333] shadow-2xl z-50">
//       {/* Logo Section */}
//       <div className="logo flex items-center">
//         <Link href="/" className="flex items-center gap-3 group">
//           <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300" 
//                style={{ transform: 'rotate(45deg)' }}>
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" 
//                  style={{ transform: 'rotate(-45deg)' }}>
//               <path d="M18 8c3 0 4 3 4 5s-1 5-4 5-4-3-4-5 1-5 4-5zM6 8c-3 0-4 3-4 5s1 5 4 5 4-3 4-5-1-5-4-5z"></path>
//               <path d="M10 13c0 2 1 4 3 4s3-2 3-4-1-4-3-4-3 2-3 4z"></path>
//             </svg>
//           </div>
          
//           <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent drop-shadow-lg">
//             LINKO
//           </span>
//         </Link>
//       </div>

//       {/* Right side section */}
//       <div className="flex gap-3 items-center">
//         {/* Search Bar - Oval */}
//         <div className="flex items-center bg-white/5 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300 overflow-hidden">
//           <FiSearch className="text-gray-400 ml-3" size={18} />
//           <input 
//             type="text" 
//             placeholder="Go to @handle" 
//             className="px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none w-36"
//             value={searchHandle}
//             onChange={(e) => setSearchHandle(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && goToHandle()}
//           />
//           <button 
//             onClick={goToHandle}
//             className="px-4 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 transition-all duration-300"
//           >
//             Go
//           </button>
//         </div>

//         {/* My Linkos */}
//         <Link 
//           href="/dashboard" 
//           className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF3366] font-medium transition-all duration-300 group"
//         >
//           <FiGrid className="group-hover:rotate-90 transition-transform duration-300" size={18} />
//           <span>My Linkos</span>
//         </Link>

//         {/* Log in */}
//         <button className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#33CCFF] font-medium transition-all duration-300 group">
//           <FiLogIn className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
//           <span>Log in</span>
//         </button>

//         {/* Sign up - Oval */}
//         <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300">
//           <FiUser size={18} />
//           <span>Sign up</span>
//         </button>
//       </div>
//     </nav>
//   )
// }



// "use client"

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FiSearch, FiUser, FiLogIn, FiGrid } from "react-icons/fi";

// export default function Navbar() {
//   const pathname = usePathname()
//   const router = useRouter()
//   const [searchHandle, setSearchHandle] = useState("")
  
//   if (pathname === "/dashboard" || pathname === "/login" || pathname === "/signup") {
//     return null
//   }

//   const goToHandle = () => {
//     if (searchHandle.trim()) {
//       router.push(`/${searchHandle}`)
//       setSearchHandle("")
//     }
//   }

//   return (
//     <nav className="bg-[#0A0A0F]/80 backdrop-blur-xl w-[95vw] flex justify-between fixed top-5 left-[2.5vw] rounded-full p-3 px-6 border border-[#333333] shadow-2xl z-50">
//       {/* Logo Section */}
//       <div className="logo flex items-center">
//         <Link href="/" className="flex items-center gap-3 group">
//           <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300" 
//                style={{ transform: 'rotate(45deg)' }}>
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" 
//                  style={{ transform: 'rotate(-45deg)' }}>
//               <path d="M18 8c3 0 4 3 4 5s-1 5-4 5-4-3-4-5 1-5 4-5zM6 8c-3 0-4 3-4 5s1 5 4 5 4-3 4-5-1-5-4-5z"></path>
//               <path d="M10 13c0 2 1 4 3 4s3-2 3-4-1-4-3-4-3 2-3 4z"></path>
//             </svg>
//           </div>
          
//           <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent drop-shadow-lg">
//             LINKO
//           </span>
//         </Link>
//       </div>

//       {/* Right side section */}
//       <div className="flex gap-3 items-center">
//         {/* Search Bar - Oval */}
//         <div className="flex items-center bg-white/5 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300 overflow-hidden">
//           <FiSearch className="text-gray-400 ml-3" size={18} />
//           <input 
//             type="text" 
//             placeholder="Go to @handle" 
//             className="px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none w-36"
//             value={searchHandle}
//             onChange={(e) => setSearchHandle(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && goToHandle()}
//           />
//           <button 
//             onClick={goToHandle}
//             className="px-4 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 transition-all duration-300"
//           >
//             Go
//           </button>
//         </div>

//         {/* My Linkos */}
//         <Link 
//           href="/dashboard" 
//           className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF3366] font-medium transition-all duration-300 group"
//         >
//           <FiGrid className="group-hover:rotate-90 transition-transform duration-300" size={18} />
//           <span>My Linkos</span>
//         </Link>

//         {/* Log in - FIXED: Added Link wrapper */}
//         <Link href="/login">
//           <button className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#33CCFF] font-medium transition-all duration-300 group">
//             <FiLogIn className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
//             <span>Log in</span>
//           </button>
//         </Link>

//         {/* Sign up - FIXED: Added Link wrapper */}
//         <Link href="/signup">
//           <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300">
//             <FiUser size={18} />
//             <span>Sign up</span>
//           </button>
//         </Link>
//       </div>
//     </nav>
//   )
// }


// "use client"

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FiSearch, FiUser, FiLogIn, FiGrid, FiLogOut } from "react-icons/fi";

// export default function Navbar() {
//   const pathname = usePathname()
//   const router = useRouter()
//   const [searchHandle, setSearchHandle] = useState("")
//   const [user, setUser] = useState(null) // null = not logged in

//   // Check if user is logged in (from localStorage)
//   const loadUser = () => {
//     const storedUser = localStorage.getItem('user')
//     if (storedUser) {
//       setUser(JSON.parse(storedUser))
//     } else {
//       setUser(null)
//     }
//   }

//   useEffect(() => {
//     loadUser()
    
//     // Listen for storage changes (in case user logs in from another tab)
//     window.addEventListener('storage', loadUser)
    
//     return () => {
//       window.removeEventListener('storage', loadUser)
//     }
//   }, [pathname]) // Re-run when pathname changes (like when returning to home)

//   const handleLogout = () => {
//     localStorage.removeItem('user')
//     setUser(null)
//     router.push('/')
//   }
  
//   if (pathname === "/dashboard" || pathname === "/login" || pathname === "/signup") {
//     return null
//   }

//   const goToHandle = () => {
//     if (searchHandle.trim()) {
//       router.push(`/${searchHandle}`)
//       setSearchHandle("")
//     }
//   }

//   return (
//     <nav className="bg-[#0A0A0F]/80 backdrop-blur-xl w-[95vw] flex justify-between fixed top-5 left-[2.5vw] rounded-full p-3 px-6 border border-[#333333] shadow-2xl z-50">
//       {/* Logo Section */}
//       <div className="logo flex items-center">
//         <Link href="/" className="flex items-center gap-3 group">
//           <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300" 
//                style={{ transform: 'rotate(45deg)' }}>
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" 
//                  style={{ transform: 'rotate(-45deg)' }}>
//               <path d="M18 8c3 0 4 3 4 5s-1 5-4 5-4-3-4-5 1-5 4-5zM6 8c-3 0-4 3-4 5s1 5 4 5 4-3 4-5-1-5-4-5z"></path>
//               <path d="M10 13c0 2 1 4 3 4s3-2 3-4-1-4-3-4-3 2-3 4z"></path>
//             </svg>
//           </div>
          
//           <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent drop-shadow-lg">
//             LINKO
//           </span>
//         </Link>
//       </div>

//       {/* Right side section */}
//       <div className="flex gap-3 items-center">
//         {/* Search Bar */}
//         <div className="flex items-center bg-white/5 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300 overflow-hidden">
//           <FiSearch className="text-gray-400 ml-3" size={18} />
//           <input 
//             type="text" 
//             placeholder="Go to @handle" 
//             className="px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none w-36"
//             value={searchHandle}
//             onChange={(e) => setSearchHandle(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && goToHandle()}
//           />
//           <button 
//             onClick={goToHandle}
//             className="px-4 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 transition-all duration-300"
//           >
//             Go
//           </button>
//         </div>

//         {/* My Linkos - always visible */}
//         <Link 
//           href="/dashboard" 
//           className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF3366] font-medium transition-all duration-300 group"
//         >
//           <FiGrid className="group-hover:rotate-90 transition-transform duration-300" size={18} />
//           <span>My Linkos</span>
//         </Link>

//         {/* IF USER IS LOGGED IN - Show account info */}
//         {user ? (
//           <>
//             {/* Username */}
//             <div className="flex items-center gap-2 px-4 py-2 text-white">
//               <span className="text-[#33CCFF] font-bold">@{user.handle}</span>
//             </div>

//             {/* Profile Icon */}
//             <div className="w-10 h-10 bg-gradient-to-r from-[#FF3366] to-[#9933FF] rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-lg">
//                 {user.name?.charAt(0).toUpperCase() || 'U'}
//               </span>
//             </div>

//             {/* Logout Button */}
//             <button 
//               onClick={handleLogout}
//               className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF3366] font-medium transition-all duration-300 group"
//             >
//               <FiLogOut className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
//               <span>Logout</span>
//             </button>
//           </>
//         ) : (
//           /* IF USER IS NOT LOGGED IN - Show login/signup */
//           <>
//             <Link href="/login">
//               <button className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#33CCFF] font-medium transition-all duration-300 group">
//                 <FiLogIn className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
//                 <span>Log in</span>
//               </button>
//             </Link>

//             <Link href="/signup">
//               <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300">
//                 <FiUser size={18} />
//                 <span>Sign up</span>
//               </button>
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   )
// }


// "use client"

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FiSearch, FiUser, FiLogIn, FiGrid, FiLogOut } from "react-icons/fi";

// export default function Navbar() {
//   const pathname = usePathname()
//   const router = useRouter()
//   const [searchHandle, setSearchHandle] = useState("")
//   const [user, setUser] = useState(null)

//   // Load user from localStorage
//   const loadUser = () => {
//     // Try currentUser first (from login/signup), then fallback to user
//     const currentUser = localStorage.getItem('currentUser')
//     const oldUser = localStorage.getItem('user')
    
//     if (currentUser) {
//       setUser(JSON.parse(currentUser))
//     } else if (oldUser) {
//       setUser(JSON.parse(oldUser))
//     } else {
//       setUser(null)
//     }
//   }

//   useEffect(() => {
//     loadUser()
    
//     // Listen for storage changes
//     window.addEventListener('storage', loadUser)
    
//     return () => {
//       window.removeEventListener('storage', loadUser)
//     }
//   }, [pathname])

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser')
//     localStorage.removeItem('user')
//     setUser(null)
//     router.push('/')
//   }
  
//   // Don't show on auth pages
//   if (pathname === "/dashboard" || pathname === "/login" || pathname === "/signup") {
//     return null
//   }

//   const goToHandle = () => {
//     if (searchHandle.trim()) {
//       router.push(`/${searchHandle}`)
//       setSearchHandle("")
//     }
//   }

//   return (
//     <nav className="bg-[#0A0A0F]/80 backdrop-blur-xl w-[95vw] flex justify-between fixed top-5 left-[2.5vw] rounded-full p-3 px-6 border border-[#333333] shadow-2xl z-50">
//       {/* Logo Section */}
//       <div className="logo flex items-center">
//         <Link href="/" className="flex items-center gap-3 group">
//           <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300" 
//                style={{ transform: 'rotate(45deg)' }}>
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" 
//                  style={{ transform: 'rotate(-45deg)' }}>
//               <path d="M18 8c3 0 4 3 4 5s-1 5-4 5-4-3-4-5 1-5 4-5zM6 8c-3 0-4 3-4 5s1 5 4 5 4-3 4-5-1-5-4-5z"></path>
//               <path d="M10 13c0 2 1 4 3 4s3-2 3-4-1-4-3-4-3 2-3 4z"></path>
//             </svg>
//           </div>
          
//           <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent drop-shadow-lg">
//             LINKO
//           </span>
//         </Link>
//       </div>

//       {/* Right side section */}
//       <div className="flex gap-3 items-center">
//         {/* Search Bar */}
//         <div className="flex items-center bg-white/5 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300 overflow-hidden">
//           <FiSearch className="text-gray-400 ml-3" size={18} />
//           <input 
//             type="text" 
//             placeholder="Go to @handle" 
//             className="px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none w-36"
//             value={searchHandle}
//             onChange={(e) => setSearchHandle(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && goToHandle()}
//           />
//           <button 
//             onClick={goToHandle}
//             className="px-4 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 transition-all duration-300"
//           >
//             Go
//           </button>
//         </div>

//         {/* My Linkos - always visible */}
//         <Link 
//           href="/dashboard" 
//           className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF3366] font-medium transition-all duration-300 group"
//         >
//           <FiGrid className="group-hover:rotate-90 transition-transform duration-300" size={18} />
//           <span>My Linkos</span>
//         </Link>

//         {/* IF USER IS LOGGED IN - Show account info */}
//         {user ? (
//           <>
//             {/* Username - NOW VISIBLE */}
//             <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-[#333333]">
//               <span className="text-[#33CCFF] font-bold">@{user.handle || user.email?.split('@')[0]}</span>
//             </div>

//             {/* Profile Icon */}
//             <div className="w-10 h-10 bg-gradient-to-r from-[#FF3366] to-[#9933FF] rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-lg">
//                 {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || 'U'}
//               </span>
//             </div>

//             {/* Logout Button */}
//             <button 
//               onClick={handleLogout}
//               className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF3366] font-medium transition-all duration-300 group"
//             >
//               <FiLogOut className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
//               <span>Logout</span>
//             </button>
//           </>
//         ) : (
//           /* IF USER IS NOT LOGGED IN - Show login/signup */
//           <>
//             <Link href="/login">
//               <button className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#33CCFF] font-medium transition-all duration-300 group">
//                 <FiLogIn className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
//                 <span>Log in</span>
//               </button>
//             </Link>

//             <Link href="/signup">
//               <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300">
//                 <FiUser size={18} />
//                 <span>Sign up</span>
//               </button>
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   )
// }

// "use client"

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FiSearch, FiUser, FiLogIn, FiGrid, FiLogOut, FiHome } from "react-icons/fi"; // Added FiHome

// export default function Navbar() {
//   const pathname = usePathname()
//   const router = useRouter()
//   const [searchHandle, setSearchHandle] = useState("")
//   const [user, setUser] = useState(null)

//   const loadUser = () => {
//     const currentUser = localStorage.getItem('currentUser')
//     const oldUser = localStorage.getItem('user')
    
//     if (currentUser) {
//       setUser(JSON.parse(currentUser))
//     } else if (oldUser) {
//       setUser(JSON.parse(oldUser))
//     } else {
//       setUser(null)
//     }
//   }

//   useEffect(() => {
//     loadUser()
//     window.addEventListener('storage', loadUser)
//     return () => {
//       window.removeEventListener('storage', loadUser)
//     }
//   }, [pathname])

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser')
//     localStorage.removeItem('user')
//     setUser(null)
//     router.push('/')
//   }
  
//   if (pathname === "/dashboard" || pathname === "/login" || pathname === "/signup") {
//     return null
//   }

//   const goToHandle = () => {
//     if (searchHandle.trim()) {
//       router.push(`/${searchHandle}`)
//       setSearchHandle("")
//     }
//   }

//   return (
//     <nav className="bg-[#0A0A0F]/80 backdrop-blur-xl w-[95vw] flex justify-between fixed top-5 left-[2.5vw] rounded-full p-3 px-6 border border-[#333333] shadow-2xl z-50">
//       {/* Logo Section */}
//       <div className="logo flex items-center">
//         <Link href="/" className="flex items-center gap-3 group">
//           <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300" 
//                style={{ transform: 'rotate(45deg)' }}>
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" 
//                  style={{ transform: 'rotate(-45deg)' }}>
//               <path d="M18 8c3 0 4 3 4 5s-1 5-4 5-4-3-4-5 1-5 4-5zM6 8c-3 0-4 3-4 5s1 5 4 5 4-3 4-5-1-5-4-5z"></path>
//               <path d="M10 13c0 2 1 4 3 4s3-2 3-4-1-4-3-4-3 2-3 4z"></path>
//             </svg>
//           </div>
          
//           <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent drop-shadow-lg">
//             LINKO
//           </span>
//         </Link>
//       </div>

//       {/* Right side section */}
//       <div className="flex gap-3 items-center">
//         {/* HOME BUTTON - NEW! */}
//         <Link 
//           href="/" 
//           className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF3366] font-medium transition-all duration-300 group border-r border-[#333333] pr-4"
//         >
//           <FiHome className="group-hover:scale-110 transition-transform duration-300" size={18} />
//           <span>Home</span>
//         </Link>

//         {/* Search Bar */}
//         <div className="flex items-center bg-white/5 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300 overflow-hidden">
//           <FiSearch className="text-gray-400 ml-3" size={18} />
//           <input 
//             type="text" 
//             placeholder="Go to @handle" 
//             className="px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none w-36"
//             value={searchHandle}
//             onChange={(e) => setSearchHandle(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && goToHandle()}
//           />
//           <button 
//             onClick={goToHandle}
//             className="px-4 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 transition-all duration-300"
//           >
//             Go
//           </button>
//         </div>

//         {/* My Linkos */}
//         <Link 
//           href="/dashboard" 
//           className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF3366] font-medium transition-all duration-300 group"
//         >
//           <FiGrid className="group-hover:rotate-90 transition-transform duration-300" size={18} />
//           <span>My Linkos</span>
//         </Link>

//         {/* User section */}
//         {user ? (
//           <>
//             <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-[#333333]">
//               <span className="text-[#33CCFF] font-bold">@{user.handle || user.email?.split('@')[0]}</span>
//             </div>

//             <div className="w-10 h-10 bg-gradient-to-r from-[#FF3366] to-[#9933FF] rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-lg">
//                 {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || 'U'}
//               </span>
//             </div>

//             <button 
//               onClick={handleLogout}
//               className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF3366] font-medium transition-all duration-300 group"
//             >
//               <FiLogOut className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
//               <span>Logout</span>
//             </button>
//           </>
//         ) : (
//           <>
//             <Link href="/login">
//               <button className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#33CCFF] font-medium transition-all duration-300 group">
//                 <FiLogIn className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
//                 <span>Log in</span>
//               </button>
//             </Link>

//             <Link href="/signup">
//               <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300">
//                 <FiUser size={18} />
//                 <span>Sign up</span>
//               </button>
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   )
// }

"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiSearch, FiUser, FiLogIn, FiGrid, FiLogOut, FiHome } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [searchHandle, setSearchHandle] = useState("")
  const [user, setUser] = useState(null)

  const loadUser = () => {
    const currentUser = localStorage.getItem('currentUser')
    const oldUser = localStorage.getItem('user')
    
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    } else if (oldUser) {
      setUser(JSON.parse(oldUser))
    } else {
      setUser(null)
    }
  }

  useEffect(() => {
    loadUser()
    window.addEventListener('storage', loadUser)
    return () => {
      window.removeEventListener('storage', loadUser)
    }
  }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('user')
    setUser(null)
    router.push('/')
  }
  
  if (pathname === "/dashboard" || pathname === "/login" || pathname === "/signup") {
    return null
  }

  const goToHandle = () => {
    if (searchHandle.trim()) {
      router.push(`/${searchHandle}`)
      setSearchHandle("")
    }
  }

  return (
    <nav className="bg-[#0A0A0F]/80 backdrop-blur-xl w-[95vw] flex justify-between fixed top-5 left-[2.5vw] rounded-full p-3 px-6 border border-[#333333] shadow-2xl z-50">
      {/* Logo Section */}
      <div className="logo flex items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300" 
               style={{ transform: 'rotate(45deg)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" 
                 style={{ transform: 'rotate(-45deg)' }}>
              <path d="M18 8c3 0 4 3 4 5s-1 5-4 5-4-3-4-5 1-5 4-5zM6 8c-3 0-4 3-4 5s1 5 4 5 4-3 4-5-1-5-4-5z"></path>
              <path d="M10 13c0 2 1 4 3 4s3-2 3-4-1-4-3-4-3 2-3 4z"></path>
            </svg>
          </div>
          
          <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent drop-shadow-lg">
            LINKO
          </span>
        </Link>
      </div>

      {/* Right side section */}
      <div className="flex gap-3 items-center">
        {/* COLORFUL HOME BUTTON - UPDATED! */}
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF3366]/20 to-[#9933FF]/20 rounded-full border border-[#FF3366]/30 hover:border-[#FF3366] transition-all duration-300 group relative overflow-hidden"
        >
          {/* Animated background effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#9933FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          
          {/* Home icon with gradient */}
          <FiHome className="text-[#FF3366] group-hover:text-white group-hover:scale-110 transition-all duration-300" size={18} />
          
          {/* Text with gradient on hover */}
          <span className="text-white group-hover:bg-gradient-to-r group-hover:from-[#FF3366] group-hover:to-[#9933FF] group-hover:bg-clip-text group-hover:text-transparent font-medium transition-all duration-300">
            Home
          </span>
          
          {/* Small decorative dot */}
          <span className="w-1 h-1 bg-[#FF3366] rounded-full group-hover:animate-ping absolute -top-1 -right-1"></span>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center bg-white/5 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300 overflow-hidden">
          <FiSearch className="text-gray-400 ml-3" size={18} />
          <input 
            type="text" 
            placeholder="Go to @handle" 
            className="px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none w-36"
            value={searchHandle}
            onChange={(e) => setSearchHandle(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && goToHandle()}
          />
          <button 
            onClick={goToHandle}
            className="px-4 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 transition-all duration-300"
          >
            Go
          </button>
        </div>

        {/* My Linkos */}
        <Link 
          href="/dashboard" 
          className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF3366] font-medium transition-all duration-300 group"
        >
          <FiGrid className="group-hover:rotate-90 transition-transform duration-300" size={18} />
          <span>My Linkos</span>
        </Link>

        {/* User section */}
        {user ? (
          <>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-[#333333]">
              <span className="text-[#33CCFF] font-bold">@{user.handle || user.email?.split('@')[0]}</span>
            </div>

            <div className="w-10 h-10 bg-gradient-to-r from-[#FF3366] to-[#9933FF] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || 'U'}
              </span>
            </div>

            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF3366] font-medium transition-all duration-300 group"
            >
              <FiLogOut className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <button className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#33CCFF] font-medium transition-all duration-300 group">
                <FiLogIn className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
                <span>Log in</span>
              </button>
            </Link>

            <Link href="/signup">
              <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300">
                <FiUser size={18} />
                <span>Sign up</span>
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
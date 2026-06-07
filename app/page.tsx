// "use client"
// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {

//   const router = useRouter()
//   const [text, setText] = useState("")

//   const createTree = () => {
  
//    // router.push(`/generate?handle=${text}`)
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);

//   }
//   return (
//    <main>
//     <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 ">
//       <div className="flex justify-center flex-col ml-[10vw] gap-3">
//       <p className="text-yellow-300 font-bold text-7xl">Everything you</p>
//       <p className="text-yellow-300 font-bold text-7xl">are. In one,</p>
//       <p className="text-yellow-300 font-bold text-7xl">simple link in bio.</p>
//       <p className="text-yellow-300 text-xl my-4">Join 50M+ people using Linktree for their link in bio. 
//         One link to help you share everything you create, curate and sell from your Instagram, Tiktok,
//          Twitter, Youtube and other social media profiles.</p>
//         <div className="input flex gap-2">
//           <input value={text} onChange={(e)=> setText(e.target.value)} className="px-2 py-2 focus:outline-green-800 rounded-md" type="text" placeholder="Enter your Handle"/>
//            <button onClick={()=> createTree()} className="bg-pink-300 rounded-full px-4 py-4 font-semibold">Claim your Bittree</button>
//         </div>
//       </div>
//       <div className="flex items-center justify-center flex-col mr-[10vw]">
        
//         <img src="/home.png" alt="Linko Hero" />
//       </div>
      
//     </section>
//     <section className="bg-red-700 min-h-[100vh]">

      
//     </section>
//    </main>
//   );
// }



// "use client"
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {

//   const router = useRouter()
//   const [text, setText] = useState("")

//   const createTree = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>

//       {/* HERO SECTION */}
//       <section className="relative min-h-screen grid md:grid-cols-2 overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#1a103d] to-[#090616] text-white">

//         {/* Glow Background Circles */}
//         <div className="absolute w-96 h-96 bg-pink-500/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
//         <div className="absolute w-96 h-96 bg-purple-600/30 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

//         {/* LEFT CONTENT */}
//         <div className="flex justify-center flex-col px-[8vw] gap-6 z-10">

//           <h1 className="font-bold text-6xl md:text-7xl leading-tight bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//             Everything you <br /> are. In one, <br /> simple link in bio.
//           </h1>

//           <p className="text-gray-300 text-lg max-w-xl">
//             Join 50M+ people using Linktree for their link in bio.
//             One link to help you share everything you create,
//             curate and sell from your Instagram, Tiktok,
//             Twitter, Youtube and other social media profiles.
//           </p>

//           <div className="flex gap-3 mt-4">
//             <input
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 w-64"
//               type="text"
//               placeholder="Enter your Handle"
//             />

//             <button
//               onClick={createTree}
//               className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-pink-500/40 hover:scale-105 transition"
//             >
//               Claim your Bittree
//             </button>
//           </div>

//           <div className="flex gap-6 text-sm text-gray-400 mt-4">
//             <span>● 50M+ creators</span>
//             <span>● Free forever</span>
//             <span>● No credit card</span>
//           </div>

//         </div>

//         {/* RIGHT SIDE MOCKUP */}
//         <div className="relative flex items-center justify-center z-10">

//           {/* Phone */}
//           <div className="relative w-72 h-[520px] bg-gradient-to-br from-pink-500 to-purple-700 rounded-[40px] shadow-2xl shadow-purple-900/60 p-4 flex flex-col items-center justify-start gap-4">

//             <div className="w-20 h-20 rounded-full bg-white/30 mt-4" />

//             <div className="w-full bg-white/20 rounded-xl py-3 text-center font-semibold backdrop-blur-md">
//               New Single Out Now
//             </div>

//             <div className="w-full bg-white/20 rounded-xl py-3 text-center font-semibold backdrop-blur-md">
//               Watch My Latest Video
//             </div>

//             <div className="w-full bg-white/20 rounded-xl py-3 text-center font-semibold backdrop-blur-md">
//               Explore My Shop
//             </div>

//           </div>

//           {/* Floating Icons */}
//           <div className="absolute top-20 -left-6 w-14 h-14 bg-blue-500 rounded-xl animate-bounce shadow-lg" />
//           <div className="absolute bottom-20 -right-6 w-14 h-14 bg-pink-500 rounded-xl animate-pulse shadow-lg" />
//           <div className="absolute top-10 right-10 w-12 h-12 bg-red-500 rounded-xl animate-bounce shadow-lg" />

//         </div>

//       </section>

//     </main>
//   );
// }


//   "use client"
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")

//   const createTree = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section */}
//       <section 
//         className="relative h-screen overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* RED GLOW - TOUCHING NAVBAR */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px]" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />

//         {/* Background Image - TOUCHING TOP AND BOTTOM */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           {/* GRADIENT FADE */}
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content - NOW VISIBLE (not under navbar) */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center h-full pt-20">
//             {/* ^^^ pt-20 pushes content down from navbar */}
//             <div className="max-w-2xl">
              
//               {/* Headline */}
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
//                 Everything you are.
//                 <br />
//                 In one,
//                 <br />
//                 <span style={{color: '#FF3366'}}>simple link in bio.</span>
//               </h1>

//               {/* Description */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6">
//                 Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, Tiktok, Twitter, Youtube and other social media profiles.
//               </p>

//               {/* Input Section */}
//               <div className="mt-8">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-96 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//               </div>

//               {/* WELCOME TO LINKO - NOW VISIBLE! */}
//               <div className="mt-12">
//                 <span style={{color: '#33CCFF', fontSize: '1.2rem', fontWeight: '600', letterSpacing: '1px'}}>WELCOME TO LINKO</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="py-20" style={{background: '#0A0A0F'}}>
//         <div className="max-w-4xl mx-auto px-4">
          
//           {/* Templates & Sign up Free */}
//           <div className="grid grid-cols-5 gap-4 text-center mb-12 text-[#CCCCCC] text-sm">
//             <span className="hover:text-[#FF3366] cursor-pointer">Templates</span>
//             <span className="hover:text-[#FF3366] cursor-pointer">Marketplace</span>
//             <span className="hover:text-[#FF3366] cursor-pointer">Discover</span>
//             <span className="hover:text-[#FF3366] cursor-pointer">Pricing</span>
//             <span className="text-[#33CCFF] cursor-pointer hover:underline">Sign up Free</span>
//           </div>

//           <hr className="border-[#333333] mb-12" />

//           {/* One Link Text */}
//           <div className="text-center mb-12">
//             <p className="text-[#CCCCCC] text-xl">One Link. Endless Possibilities.</p>
//           </div>

//           {/* Links List */}
//           <div className="max-w-md mx-auto space-y-4">
//             <div className="text-white text-xl border-b border-[#333333] pb-3 cursor-pointer hover:border-[#FF3366] transition">My Instagram</div>
//             <div className="text-white text-xl border-b border-[#333333] pb-3 cursor-pointer hover:border-[#FF3366] transition">My YouTube</div>
//             <div className="text-white text-xl border-b border-[#333333] pb-3 cursor-pointer hover:border-[#FF3366] transition">My Spotify</div>
//             <div className="text-white text-xl border-b border-[#333333] pb-3 cursor-pointer hover:border-[#FF3366] transition">Contact Me</div>
//           </div>

//           {/* Bottom Text */}
//           <div className="text-center mt-12">
//             <p className="text-[#CCCCCC] text-lg">
//               Your links, all in one place with <span style={{color: '#FF3366', fontWeight: '600'}}>Linko</span> 🎵 Spotify
//             </p>
//           </div>

//           {/* Claim Button */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createTree}
//               className="px-12 py-4 text-white font-bold text-lg rounded-lg hover:scale-105 transition"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                 boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//               }}
//             >
//               Claim your Linko now
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")
//   const [recentTrees, setRecentTrees] = useState([]);

//   useEffect(() => {
//     const saved = localStorage.getItem('myBittrees');
//     if(saved) {
//       const all = JSON.parse(saved);
//       setRecentTrees(all.slice(-5).reverse());
//     }
//   }, []);

//   const createTree = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen pt-32 overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* Glow effects */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px]" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />

//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           {/* Gradient fade */}
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content - Added ml-20 for left spacing */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
//             <div className="max-w-2xl ml-20"> {/* Added ml-20 here */}
              
//               {/* Headline */}
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
//                 Everything you are.
//                 <br />
//                 In one,
//                 <br />
//                 <span style={{
//                   background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   display: 'inline-block'
//                 }}>
//                   simple link in bio.
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6">
//                 Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, Tiktok, Twitter, Youtube and other social media profiles.
//               </p>

//               {/* Input Section */}
//               <div className="mt-8 flex gap-3">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//                 <button
//                   onClick={createTree}
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-105 transition whitespace-nowrap"
//                   style={{
//                     background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                     boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//                   }}
//                 >
//                   Claim your Linko
//                 </button>
//               </div>

//               {/* WELCOME TO LINKO - MADE MORE ATTRACTIVE */}
//               <div className="mt-16">
//                 <div className="flex items-center gap-4">
//                   <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#33CCFF]"></div>
//                   <span className="text-[#33CCFF] text-sm font-semibold tracking-[0.3em]">WELCOME TO</span>
//                   <span className="text-2xl font-black bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">LINKO</span>
//                   <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#33CCFF]"></div>
//                 </div>
                
//                 {/* Animated dots */}
//                 <div className="flex justify-center gap-2 mt-4">
//                   <div className="w-2 h-2 bg-[#FF3366] rounded-full animate-pulse"></div>
//                   <div className="w-2 h-2 bg-[#9933FF] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-2 h-2 bg-[#33CCFF] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="py-20" style={{background: '#0A0A0F'}}>
//         <div className="max-w-4xl mx-auto px-4">
          
//           {/* Sign up Free */}
//           <div className="text-right mb-12">
//             <span className="text-[#33CCFF] cursor-pointer hover:underline text-sm relative group">
//               Sign up Free
//               <span className="absolute bottom-0 left-0 w-0 h-px bg-[#FF3366] group-hover:w-full transition-all duration-300"></span>
//             </span>
//           </div>

//           <hr className="border-[#333333] mb-12" />

//           {/* Links List - Now with hover effects */}
//           <div className="max-w-md mx-auto space-y-4">
//             <div className="group flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#333333]">
//               <span className="text-white text-xl group-hover:text-[#FF3366] transition-colors">My Instagram</span>
//               <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition">→</span>
//             </div>
//             <div className="group flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#333333]">
//               <span className="text-white text-xl group-hover:text-[#FF3366] transition-colors">My YouTube</span>
//               <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition">→</span>
//             </div>
//             <div className="group flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#333333]">
//               <span className="text-white text-xl group-hover:text-[#FF3366] transition-colors">My Spotify</span>
//               <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition">→</span>
//             </div>
//             <div className="group flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#333333]">
//               <span className="text-white text-xl group-hover:text-[#FF3366] transition-colors">Contact Me</span>
//               <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition">→</span>
//             </div>
//           </div>

//           {/* Bottom Text with Spotify integration */}
//           <div className="text-center mt-12">
//             <p className="text-[#CCCCCC] text-lg">
//               Your links, all in one place with <span className="text-[#FF3366] font-bold relative group inline-block">
//                 Linko
//                 <span className="absolute -inset-1 bg-[#FF3366]/20 blur-md group-hover:bg-[#FF3366]/30 rounded-lg transition"></span>
//               </span> 
//               <span className="inline-flex items-center gap-2 ml-2">
//                 <span className="w-1 h-1 bg-[#33CCFF] rounded-full"></span>
//                 <span className="text-[#1DB954] font-semibold">Spotify</span>
//               </span>
//             </p>
//           </div>

//           {/* Claim Button */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createTree}
//               className="group relative px-12 py-4 text-white font-bold text-lg rounded-lg overflow-hidden"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#9933FF]"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#FF9933] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               <span className="relative z-10">Claim your Linko now</span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")
//   const [recentTrees, setRecentTrees] = useState([]);

//   useEffect(() => {
//     const saved = localStorage.getItem('myBittrees');
//     if(saved) {
//       const all = JSON.parse(saved);
//       setRecentTrees(all.slice(-5).reverse());
//     }
//   }, []);

//   const createTree = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen pt-32 overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* Glow effects */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px]" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />

//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           {/* Gradient fade */}
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
//             <div className="max-w-2xl">
              
//               {/* Headline */}
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
//                 Everything you are.
//                 <br />
//                 In one,
//                 <br />
//                 <span style={{
//                   background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   display: 'inline-block'
//                 }}>
//                   simple link in bio.
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6">
//                 Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, Tiktok, Twitter, Youtube and other social media profiles.
//               </p>

//               {/* Input Section */}
//               <div className="mt-8 flex gap-3">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//                 <button
//                   onClick={createTree}
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-105 transition whitespace-nowrap"
//                   style={{
//                     background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                     boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//                   }}
//                 >
//                   Claim your Linko
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section - WITH RECENT LINKOS */}
//       <section className="py-20" style={{background: '#0A0A0F'}}>
//         <div className="max-w-4xl mx-auto px-4">
          
//           {/* WELCOME TO LINKO - EXACTLY LIKE YOUR SCREENSHOT */}
//           <div className="text-center mb-16">
//             <div className="text-[#33CCFF] text-7xl font-light tracking-wider leading-none">
//               WELCOME TO
//             </div>
//             <div className="text-[#33CCFF] text-9xl font-black tracking-wider mt-4">
//               LINKO
//             </div>
//           </div>

//           <hr className="border-[#333333] mb-12" />

//           {/* RECENT LINKOS SECTION */}
//           <div className="max-w-md mx-auto">
//             <h2 className="text-2xl font-bold text-white mb-6 text-center">Your Recent Linkos</h2>
            
//             {recentTrees.length === 0 ? (
//               <div className="text-center text-[#CCCCCC] py-8">
//                 <p>You haven't created any Linkos yet</p>
//                 <Link 
//                   href="/generate" 
//                   className="inline-block mt-4 text-[#FF3366] hover:underline"
//                 >
//                   Create your first Linko →
//                 </Link>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {recentTrees.map((tree, i) => (
//                   <Link 
//                     key={i} 
//                     href={`/${tree.handle}`}
//                     className="block group"
//                   >
//                     <div className="bg-white/5 backdrop-blur-lg p-4 rounded-lg border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-105">
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <span className="text-white font-semibold text-lg">@{tree.handle}</span>
//                           <p className="text-[#CCCCCC] text-sm mt-1">
//                             {tree.links || 0} links • {new Date(tree.date).toLocaleDateString()}
//                           </p>
//                         </div>
//                         <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition">
//                           View →
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
                
//                 <Link 
//                   href="/dashboard" 
//                   className="block text-center text-[#33CCFF] mt-6 hover:text-[#FF3366] transition"
//                 >
//                   See all your Linkos →
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Bottom Text */}
//           <div className="text-center mt-12">
//             <p className="text-[#CCCCCC] text-lg">
//               Your links, all in one place with <span style={{color: '#FF3366', fontWeight: '600'}}>Linko</span> 🎵 Spotify
//             </p>
//           </div>

//           {/* Claim Button */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createTree}
//               className="px-12 py-4 text-white font-bold text-lg rounded-lg hover:scale-105 transition"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                 boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//               }}
//             >
//               Claim your Linko now
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")
//   const [recentTrees, setRecentTrees] = useState([]);

//   useEffect(() => {
//     const saved = localStorage.getItem('myBittrees');
//     if(saved) {
//       const all = JSON.parse(saved);
//       setRecentTrees(all.slice(-5).reverse());
//     }
//   }, []);

//   const createTree = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen pt-32 overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* Glow effects */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px]" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />

//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           {/* Gradient fade */}
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
//             <div className="max-w-2xl">
              
//               {/* Headline */}
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
//                 Everything you are.
//                 <br />
//                 In one,
//                 <br />
//                 <span style={{
//                   background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   display: 'inline-block'
//                 }}>
//                   simple link in bio.
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6">
//                 Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, Tiktok, Twitter, Youtube and other social media profiles.
//               </p>

//               {/* Input Section */}
//               <div className="mt-8 flex gap-3">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//                 <button
//                   onClick={createTree}
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-105 transition whitespace-nowrap"
//                   style={{
//                     background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                     boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//                   }}
//                 >
//                   Claim your Linko
//                 </button>
//               </div>

//               {/* WELCOME TO LINKO - FANCY VERSION BELOW INPUT */}
//               <div className="mt-16">
//                 <div className="flex items-center gap-4">
//                   <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#33CCFF]"></div>
//                   <span className="text-[#33CCFF] text-sm font-semibold tracking-[0.3em]">WELCOME TO</span>
//                   <span className="text-2xl font-black bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">LINKO</span>
//                   <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#33CCFF]"></div>
//                 </div>
                
//                 {/* Animated dots */}
//                 <div className="flex justify-center gap-2 mt-4">
//                   <div className="w-2 h-2 bg-[#FF3366] rounded-full animate-pulse"></div>
//                   <div className="w-2 h-2 bg-[#9933FF] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-2 h-2 bg-[#33CCFF] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section - WITH RECENT LINKOS */}
//       <section className="py-20" style={{background: '#0A0A0F'}}>
//         <div className="max-w-4xl mx-auto px-4">
          
//           <hr className="border-[#333333] mb-12" />

//           {/* RECENT LINKOS SECTION */}
//           <div className="max-w-md mx-auto">
//             <h2 className="text-2xl font-bold text-white mb-6 text-center">Your Recent Linkos</h2>
            
//             {recentTrees.length === 0 ? (
//               <div className="text-center text-[#CCCCCC] py-8">
//                 <p>You haven't created any Linkos yet</p>
//                 <Link 
//                   href="/generate" 
//                   className="inline-block mt-4 text-[#FF3366] hover:underline"
//                 >
//                   Create your first Linko →
//                 </Link>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {recentTrees.map((tree, i) => (
//                   <Link 
//                     key={i} 
//                     href={`/${tree.handle}`}
//                     className="block group"
//                   >
//                     <div className="bg-white/5 backdrop-blur-lg p-4 rounded-lg border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-105">
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <span className="text-white font-semibold text-lg">@{tree.handle}</span>
//                           <p className="text-[#CCCCCC] text-sm mt-1">
//                             {tree.links || 0} links • {new Date(tree.date).toLocaleDateString()}
//                           </p>
//                         </div>
//                         <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition">
//                           View →
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
                
//                 <Link 
//                   href="/dashboard" 
//                   className="block text-center text-[#33CCFF] mt-6 hover:text-[#FF3366] transition"
//                 >
//                   See all your Linkos →
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Bottom Text */}
//           <div className="text-center mt-12">
//             <p className="text-[#CCCCCC] text-lg">
//               Your links, all in one place with <span style={{color: '#FF3366', fontWeight: '600'}}>Linko</span> 🎵 Spotify
//             </p>
//           </div>

//           {/* Claim Button */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createTree}
//               className="px-12 py-4 text-white font-bold text-lg rounded-lg hover:scale-105 transition"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                 boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//               }}
//             >
//               Claim your Linko now
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")
//   const [recentTrees, setRecentTrees] = useState([]);

//   useEffect(() => {
//     const saved = localStorage.getItem('myBittrees');
//     if(saved) {
//       const all = JSON.parse(saved);
//       setRecentTrees(all.slice(-5).reverse());
//     }
//   }, []);

//   const createTree = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section - KEPT EXACTLY THE SAME */}
//       <section 
//         className="relative min-h-screen pt-32 overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* Glow effects */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px]" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />

//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           {/* Gradient fade */}
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
//             <div className="max-w-2xl">
              
//               {/* Headline */}
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
//                 Everything you are.
//                 <br />
//                 In one,
//                 <br />
//                 <span style={{
//                   background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   display: 'inline-block'
//                 }}>
//                   simple link in bio.
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6">
//                 Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, Tiktok, Twitter, Youtube and other social media profiles.
//               </p>

//               {/* Input Section */}
//               <div className="mt-8 flex gap-3">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//                 <button
//                   onClick={createTree}
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-105 transition whitespace-nowrap"
//                   style={{
//                     background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                     boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//                   }}
//                 >
//                   Claim your Linko
//                 </button>
//               </div>

//               {/* WELCOME TO LINKO - FANCY VERSION BELOW INPUT */}
//               <div className="mt-16">
//                 <div className="flex items-center gap-4">
//                   <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#33CCFF]"></div>
//                   <span className="text-[#33CCFF] text-sm font-semibold tracking-[0.3em]">WELCOME TO</span>
//                   <span className="text-2xl font-black bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">LINKO</span>
//                   <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#33CCFF]"></div>
//                 </div>
                
//                 {/* Animated dots */}
//                 <div className="flex justify-center gap-2 mt-4">
//                   <div className="w-2 h-2 bg-[#FF3366] rounded-full animate-pulse"></div>
//                   <div className="w-2 h-2 bg-[#9933FF] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-2 h-2 bg-[#33CCFF] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section - UPDATED WITH ATTRACTIVE DESIGN */}
//       <section className="py-20 relative overflow-hidden" style={{background: '#0A0A0F'}}>
//         {/* Background glow effects */}
//         <div className="absolute w-[600px] h-[600px] bg-[#FF3366]/20 blur-3xl rounded-full top-0 right-0 animate-pulse" />
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/20 blur-3xl rounded-full bottom-0 left-0 animate-pulse delay-700" />
        
//         <div className="max-w-4xl mx-auto px-4 relative z-10">
          
//           <hr className="border-[#333333] mb-12" />

//           {/* Section Title with icon */}
//           <div className="text-center mb-12">
//             <div className="inline-block">
//               <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse"></span>
//                 Your Recent Linkos
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse delay-300"></span>
//               </h2>
//               <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#FF3366] to-[#9933FF] mx-auto transition-all duration-500"></div>
//             </div>
//           </div>

//           {/* RECENT LINKOS SECTION - CARD DESIGN */}
//           <div className="max-w-md mx-auto">
            
//             {recentTrees.length === 0 ? (
//               <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-[#333333] text-center hover:border-[#FF3366] transition-all duration-500 group">
//                 <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <svg className="w-10 h-10 text-[#FF3366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                   </svg>
//                 </div>
//                 <p className="text-[#CCCCCC] text-lg mb-6">You haven't created any Linkos yet</p>
//                 <Link 
//                   href="/generate" 
//                   className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300"
//                 >
//                   Create your first Linko →
//                 </Link>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {recentTrees.map((tree, i) => (
//                   <Link 
//                     key={i} 
//                     href={`/${tree.handle}`}
//                     className="block group"
//                   >
//                     <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#333333] hover:border-[#FF3366] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF3366]/20 relative overflow-hidden">
//                       {/* Animated background gradient on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/0 via-[#FF3366]/0 to-[#9933FF]/0 group-hover:from-[#FF3366]/10 group-hover:via-[#9933FF]/10 group-hover:to-[#FF3366]/0 transition-all duration-500"></div>
                      
//                       <div className="flex justify-between items-center relative z-10">
//                         <div className="flex items-center gap-4">
//                           {/* Profile icon with gradient */}
//                           <div className="w-12 h-12 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
//                             <span className="text-white font-bold text-xl">@</span>
//                           </div>
//                           <div>
//                             <span className="text-white font-bold text-xl group-hover:text-[#FF3366] transition-colors">
//                               {tree.handle}
//                             </span>
//                             <div className="flex items-center gap-2 mt-1">
//                               <span className="text-sm px-3 py-1 bg-[#FF3366]/20 rounded-full text-[#FF3366]">
//                                 {tree.links || 0} links
//                               </span>
//                               <span className="text-sm text-[#CCCCCC]">
//                                 {new Date(tree.date).toLocaleDateString()}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           {/* Spotify now playing animation */}
//                           <div className="flex gap-1 items-center">
//                             <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                             <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                             <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//                           </div>
//                           <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
//                             View →
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
                
//                 {/* See all button with animation */}
//                 <Link 
//                   href="/dashboard" 
//                   className="block text-center mt-8 group"
//                 >
//                   <span className="inline-flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors duration-300 text-lg font-semibold">
//                     See all your Linkos 
//                     <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
//                     <span className="w-8 h-8 rounded-full bg-[#33CCFF]/20 flex items-center justify-center group-hover:bg-[#FF3366]/20 transition-colors">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                       </svg>
//                     </span>
//                   </span>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Bottom Text with Spotify animation */}
//           <div className="text-center mt-16">
//             <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300">
//               <p className="text-[#CCCCCC] text-lg">
//                 Your links, all in one place with 
//               </p>
//               <span className="text-[#FF3366] font-bold text-xl relative group">
//                 Linko
//                 <span className="absolute -inset-2 bg-[#FF3366]/20 blur-xl group-hover:bg-[#FF3366]/30 rounded-full transition"></span>
//               </span>
//               <div className="flex items-center gap-2 ml-2">
//                 <span className="w-1 h-1 bg-[#33CCFF] rounded-full animate-ping"></span>
//                 <span className="text-[#1DB954] font-semibold flex items-center gap-2">
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.68.539.3.719 1.02.419 1.56-.3.421-1.02.601-1.56.301z"/>
//                   </svg>
//                   Spotify
//                 </span>
//                 <div className="flex gap-1 ml-2">
//                   <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                   <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Claim Button with floating animation */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createTree}
//               className="group relative px-12 py-4 text-white font-bold text-lg rounded-full overflow-hidden animate-bounce hover:animate-none"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#9933FF]"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#FF9933] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//               <span className="relative z-10 flex items-center gap-2">
//                 Claim your Linko now
//                 <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")
//   const [recentLinks, setRecentLinks] = useState([]);  // Changed from recentTrees

//   useEffect(() => {
//     const saved = localStorage.getItem('myLinkos');
//     if(saved) {
//       const all = JSON.parse(saved);
//       setRecentLinks(all.slice(-5).reverse());  // Changed from recentTrees
//     }
//   }, []);

//   const createLinko = () => {  // Changed from createTree
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen pt-32 overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* Glow effects */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px]" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />

//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           {/* Gradient fade */}
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
//             <div className="max-w-2xl">
              
//               {/* Headline */}
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
//                 Everything you are.
//                 <br />
//                 In one,
//                 <br />
//                 <span style={{
//                   background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   display: 'inline-block'
//                 }}>
//                   simple link in bio.
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6">
//                 Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, Tiktok, Twitter, Youtube and other social media profiles.
//               </p>

//               {/* Input Section */}
//               <div className="mt-8 flex gap-3">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//                 <button
//                   onClick={createLinko}  // Changed from createTree
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-105 transition whitespace-nowrap"
//                   style={{
//                     background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                     boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//                   }}
//                 >
//                   Claim your Linko
//                 </button>
//               </div>

//               {/* WELCOME TO LINKO */}
//               <div className="mt-16">
//                 <div className="flex items-center gap-4">
//                   <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#33CCFF]"></div>
//                   <span className="text-[#33CCFF] text-sm font-semibold tracking-[0.3em]">WELCOME TO</span>
//                   <span className="text-2xl font-black bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">LINKO</span>
//                   <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#33CCFF]"></div>
//                 </div>
                
//                 {/* Animated dots */}
//                 <div className="flex justify-center gap-2 mt-4">
//                   <div className="w-2 h-2 bg-[#FF3366] rounded-full animate-pulse"></div>
//                   <div className="w-2 h-2 bg-[#9933FF] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-2 h-2 bg-[#33CCFF] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="py-20 relative overflow-hidden" style={{background: '#0A0A0F'}}>
//         {/* Background glow effects */}
//         <div className="absolute w-[600px] h-[600px] bg-[#FF3366]/20 blur-3xl rounded-full top-0 right-0 animate-pulse" />
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/20 blur-3xl rounded-full bottom-0 left-0 animate-pulse delay-700" />
        
//         <div className="max-w-4xl mx-auto px-4 relative z-10">
          
//           <hr className="border-[#333333] mb-12" />

//           {/* Section Title */}
//           <div className="text-center mb-12">
//             <div className="inline-block">
//               <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse"></span>
//                 Your Recent Linkos
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse delay-300"></span>
//               </h2>
//             </div>
//           </div>

//           {/* RECENT LINKOS SECTION */}
//           <div className="max-w-md mx-auto">
            
//             {recentLinks.length === 0 ? (  // Changed from recentTrees
//               <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-[#333333] text-center hover:border-[#FF3366] transition-all duration-500 group">
//                 <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <svg className="w-10 h-10 text-[#FF3366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                   </svg>
//                 </div>
//                 <p className="text-[#CCCCCC] text-lg mb-6">You haven't created any Linkos yet</p>
//                 <Link 
//                   href="/generate" 
//                   className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300"
//                 >
//                   Create your first Linko →
//                 </Link>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {recentLinks.map((linko, i) => (  // Changed from tree to linko
//                   <Link 
//                     key={i} 
//                     href={`/${linko.handle}`}
//                     className="block group"
//                   >
//                     <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#333333] hover:border-[#FF3366] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF3366]/20 relative overflow-hidden">
//                       {/* Animated background gradient on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/0 via-[#FF3366]/0 to-[#9933FF]/0 group-hover:from-[#FF3366]/10 group-hover:via-[#9933FF]/10 group-hover:to-[#FF3366]/0 transition-all duration-500"></div>
                      
//                       <div className="flex justify-between items-center relative z-10">
//                         <div className="flex items-center gap-4">
//                           {/* Profile icon with gradient */}
//                           <div className="w-12 h-12 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
//                             <span className="text-white font-bold text-xl">@</span>
//                           </div>
//                           <div>
//                             <span className="text-white font-bold text-xl group-hover:text-[#FF3366] transition-colors">
//                               {linko.handle}
//                             </span>
//                             <div className="flex items-center gap-2 mt-1">
//                               <span className="text-sm px-3 py-1 bg-[#FF3366]/20 rounded-full text-[#FF3366]">
//                                 {linko.linkCount || 0} links
//                               </span>
//                               <span className="text-sm text-[#CCCCCC]">
//                                 {new Date(linko.date).toLocaleDateString()}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           {/* Spotify animation */}
//                           <div className="flex gap-1 items-center">
//                             <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                             <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                             <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//                           </div>
//                           <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
//                             View →
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
                
//                 {/* See all button */}
//                 <Link 
//                   href="/dashboard" 
//                   className="block text-center mt-8 group"
//                 >
//                   <span className="inline-flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors duration-300 text-lg font-semibold">
//                     See all your Linkos 
//                     <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
//                     <span className="w-8 h-8 rounded-full bg-[#33CCFF]/20 flex items-center justify-center group-hover:bg-[#FF3366]/20 transition-colors">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                       </svg>
//                     </span>
//                   </span>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Bottom Text */}
//           <div className="text-center mt-16">
//             <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300">
//               <p className="text-[#CCCCCC] text-lg">
//                 Your links, all in one place with 
//               </p>
//               <span className="text-[#FF3366] font-bold text-xl relative group">
//                 Linko
//                 <span className="absolute -inset-2 bg-[#FF3366]/20 blur-xl group-hover:bg-[#FF3366]/30 rounded-full transition"></span>
//               </span>
//               <div className="flex items-center gap-2 ml-2">
//                 <span className="w-1 h-1 bg-[#33CCFF] rounded-full animate-ping"></span>
//                 <span className="text-[#1DB954] font-semibold flex items-center gap-2">
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.68.539.3.719 1.02.419 1.56-.3.421-1.02.601-1.56.301z"/>
//                   </svg>
//                   Spotify
//                 </span>
//                 <div className="flex gap-1 ml-2">
//                   <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                   <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Claim Button */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createLinko}
//               className="group relative px-12 py-4 text-white font-bold text-lg rounded-full overflow-hidden animate-bounce hover:animate-none"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#9933FF]"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#FF9933] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//               <span className="relative z-10 flex items-center gap-2">
//                 Claim your Linko now
//                 <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")
//   const [recentLinks, setRecentLinks] = useState([]);

//   // 👇 UPDATED: Only show recent links for logged-in user
//   useEffect(() => {
//     // Get current logged-in user
//     const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
//     const saved = localStorage.getItem('myLinkos');
//     if(saved && currentUser) {
//       const all = JSON.parse(saved);
//       // Filter only this user's Linkos
//       const userLinkos = all.filter(linko => linko.userEmail === currentUser.email);
//       setRecentLinks(userLinkos.slice(-5).reverse());
//     } else {
//       setRecentLinks([]); // No user logged in = no recent links
//     }
//   }, []);

//   const createLinko = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen pt-32 overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* Glow effects */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px]" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />

//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           {/* Gradient fade */}
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
//             <div className="max-w-2xl">
              
//               {/* Headline */}
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
//                 Everything you are.
//                 <br />
//                 In one,
//                 <br />
//                 <span style={{
//                   background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   display: 'inline-block'
//                 }}>
//                   simple link in bio.
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6">
//                 Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, Tiktok, Twitter, Youtube and other social media profiles.
//               </p>

//               {/* Input Section */}
//               <div className="mt-8 flex gap-3">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//                 <button
//                   onClick={createLinko}
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-105 transition whitespace-nowrap"
//                   style={{
//                     background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                     boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//                   }}
//                 >
//                   Claim your Linko
//                 </button>
//               </div>

//               {/* WELCOME TO LINKO */}
//               <div className="mt-16">
//                 <div className="flex items-center gap-4">
//                   <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#33CCFF]"></div>
//                   <span className="text-[#33CCFF] text-sm font-semibold tracking-[0.3em]">WELCOME TO</span>
//                   <span className="text-2xl font-black bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">LINKO</span>
//                   <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#33CCFF]"></div>
//                 </div>
                
//                 {/* Animated dots */}
//                 <div className="flex justify-center gap-2 mt-4">
//                   <div className="w-2 h-2 bg-[#FF3366] rounded-full animate-pulse"></div>
//                   <div className="w-2 h-2 bg-[#9933FF] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-2 h-2 bg-[#33CCFF] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="py-20 relative overflow-hidden" style={{background: '#0A0A0F'}}>
//         {/* Background glow effects */}
//         <div className="absolute w-[600px] h-[600px] bg-[#FF3366]/20 blur-3xl rounded-full top-0 right-0 animate-pulse" />
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/20 blur-3xl rounded-full bottom-0 left-0 animate-pulse delay-700" />
        
//         <div className="max-w-4xl mx-auto px-4 relative z-10">
          
//           <hr className="border-[#333333] mb-12" />

//           {/* Section Title */}
//           <div className="text-center mb-12">
//             <div className="inline-block">
//               <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse"></span>
//                 Your Recent Linkos
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse delay-300"></span>
//               </h2>
//             </div>
//           </div>

//           {/* RECENT LINKOS SECTION */}
//           <div className="max-w-md mx-auto">
            
//             {recentLinks.length === 0 ? (
//               <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-[#333333] text-center hover:border-[#FF3366] transition-all duration-500 group">
//                 <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <svg className="w-10 h-10 text-[#FF3366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                   </svg>
//                 </div>
//                 <p className="text-[#CCCCCC] text-lg mb-6">You haven't created any Linkos yet</p>
//                 <Link 
//                   href="/generate" 
//                   className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300"
//                 >
//                   Create your first Linko →
//                 </Link>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {recentLinks.map((linko, i) => (
//                   <Link 
//                     key={i} 
//                     href={`/${linko.handle}`}
//                     className="block group"
//                   >
//                     <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#333333] hover:border-[#FF3366] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF3366]/20 relative overflow-hidden">
//                       {/* Animated background gradient on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/0 via-[#FF3366]/0 to-[#9933FF]/0 group-hover:from-[#FF3366]/10 group-hover:via-[#9933FF]/10 group-hover:to-[#FF3366]/0 transition-all duration-500"></div>
                      
//                       <div className="flex justify-between items-center relative z-10">
//                         <div className="flex items-center gap-4">
//                           {/* Profile icon with gradient */}
//                           <div className="w-12 h-12 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
//                             <span className="text-white font-bold text-xl">@</span>
//                           </div>
//                           <div>
//                             <span className="text-white font-bold text-xl group-hover:text-[#FF3366] transition-colors">
//                               {linko.handle}
//                             </span>
//                             <div className="flex items-center gap-2 mt-1">
//                               <span className="text-sm px-3 py-1 bg-[#FF3366]/20 rounded-full text-[#FF3366]">
//                                 {linko.linkCount || 0} links
//                               </span>
//                               <span className="text-sm text-[#CCCCCC]">
//                                 {new Date(linko.date).toLocaleDateString()}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           {/* Spotify animation */}
//                           <div className="flex gap-1 items-center">
//                             <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                             <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                             <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//                           </div>
//                           <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
//                             View →
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
                
//                 {/* See all button */}
//                 <Link 
//                   href="/dashboard" 
//                   className="block text-center mt-8 group"
//                 >
//                   <span className="inline-flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors duration-300 text-lg font-semibold">
//                     See all your Linkos 
//                     <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
//                     <span className="w-8 h-8 rounded-full bg-[#33CCFF]/20 flex items-center justify-center group-hover:bg-[#FF3366]/20 transition-colors">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                       </svg>
//                     </span>
//                   </span>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Bottom Text */}
//           <div className="text-center mt-16">
//             <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300">
//               <p className="text-[#CCCCCC] text-lg">
//                 Your links, all in one place with 
//               </p>
//               <span className="text-[#FF3366] font-bold text-xl relative group">
//                 Linko
//                 <span className="absolute -inset-2 bg-[#FF3366]/20 blur-xl group-hover:bg-[#FF3366]/30 rounded-full transition"></span>
//               </span>
//               <div className="flex items-center gap-2 ml-2">
//                 <span className="w-1 h-1 bg-[#33CCFF] rounded-full animate-ping"></span>
//                 <span className="text-[#1DB954] font-semibold flex items-center gap-2">
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.68.539.3.719 1.02.419 1.56-.3.421-1.02.601-1.56.301z"/>
//                   </svg>
//                   Spotify
//                 </span>
//                 <div className="flex gap-1 ml-2">
//                   <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                   <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Claim Button */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createLinko}
//               className="group relative px-12 py-4 text-white font-bold text-lg rounded-full overflow-hidden animate-bounce hover:animate-none"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#9933FF]"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#FF9933] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//               <span className="relative z-10 flex items-center gap-2">
//                 Claim your Linko now
//                 <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")
//   const [recentLinks, setRecentLinks] = useState([]);

//   // 👇 UPDATED: Only show recent links for logged-in user
//   useEffect(() => {
//     // Get current logged-in user
//     const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
//     // FIX: If user is logged out, clear recent links
//     if (!currentUser) {
//       setRecentLinks([]);
//       return;
//     }
    
//     const saved = localStorage.getItem('myLinkos');
//     if(saved) {
//       const all = JSON.parse(saved);
      
//       // FIX: Handle old Linkos that don't have userEmail
//       // If a Linko doesn't have userEmail, assume it belongs to current user
//       // This is a temporary fix for your existing data
//       const userLinkos = all.filter(linko => {
//         // If linko has userEmail, check if it matches
//         if (linko.userEmail) {
//           return linko.userEmail === currentUser.email;
//         }
//         // If no userEmail, temporarily assign to current user
//         // This will be fixed when you edit/save the linko
//         return true; // Shows all old linkos to current user
//       });
      
//       setRecentLinks(userLinkos.slice(-5).reverse());
//     } else {
//       setRecentLinks([]);
//     }
//   }, []);

//   const createLinko = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen pt-32 overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* Glow effects */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px]" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />

//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           {/* Gradient fade */}
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
//             <div className="max-w-2xl">
              
//               {/* Headline */}
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
//                 Everything you are.
//                 <br />
//                 In one,
//                 <br />
//                 <span style={{
//                   background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   display: 'inline-block'
//                 }}>
//                   simple link in bio.
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6">
//                 Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, Tiktok, Twitter, Youtube and other social media profiles.
//               </p>

//               {/* Input Section */}
//               <div className="mt-8 flex gap-3">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//                 <button
//                   onClick={createLinko}
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-105 transition whitespace-nowrap"
//                   style={{
//                     background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                     boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//                   }}
//                 >
//                   Claim your Linko
//                 </button>
//               </div>

//               {/* WELCOME TO LINKO */}
//               <div className="mt-16">
//                 <div className="flex items-center gap-4">
//                   <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#33CCFF]"></div>
//                   <span className="text-[#33CCFF] text-sm font-semibold tracking-[0.3em]">WELCOME TO</span>
//                   <span className="text-2xl font-black bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">LINKO</span>
//                   <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#33CCFF]"></div>
//                 </div>
                
//                 {/* Animated dots */}
//                 <div className="flex justify-center gap-2 mt-4">
//                   <div className="w-2 h-2 bg-[#FF3366] rounded-full animate-pulse"></div>
//                   <div className="w-2 h-2 bg-[#9933FF] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-2 h-2 bg-[#33CCFF] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="py-20 relative overflow-hidden" style={{background: '#0A0A0F'}}>
//         {/* Background glow effects */}
//         <div className="absolute w-[600px] h-[600px] bg-[#FF3366]/20 blur-3xl rounded-full top-0 right-0 animate-pulse" />
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/20 blur-3xl rounded-full bottom-0 left-0 animate-pulse delay-700" />
        
//         <div className="max-w-4xl mx-auto px-4 relative z-10">
          
//           <hr className="border-[#333333] mb-12" />

//           {/* Section Title */}
//           <div className="text-center mb-12">
//             <div className="inline-block">
//               <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse"></span>
//                 Your Recent Linkos
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse delay-300"></span>
//               </h2>
//             </div>
//           </div>

//           {/* RECENT LINKOS SECTION */}
//           <div className="max-w-md mx-auto">
            
//             {recentLinks.length === 0 ? (
//               <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-[#333333] text-center hover:border-[#FF3366] transition-all duration-500 group">
//                 <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <svg className="w-10 h-10 text-[#FF3366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                   </svg>
//                 </div>
//                 <p className="text-[#CCCCCC] text-lg mb-6">
//   {typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('currentUser') || 'null')
//     ? "You haven't created any Linkos yet"
//     : "Please log in to see your Linkos"}
// </p>
//                 <Link 
//                   href={JSON.parse(localStorage.getItem('currentUser') || 'null') ? "/generate" : "/login"} 
//                   className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300"
//                 >
//                   {JSON.parse(localStorage.getItem('currentUser') || 'null') 
//                     ? "Create your first Linko →" 
//                     : "Log in →"}
//                 </Link>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {recentLinks.map((linko, i) => (
//                   <Link 
//                     key={i} 
//                     href={`/${linko.handle}`}
//                     className="block group"
//                   >
//                     <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#333333] hover:border-[#FF3366] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF3366]/20 relative overflow-hidden">
//                       {/* Animated background gradient on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/0 via-[#FF3366]/0 to-[#9933FF]/0 group-hover:from-[#FF3366]/10 group-hover:via-[#9933FF]/10 group-hover:to-[#FF3366]/0 transition-all duration-500"></div>
                      
//                       <div className="flex justify-between items-center relative z-10">
//                         <div className="flex items-center gap-4">
//                           {/* Profile icon with gradient */}
//                           <div className="w-12 h-12 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
//                             <span className="text-white font-bold text-xl">@</span>
//                           </div>
//                           <div>
//                             <span className="text-white font-bold text-xl group-hover:text-[#FF3366] transition-colors">
//                               {linko.handle}
//                             </span>
//                             <div className="flex items-center gap-2 mt-1">
//                               <span className="text-sm px-3 py-1 bg-[#FF3366]/20 rounded-full text-[#FF3366]">
//                                 {linko.linkCount || 0} links
//                               </span>
//                               <span className="text-sm text-[#CCCCCC]">
//                                 {new Date(linko.date).toLocaleDateString()}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           {/* Spotify animation */}
//                           <div className="flex gap-1 items-center">
//                             <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                             <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                             <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//                           </div>
//                           <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
//                             View →
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
                
//                 {/* See all button */}
//                 <Link 
//                   href="/dashboard" 
//                   className="block text-center mt-8 group"
//                 >
//                   <span className="inline-flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors duration-300 text-lg font-semibold">
//                     See all your Linkos 
//                     <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
//                     <span className="w-8 h-8 rounded-full bg-[#33CCFF]/20 flex items-center justify-center group-hover:bg-[#FF3366]/20 transition-colors">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                       </svg>
//                     </span>
//                   </span>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Bottom Text */}
//           <div className="text-center mt-16">
//             <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300">
//               <p className="text-[#CCCCCC] text-lg">
//                 Your links, all in one place with 
//               </p>
//               <span className="text-[#FF3366] font-bold text-xl relative group">
//                 Linko
//                 <span className="absolute -inset-2 bg-[#FF3366]/20 blur-xl group-hover:bg-[#FF3366]/30 rounded-full transition"></span>
//               </span>
//               <div className="flex items-center gap-2 ml-2">
//                 <span className="w-1 h-1 bg-[#33CCFF] rounded-full animate-ping"></span>
//                 <span className="text-[#1DB954] font-semibold flex items-center gap-2">
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.68.539.3.719 1.02.419 1.56-.3.421-1.02.601-1.56.301z"/>
//                   </svg>
//                   Spotify
//                 </span>
//                 <div className="flex gap-1 ml-2">
//                   <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                   <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Claim Button */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createLinko}
//               className="group relative px-12 py-4 text-white font-bold text-lg rounded-full overflow-hidden animate-bounce hover:animate-none"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#9933FF]"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#FF9933] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//               <span className="relative z-10 flex items-center gap-2">
//                 Claim your Linko now
//                 <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")
//   const [recentLinks, setRecentLinks] = useState([]);

//   // Gradient colors for avatars (matching dashboard)
//   const gradientColors = [
//     "from-[#FF3366] to-[#9933FF]",
//     "from-[#33CCFF] to-[#3366FF]",
//     "from-[#FF9933] to-[#FF3366]",
//     "from-[#9933FF] to-[#33CCFF]",
//     "from-[#FF66B2] to-[#FF3366]",
//     "from-[#66CCFF] to-[#33CCFF]",
//     "from-[#FFCC33] to-[#FF9933]",
//     "from-[#33FF99] to-[#33CCFF]",
//   ];

//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
//     if (!currentUser) {
//       setRecentLinks([]);
//       return;
//     }
    
//     const saved = localStorage.getItem('myLinkos');
//     if(saved) {
//       const all = JSON.parse(saved);
      
//       const userLinkos = all.filter(linko => {
//         if (linko.userEmail) {
//           return linko.userEmail === currentUser.email;
//         }
//         return true;
//       });
      
//       setRecentLinks(userLinkos.slice(-5).reverse());
//     } else {
//       setRecentLinks([]);
//     }
//   }, []);

//   const createLinko = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen pt-32 overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* Glow effects */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px]" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />

//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
//             <div className="max-w-2xl">
              
//               {/* Headline */}
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
//                 Everything you are.
//                 <br />
//                 In one,
//                 <br />
//                 <span style={{
//                   background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   display: 'inline-block'
//                 }}>
//                   simple link in bio.
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6">
//                 Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, Tiktok, Twitter, Youtube and other social media profiles.
//               </p>

//               {/* Input Section */}
//               <div className="mt-8 flex gap-3">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//                 <button
//                   onClick={createLinko}
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-105 transition whitespace-nowrap"
//                   style={{
//                     background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                     boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//                   }}
//                 >
//                   Claim your Linko
//                 </button>
//               </div>

//               {/* WELCOME TO LINKO */}
//               <div className="mt-16">
//                 <div className="flex items-center gap-4">
//                   <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#33CCFF]"></div>
//                   <span className="text-[#33CCFF] text-sm font-semibold tracking-[0.3em]">WELCOME TO</span>
//                   <span className="text-2xl font-black bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">LINKO</span>
//                   <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#33CCFF]"></div>
//                 </div>
                
//                 <div className="flex justify-center gap-2 mt-4">
//                   <div className="w-2 h-2 bg-[#FF3366] rounded-full animate-pulse"></div>
//                   <div className="w-2 h-2 bg-[#9933FF] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-2 h-2 bg-[#33CCFF] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="py-20 relative overflow-hidden" style={{background: '#0A0A0F'}}>
//         {/* Background glow effects */}
//         <div className="absolute w-[600px] h-[600px] bg-[#FF3366]/20 blur-3xl rounded-full top-0 right-0 animate-pulse" />
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/20 blur-3xl rounded-full bottom-0 left-0 animate-pulse delay-700" />
        
//         <div className="max-w-4xl mx-auto px-4 relative z-10">
          
//           <hr className="border-[#333333] mb-12" />

//           {/* Section Title */}
//           <div className="text-center mb-12">
//             <div className="inline-block">
//               <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse"></span>
//                 Your Recent Linkos
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse delay-300"></span>
//               </h2>
//             </div>
//           </div>

//           {/* RECENT LINKOS SECTION - WITH PROFILE PICTURES! */}
//           <div className="max-w-md mx-auto">
            
//             {recentLinks.length === 0 ? (
//               <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-[#333333] text-center hover:border-[#FF3366] transition-all duration-500 group">
//                 <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <svg className="w-10 h-10 text-[#FF3366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                   </svg>
//                 </div>
//                 <p className="text-[#CCCCCC] text-lg mb-6">
//                   {typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('currentUser') || 'null')
//                     ? "You haven't created any Linkos yet"
//                     : "Please log in to see your Linkos"}
//                 </p>
//                 <Link 
//                   href={JSON.parse(localStorage.getItem('currentUser') || 'null') ? "/generate" : "/login"} 
//                   className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300"
//                 >
//                   {JSON.parse(localStorage.getItem('currentUser') || 'null') 
//                     ? "Create your first Linko →" 
//                     : "Log in →"}
//                 </Link>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {recentLinks.map((linko, i) => (
//                   <Link 
//                     key={i} 
//                     href={`/${linko.handle}`}
//                     className="block group"
//                   >
//                     <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF3366]/20">
//                       <div className="flex items-center gap-3">
//                         {/* PROFILE PICTURE OR COLORFUL AVATAR */}
//                         {linko.pic ? (
//                           // If profile picture exists
//                           <img 
//                             src={linko.pic} 
//                             alt={linko.handle}
//                             className="w-10 h-10 rounded-xl object-cover border-2 border-[#FF3366] group-hover:scale-110 transition-transform duration-300"
//                             onError={(e) => {
//                               // If image fails to load, show fallback avatar
//                               e.target.style.display = 'none';
//                               e.target.parentElement.innerHTML = `
//                                 <div class="w-10 h-10 bg-gradient-to-br ${gradientColors[i % gradientColors.length]} rounded-xl flex items-center justify-center shadow-lg">
//                                   <span class="text-white font-bold text-lg">${linko.handle?.charAt(0).toUpperCase()}</span>
//                                 </div>
//                               `;
//                             }}
//                           />
//                         ) : (
//                           // Fallback colorful avatar with first letter
//                           <div className={`w-10 h-10 bg-gradient-to-br ${gradientColors[i % gradientColors.length]} rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
//                             <span className="text-white font-bold text-lg">
//                               {linko.handle?.charAt(0).toUpperCase()}
//                             </span>
//                           </div>
//                         )}
                        
//                         <div className="flex-1">
//                           <div className="flex items-center gap-2">
//                             <span className="text-white font-semibold group-hover:text-[#FF3366] transition-colors">
//                               @{linko.handle}
//                             </span>
//                             {linko.pic && (
//                               <span className="text-xs bg-[#33CCFF]/20 text-[#33CCFF] px-2 py-0.5 rounded-full">
//                                 📸
//                               </span>
//                             )}
//                           </div>
//                           <div className="flex items-center gap-2 text-xs text-[#CCCCCC] mt-1">
//                             <span className="px-2 py-0.5 bg-[#FF3366]/20 rounded-full text-[#FF3366]">
//                               {linko.linkCount || 0} links
//                             </span>
//                             <span>•</span>
//                             <span>{new Date(linko.date).toLocaleDateString()}</span>
//                           </div>
//                         </div>
                        
//                         {/* Arrow icon */}
//                         <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
//                           →
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
                
//                 {/* See all button */}
//                 <Link 
//                   href="/dashboard" 
//                   className="block text-center mt-8 group"
//                 >
//                   <span className="inline-flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors duration-300 text-lg font-semibold">
//                     See all your Linkos 
//                     <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
//                     <span className="w-8 h-8 rounded-full bg-[#33CCFF]/20 flex items-center justify-center group-hover:bg-[#FF3366]/20 transition-colors">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                       </svg>
//                     </span>
//                   </span>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Bottom Text */}
//           <div className="text-center mt-16">
//             <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300">
//               <p className="text-[#CCCCCC] text-lg">
//                 Your links, all in one place with 
//               </p>
//               <span className="text-[#FF3366] font-bold text-xl relative group">
//                 Linko
//                 <span className="absolute -inset-2 bg-[#FF3366]/20 blur-xl group-hover:bg-[#FF3366]/30 rounded-full transition"></span>
//               </span>
//               <div className="flex items-center gap-2 ml-2">
//                 <span className="w-1 h-1 bg-[#33CCFF] rounded-full animate-ping"></span>
//                 <span className="text-[#1DB954] font-semibold flex items-center gap-2">
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.68.539.3.719 1.02.419 1.56-.3.421-1.02.601-1.56.301z"/>
//                   </svg>
//                   Spotify
//                 </span>
//                 <div className="flex gap-1 ml-2">
//                   <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                   <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Claim Button */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createLinko}
//               className="group relative px-12 py-4 text-white font-bold text-lg rounded-full overflow-hidden animate-bounce hover:animate-none"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#9933FF]"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#FF9933] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//               <span className="relative z-10 flex items-center gap-2">
//                 Claim your Linko now
//                 <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")
//   const [recentLinks, setRecentLinks] = useState([]);

//   // Gradient colors for avatars
//   const gradientColors = [
//     "from-[#FF3366] to-[#9933FF]",
//     "from-[#33CCFF] to-[#3366FF]",
//     "from-[#FF9933] to-[#FF3366]",
//     "from-[#9933FF] to-[#33CCFF]",
//     "from-[#FF66B2] to-[#FF3366]",
//     "from-[#66CCFF] to-[#33CCFF]",
//     "from-[#FFCC33] to-[#FF9933]",
//     "from-[#33FF99] to-[#33CCFF]",
//   ];

//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
//     if (!currentUser) {
//       setRecentLinks([]);
//       return;
//     }
    
//     const saved = localStorage.getItem('myLinkos');
//     if(saved) {
//       const all = JSON.parse(saved);
      
//       const userLinkos = all.filter(linko => {
//         if (linko.userEmail) {
//           return linko.userEmail === currentUser.email;
//         }
//         return true;
//       });
      
//       setRecentLinks(userLinkos.slice(-5).reverse());
//     } else {
//       setRecentLinks([]);
//     }
//   }, []);

//   const createLinko = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen pt-32 overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* Glow effects */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px]" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />

//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
//             <div className="max-w-2xl">
              
//               {/* MAIN HEADLINE - Your chosen quote */}
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
//                 Stop sharing multiple links.
//                 <br />
//                 <span className="bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">
//                   Start sharing you.
//                 </span>
//               </h1>

//               {/* SUB-HEADLINE - Second quote */}
//               <p className="text-[#33CCFF] text-xl mt-4 italic">
//                 "Your followers want you. Not 10 links."
//               </p>

//               {/* Description */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6">
//                 Join 50M+ creators using Linko to share their world with one beautiful link.
//               </p>

//               {/* Input Section */}
//               <div className="mt-8 flex gap-3">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//                 <button
//                   onClick={createLinko}
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-105 transition whitespace-nowrap"
//                   style={{
//                     background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                     boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//                   }}
//                 >
//                   Claim your Linko
//                 </button>
//               </div>

//               {/* WELCOME TO LINKO */}
//               <div className="mt-16">
//                 <div className="flex items-center gap-4">
//                   <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#33CCFF]"></div>
//                   <span className="text-[#33CCFF] text-sm font-semibold tracking-[0.3em]">WELCOME TO</span>
//                   <span className="text-2xl font-black bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">LINKO</span>
//                   <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#33CCFF]"></div>
//                 </div>
                
//                 <div className="flex justify-center gap-2 mt-4">
//                   <div className="w-2 h-2 bg-[#FF3366] rounded-full animate-pulse"></div>
//                   <div className="w-2 h-2 bg-[#9933FF] rounded-full animate-pulse delay-150"></div>
//                   <div className="w-2 h-2 bg-[#33CCFF] rounded-full animate-pulse delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="py-20 relative overflow-hidden" style={{background: '#0A0A0F'}}>
//         {/* Background glow effects */}
//         <div className="absolute w-[600px] h-[600px] bg-[#FF3366]/20 blur-3xl rounded-full top-0 right-0 animate-pulse" />
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/20 blur-3xl rounded-full bottom-0 left-0 animate-pulse delay-700" />
        
//         <div className="max-w-4xl mx-auto px-4 relative z-10">
          
//           <hr className="border-[#333333] mb-12" />

//           {/* Section Title */}
//           <div className="text-center mb-12">
//             <div className="inline-block">
//               <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse"></span>
//                 Your Recent Linkos
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse delay-300"></span>
//               </h2>
//               {/* Third quote - placed here */}
//               <p className="text-[#33CCFF] text-sm mt-2">
//                 ✨ Your profile deserves one perfect link.
//               </p>
//             </div>
//           </div>

//           {/* RECENT LINKOS SECTION */}
//           <div className="max-w-md mx-auto">
            
//             {recentLinks.length === 0 ? (
//               <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-[#333333] text-center hover:border-[#FF3366] transition-all duration-500 group">
//                 <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <svg className="w-10 h-10 text-[#FF3366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                   </svg>
//                 </div>
//                 <p className="text-[#CCCCCC] text-lg mb-6">
//                   {typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('currentUser') || 'null')
//                     ? "You haven't created any Linkos yet"
//                     : "Please log in to see your Linkos"}
//                 </p>
//                 <Link 
//                   href={JSON.parse(localStorage.getItem('currentUser') || 'null') ? "/generate" : "/login"} 
//                   className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300"
//                 >
//                   {JSON.parse(localStorage.getItem('currentUser') || 'null') 
//                     ? "Create your first Linko →" 
//                     : "Log in →"}
//                 </Link>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {recentLinks.map((linko, i) => (
//                   <Link 
//                     key={i} 
//                     href={`/${linko.handle}`}
//                     className="block group"
//                   >
//                     <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF3366]/20">
//                       <div className="flex items-center gap-3">
//                         {/* Profile picture */}
//                         <img 
//                           src={linko.pic} 
//                           alt={linko.handle}
//                           className="w-10 h-10 rounded-xl object-cover border-2 border-[#FF3366] group-hover:scale-110 transition-transform duration-300"
//                         />
                        
//                         <div className="flex-1">
//                           <span className="text-white font-semibold group-hover:text-[#FF3366] transition-colors">
//                             @{linko.handle}
//                           </span>
//                           <div className="flex items-center gap-2 text-xs text-[#CCCCCC] mt-1">
//                             <span className="px-2 py-0.5 bg-[#FF3366]/20 rounded-full text-[#FF3366]">
//                               {linko.linkCount || 0} links
//                             </span>
//                             <span>•</span>
//                             <span>{new Date(linko.date).toLocaleDateString()}</span>
//                           </div>
//                         </div>
                        
//                         <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
//                           →
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
                
//                 <Link 
//                   href="/dashboard" 
//                   className="block text-center mt-8 group"
//                 >
//                   <span className="inline-flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors duration-300 text-lg font-semibold">
//                     See all your Linkos 
//                     <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
//                   </span>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Bottom Text with quotes */}
//           <div className="text-center mt-16 space-y-4">
//             {/* Fourth quote */}
//             <p className="text-[#FF3366] text-lg italic">
//               "Your life isn't multiple tabs. Why should your link be?"
//             </p>
            
//             {/* Fifth quote */}
//             <p className="text-[#33CCFF] text-sm">
//               ✨ Your bio deserves better than a mess.
//             </p>

//             <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300 mt-4">
//               <p className="text-[#CCCCCC] text-lg">
//                 Your links, all in one place with 
//               </p>
//               <span className="text-[#FF3366] font-bold text-xl relative group">
//                 Linko
//                 <span className="absolute -inset-2 bg-[#FF3366]/20 blur-xl group-hover:bg-[#FF3366]/30 rounded-full transition"></span>
//               </span>
//             </div>
//           </div>

//           {/* Claim Button */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createLinko}
//               className="group relative px-12 py-4 text-white font-bold text-lg rounded-full overflow-hidden animate-bounce hover:animate-none"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#9933FF]"></span>
//               <span className="relative z-10 flex items-center gap-2">
//                 Claim your Linko now
//                 <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")
//   const [recentLinks, setRecentLinks] = useState([]);
//   const [quoteIndex, setQuoteIndex] = useState(0);

//   // Array of rotating quotes for subtitle
//   const rotatingQuotes = [
//     "Your followers want you. Not 10 links.",
//     "Your profile deserves one perfect link.",
//     "Your bio deserves better than a mess.",
//     "Your life isn't multiple tabs. Why should your link be?",
//   ];

//   // Rotate quotes every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Gradient colors for avatars
//   const gradientColors = [
//     "from-[#FF3366] to-[#9933FF]",
//     "from-[#33CCFF] to-[#3366FF]",
//     "from-[#FF9933] to-[#FF3366]",
//     "from-[#9933FF] to-[#33CCFF]",
//     "from-[#FF66B2] to-[#FF3366]",
//     "from-[#66CCFF] to-[#33CCFF]",
//     "from-[#FFCC33] to-[#FF9933]",
//     "from-[#33FF99] to-[#33CCFF]",
//   ];

//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
//     if (!currentUser) {
//       setRecentLinks([]);
//       return;
//     }
    
//     const saved = localStorage.getItem('myLinkos');
//     if(saved) {
//       const all = JSON.parse(saved);
      
//       const userLinkos = all.filter(linko => {
//         if (linko.userEmail) {
//           return linko.userEmail === currentUser.email;
//         }
//         return true;
//       });
      
//       setRecentLinks(userLinkos.slice(-5).reverse());
//     } else {
//       setRecentLinks([]);
//     }
//   }, []);

//   const createLinko = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen pt-32 overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* Glow effects */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px] animate-pulse" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px] animate-pulse delay-1000" />

//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
//             <div className="max-w-2xl">
              
//               {/* MAIN HEADLINE WITH TYPING ANIMATION */}
//               <div className="overflow-hidden">
//                 <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//                   <span className="inline-block animate-slideDown text-white">
//                     Stop sharing multiple links.
//                   </span>
//                   <br />
//                   <span className="inline-block animate-slideDown animation-delay-200 bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">
//                     Start sharing you.
//                   </span>
//                 </h1>
//               </div>

//               {/* ROTATING QUOTES WITH FADE ANIMATION */}
//               <div className="h-16 mt-4">
//                 <p key={quoteIndex} className="text-[#33CCFF] text-xl italic animate-fadeIn">
//                   "{rotatingQuotes[quoteIndex]}"
//                 </p>
//               </div>

//               {/* Description with glow */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6 animate-fadeIn animation-delay-400">
//                 Join 50M+ creators using Linko to share their world with one beautiful link.
//               </p>

//               {/* Input Section with bounce animation on hover */}
//               <div className="mt-8 flex gap-3 animate-fadeIn animation-delay-600">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366] transition-all duration-300 hover:scale-105"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//                 <button
//                   onClick={createLinko}
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-110 transition-all duration-300 whitespace-nowrap animate-pulse hover:animate-none"
//                   style={{
//                     background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                     boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//                   }}
//                 >
//                   Claim your Linko
//                 </button>
//               </div>

//               {/* WELCOME TO LINKO with floating dots */}
//               <div className="mt-16 animate-fadeIn animation-delay-800">
//                 <div className="flex items-center gap-4">
//                   <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#33CCFF]"></div>
//                   <span className="text-[#33CCFF] text-sm font-semibold tracking-[0.3em]">WELCOME TO</span>
//                   <span className="text-2xl font-black bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent animate-pulse">LINKO</span>
//                   <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#33CCFF]"></div>
//                 </div>
                
//                 <div className="flex justify-center gap-2 mt-4">
//                   <div className="w-2 h-2 bg-[#FF3366] rounded-full animate-bounce"></div>
//                   <div className="w-2 h-2 bg-[#9933FF] rounded-full animate-bounce animation-delay-150"></div>
//                   <div className="w-2 h-2 bg-[#33CCFF] rounded-full animate-bounce animation-delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="py-20 relative overflow-hidden" style={{background: '#0A0A0F'}}>
//         {/* Background glow effects */}
//         <div className="absolute w-[600px] h-[600px] bg-[#FF3366]/20 blur-3xl rounded-full top-0 right-0 animate-pulse" />
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/20 blur-3xl rounded-full bottom-0 left-0 animate-pulse delay-700" />
        
//         <div className="max-w-4xl mx-auto px-4 relative z-10">
          
//           <hr className="border-[#333333] mb-12 animate-slideIn" />

//           {/* Section Title */}
//           <div className="text-center mb-12 animate-slideUp">
//             <div className="inline-block">
//               <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse"></span>
//                 Your Recent Linkos
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse delay-300"></span>
//               </h2>
//               <p className="text-[#33CCFF] text-sm mt-2 animate-float">
//                 ✨ One link. Your whole world.
//               </p>
//             </div>
//           </div>

//           {/* RECENT LINKOS SECTION */}
//           <div className="max-w-md mx-auto">
            
//             {recentLinks.length === 0 ? (
//               <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-[#333333] text-center hover:border-[#FF3366] transition-all duration-500 hover:scale-105 group animate-float">
//                 <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-spin-slow">
//                   <svg className="w-10 h-10 text-[#FF3366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                   </svg>
//                 </div>
//                 <p className="text-[#CCCCCC] text-lg mb-6">
//                   {typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('currentUser') || 'null')
//                     ? "You haven't created any Linkos yet"
//                     : "Please log in to see your Linkos"}
//                 </p>
//                 <Link 
//                   href={JSON.parse(localStorage.getItem('currentUser') || 'null') ? "/generate" : "/login"} 
//                   className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
//                 >
//                   {JSON.parse(localStorage.getItem('currentUser') || 'null') 
//                     ? "Create your first Linko →" 
//                     : "Log in →"}
//                 </Link>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {recentLinks.map((linko, i) => (
//                   <Link 
//                     key={i} 
//                     href={`/${linko.handle}`}
//                     className="block group animate-slideUp"
//                     style={{ animationDelay: `${i * 100}ms` }}
//                   >
//                     <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF3366]/20">
//                       <div className="flex items-center gap-3">
//                         {/* Profile picture with pulse animation */}
//                         <div className="relative">
//                           <img 
//                             src={linko.pic} 
//                             alt={linko.handle}
//                             className="w-10 h-10 rounded-xl object-cover border-2 border-[#FF3366] group-hover:scale-110 transition-transform duration-300"
//                           />
//                           <div className="absolute -inset-1 border-2 border-[#FF3366] rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
//                         </div>
                        
//                         <div className="flex-1">
//                           <span className="text-white font-semibold group-hover:text-[#FF3366] transition-colors">
//                             @{linko.handle}
//                           </span>
//                           <div className="flex items-center gap-2 text-xs text-[#CCCCCC] mt-1">
//                             <span className="px-2 py-0.5 bg-[#FF3366]/20 rounded-full text-[#FF3366]">
//                               {linko.linkCount || 0} links
//                             </span>
//                             <span>•</span>
//                             <span>{new Date(linko.date).toLocaleDateString()}</span>
//                           </div>
//                         </div>
                        
//                         <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
//                           →
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
                
//                 <Link 
//                   href="/dashboard" 
//                   className="block text-center mt-8 group animate-bounce"
//                 >
//                   <span className="inline-flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors duration-300 text-lg font-semibold">
//                     See all your Linkos 
//                     <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
//                   </span>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Bottom Text with animated quotes */}
//           <div className="text-center mt-16 space-y-4">
//             {/* Animated quote card */}
//             <div className="bg-gradient-to-r from-[#FF3366]/10 to-[#9933FF]/10 p-6 rounded-2xl border border-[#333333] hover:border-[#FF3366] transition-all duration-500 animate-float">
//               <p className="text-white text-lg italic animate-pulse">
//                 "Your life isn't multiple tabs. Why should your link be?"
//               </p>
//             </div>
            
//             <p className="text-[#33CCFF] text-sm animate-bounce">
//               ✨ Your bio deserves better than a mess.
//             </p>

//             <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300 mt-4 hover:scale-105">
//               <p className="text-[#CCCCCC] text-lg">
//                 Your links, all in one place with 
//               </p>
//               <span className="text-[#FF3366] font-bold text-xl relative group">
//                 Linko
//                 <span className="absolute -inset-2 bg-[#FF3366]/20 blur-xl group-hover:bg-[#FF3366]/30 rounded-full transition animate-pulse"></span>
//               </span>
//             </div>
//           </div>

//           {/* Claim Button with multiple animations */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createLinko}
//               className="group relative px-12 py-4 text-white font-bold text-lg rounded-full overflow-hidden hover:scale-110 transition-all duration-300 animate-float hover:animate-none"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#9933FF]"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#FF9933] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//               <span className="relative z-10 flex items-center gap-2">
//                 Claim your Linko now
//                 <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Add custom animations */}
//       <style jsx>{`
//         @keyframes slideDown {
//           from { transform: translateY(-30px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes slideUp {
//           from { transform: translateY(30px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes slideIn {
//           from { transform: translateX(-30px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.8s ease-out forwards;
//         }
//         .animate-slideUp {
//           animation: slideUp 0.8s ease-out forwards;
//         }
//         .animate-slideIn {
//           animation: slideIn 0.8s ease-out forwards;
//         }
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out forwards;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animation-delay-150 {
//           animation-delay: 150ms;
//         }
//         .animation-delay-200 {
//           animation-delay: 200ms;
//         }
//         .animation-delay-300 {
//           animation-delay: 300ms;
//         }
//         .animation-delay-400 {
//           animation-delay: 400ms;
//         }
//         .animation-delay-500 {
//           animation-delay: 500ms;
//         }
//         .animation-delay-600 {
//           animation-delay: 600ms;
//         }
//         .animation-delay-700 {
//           animation-delay: 700ms;
//         }
//         .animation-delay-800 {
//           animation-delay: 800ms;
//         }
//       `}</style>
//     </main>
//   );
// }



// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
//   const [text, setText] = useState("")
//   const [recentLinks, setRecentLinks] = useState([]);
//   const [quoteIndex, setQuoteIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);

//   // Array of rotating quotes for subtitle
//   const rotatingQuotes = [
//     "Your followers want you. Not 10 links.",
//     "Your profile deserves one perfect link.",
//     "Your bio deserves better than a mess.",
//     "Your life isn't multiple tabs. Why should your link be?",
//   ];

//   // Rotate quotes every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Gradient colors for avatars
//   const gradientColors = [
//     "from-[#FF3366] to-[#9933FF]",
//     "from-[#33CCFF] to-[#3366FF]",
//     "from-[#FF9933] to-[#FF3366]",
//     "from-[#9933FF] to-[#33CCFF]",
//     "from-[#FF66B2] to-[#FF3366]",
//     "from-[#66CCFF] to-[#33CCFF]",
//     "from-[#FFCC33] to-[#FF9933]",
//     "from-[#33FF99] to-[#33CCFF]",
//   ];

//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
//     if (!currentUser) {
//       setRecentLinks([]);
//       return;
//     }
    
//     const saved = localStorage.getItem('myLinkos');
//     if(saved) {
//       const all = JSON.parse(saved);
      
//       const userLinkos = all.filter(linko => {
//         if (linko.userEmail) {
//           return linko.userEmail === currentUser.email;
//         }
//         return true;
//       });
      
//       setRecentLinks(userLinkos.slice(-5).reverse());
//     } else {
//       setRecentLinks([]);
//     }
//   }, []);

//   const createLinko = () => {
//     router.push(`/generate?handle=${encodeURIComponent(text)}`);
//   }

//   return (
//     <main>
//       {/* Hero Section */}
//       <section 
//         className="relative min-h-screen pt-32 overflow-hidden" 
//         style={{background: '#0A0A0F'}}
//       >
//         {/* Glow effects */}
//         <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px] animate-pulse" />
//         <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px] animate-pulse delay-1000" />

//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
//             <img 
//               src="/linko-hero.png" 
//               alt="Background" 
//               className="w-full h-full object-cover object-right"
//             />
//           </div>
          
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
//           }}></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
//           <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
//             <div className="max-w-2xl">
              
//               {/* MAIN HEADLINE WITH HOVER ANIMATIONS */}
//               <div 
//                 className="overflow-hidden"
//                 onMouseEnter={() => setIsHovering(true)}
//                 onMouseLeave={() => setIsHovering(false)}
//               >
//                 <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//                   <span 
//                     className={`inline-block transition-all duration-500 text-white ${
//                       isHovering ? 'transform -translate-y-2 scale-105' : ''
//                     }`}
//                   >
//                     Stop sharing multiple links.
//                   </span>
//                   <br />
//                   <span 
//                     className={`inline-block transition-all duration-500 delay-100 bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent ${
//                       isHovering ? 'transform translate-y-2 scale-105 animate-pulse' : ''
//                     }`}
//                   >
//                     Start sharing you.
//                   </span>
//                 </h1>
                
//                 {/* Animated underline that appears on hover */}
//                 <div 
//                   className={`h-1 bg-gradient-to-r from-[#FF3366] to-[#9933FF] rounded-full transition-all duration-500 ${
//                     isHovering ? 'w-full' : 'w-0'
//                   }`}
//                 ></div>
//               </div>

//               {/* ROTATING QUOTES WITH FADE ANIMATION */}
//               <div className="h-16 mt-4">
//                 <p 
//                   key={quoteIndex} 
//                   className={`text-[#33CCFF] text-xl italic transition-all duration-500 animate-fadeIn ${
//                     isHovering ? 'scale-105 text-[#FF3366]' : ''
//                   }`}
//                 >
//                   "{rotatingQuotes[quoteIndex]}"
//                 </p>
//               </div>

//               {/* Description with glow */}
//               <p className="text-[#CCCCCC] text-lg max-w-xl mt-6 animate-fadeIn animation-delay-400">
//                 Join 50M+ creators using Linko to share their world with one beautiful link.
//               </p>

//               {/* Input Section with bounce animation on hover */}
//               <div className="mt-8 flex gap-3 animate-fadeIn animation-delay-600">
//                 <input
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366] transition-all duration-300 hover:scale-105"
//                   type="text"
//                   placeholder="Enter your Handle"
//                 />
//                 <button
//                   onClick={createLinko}
//                   className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-110 transition-all duration-300 whitespace-nowrap animate-pulse hover:animate-none"
//                   style={{
//                     background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//                     boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//                   }}
//                 >
//                   Claim your Linko
//                 </button>
//               </div>

//               {/* WELCOME TO LINKO with floating dots */}
//               <div className="mt-16 animate-fadeIn animation-delay-800">
//                 <div className="flex items-center gap-4">
//                   <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#33CCFF]"></div>
//                   <span className="text-[#33CCFF] text-sm font-semibold tracking-[0.3em]">WELCOME TO</span>
//                   <span className="text-2xl font-black bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent animate-pulse">LINKO</span>
//                   <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#33CCFF]"></div>
//                 </div>
                
//                 <div className="flex justify-center gap-2 mt-4">
//                   <div className="w-2 h-2 bg-[#FF3366] rounded-full animate-bounce"></div>
//                   <div className="w-2 h-2 bg-[#9933FF] rounded-full animate-bounce animation-delay-150"></div>
//                   <div className="w-2 h-2 bg-[#33CCFF] rounded-full animate-bounce animation-delay-300"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="py-20 relative overflow-hidden" style={{background: '#0A0A0F'}}>
//         {/* Background glow effects */}
//         <div className="absolute w-[600px] h-[600px] bg-[#FF3366]/20 blur-3xl rounded-full top-0 right-0 animate-pulse" />
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/20 blur-3xl rounded-full bottom-0 left-0 animate-pulse delay-700" />
        
//         <div className="max-w-4xl mx-auto px-4 relative z-10">
          
//           <hr className="border-[#333333] mb-12 animate-slideIn" />

//           {/* Section Title */}
//           <div className="text-center mb-12 animate-slideUp">
//             <div className="inline-block">
//               <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse"></span>
//                 Your Recent Linkos
//                 <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse delay-300"></span>
//               </h2>
//               <p className="text-[#33CCFF] text-sm mt-2 animate-float">
//                 ✨ One link. Your whole world.
//               </p>
//             </div>
//           </div>

//           {/* RECENT LINKOS SECTION */}
//           <div className="max-w-md mx-auto">
            
//             {recentLinks.length === 0 ? (
//               <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-[#333333] text-center hover:border-[#FF3366] transition-all duration-500 hover:scale-105 group animate-float">
//                 <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-spin-slow">
//                   <svg className="w-10 h-10 text-[#FF3366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                   </svg>
//                 </div>
//                 <p className="text-[#CCCCCC] text-lg mb-6">
//                   {typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('currentUser') || 'null')
//                     ? "You haven't created any Linkos yet"
//                     : "Please log in to see your Linkos"}
//                 </p>
//                 <Link 
//                   href={JSON.parse(localStorage.getItem('currentUser') || 'null') ? "/generate" : "/login"} 
//                   className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
//                 >
//                   {JSON.parse(localStorage.getItem('currentUser') || 'null') 
//                     ? "Create your first Linko →" 
//                     : "Log in →"}
//                 </Link>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {recentLinks.map((linko, i) => (
//                   <Link 
//                     key={i} 
//                     href={`/${linko.handle}`}
//                     className="block group animate-slideUp"
//                     style={{ animationDelay: `${i * 100}ms` }}
//                   >
//                     <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF3366]/20">
//                       <div className="flex items-center gap-3">
//                         {/* Profile picture with pulse animation */}
//                         <div className="relative">
//                           <img 
//                             src={linko.pic} 
//                             alt={linko.handle}
//                             className="w-10 h-10 rounded-xl object-cover border-2 border-[#FF3366] group-hover:scale-110 transition-transform duration-300"
//                           />
//                           <div className="absolute -inset-1 border-2 border-[#FF3366] rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
//                         </div>
                        
//                         <div className="flex-1">
//                           <span className="text-white font-semibold group-hover:text-[#FF3366] transition-colors">
//                             @{linko.handle}
//                           </span>
//                           <div className="flex items-center gap-2 text-xs text-[#CCCCCC] mt-1">
//                             <span className="px-2 py-0.5 bg-[#FF3366]/20 rounded-full text-[#FF3366]">
//                               {linko.linkCount || 0} links
//                             </span>
//                             <span>•</span>
//                             <span>{new Date(linko.date).toLocaleDateString()}</span>
//                           </div>
//                         </div>
                        
//                         <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
//                           →
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
                
//                 <Link 
//                   href="/dashboard" 
//                   className="block text-center mt-8 group animate-bounce"
//                 >
//                   <span className="inline-flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors duration-300 text-lg font-semibold">
//                     See all your Linkos 
//                     <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
//                   </span>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Bottom Text with animated quotes */}
//           <div className="text-center mt-16 space-y-4">
//             {/* Animated quote card */}
//             <div className="bg-gradient-to-r from-[#FF3366]/10 to-[#9933FF]/10 p-6 rounded-2xl border border-[#333333] hover:border-[#FF3366] transition-all duration-500 animate-float">
//               <p className="text-white text-lg italic animate-pulse">
//                 "Your life isn't multiple tabs. Why should your link be?"
//               </p>
//             </div>
            
//             <p className="text-[#33CCFF] text-sm animate-bounce">
//               ✨ Your bio deserves better than a mess.
//             </p>

//             <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300 mt-4 hover:scale-105">
//               <p className="text-[#CCCCCC] text-lg">
//                 Your links, all in one place with 
//               </p>
//               <span className="text-[#FF3366] font-bold text-xl relative group">
//                 Linko
//                 <span className="absolute -inset-2 bg-[#FF3366]/20 blur-xl group-hover:bg-[#FF3366]/30 rounded-full transition animate-pulse"></span>
//               </span>
//             </div>
//           </div>

//           {/* Claim Button with multiple animations */}
//           <div className="text-center mt-10 pb-10">
//             <button
//               onClick={createLinko}
//               className="group relative px-12 py-4 text-white font-bold text-lg rounded-full overflow-hidden hover:scale-110 transition-all duration-300 animate-float hover:animate-none"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#9933FF]"></span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#FF9933] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//               <span className="relative z-10 flex items-center gap-2">
//                 Claim your Linko now
//                 <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Add custom animations */}
//       <style jsx>{`
//         @keyframes slideDown {
//           from { transform: translateY(-30px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes slideUp {
//           from { transform: translateY(30px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes slideIn {
//           from { transform: translateX(-30px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.8s ease-out forwards;
//         }
//         .animate-slideUp {
//           animation: slideUp 0.8s ease-out forwards;
//         }
//         .animate-slideIn {
//           animation: slideIn 0.8s ease-out forwards;
//         }
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out forwards;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animation-delay-150 {
//           animation-delay: 150ms;
//         }
//         .animation-delay-200 {
//           animation-delay: 200ms;
//         }
//         .animation-delay-300 {
//           animation-delay: 300ms;
//         }
//         .animation-delay-400 {
//           animation-delay: 400ms;
//         }
//         .animation-delay-500 {
//           animation-delay: 500ms;
//         }
//         .animation-delay-600 {
//           animation-delay: 600ms;
//         }
//         .animation-delay-700 {
//           animation-delay: 700ms;
//         }
//         .animation-delay-800 {
//           animation-delay: 800ms;
//         }
//       `}</style>
//     </main>
//   );
// }



"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")
  const [recentLinks, setRecentLinks] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Array of rotating quotes for subtitle
  const rotatingQuotes = [
    "Your followers want you. Not 10 links.",
    "Your profile deserves one perfect link.",
    "Your bio deserves better than a mess.",
    "Your life isn't multiple tabs. Why should your link be?",
  ];

  // Rotate quotes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Gradient colors for avatars
  const gradientColors = [
    "from-[#FF3366] to-[#9933FF]",
    "from-[#33CCFF] to-[#3366FF]",
    "from-[#FF9933] to-[#FF3366]",
    "from-[#9933FF] to-[#33CCFF]",
    "from-[#FF66B2] to-[#FF3366]",
    "from-[#66CCFF] to-[#33CCFF]",
    "from-[#FFCC33] to-[#FF9933]",
    "from-[#33FF99] to-[#33CCFF]",
  ];

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
    if (!currentUser) {
      setRecentLinks([]);
      return;
    }
    
    const saved = localStorage.getItem('myLinkos');
    if(saved) {
      const all = JSON.parse(saved);
      
     // const userLinkos = all.filter(linko => {//
        //const userLinkos = all.filter((linko: any) => {
          const userLinkos = all.filter((linko: any) => {
        if (linko.userEmail) {
          return linko.userEmail === currentUser.email;
        }
        return true;
      });
      
      setRecentLinks(userLinkos.slice(-5).reverse());
    } else {
      setRecentLinks([]);
    }
  }, []);

  const createLinko = () => {
    router.push(`/generate?handle=${encodeURIComponent(text)}`);
  }

  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen pt-32 overflow-hidden" 
        style={{background: '#0A0A0F'}}
      >
        {/* Glow effects */}
        <div className="absolute w-[1000px] h-[1000px] bg-[#FF3366]/30 blur-3xl rounded-full top-[-100px] right-[-300px] animate-pulse" />
        <div className="absolute w-[800px] h-[800px] bg-[#9933FF]/30 blur-3xl rounded-full bottom-[-200px] left-[-200px] animate-pulse delay-1000" />

        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-[-50px] bottom-0 w-[1000px]">
            <img 
              src="/linko-hero.png" 
              alt="Background" 
              className="w-full h-full object-cover object-right"
            />
          </div>
          
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(90deg, #0A0A0F 0%, #0A0A0F 30%, rgba(10,10,15,0.6) 60%, transparent 100%)'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full">
          <div className="flex flex-col justify-center min-h-[calc(100vh-120px)]">
            <div className="max-w-2xl">
              
              {/* MAIN HEADLINE - FIXED ANIMATION (no more half letters) */}
              <div 
                className="cursor-default"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-white">
                    Stop sharing multiple links.
                  </span>
                  <br />
                  <span 
                    className={`bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent transition-all duration-300 ${
                      isHovering ? 'tracking-wider' : ''
                    }`}
                  >
                    Start sharing you.
                  </span>
                </h1>
                
                {/* Simple underline that appears on hover */}
                <div 
                  className={`h-0.5 bg-gradient-to-r from-[#FF3366] to-[#9933FF] rounded-full transition-all duration-300 ${
                    isHovering ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                ></div>
              </div>

              {/* ROTATING QUOTES WITH FADE ANIMATION */}
              <div className="h-16 mt-4">
                <p 
                  key={quoteIndex} 
                  className="text-[#33CCFF] text-xl italic animate-fadeIn"
                >
                  "{rotatingQuotes[quoteIndex]}"
                </p>
              </div>

              {/* Description */}
              <p className="text-[#CCCCCC] text-lg max-w-xl mt-6">
                Join 50M+ creators using Linko to share their world with one beautiful link.
              </p>

              {/* Input Section */}
              <div className="mt-8 flex gap-3">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-80 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366] transition-all duration-300 hover:scale-105"
                  type="text"
                  placeholder="Enter your Handle"
                />
                <button
                  onClick={createLinko}
                  className="px-6 py-3 text-white font-semibold rounded-lg hover:scale-110 transition-all duration-300 whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, #FF3366, #9933FF)',
                    boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
                  }}
                >
                  Claim your Linko
                </button>
              </div>

              {/* WELCOME TO LINKO */}
              <div className="mt-16">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#33CCFF]"></div>
                  <span className="text-[#33CCFF] text-sm font-semibold tracking-[0.3em]">WELCOME TO</span>
                  <span className="text-2xl font-black bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">LINKO</span>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#33CCFF]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - COMPLETELY UNCHANGED */}
      <section className="py-20 relative overflow-hidden" style={{background: '#0A0A0F'}}>
        {/* Background glow effects */}
        <div className="absolute w-[600px] h-[600px] bg-[#FF3366]/20 blur-3xl rounded-full top-0 right-0 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/20 blur-3xl rounded-full bottom-0 left-0 animate-pulse delay-700" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          
          <hr className="border-[#333333] mb-12 animate-slideIn" />

          {/* Section Title */}
          <div className="text-center mb-12 animate-slideUp">
            <div className="inline-block">
              <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse"></span>
                Your Recent Linkos
                <span className="w-2 h-8 bg-gradient-to-b from-[#FF3366] to-[#9933FF] rounded-full animate-pulse delay-300"></span>
              </h2>
              <p className="text-[#33CCFF] text-sm mt-2 animate-float">
                ✨ One link. Your whole world.
              </p>
            </div>
          </div>

          {/* RECENT LINKOS SECTION */}
          <div className="max-w-md mx-auto">
            
            {recentLinks.length === 0 ? (
              <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-[#333333] text-center hover:border-[#FF3366] transition-all duration-500 hover:scale-105 group animate-float">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-spin-slow">
                  <svg className="w-10 h-10 text-[#FF3366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <p className="text-[#CCCCCC] text-lg mb-6">
                  {typeof window !== 'undefined' && JSON.parse(localStorage?.getItem('currentUser') || 'null')
                    ? "You haven't created any Linkos yet"
                    : "Please log in to see your Linkos"}
                </p>
                <Link 
                  href={JSON.parse(localStorage.getItem('currentUser') || 'null') ? "/generate" : "/login"} 
                  className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
                >
                  {JSON.parse(localStorage.getItem('currentUser') || 'null') 
                    ? "Create your first Linko →" 
                    : "Log in →"}
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {recentLinks.map((linko, i) => (
                  <Link 
                    key={i} 
                    //href={`/${linko.handle}`}
                    href={`/${(linko as any).handle}`}
                    className="block group animate-slideUp"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF3366]/20">
                      <div className="flex items-center gap-3">
                        {/* Profile picture with pulse animation */}
                        <div className="relative">
                          <img 
                            src={linko.pic} 
                            alt={linko.handle}
                            className="w-10 h-10 rounded-xl object-cover border-2 border-[#FF3366] group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute -inset-1 border-2 border-[#FF3366] rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                        </div>
                        
                        <div className="flex-1">
                          <span className="text-white font-semibold group-hover:text-[#FF3366] transition-colors">
                            @{linko.handle}
                          </span>
                          <div className="flex items-center gap-2 text-xs text-[#CCCCCC] mt-1">
                            <span className="px-2 py-0.5 bg-[#FF3366]/20 rounded-full text-[#FF3366]">
                              {linko.linkCount || 0} links
                            </span>
                            <span>•</span>
                            <span>{new Date(linko.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
                
                <Link 
                  href="/dashboard" 
                  className="block text-center mt-8 group animate-bounce"
                >
                  <span className="inline-flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors duration-300 text-lg font-semibold">
                    See all your Linkos 
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Bottom Text with animated quotes */}
          <div className="text-center mt-16 space-y-4">
            {/* Animated quote card */}
            <div className="bg-gradient-to-r from-[#FF3366]/10 to-[#9933FF]/10 p-6 rounded-2xl border border-[#333333] hover:border-[#FF3366] transition-all duration-500 animate-float">
              <p className="text-white text-lg italic animate-pulse">
                "Your life isn't multiple tabs. Why should your link be?"
              </p>
            </div>
            
            <p className="text-[#33CCFF] text-sm animate-bounce">
              ✨ Your bio deserves better than a mess.
            </p>

            <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300 mt-4 hover:scale-105">
              <p className="text-[#CCCCCC] text-lg">
                Your links, all in one place with 
              </p>
              <span className="text-[#FF3366] font-bold text-xl relative group">
                Linko
                <span className="absolute -inset-2 bg-[#FF3366]/20 blur-xl group-hover:bg-[#FF3366]/30 rounded-full transition animate-pulse"></span>
              </span>
            </div>
          </div>

          {/* Claim Button with multiple animations */}
          <div className="text-center mt-10 pb-10">
            <button
              onClick={createLinko}
              className="group relative px-12 py-4 text-white font-bold text-lg rounded-full overflow-hidden hover:scale-110 transition-all duration-300 animate-float hover:animate-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#9933FF]"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#FF9933] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center gap-2">
                Claim your Linko now
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes slideDown {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </main>
  );
}
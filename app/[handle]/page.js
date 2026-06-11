// Add this import statement at the top of your page.js file
// import Link from "next/link";
// import clientPromise from "@/lib/mongodb"
// import { notFound } from "next/navigation";

// export default async function Page(params) {
//   const handle = (await params).handle
//   const client = await clientPromise;
//   const db = client.db("bittree");
//   const collection = db.collection("links");

//   //If the handle is already claimed, you cannot create the bittree
//   const item = await collection.findOne({ handle:handle});
//   if (!item){
//     return notFound()
//   }

//   console.log(item)

//   const item2 = {
//     _id: {
//       $oid: "6947da8b15e9a13ceac7aa7a",
//     },
//     links: [
//       {
//         link: "https://www.youtube.com/",
//         linktext: "Youtube",
//       },
//     ],
//     handle: "Rutuja",
//     pic: "https://avatars.githubusercontent.com/u/48705673?v=4",
//   };
//   return (
//     <div
//       className="flex min-h-screen bg-purple-400
//     justify-center items-start py-10"
//     >
//       {item && <div className="photo flex justify-center flex-col items-center gap-4">
//         <img src={item.pic} alt="" />
//         <span className="font-bold text-xl">@{item.handle}</span>
//         <span className="desc w-80 text-center">{item.desc}</span>
//         <div className="links">
//           {item.links.map((item, index) => {
//             return (
//               <Link key={index} href={item.link}>
//                 {" "}
//                 <div className="bg-purple-100 py-4 shadow-lg px-2 bg-white rounded-md my-3 min-w-96 flex justify-center">
//                   {item.linktext}
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>}
//     </div>
//   );
// }

// import Link from "next/link";
// import clientPromise from "@/lib/mongodb";
// import { notFound } from "next/navigation";

// export default async function Page({ params }) {
//   const handle = params.handle;

//   const client = await clientPromise;
//   const db = client.db("bittree");
//   const collection = db.collection("links");

//   const item = await collection.findOne({ handle });

//   if (!item) {
//     return notFound();
//   }

//   return (
//     <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
//       <div className="photo flex justify-center flex-col items-center gap-4">
//         { <img src={item.pic} alt="" /> }

//         {/* <img
//           src={item.pic || "https://via.placeholder.com/150"}
//           alt="profile"
//           className="w-32 h-32 rounded-full"
//         /> */}

//         <span className="font-bold text-xl">@{item.handle}</span>
//         <span className="desc w-80 text-center">{item.desc}</span>

//         <div className="links">
//           {item.links.map(
//             (linkItem, index) =>
//               linkItem.link && (
//                 <Link key={index} href={linkItem.link}>
//                   <div className="bg-purple-100 py-4 shadow-lg px-2 bg-white rounded-md my-3 min-w-96 flex justify-center">
//                     {linkItem.linktext}
//                   </div>
//                 </Link>
//               )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import Link from "next/link";
// import clientPromise from "@/lib/mongodb";
// import { notFound } from "next/navigation";

// export default async function Page({ params }) {
//   const handle = params.handle;

//   const client = await clientPromise;
//   const db = client.db("Linko");
//   const collection = db.collection("links");

//   const item = await collection.findOne({ handle });

//   if (!item) {
//     return notFound();
//   }

//   return (
//     <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
//       <div className="photo flex justify-center flex-col items-center gap-4">
//         {/* Profile Image - Fixed version */}
//         <img
//           src={item.pic || "https://via.placeholder.com/150"}
//           alt="profile"
//           className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
//         />

//         <span className="font-bold text-xl">@{item.handle}</span>
//         <span className="desc w-80 text-center">{item.desc}</span>

//         <div className="links">
//           {item.links.map(
//             (linkItem, index) =>
//               linkItem.link && (
//                 <Link key={index} href={linkItem.link}>
//                   <div className="bg-purple-100 py-4 shadow-lg px-2 bg-white rounded-md my-3 min-w-96 flex justify-center hover:bg-purple-200 transition-colors">
//                     {linkItem.linktext}
//                   </div>
//                 </Link>
//               )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client"
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";

// export default function Page() {
//   const params = useParams()
//   const handle = params.handle
//   const [item, setItem] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     // Get data from localStorage (saved in generate page)
//     const savedHandle = localStorage.getItem('linkoHandle')
//     const savedLinks = localStorage.getItem('linkoLinks')
//     const savedPicture = localStorage.getItem('linkoPicture')
//     const savedDescription = localStorage.getItem('linkoDescription')

//     // Check if this handle matches the saved one
//     if (savedHandle === handle) {
//       setItem({
//         handle: savedHandle,
//         links: savedLinks ? JSON.parse(savedLinks) : [],
//         pic: savedPicture || "",
//         desc: savedDescription || ""
//       })
//     }
//     setLoading(false)
//   }, [handle])

//   if (loading) {
//     return (
//       <div className="flex min-h-screen bg-purple-400 justify-center items-center">
//         <div className="text-white text-xl">Loading...</div>
//       </div>
//     )
//   }

//   if (!item) {
//     return (
//       <div className="flex min-h-screen bg-purple-400 justify-center items-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">404</h1>
//           <p className="text-white text-lg">Linko not found</p>
//           <Link href="/" className="inline-block mt-4 px-6 py-2 bg-white text-purple-600 rounded-lg">
//             Go Home
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
//       <div className="photo flex justify-center flex-col items-center gap-4">
//         {/* Profile Image */}
//         <img
//           src={item.pic || "https://via.placeholder.com/150"}
//           alt="profile"
//           className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
//         />

//         <span className="font-bold text-xl">@{item.handle}</span>
//         <span className="desc w-80 text-center">{item.desc}</span>

//         <div className="links">
//           {item.links.map((linkItem, index) => (
//             linkItem.url && (
//               <a
//                 key={index}
//                 href={linkItem.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <div className="bg-purple-100 py-4 shadow-lg px-2 bg-white rounded-md my-3 min-w-96 flex justify-center hover:bg-purple-200 transition-colors">
//                   {linkItem.text || "Link"}
//                 </div>
//               </a>
//             )
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { FiExternalLink, FiMusic, FiInstagram, FiYoutube, FiMail } from "react-icons/fi";

// export default function PreviewPage() {
//   const params = useParams()
//   const handle = params.handle
//   const [linko, setLinko] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     // Get from localStorage
//     const saved = localStorage.getItem('myLinkos')
//     if (saved) {
//       const allLinkos = JSON.parse(saved)
//       const current = allLinkos.find(l => l.handle === handle)
//       setLinko(current)
//     }
//     setLoading(false)
//   }, [handle])

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF3366]"></div>
//       </div>
//     )
//   }

//   if (!linko) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">404</h1>
//           <p className="text-[#CCCCCC] mb-6">Linko not found</p>
//           <Link
//             href="/"
//             className="px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white rounded-lg"
//           >
//             Go Home
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   // Get icon based on link text
//   const getIcon = (text) => {
//     const lower = text?.toLowerCase() || ""
//     if (lower.includes("instagram")) return <FiInstagram className="text-[#FF3366]" />
//     if (lower.includes("youtube")) return <FiYoutube className="text-[#FF3366]" />
//     if (lower.includes("spotify")) return <FiMusic className="text-[#1DB954]" />
//     if (lower.includes("contact")) return <FiMail className="text-[#33CCFF]" />
//     return <FiExternalLink className="text-[#FF3366]" />
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       {/* Animated background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-md mx-auto px-4 py-8">
//         {/* Profile Card */}
//         <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-[#333333] p-8 mb-6">
//           {/* Profile Image */}
//           <div className="flex justify-center mb-4">
//             {linko.pic ? (
//               <img
//                 src={linko.pic}
//                 alt={linko.handle}
//                 className="w-24 h-24 rounded-full object-cover border-4 border-[#FF3366]"
//               />
//             ) : (
//               <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#FF3366] to-[#9933FF] flex items-center justify-center border-4 border-white/20">
//                 <span className="text-white text-3xl font-bold">
//                   {linko.handle?.charAt(0).toUpperCase()}
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* Handle and Bio */}
//           <h1 className="text-2xl font-bold text-white text-center mb-2">
//             @{linko.handle}
//           </h1>

//           {linko.desc && (
//             <p className="text-[#CCCCCC] text-center mb-4">{linko.desc}</p>
//           )}

//           {/* Spotify Now Playing (if spotify link exists) */}
//           {linko.links?.some(l => l.text?.toLowerCase().includes("spotify")) && (
//             <div className="flex items-center justify-center gap-2 mt-4 mb-6 bg-[#1DB954]/20 p-3 rounded-full">
//               <div className="flex gap-1">
//                 <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                 <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                 <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//               </div>
//               <span className="text-[#1DB954] text-sm font-semibold">Now Playing</span>
//             </div>
//           )}
//         </div>

//         {/* Links Section */}
//         <div className="space-y-3">
//           {linko.links?.map((link, index) => (
//             link.url && (
//               <a
//                 key={index}
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block group"
//               >
//                 <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF3366]/20">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-lg flex items-center justify-center">
//                       {getIcon(link.text)}
//                     </div>
//                     <span className="flex-1 text-white font-medium">{link.text}</span>
//                     <FiExternalLink className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </div>
//                 </div>
//               </a>
//             )
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-12">
//           <p className="text-[#666666] text-sm">
//             Powered by <span className="text-[#FF3366] font-bold">LINKO</span>
//           </p>
//           <div className="flex items-center justify-center gap-2 mt-2">
//             <span className="text-[#33CCFF] text-xs">✨ One link. Endless possibilities.</span>
//           </div>
//         </div>

//         {/* Edit Button (if logged in user owns this linko) */}
//         <div className="text-center mt-6">
//           <Link
//             href={`/generate?handle=${linko.handle}&edit=true`}
//             className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-[#333333] rounded-full text-white hover:border-[#FF3366] transition-all"
//           >
//             <span>Edit this Linko</span>
//             <span className="text-[#FF3366]">✎</span>
//           </Link>
//         </div>
//       </div>
//     </main>
//   )
// }

// "use client"
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import {
//   FiExternalLink, FiMusic, FiInstagram, FiYoutube, FiMail,
//   FiShare2, FiEye, FiHeart, FiGithub, FiTwitter, FiLinkedin
// } from "react-icons/fi";

// export default function PreviewPage() {
//   const params = useParams()
//   const handle = params.handle
//   const [linko, setLinko] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [views, setViews] = useState(0)

//   useEffect(() => {
//     const saved = localStorage.getItem('myLinkos')
//     if (saved) {
//       const allLinkos = JSON.parse(saved)
//       const current = allLinkos.find(l => l.handle === handle)
//       setLinko(current)

//       // Simulate views count
//       const viewCount = localStorage.getItem(`views_${handle}`)
//       if (viewCount) {
//         setViews(parseInt(viewCount))
//       } else {
//         localStorage.setItem(`views_${handle}`, '1')
//         setViews(1)
//       }
//     }
//     setLoading(false)
//   }, [handle])

//   const getIcon = (text) => {
//     const lower = text?.toLowerCase() || ""
//     if (lower.includes("instagram")) return <FiInstagram className="text-[#FF3366]" />
//     if (lower.includes("youtube")) return <FiYoutube className="text-[#FF3366]" />
//     if (lower.includes("spotify")) return <FiMusic className="text-[#1DB954]" />
//     if (lower.includes("github")) return <FiGithub className="text-white" />
//     if (lower.includes("twitter")) return <FiTwitter className="text-[#33CCFF]" />
//     if (lower.includes("linkedin")) return <FiLinkedin className="text-[#33CCFF]" />
//     if (lower.includes("contact")) return <FiMail className="text-[#33CCFF]" />
//     return <FiExternalLink className="text-[#FF3366]" />
//   }

//   const handleShare = () => {
//     navigator.clipboard.writeText(window.location.href)
//     alert("Link copied to clipboard!")
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF3366]"></div>
//       </div>
//     )
//   }

//   if (!linko) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">404</h1>
//           <p className="text-[#CCCCCC] mb-6">Linko not found</p>
//           <Link
//             href="/"
//             className="px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white rounded-lg"
//           >
//             Go Home
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       {/* Animated background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-md mx-auto px-4 py-8">

//         {/* Stats Bar */}
//         <div className="flex justify-between items-center mb-4 text-sm">
//           <div className="flex items-center gap-2 text-[#CCCCCC]">
//             <FiEye size={16} />
//             <span>{views} {views === 1 ? 'view' : 'views'}</span>
//           </div>
//           <button
//             onClick={handleShare}
//             className="flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors"
//           >
//             <FiShare2 size={16} />
//             <span>Share</span>
//           </button>
//         </div>

//         {/* Profile Card */}
//         <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-[#333333] p-8 mb-6 relative overflow-hidden group">
//           {/* Glow effect on hover */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/0 via-[#FF3366]/0 to-[#9933FF]/0 group-hover:from-[#FF3366]/10 group-hover:via-[#9933FF]/10 group-hover:to-[#FF3366]/0 transition-all duration-500"></div>

//           {/* Profile Image */}
//           <div className="flex justify-center mb-4 relative">
//             {linko.pic ? (
//               <img
//                 src={linko.pic}
//                 alt={linko.handle}
//                 className="w-24 h-24 rounded-full object-cover border-4 border-[#FF3366]"
//               />
//             ) : (
//               <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#FF3366] to-[#9933FF] flex items-center justify-center border-4 border-white/20">
//                 <span className="text-white text-3xl font-bold">
//                   {linko.handle?.charAt(0).toUpperCase()}
//                 </span>
//               </div>
//             )}
//             {/* Verified badge */}
//             <div className="absolute bottom-0 right-1/2 translate-x-12 w-6 h-6 bg-[#33CCFF] rounded-full flex items-center justify-center text-white text-xs">
//               ✓
//             </div>
//           </div>

//           {/* Handle and Bio */}
//           <h1 className="text-2xl font-bold text-white text-center mb-2">
//             @{linko.handle}
//           </h1>

//           {linko.desc && (
//             <p className="text-[#CCCCCC] text-center mb-4">{linko.desc}</p>
//           )}

//           {/* Link Counter */}
//           <div className="flex justify-center gap-2 mt-2">
//             <span className="px-3 py-1 bg-[#FF3366]/20 rounded-full text-[#FF3366] text-xs">
//               {linko.links?.filter(l => l.url).length || 0} links
//             </span>
//           </div>

//           {/* Spotify Now Playing */}
//           {linko.links?.some(l => l.text?.toLowerCase().includes("spotify")) && (
//             <div className="flex items-center justify-center gap-2 mt-6 bg-[#1DB954]/20 p-3 rounded-full">
//               <div className="flex gap-1">
//                 <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                 <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                 <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//               </div>
//               <span className="text-[#1DB954] text-sm font-semibold">Now Playing on Spotify</span>
//             </div>
//           )}
//         </div>

//         {/* Links Section */}
//         <div className="space-y-3">
//           {linko.links?.map((link, index) => (
//             link.url && (
//               <a
//                 key={index}
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block group"
//               >
//                 <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF3366]/20">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-lg flex items-center justify-center">
//                       {getIcon(link.text)}
//                     </div>
//                     <span className="flex-1 text-white font-medium">{link.text}</span>
//                     <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-opacity">
//                       →
//                     </span>
//                   </div>
//                 </div>
//               </a>
//             )
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-12">
//           <p className="text-[#666666] text-sm">
//             Powered by <span className="text-[#FF3366] font-bold">LINKO</span>
//           </p>
//           <div className="flex items-center justify-center gap-2 mt-2">
//             <span className="text-[#33CCFF] text-xs">✨ One link. Endless possibilities.</span>
//           </div>
//         </div>

//         {/* Edit Button */}
//         <div className="text-center mt-6">
//           <Link
//             href={`/generate?handle=${linko.handle}&edit=true`}
//             className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-[#333333] rounded-full text-white hover:border-[#FF3366] hover:bg-[#FF3366]/10 transition-all"
//           >
//             <span>Edit this Linko</span>
//             <span className="text-[#FF3366]">✎</span>
//           </Link>
//         </div>
//       </div>
//     </main>
//   )
// }

// "use client"
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import {
//   FiExternalLink, FiMusic, FiInstagram, FiYoutube, FiMail,
//   FiShare2, FiEye, FiHeart, FiGithub, FiTwitter, FiLinkedin
// } from "react-icons/fi";

// export default function PreviewPage() {
//   const params = useParams()
//   const handle = params.handle
//   const [linko, setLinko] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [views, setViews] = useState(0)

//   useEffect(() => {
//     fetchLinko();
//   }, [handle]);

//   const fetchLinko = async () => {
//     try {
//       const response = await fetch(`/api/get-linko?handle=${handle}`);
//       const data = await response.json();

//       if (data.success) {
//         setLinko(data.linko);

//         // Update views count in database
//         await fetch(`/api/update-views?handle=${handle}`, { method: 'POST' });
//         setViews(data.linko.views || 0);
//       }
//     } catch (error) {
//       console.error('Error fetching linko:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getIcon = (text) => {
//     const lower = text?.toLowerCase() || ""
//     if (lower.includes("instagram")) return <FiInstagram className="text-[#FF3366]" />
//     if (lower.includes("youtube")) return <FiYoutube className="text-[#FF3366]" />
//     if (lower.includes("spotify")) return <FiMusic className="text-[#1DB954]" />
//     if (lower.includes("github")) return <FiGithub className="text-white" />
//     if (lower.includes("twitter")) return <FiTwitter className="text-[#33CCFF]" />
//     if (lower.includes("linkedin")) return <FiLinkedin className="text-[#33CCFF]" />
//     if (lower.includes("contact")) return <FiMail className="text-[#33CCFF]" />
//     return <FiExternalLink className="text-[#FF3366]" />
//   }

//   const handleShare = () => {
//     navigator.clipboard.writeText(window.location.href)
//     alert("Link copied to clipboard!")
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF3366]"></div>
//       </div>
//     )
//   }

//   if (!linko) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">404</h1>
//           <p className="text-[#CCCCCC] mb-6">Linko not found</p>
//           <Link
//             href="/"
//             className="px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white rounded-lg"
//           >
//             Go Home
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       {/* Animated background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-md mx-auto px-4 py-8">

//         {/* Stats Bar */}
//         <div className="flex justify-between items-center mb-4 text-sm">
//           <div className="flex items-center gap-2 text-[#CCCCCC]">
//             <FiEye size={16} />
//             <span>{views} {views === 1 ? 'view' : 'views'}</span>
//           </div>
//           <button
//             onClick={handleShare}
//             className="flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors"
//           >
//             <FiShare2 size={16} />
//             <span>Share</span>
//           </button>
//         </div>

//         {/* Profile Card */}
//         <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-[#333333] p-8 mb-6 relative overflow-hidden group">
//           {/* Glow effect on hover */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/0 via-[#FF3366]/0 to-[#9933FF]/0 group-hover:from-[#FF3366]/10 group-hover:via-[#9933FF]/10 group-hover:to-[#FF3366]/0 transition-all duration-500"></div>

//           {/* Profile Image */}
//           <div className="flex justify-center mb-4 relative">
//             {linko.pic ? (
//               <img
//                 src={linko.pic}
//                 alt={linko.handle}
//                 className="w-24 h-24 rounded-full object-cover border-4 border-[#FF3366]"
//               />
//             ) : (
//               <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#FF3366] to-[#9933FF] flex items-center justify-center border-4 border-white/20">
//                 <span className="text-white text-3xl font-bold">
//                   {linko.handle?.charAt(0).toUpperCase()}
//                 </span>
//               </div>
//             )}
//             {/* Verified badge */}
//             <div className="absolute bottom-0 right-1/2 translate-x-12 w-6 h-6 bg-[#33CCFF] rounded-full flex items-center justify-center text-white text-xs">
//               ✓
//             </div>
//           </div>

//           {/* Handle and Bio */}
//           <h1 className="text-2xl font-bold text-white text-center mb-2">
//             @{linko.handle}
//           </h1>

//           {linko.desc && (
//             <p className="text-[#CCCCCC] text-center mb-4">{linko.desc}</p>
//           )}

//           {/* Link Counter */}
//           <div className="flex justify-center gap-2 mt-2">
//             <span className="px-3 py-1 bg-[#FF3366]/20 rounded-full text-[#FF3366] text-xs">
//               {linko.links?.filter(l => l.url).length || 0} links
//             </span>
//           </div>

//           {/* Spotify Now Playing */}
//           {linko.links?.some(l => l.text?.toLowerCase().includes("spotify")) && (
//             <div className="flex items-center justify-center gap-2 mt-6 bg-[#1DB954]/20 p-3 rounded-full">
//               <div className="flex gap-1">
//                 <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
//                 <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
//                 <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
//               </div>
//               <span className="text-[#1DB954] text-sm font-semibold">Now Playing on Spotify</span>
//             </div>
//           )}
//         </div>

//         {/* Links Section */}
//         <div className="space-y-3">
//           {linko.links?.map((link, index) => (
//             link.url && (
//               <a
//                 key={index}
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block group"
//               >
//                 <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF3366]/20">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-lg flex items-center justify-center">
//                       {getIcon(link.text)}
//                     </div>
//                     <span className="flex-1 text-white font-medium">{link.text}</span>
//                     <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-opacity">
//                       →
//                     </span>
//                   </div>
//                 </div>
//               </a>
//             )
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-12">
//           <p className="text-[#666666] text-sm">
//             Powered by <span className="text-[#FF3366] font-bold">LINKO</span>
//           </p>
//           <div className="flex items-center justify-center gap-2 mt-2">
//             <span className="text-[#33CCFF] text-xs">✨ One link. Endless possibilities.</span>
//           </div>
//         </div>

//         {/* Edit Button */}
//         <div className="text-center mt-6">
//           <Link
//             href={`/generate?handle=${linko.handle}&edit=true`}
//             className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-[#333333] rounded-full text-white hover:border-[#FF3366] hover:bg-[#FF3366]/10 transition-all"
//           >
//             <span>Edit this Linko</span>
//             <span className="text-[#FF3366]">✎</span>
//           </Link>
//         </div>
//       </div>
//     </main>
//   )
// }

// "use client"
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import {
//   FiExternalLink, FiMusic, FiInstagram, FiYoutube, FiMail,
//   FiShare2, FiEye
// } from "react-icons/fi";

// export default function PreviewPage() {
//   const params = useParams()
//   const handle = params.handle
//   const [linko, setLinko] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchLinko = async () => {
//       console.log("Looking for handle:", handle); // Debug log

//       // FIRST: Check localStorage (for just created Linkos)
//       const saved = localStorage.getItem('myLinkos');
//       if (saved) {
//         const allLinkos = JSON.parse(saved);
//         const localLinko = allLinkos.find(l => l.handle === handle);
//         if (localLinko) {
//           console.log("Found in localStorage:", localLinko);
//           setLinko(localLinko);
//           setLoading(false);
//           return;
//         }
//       }

//       // SECOND: If not in localStorage, it must be an old Linko - redirect to home
//       console.log("Not found in localStorage");
//       setLinko(null);
//       setLoading(false);
//     };

//     fetchLinko();
//   }, [handle]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF3366]"></div>
//       </div>
//     )
//   }

//   if (!linko) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">404</h1>
//           <p className="text-[#CCCCCC] mb-6">Linko not found</p>
//           <Link
//             href="/"
//             className="px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white rounded-lg"
//           >
//             Go Home
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       {/* Animated background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-md mx-auto px-4 py-8">

//         {/* Profile Card */}
//         <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-[#333333] p-8 mb-6">

//           {/* Profile Image */}
//           <div className="flex justify-center mb-4">
//             {linko.pic ? (
//               <img
//                 src={linko.pic}
//                 alt={linko.handle}
//                 className="w-24 h-24 rounded-full object-cover border-4 border-[#FF3366]"
//               />
//             ) : (
//               <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#FF3366] to-[#9933FF] flex items-center justify-center border-4 border-white/20">
//                 <span className="text-white text-3xl font-bold">
//                   {linko.handle?.charAt(0).toUpperCase()}
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* Handle and Bio */}
//           <h1 className="text-2xl font-bold text-white text-center mb-2">
//             @{linko.handle}
//           </h1>

//           {linko.desc && (
//             <p className="text-[#CCCCCC] text-center mb-4">{linko.desc}</p>
//           )}
//         </div>

//         {/* Links Section */}
//         <div className="space-y-3">
//           {linko.links?.map((link, index) => (
//             link.url && (
//               <a
//                 key={index}
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block group"
//               >
//                 <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-105">
//                   <div className="flex items-center gap-3">
//                     <span className="flex-1 text-white font-medium">{link.text}</span>
//                     <FiExternalLink className="text-[#FF3366]" />
//                   </div>
//                 </div>
//               </a>
//             )
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-12">
//           <p className="text-[#666666] text-sm">
//             Powered by <span className="text-[#FF3366] font-bold">LINKO</span>
//           </p>
//         </div>
//       </div>
//     </main>
//   )
// }



"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FiExternalLink,
  FiMusic,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiShare2,
  FiEye,
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

export default function PreviewPage() {
  const params = useParams();
  const handle = params.handle;
  const [linko, setLinko] = useState(null);
  const [loading, setLoading] = useState(true);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchLinko = async () => {
      // First check localStorage
      const saved = localStorage.getItem("myLinkos");
      if (saved) {
        const allLinkos = JSON.parse(saved);
        const localLinko = allLinkos.find((l) => l.handle === handle);
        if (localLinko) {
          setLinko(localLinko);

          // Simulate views count
          const viewCount = localStorage.getItem(`views_${handle}`);
          if (viewCount) {
            setViews(parseInt(viewCount));
          } else {
            localStorage.setItem(`views_${handle}`, "1");
            setViews(1);
          }

          setLoading(false);
          return;
        }
      }

      // If not in localStorage, try MongoDB
      try {
        const response = await fetch(`/api/get-linko?handle=${handle}`);
        const data = await response.json();

        if (data.success) {
          setLinko(data.data);
          setViews(data.data.views || 0);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLinko();
  }, [handle]);

  const getIcon = (text) => {
    const lower = text?.toLowerCase() || "";
    if (lower.includes("instagram"))
      return <FiInstagram className="text-[#FF3366]" size={20} />;
    if (lower.includes("youtube"))
      return <FiYoutube className="text-[#FF3366]" size={20} />;
    if (lower.includes("spotify"))
      return <FiMusic className="text-[#1DB954]" size={20} />;
    if (lower.includes("github"))
      return <FiGithub className="text-white" size={20} />;
    if (lower.includes("twitter"))
      return <FiTwitter className="text-[#33CCFF]" size={20} />;
    if (lower.includes("linkedin"))
      return <FiLinkedin className="text-[#33CCFF]" size={20} />;
    if (lower.includes("contact"))
      return <FiMail className="text-[#33CCFF]" size={20} />;
    return <FiExternalLink className="text-[#FF3366]" size={20} />;
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("✨ Link copied to clipboard!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF3366]"></div>
      </div>
    );
  }

  if (!linko) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-[#CCCCCC] mb-6">Linko not found</p>
          <Link
            href="/"
            className="px-6 py-2 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white rounded-lg"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
      </div>

      {/* Navbar spacer */}
      <div className="h-24"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-md mx-auto px-4 py-8">
        {/* Stats Bar - VIEWS & SHARE RESTORED */}
        <div className="flex justify-between items-center mb-6 text-sm">
          <div className="flex items-center gap-2 text-[#CCCCCC] bg-white/5 px-4 py-2 rounded-full">
            <FiEye size={16} className="text-[#33CCFF]" />
            <span>
              {views} {views === 1 ? "view" : "views"}
            </span>
          </div>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 text-[#33CCFF] hover:text-[#FF3366] transition-colors bg-white/5 px-4 py-2 rounded-full"
          >
            <FiShare2 size={16} />
            <span>Share</span>
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-[#333333] p-8 mb-6 relative overflow-hidden group">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/0 via-[#FF3366]/0 to-[#9933FF]/0 group-hover:from-[#FF3366]/10 group-hover:via-[#9933FF]/10 group-hover:to-[#FF3366]/0 transition-all duration-500"></div>

          {/* Profile Image */}
          <div className="flex justify-center mb-4 relative">
            {linko.pic ? (
              <img
                src={linko.pic}
                alt={linko.handle}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#FF3366]"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#FF3366] to-[#9933FF] flex items-center justify-center border-4 border-white/20">
                <span className="text-white text-3xl font-bold">
                  {linko.handle?.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            {/* Verified badge */}
            <div className="absolute bottom-0 right-1/2 translate-x-12 w-6 h-6 bg-[#33CCFF] rounded-full flex items-center justify-center text-white text-xs">
              ✓
            </div>
          </div>

          {/* Handle and Bio */}
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            @{linko.handle}
          </h1>

          {linko.desc && (
            <p className="text-[#CCCCCC] text-center mb-4">{linko.desc}</p>
          )}

          {/* Link Counter */}
          <div className="flex justify-center gap-2 mt-2">
            <span className="px-3 py-1 bg-[#FF3366]/20 rounded-full text-[#FF3366] text-xs">
              {linko.links?.filter((l) => l.url).length || 0} links
            </span>
          </div>

          {/* Spotify Now Playing - RESTORED */}
          {linko.links?.some((l) =>
            l.text?.toLowerCase().includes("spotify"),
          ) && (
            <div className="flex items-center justify-center gap-2 mt-6 bg-[#1DB954]/20 p-3 rounded-full">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse"></div>
                <div className="w-1 h-6 bg-[#1DB954] rounded-full animate-pulse delay-150"></div>
                <div className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse delay-300"></div>
              </div>
              <span className="text-[#1DB954] text-sm font-semibold">
                Now Playing on Spotify
              </span>
            </div>
          )}
        </div>

        {/* Links Section - WITH ICONS RESTORED */}
        <div className="space-y-3">
          {linko.links?.map(
            (link, index) =>
              link.url && (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-[#333333] hover:border-[#FF3366] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF3366]/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-lg flex items-center justify-center">
                        {getIcon(link.text)}
                      </div>
                      <span className="flex-1 text-white font-medium">
                        {link.text}
                      </span>
                      <FiExternalLink
                        className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-opacity"
                        size={18}
                      />
                    </div>
                  </div>
                </a>
              ),
          )}
        </div>

        {/* Footer - WITH QUOTE RESTORED */}
        <div className="text-center mt-12">
          <p className="text-[#666666] text-sm">
            Powered by <span className="text-[#FF3366] font-bold">LINKO</span>
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-[#33CCFF] text-xs">
              ✨ One link. Endless possibilities.
            </span>
          </div>
        </div>

        {/* Edit Button */}
        <div className="text-center mt-6">
          <Link
            href={`/generate?handle=${linko.handle}&edit=true`}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-[#333333] rounded-full text-white hover:border-[#FF3366] hover:bg-[#FF3366]/10 transition-all"
          >
            <span>Edit this Linko</span>
            <span className="text-[#FF3366]">✎</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

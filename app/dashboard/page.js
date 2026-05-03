// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Dashboard() {
//   const [myTrees, setMyTrees] = useState([]);

//   useEffect(() => {
//     // Get all linkos from localStorage
//     const saved = localStorage.getItem('myLinkos');
//     if(saved) {
//       setMyTrees(JSON.parse(saved).reverse()); // Show newest first
//     }
//   }, []);

//   const deleteTree = (handle) => {
//     const updated = myTrees.filter(tree => tree.handle !== handle);
//     localStorage.setItem('myLinkos', JSON.stringify(updated));
//     setMyTrees(updated);
//     toast.success('Deleted successfully');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 p-8">
//       <ToastContainer />
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-white mb-8">My Linkos</h1>
        
//         {myTrees.length === 0 ? (
//           <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center border border-white/20">
//             <p className="text-white text-lg mb-6">You haven't created any Linkos yet</p>
//             <Link 
//               href="/generate" 
//               className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 transition-all duration-300"
//             >
//               Create Your First Linko
//             </Link>
//           </div>
//         ) : (
//           <div className="grid gap-4">
//             {myTrees.map((tree, index) => (
//               <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 flex items-center justify-between">
//                 <div>
//                   <span className="font-bold text-xl text-white">@{tree.handle}</span>
//                   <p className="text-sm text-gray-300 mt-1">
//                     Created: {new Date(tree.date).toLocaleDateString()} • 
//                     {tree.links?.length || 0} links  {/* FIXED: added .length */}
//                   </p>
//                 </div>
//                 <div className="flex gap-3">
//                   <Link 
//                     href={`/generate?handle=${tree.handle}&edit=true`}
//                     className="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
//                   >
//                     Edit
//                   </Link>
//                   <Link 
//                     href={`/${tree.handle}`}
//                     className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
//                     target="_blank"
//                   >
//                     View
//                   </Link>
//                   <button
//                     onClick={() => deleteTree(tree.handle)}
//                     className="px-5 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Dashboard() {
//   const [myTrees, setMyTrees] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     // Get current logged-in user
//     const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
//     setCurrentUser(user);
    
//     if (!user) {
//       setMyTrees([]);
//       return;
//     }
    
//     // Get all linkos from localStorage
//     const saved = localStorage.getItem('myLinkos');
//     if(saved) {
//       const all = JSON.parse(saved);
//       // Filter only this user's Linkos
//       const userLinkos = all.filter(linko => linko.userEmail === user.email);
//       setMyTrees(userLinkos.reverse()); // Show newest first
//     }
//   }, []);

//   const deleteTree = (handle) => {
//     if (!currentUser) return;
    
//     const saved = localStorage.getItem('myLinkos');
//     if(saved) {
//       const all = JSON.parse(saved);
//       // Filter out the deleted linko
//       const updated = all.filter(tree => !(tree.handle === handle && tree.userEmail === currentUser.email));
//       localStorage.setItem('myLinkos', JSON.stringify(updated));
      
//       // Update state with only this user's linkos
//       const userLinkos = updated.filter(linko => linko.userEmail === currentUser.email);
//       setMyTrees(userLinkos.reverse());
//       toast.success('Deleted successfully');
//     }
//   };

//   // If no user is logged in
//   if (!currentUser) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 p-8">
//         <ToastContainer />
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold text-white mb-8">My Linkos</h1>
//           <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center border border-white/20">
//             <p className="text-white text-lg mb-6">Please log in to view your Linkos</p>
//             <Link 
//               href="/login" 
//               className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 transition-all duration-300"
//             >
//               Log in
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 p-8">
//       <ToastContainer />
//       <div className="max-w-4xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-bold text-white">My Linkos</h1>
//           <div className="text-white bg-white/10 px-4 py-2 rounded-full">
//             Logged in as: <span className="text-[#33CCFF] font-bold">@{currentUser.handle}</span>
//           </div>
//         </div>
        
//         {myTrees.length === 0 ? (
//           <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center border border-white/20">
//             <p className="text-white text-lg mb-6">You haven't created any Linkos yet</p>
//             <Link 
//               href="/generate" 
//               className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 transition-all duration-300"
//             >
//               Create Your First Linko
//             </Link>
//           </div>
//         ) : (
//           <div className="grid gap-4">
//             {myTrees.map((tree, index) => (
//               <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 flex items-center justify-between">
//                 <div>
//                   <span className="font-bold text-xl text-white">@{tree.handle}</span>
//                   <p className="text-sm text-gray-300 mt-1">
//                     Created: {new Date(tree.date).toLocaleDateString()} • 
//                     {tree.links?.length || 0} links
//                   </p>
//                 </div>
//                 <div className="flex gap-3">
//                   <Link 
//                     href={`/generate?handle=${tree.handle}&edit=true`}
//                     className="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
//                   >
//                     Edit
//                   </Link>
//                   <Link 
//                     href={`/${tree.handle}`}
//                     className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
//                     target="_blank"
//                   >
//                     View
//                   </Link>
//                   <button
//                     onClick={() => deleteTree(tree.handle)}
//                     className="px-5 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FiEdit, FiEye, FiTrash2, FiLink, FiCalendar, FiUser } from "react-icons/fi";

// export default function Dashboard() {
//   const [myTrees, setMyTrees] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [stats, setStats] = useState({ totalLinks: 0 });

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
//     setCurrentUser(user);
    
//     if (!user) return;
    
//     const saved = localStorage.getItem('myLinkos');
//     if(saved) {
//       const all = JSON.parse(saved);
//       const userLinkos = all.filter(linko => linko.userEmail === user.email);
//       setMyTrees(userLinkos.reverse());
      
//       const totalLinks = userLinkos.reduce((acc, curr) => acc + (curr.linkCount || 0), 0);
//       setStats({ totalLinks });
//     }
//   }, []);

//   const deleteTree = (handle) => {
//     if (!currentUser) return;
    
//     const saved = localStorage.getItem('myLinkos');
//     if(saved) {
//       const all = JSON.parse(saved);
//       const updated = all.filter(tree => !(tree.handle === handle && tree.userEmail === currentUser.email));
//       localStorage.setItem('myLinkos', JSON.stringify(updated));
      
//       const userLinkos = updated.filter(linko => linko.userEmail === currentUser.email);
//       setMyTrees(userLinkos.reverse());
//       toast.success('✅ Deleted successfully');
//     }
//   };

//   // Random gradient colors for avatars
//   const gradientColors = [
//     "from-[#FF3366] to-[#9933FF]",
//     "from-[#33CCFF] to-[#3366FF]",
//     "from-[#FF9933] to-[#FF3366]",
//     "from-[#9933FF] to-[#33CCFF]",
//     "from-[#FF66B2] to-[#FF3366]",
//     "from-[#66CCFF] to-[#33CCFF]",
//   ];

//   if (!currentUser) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] p-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-[#333333] text-center">
//             <FiUser className="text-6xl text-[#FF3366] mx-auto mb-4" />
//             <h1 className="text-3xl font-bold text-white mb-4">My Linkos</h1>
//             <p className="text-[#CCCCCC] mb-6">Please log in to view your Linkos</p>
//             <Link 
//               href="/login" 
//               className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white rounded-full hover:scale-105 transition-all"
//             >
//               Log in
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] p-8">
//       <ToastContainer theme="dark" position="top-center" />
      
//       {/* Animated background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
        
//         {/* Header with user info */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-bold">
//             <span className="bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">
//               My Linkos
//             </span>
//           </h1>
//           <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-[#333333]">
//             <div className="w-8 h-8 bg-gradient-to-r from-[#FF3366] to-[#9933FF] rounded-full flex items-center justify-center">
//               <span className="text-white text-sm font-bold">
//                 {currentUser.handle?.charAt(0).toUpperCase()}
//               </span>
//             </div>
//             <span className="text-white">@{currentUser.handle}</span>
//           </div>
//         </div>

//         {/* Stats Cards - REMOVED views card */}
//         {myTrees.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//             <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#333333]">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-[#FF3366]/20 rounded-xl flex items-center justify-center">
//                   <FiLink className="text-[#FF3366] text-2xl" />
//                 </div>
//                 <div>
//                   <p className="text-[#CCCCCC] text-sm">Total Linkos</p>
//                   <p className="text-white text-3xl font-bold">{myTrees.length}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#333333]">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-[#9933FF]/20 rounded-xl flex items-center justify-center">
//                   <FiLink className="text-[#9933FF] text-2xl" />
//                 </div>
//                 <div>
//                   <p className="text-[#CCCCCC] text-sm">Total Links</p>
//                   <p className="text-white text-3xl font-bold">{stats.totalLinks}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Linkos Grid */}
//         {myTrees.length === 0 ? (
//           <div className="bg-white/5 backdrop-blur-xl p-16 rounded-3xl border border-[#333333] text-center">
//             <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-full flex items-center justify-center">
//               <FiLink className="text-4xl text-[#FF3366]" />
//             </div>
//             <h2 className="text-2xl font-bold text-white mb-2">No Linkos Yet</h2>
//             <p className="text-[#CCCCCC] mb-8">Create your first Linko and start sharing your world!</p>
//             <Link 
//               href="/generate" 
//               className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300"
//             >
//               Create Your First Linko
//               <span className="text-xl">→</span>
//             </Link>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {myTrees.map((tree, index) => (
//               <div key={index} 
//                 className="group bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#333333] hover:border-[#FF3366] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF3366]/20 relative overflow-hidden"
//               >
//                 {/* Animated background on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/0 via-[#FF3366]/0 to-[#9933FF]/0 group-hover:from-[#FF3366]/10 group-hover:via-[#9933FF]/10 group-hover:to-[#FF3366]/0 transition-all duration-500"></div>
                
//                 <div className="relative z-10">
//                   {/* Header with handle and date */}
//                   <div className="flex justify-between items-start mb-4">
//                     <div className="flex items-center gap-3">
//                       {/* UNIQUE AVATAR - Using gradient colors based on handle */}
//                       <div className={`w-12 h-12 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
//                         {tree.pic ? (
//                           <img src={tree.pic} alt={tree.handle} className="w-full h-full rounded-xl object-cover" />
//                         ) : (
//                           <span className="text-white font-bold text-xl">
//                             {tree.handle?.charAt(0).toUpperCase()}
//                           </span>
//                         )}
//                       </div>
//                       <div>
//                         <Link href={`/${tree.handle}`} className="hover:underline">
//                           <h3 className="text-white font-bold text-xl group-hover:text-[#FF3366] transition-colors">
//                             {tree.handle}
//                           </h3>
//                         </Link>
//                         <div className="flex items-center gap-2 mt-1">
//                           <FiCalendar className="text-[#33CCFF] text-xs" />
//                           <span className="text-[#CCCCCC] text-xs">
//                             {new Date(tree.date).toLocaleDateString()}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Link count badge */}
//                     <div className="px-3 py-1 bg-[#FF3366]/20 rounded-full">
//                       <span className="text-[#FF3366] text-sm font-semibold">
//                         {tree.linkCount || 0} links
//                       </span>
//                     </div>
//                   </div>

//                   {/* Preview of first few links */}
//                   {tree.links && tree.links.length > 0 && (
//                     <div className="mb-4 space-y-2">
//                       {tree.links.slice(0, 2).map((link, i) => (
//                         link.url && (
//                           <div key={i} className="flex items-center gap-2 text-sm">
//                             <div className="w-1 h-1 bg-[#33CCFF] rounded-full"></div>
//                             <span className="text-[#CCCCCC] truncate">{link.text || 'Untitled'}</span>
//                           </div>
//                         )
//                       ))}
//                       {tree.links.length > 2 && (
//                         <p className="text-[#33CCFF] text-xs">+{tree.links.length - 2} more</p>
//                       )}
//                     </div>
//                   )}

//                   {/* Action buttons */}
//                   <div className="flex gap-2 mt-4">
//                     <Link 
//                       href={`/generate?handle=${tree.handle}&edit=true`}
//                       className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 hover:bg-blue-500/30 hover:border-blue-400 transition-all group/btn"
//                     >
//                       <FiEdit className="group-hover/btn:rotate-12 transition-transform" />
//                       <span>Edit</span>
//                     </Link>
                    
//                     <Link 
//                       href={`/${tree.handle}`}
//                       target="_blank"
//                       className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 hover:bg-green-500/30 hover:border-green-400 transition-all group/btn"
//                     >
//                       <FiEye className="group-hover/btn:scale-110 transition-transform" />
//                       <span>View</span>
//                     </Link>
                    
//                     <button
//                       onClick={() => deleteTree(tree.handle)}
//                       className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/30 hover:border-red-400 transition-all group/btn"
//                     >
//                       <FiTrash2 className="group-hover/btn:scale-110 transition-transform" />
//                       <span>Delete</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Create new button */}
//         {myTrees.length > 0 && (
//           <div className="text-center mt-8">
//             <Link
//               href="/generate"
//               className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300"
//             >
//               Create New Linko
//               <span className="text-xl">+</span>
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  FiEdit, FiEye, FiTrash2, FiLink, FiCalendar, FiUser, FiHome, // 👈 Added FiHome
  FiGithub, FiTwitter, FiInstagram, FiYoutube, FiMusic,
  FiGlobe, FiCamera, FiFilm, FiBookOpen, FiShoppingBag
} from "react-icons/fi";
import { 
  BsInstagram, BsYoutube, BsSpotify, BsTwitter, BsGithub,
  BsLinkedin, BsFacebook, BsTiktok, BsPinterest, BsSnapchat
} from "react-icons/bs";

export default function Dashboard() {
  const [myTrees, setMyTrees] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [stats, setStats] = useState({ totalLinks: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
    
    if (!user) return;
    
    const saved = localStorage.getItem('myLinkos');
    if(saved) {
      const all = JSON.parse(saved);
      const userLinkos = all.filter(linko => linko.userEmail === user.email);
      setMyTrees(userLinkos.reverse());
      
      const totalLinks = userLinkos.reduce((acc, curr) => acc + (curr.linkCount || 0), 0);
      setStats({ totalLinks });
    }
  }, []);

  const deleteTree = (handle) => {
    if (!currentUser) return;
    
    const saved = localStorage.getItem('myLinkos');
    if(saved) {
      const all = JSON.parse(saved);
      const updated = all.filter(tree => !(tree.handle === handle && tree.userEmail === currentUser.email));
      localStorage.setItem('myLinkos', JSON.stringify(updated));
      
      const userLinkos = updated.filter(linko => linko.userEmail === currentUser.email);
      setMyTrees(userLinkos.reverse());
      toast.success('✅ Deleted successfully');
    }
  };

  // Random gradient colors for avatars
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

  // Get random icon based on link text
  const getLinkIcon = (text, index) => {
    const lower = text?.toLowerCase() || "";
    const icons = [
      <FiLink key={index} className="text-[#FF3366] animate-pulse" />,
      <FiGithub key={index} className="text-white animate-bounce" />,
      <FiTwitter key={index} className="text-[#33CCFF] animate-spin-slow" />,
      <FiInstagram key={index} className="text-[#FF3366] animate-pulse" />,
      <FiYoutube key={index} className="text-[#FF3366] animate-bounce" />,
      <FiMusic key={index} className="text-[#1DB954] animate-pulse" />,
      <BsInstagram key={index} className="text-[#FF3366] animate-ping" />,
      <BsYoutube key={index} className="text-[#FF3366] animate-bounce" />,
      <BsSpotify key={index} className="text-[#1DB954] animate-pulse" />,
      <BsTwitter key={index} className="text-[#33CCFF] animate-spin-slow" />,
    ];
    
    if (lower.includes("instagram")) return <BsInstagram className="text-[#FF3366] animate-pulse text-lg" />;
    if (lower.includes("youtube")) return <BsYoutube className="text-[#FF3366] animate-bounce text-lg" />;
    if (lower.includes("spotify")) return <BsSpotify className="text-[#1DB954] animate-pulse text-lg" />;
    if (lower.includes("twitter")) return <BsTwitter className="text-[#33CCFF] animate-spin-slow text-lg" />;
    if (lower.includes("github")) return <FiGithub className="text-white animate-bounce text-lg" />;
    if (lower.includes("linkedin")) return <BsLinkedin className="text-[#33CCFF] animate-pulse text-lg" />;
    if (lower.includes("facebook")) return <BsFacebook className="text-[#3366FF] animate-pulse text-lg" />;
    if (lower.includes("tiktok")) return <BsTiktok className="text-white animate-bounce text-lg" />;
    if (lower.includes("pinterest")) return <BsPinterest className="text-[#FF3366] animate-pulse text-lg" />;
    if (lower.includes("snapchat")) return <BsSnapchat className="text-[#FFCC33] animate-pulse text-lg" />;
    
    return icons[index % icons.length];
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-[#333333] text-center animate-float">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#FF3366] to-[#9933FF] rounded-full flex items-center justify-center animate-spin-slow">
              <FiUser className="text-4xl text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">My Linkos</h1>
            <p className="text-[#CCCCCC] mb-6">Please log in to view your Linkos</p>
            <Link 
              href="/login" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white rounded-full hover:scale-105 transition-all animate-pulse"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f] p-8">
      <ToastContainer theme="dark" position="top-center" />
      
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#9933FF]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#33CCFF]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header with HOME ICON and user info */}
        <div className="flex justify-between items-center mb-8 animate-slideDown">
          <div className="flex items-center gap-4">
            {/* HOME BUTTON - NEW! */}
            <Link 
              href="/" 
              className="flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-xl rounded-xl border border-[#333333] hover:border-[#FF3366] hover:scale-110 hover:rotate-12 transition-all duration-300 group"
            >
              <FiHome className="text-[#FF3366] text-xl group-hover:text-white transition-colors" />
            </Link>
            
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent animate-gradient">
                My Linkos
              </span>
            </h1>
          </div>
          
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-[#333333] hover:border-[#FF3366] transition-all duration-300 group">
            <div className="w-8 h-8 bg-gradient-to-r from-[#FF3366] to-[#9933FF] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white text-sm font-bold animate-pulse">
                {currentUser.handle?.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="text-white group-hover:text-[#FF3366] transition-colors">@{currentUser.handle}</span>
          </div>
        </div>

        {/* Stats Cards */}
        {myTrees.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 animate-fadeIn">
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#333333] hover:border-[#FF3366] transition-all duration-500 hover:scale-105 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF3366]/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <FiLink className="text-[#FF3366] text-2xl animate-pulse" />
                </div>
                <div>
                  <p className="text-[#CCCCCC] text-sm">Total Linkos</p>
                  <p className="text-white text-3xl font-bold">{myTrees.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#333333] hover:border-[#9933FF] transition-all duration-500 hover:scale-105 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#9933FF]/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <FiLink className="text-[#9933FF] text-2xl animate-bounce" />
                </div>
                <div>
                  <p className="text-[#CCCCCC] text-sm">Total Links</p>
                  <p className="text-white text-3xl font-bold">{stats.totalLinks}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Linkos Grid */}
        {myTrees.length === 0 ? (
          <div className="bg-white/5 backdrop-blur-xl p-16 rounded-3xl border border-[#333333] text-center animate-float">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#FF3366]/20 to-[#9933FF]/20 rounded-full flex items-center justify-center animate-spin-slow">
              <FiLink className="text-4xl text-[#FF3366] animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">No Linkos Yet</h2>
            <p className="text-[#CCCCCC] mb-8">Create your first Linko and start sharing your world!</p>
            <Link 
              href="/generate" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300 group"
            >
              Create Your First Linko
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {myTrees.map((tree, index) => (
              <div key={index} 
                className="group bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[#333333] hover:border-[#FF3366] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FF3366]/20 relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/0 via-[#FF3366]/0 to-[#9933FF]/0 group-hover:from-[#FF3366]/10 group-hover:via-[#9933FF]/10 group-hover:to-[#FF3366]/0 transition-all duration-500"></div>
                
                {/* Floating particles on hover */}
                {hoveredCard === index && (
                  <>
                    <div className="absolute top-10 left-10 w-1 h-1 bg-[#FF3366] rounded-full animate-ping"></div>
                    <div className="absolute bottom-10 right-10 w-1 h-1 bg-[#33CCFF] rounded-full animate-ping delay-300"></div>
                    <div className="absolute top-20 right-20 w-1 h-1 bg-[#9933FF] rounded-full animate-ping delay-700"></div>
                  </>
                )}
                
                <div className="relative z-10">
                  {/* Header with handle and date */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      {/* UNIQUE AVATAR with animation */}
                      <div className={`w-12 h-12 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-float`}>
                        {tree.pic ? (
                          <img src={tree.pic} alt={tree.handle} className="w-full h-full rounded-xl object-cover" />
                        ) : (
                          <span className="text-white font-bold text-xl animate-pulse">
                            {tree.handle?.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div>
                        <Link href={`/${tree.handle}`} className="hover:underline">
                          <h3 className="text-white font-bold text-xl group-hover:text-[#FF3366] transition-colors">
                            {tree.handle}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-2 mt-1">
                          <FiCalendar className="text-[#33CCFF] text-xs animate-pulse" />
                          <span className="text-[#CCCCCC] text-xs">
                            {new Date(tree.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Link count badge */}
                    <div className="px-3 py-1 bg-[#FF3366]/20 rounded-full group-hover:bg-[#FF3366]/30 transition-all duration-300">
                      <span className="text-[#FF3366] text-sm font-semibold animate-pulse">
                        {tree.linkCount || 0} links
                      </span>
                    </div>
                  </div>

                  {/* Preview of first few links - WITH ANIMATED ICONS */}
                  {tree.links && tree.links.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {tree.links.slice(0, 2).map((link, i) => (
                        link.url && (
                          <div key={i} className="flex items-center gap-2 text-sm group/link">
                            <div className="w-5 h-5 flex items-center justify-center">
                              {getLinkIcon(link.text, i)}
                            </div>
                            <span className="text-[#CCCCCC] truncate group-hover/link:text-white transition-colors">
                              {link.text || 'Untitled'}
                            </span>
                          </div>
                        )
                      ))}
                      {tree.links.length > 2 && (
                        <p className="text-[#33CCFF] text-xs animate-pulse">+{tree.links.length - 2} more</p>
                      )}
                    </div>
                  )}

                  {/* Action buttons with animations */}
                  <div className="flex gap-2 mt-4">
                    <Link 
                      href={`/generate?handle=${tree.handle}&edit=true`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 hover:bg-blue-500/30 hover:border-blue-400 transition-all group/btn relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></span>
                      <FiEdit className="group-hover/btn:rotate-12 transition-transform" />
                      <span>Edit</span>
                    </Link>
                    
                    <Link 
                      href={`/${tree.handle}`}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 hover:bg-green-500/30 hover:border-green-400 transition-all group/btn relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></span>
                      <FiEye className="group-hover/btn:scale-110 transition-transform" />
                      <span>View</span>
                    </Link>
                    
                    <button
                      onClick={() => deleteTree(tree.handle)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/30 hover:border-red-400 transition-all group/btn relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></span>
                      <FiTrash2 className="group-hover/btn:scale-110 transition-transform" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Create new button */}
        {myTrees.length > 0 && (
          <div className="text-center mt-8 animate-bounce">
            <Link
              href="/generate"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FF3366] to-[#9933FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#FF3366]/30 hover:scale-105 transition-all duration-300 group"
            >
              Create New Linko
              <span className="text-xl group-hover:rotate-90 transition-transform duration-300">+</span>
            </Link>
          </div>
        )}
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
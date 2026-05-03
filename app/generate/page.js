// "use client";
// //import { handler } from "next/dist/build/templates/app-page";
// import React from "react";
// import { useState } from "react";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useSearchParams } from "next/navigation";

// const Generate = () => {
//   const searchParams = useSearchParams();

//   // const [link, setlink] = useState("")
//   const [links, setlinks] = useState([{ link: "", linktext: "" }]);
//   const [handle, sethandle] = useState(searchParams.get("handle")); 
//   const [desc, setdesc] = useState("")



//   // const [linktext, setlinktext] = useState("")
//   const [pic, setpic] = useState("");

//   const handleChange = (index, link, linktext) => {
//     setlinks((initialLinks) => {
//       return initialLinks.map((item, i) => {
//         if (i == index) {
//           return { link, linktext };
//         } else {
//           return item;
//         }
//       });
//     });
//   };

//   const addLink = () => {
//     setlinks(links.concat([{ link: "", linktext: "" }]));
//   };

//   //const submitLinks = async (text, link, handle) => {
//     const submitLinks = async () => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       links: links,
//       handle: handle,
//       pic: pic,
//       "desc":desc
//     });

//     console.log(raw);

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     const r = await fetch("http://localhost:3000/api/add", requestOptions);
//     const result = await r.json();
//     if (result.success) {
//       toast.success(result.message);
//       setlinks([]);
//       setpic("");
//       sethandle("");
//     } else {
//       toast.error(result.message);
//     }
//   };

//   return (
//     <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2">
//       <div className="col1 flex justify-center items-center flex-col text-gray-900 ">
//         <div className="flex flex-col gap-5 my-8">
//           <h1 className="font-bold text-4xl">Create your Bittree</h1>
//           <div className="item">
//             <h2 className="font-semibold text-2xl">
//               Step 1: Claim your Handle
//             </h2>
//             <div className="mx-4">
//               <input
//                 value={handle || ""}
//                 onChange={(e) => {
//                   sethandle(e.target.value);
//                 }}
//                 className="px-4 py-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                 type="text"
//                 placeholder="Choose a Handle"
//               />
//             </div>
//           </div>
//           <div className="item">
//             <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
//             {links &&
//               links.map((item, index) => {
//                 return (
//                   <div key={index} className="mx-4">
//                     <input
//                       value={item.linktext || ""}
//                       onChange={(e) => {
//                         handleChange(index, item.link, e.target.value);
//                       }}
//                       className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                       type="text"
//                       placeholder="Enter link text"
//                     />
//                     <input
//                       value={item.link || ""}
//                       onChange={(e) => {
//                         handleChange(index, e.target.value, item.linktext);
//                       }}
//                       className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                       type="text"
//                       placeholder="Enter link"
//                     />
//                   </div>
//                 );
//               })}
//             <button
//               onClick={() => addLink()}
//               className="p-5 py-2 mx-2 bg-slate-900 text-white fobt-bold rounded-3xl"
//             >
//               + Add Link
//             </button>
//           </div>

//           <div className="item">
//             <h2 className="font-semibold text-2xl">
//               Step 3: Add Picture and Description
//             </h2>
//             <div className="mx-4 flex flex-col">
//               <input
//                 value={pic || ""}
//                 onChange={(e) => {
//                   setpic(e.target.value);
//                 }}
//                 className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                 type="text"
//                 placeholder="Enter link to your Picture"
//               />
//               <input
//                 value={desc || ""}
//                 onChange={(e) => {
//                   setdesc(e.target.value);
//                 }}
//                 className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                 type="text"
//                 placeholder="Enter description"
//               />
//               <button
//                 disabled={pic == "" || handle == "" || links[0].linktext == ""}
//                 onClick={() => {
//                   submitLinks();
//                 }}
//                 className="disabled:bg-slate-500 p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white fobt-bold rounded-3xl"
//               >
//                 Create your BitTree
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col2 w-full h-screen bg-[#E9C0E9]">
//         <img
//           className="h-full object-contain"
//           src="/generate.png"
//           alt="Generate your links"
//         />
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Generate;





// "use client";
// //import { handler } from "next/dist/build/templates/app-page";
// import React from "react";
// import { useState } from "react";
// import Link from "next/link";  // ← ADDED THIS IMPORT

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useSearchParams } from "next/navigation";

// const Generate = () => {
//   const searchParams = useSearchParams();

//   // const [link, setlink] = useState("")
//   const [links, setlinks] = useState([{ link: "", linktext: "" }]);
//   const [handle, sethandle] = useState(searchParams.get("handle")); 
//   const [desc, setdesc] = useState("")

//   // const [linktext, setlinktext] = useState("")
//   const [pic, setpic] = useState("");
//   // ADD THESE TWO NEW STATE VARIABLES ↓
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [createdHandle, setCreatedHandle] = useState("");

//   const handleChange = (index, link, linktext) => {
//     setlinks((initialLinks) => {
//       return initialLinks.map((item, i) => {
//         if (i == index) {
//           return { link, linktext };
//         } else {
//           return item;
//         }
//       });
//     });
//   };

//   const addLink = () => {
//     setlinks(links.concat([{ link: "", linktext: "" }]));
//   };

//   //const submitLinks = async (text, link, handle) => {
//     const submitLinks = async () => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       links: links,
//       handle: handle,
//       pic: pic,
//       "desc":desc
//     });

//     console.log(raw);

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     const r = await fetch("http://localhost:3000/api/add", requestOptions);
//     const result = await r.json();
//     if (result.success) {
//       toast.success(result.message);
//       // MODIFIED THIS SECTION ↓
//       setShowSuccess(true);           // Show success message
//       setCreatedHandle(handle);        // Save handle for the link
//       // Don't clear the form immediately so user can see their data
//       // setlinks([]);    // Commented out
//       // setpic("");       // Commented out
//       // sethandle("");    // Commented out
//     } else {
//       toast.error(result.message);
//     }
//   };

//   return (
//     <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2">
//       <div className="col1 flex justify-center items-center flex-col text-gray-900 ">
//         <div className="flex flex-col gap-5 my-8">
//           <h1 className="font-bold text-4xl">Create your Bittree</h1>
          
//           {/* ADD THIS SUCCESS MESSAGE BLOCK ↓ */}
//           {showSuccess && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
//               <strong className="font-bold">Success! </strong>
//               <span className="block sm:inline">Your BitTree has been created.</span>
//               <div className="mt-3">
//                 <Link 
//                   href={`/${createdHandle}`}
//                   className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block"
//                   target="_blank"
//                 >
//                   🔗 View your BitTree: /{createdHandle}
//                 </Link>
//               </div>
//             </div>
//           )}

//           <div className="item">
//             <h2 className="font-semibold text-2xl">
//               Step 1: Claim your Handle
//             </h2>
//             <div className="mx-4">
//               <input
//                 value={handle || ""}
//                 onChange={(e) => {
//                   sethandle(e.target.value);
//                 }}
//                 className="px-4 py-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                 type="text"
//                 placeholder="Choose a Handle"
//               />
//             </div>
//           </div>
//           <div className="item">
//             <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
//             {links &&
//               links.map((item, index) => {
//                 return (
//                   <div key={index} className="mx-4">
//                     <input
//                       value={item.linktext || ""}
//                       onChange={(e) => {
//                         handleChange(index, item.link, e.target.value);
//                       }}
//                       className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                       type="text"
//                       placeholder="Enter link text"
//                     />
//                     <input
//                       value={item.link || ""}
//                       onChange={(e) => {
//                         handleChange(index, e.target.value, item.linktext);
//                       }}
//                       className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                       type="text"
//                       placeholder="Enter link"
//                     />
//                   </div>
//                 );
//               })}
//             <button
//               onClick={() => addLink()}
//               className="p-5 py-2 mx-2 bg-slate-900 text-white fobt-bold rounded-3xl"
//             >
//               + Add Link
//             </button>
//           </div>

//           <div className="item">
//             <h2 className="font-semibold text-2xl">
//               Step 3: Add Picture and Description
//             </h2>
//             <div className="mx-4 flex flex-col">
//               <input
//                 value={pic || ""}
//                 onChange={(e) => {
//                   setpic(e.target.value);
//                 }}
//                 className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                 type="text"
//                 placeholder="Enter link to your Picture"
//               />
//               <input
//                 value={desc || ""}
//                 onChange={(e) => {
//                   setdesc(e.target.value);
//                 }}
//                 className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                 type="text"
//                 placeholder="Enter description"
//               />
//               <button
//                 disabled={pic == "" || handle == "" || links[0].linktext == ""}
//                 onClick={() => {
//                   submitLinks();
//                 }}
//                 className="disabled:bg-slate-500 p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white fobt-bold rounded-3xl"
//               >
//                 Create your BitTree
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col2 w-full h-screen bg-[#E9C0E9">
//         <img
//           className="h-full object-contain"
//           src="/generate.png"
//           alt="Generate your links"
//         />
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Generate;




// "use client";
// //import { handler } from "next/dist/build/templates/app-page";
// import React from "react";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useSearchParams, useRouter } from "next/navigation";

// const Generate = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   // const [link, setlink] = useState("")
//   const [links, setlinks] = useState([{ link: "", linktext: "" }]);
//   const [handle, sethandle] = useState(searchParams.get("handle")); 
//   const [desc, setdesc] = useState("")
//   const [pic, setpic] = useState("");
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [createdHandle, setCreatedHandle] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   // ✅ Check if we're in edit mode
//   const isEditMode = searchParams.get("edit") === "true";
//   const editHandle = searchParams.get("handle");

//   // ✅ Load data when in edit mode
//   useEffect(() => {
//     if (isEditMode && editHandle) {
//       loadExistingData(editHandle);
//     }
//   }, [isEditMode, editHandle]);

//   const loadExistingData = async (handle) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`/api/get?handle=${handle}`);
//       const result = await response.json();
      
//       if (result.success) {
//         setlinks(result.data.links || [{ link: "", linktext: "" }]);
//         setdesc(result.data.desc || "");
//         setpic(result.data.pic || "");
//         toast.info("Data loaded for editing");
//       } else {
//         toast.error("Could not load existing data");
//       }
//     } catch (error) {
//       toast.error("Error loading data");
//     }
//     setIsLoading(false);
//   };

//   const handleChange = (index, link, linktext) => {
//     setlinks((initialLinks) => {
//       return initialLinks.map((item, i) => {
//         if (i == index) {
//           return { link, linktext };
//         } else {
//           return item;
//         }
//       });
//     });
//   };

//   const addLink = () => {
//     setlinks(links.concat([{ link: "", linktext: "" }]));
//   };

//   const submitLinks = async () => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       links: links,
//       handle: handle,
//       pic: pic,
//       "desc": desc
//     });

//     console.log(raw);

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     const r = await fetch("http://localhost:3000/api/add", requestOptions);
//     const result = await r.json();
//     if (result.success) {
//       toast.success(result.message);
//       setShowSuccess(true);
//       setCreatedHandle(handle);
      
//       // Save to localStorage
//       const existing = JSON.parse(localStorage.getItem('myBittrees') || '[]');
      
//       // Check if already exists to avoid duplicates
//       const exists = existing.some(tree => tree.handle === handle);
//       if (!exists) {
//         existing.push({ 
//           handle: handle, 
//           date: new Date().toISOString(),
//           links: links.length 
//         });
//         localStorage.setItem('myBittrees', JSON.stringify(existing));
//       }
      
//       // Don't clear the form immediately so user can see their data
//     } else {
//       toast.error(result.message);
//     }
//   };

//   return (
//     <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2">
//       <div className="col1 flex justify-center items-center flex-col text-gray-900 ">
//         <div className="flex flex-col gap-5 my-8">
//           {/* Show Edit mode title if in edit mode */}
//           <h1 className="font-bold text-4xl">
//             {isEditMode ? "Edit your Linko" : "Create your Linko"}
//           </h1>
          
//           {/* Loading indicator */}
//           {isLoading && (
//             <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4">
//               Loading your data...
//             </div>
//           )}

//           {/* Success message */}
//           {showSuccess && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
//               <strong className="font-bold">Success! </strong>
//               <span className="block sm:inline">Your Linko has been created.</span>
//               <div className="mt-3">
//                 <Link 
//                   href={`/${createdHandle}`}
//                   className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block"
//                   target="_blank"
//                 >
//                   🔗 View your Linko: /{createdHandle}
//                 </Link>
//               </div>
//             </div>
//           )}

//           <div className="item">
//             <h2 className="font-semibold text-2xl">
//               Step 1: Claim your Handle
//             </h2>
//             <div className="mx-4">
//               <input
//                 value={handle || ""}
//                 onChange={(e) => {
//                   sethandle(e.target.value);
//                 }}
//                 className="px-4 py-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                 type="text"
//                 placeholder="Choose a Handle"
//                 disabled={isEditMode} // Disable handle editing in edit mode
//               />
//               {isEditMode && (
//                 <p className="text-sm text-gray-600 mt-1">Handle cannot be changed</p>
//               )}
//             </div>
//           </div>

//           <div className="item">
//             <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
//             {links &&
//               links.map((item, index) => {
//                 return (
//                   <div key={index} className="mx-4">
//                     <input
//                       value={item.linktext || ""}
//                       onChange={(e) => {
//                         handleChange(index, item.link, e.target.value);
//                       }}
//                       className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                       type="text"
//                       placeholder="Enter link text"
//                     />
//                     <input
//                       value={item.link || ""}
//                       onChange={(e) => {
//                         handleChange(index, e.target.value, item.linktext);
//                       }}
//                       className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                       type="text"
//                       placeholder="Enter link"
//                     />
//                   </div>
//                 );
//               })}
//             <button
//               onClick={() => addLink()}
//               className="p-5 py-2 mx-2 bg-slate-900 text-white fobt-bold rounded-3xl"
//             >
//               + Add Link
//             </button>
//           </div>

//           <div className="item">
//             <h2 className="font-semibold text-2xl">
//               Step 3: Add Picture and Description
//             </h2>
//             <div className="mx-4 flex flex-col">
//               <input
//                 value={pic || ""}
//                 onChange={(e) => {
//                   setpic(e.target.value);
//                 }}
//                 className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                 type="text"
//                 placeholder="Enter link to your Picture"
//               />
//               <input
//                 value={desc || ""}
//                 onChange={(e) => {
//                   setdesc(e.target.value);
//                 }}
//                 className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white text-black"
//                 type="text"
//                 placeholder="Enter description"
//               />
//               <button
//                 disabled={pic == "" || handle == "" || links[0].linktext == "" || isLoading}
//                 onClick={() => {
//                   submitLinks();
//                 }}
//                 className="disabled:bg-slate-500 p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white fobt-bold rounded-3xl"
//               >
//                 {isEditMode ? "Update your Linko" : "Create your Linko"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col2 w-full h-screen bg-[#E9C0E9">
//         <img
//           className="h-full object-contain"
//           src="/generate.png"
//           alt="Generate your links"
//         />
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Generate;

// "use client"
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("ruts") // Pre-filled as in screenshot
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     router.push(`/preview?handle=${handle}`)
//   }

//   return (
//     <main className="min-h-screen bg-[#0A0A0F]">
//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       <div className="max-w-3xl mx-auto px-4 py-8">
//         {/* Header with gradient */}
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
//           <span className="text-white">Create your</span>
//           <br />
//           <span className="bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">
//             Linko
//           </span>
//         </h1>

//         {/* Progress Steps */}
//         <div className="flex justify-center gap-2 mb-12">
//           <div className="w-16 h-1 bg-gradient-to-r from-[#FF3366] to-[#9933FF] rounded-full"></div>
//           <div className="w-16 h-1 bg-[#333333] rounded-full"></div>
//           <div className="w-16 h-1 bg-[#333333] rounded-full"></div>
//         </div>

//         {/* Step 1 */}
//         <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 mb-6">
//           <h2 className="text-xl font-bold text-white mb-4">
//             Step 1: <span className="text-[#33CCFF]">Claim your Handle</span>
//           </h2>
          
//           <div className="flex items-center gap-2">
//             <span className="text-[#33CCFF] bg-[#1A1A1A] px-3 py-3 rounded-l-lg border border-[#333333] border-r-0">
//               linko.com/
//             </span>
//             <input
//               value={handle}
//               onChange={(e) => setHandle(e.target.value)}
//               className="flex-1 px-4 py-3 bg-transparent border border-[#333333] rounded-r-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//               type="text"
//               placeholder="yourname"
//             />
//           </div>
//           <p className="text-[#33CCFF] text-sm mt-2 flex items-center gap-1">
//             <span className="text-lg">✓</span> Available!
//           </p>
//         </div>

//         {/* Step 2 */}
//         <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 mb-6">
//           <h2 className="text-xl font-bold text-white mb-4">
//             Step 2: <span className="text-[#33CCFF]">Add Links</span>
//           </h2>
          
//           {links.map((link, index) => (
//             <div key={index} className="mb-4">
//               <input
//                 value={link.text}
//                 onChange={(e) => {
//                   const newLinks = [...links]
//                   newLinks[index].text = e.target.value
//                   setLinks(newLinks)
//                 }}
//                 className="w-full mb-2 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                 type="text"
//                 placeholder="Enter link text (e.g. My Portfolio)"
//               />
//               <input
//                 value={link.url}
//                 onChange={(e) => {
//                   const newLinks = [...links]
//                   newLinks[index].url = e.target.value
//                   setLinks(newLinks)
//                 }}
//                 className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                 type="text"
//                 placeholder="Enter link (e.g. https://)"
//               />
//             </div>
//           ))}

//           <button
//             onClick={addLink}
//             className="mt-2 text-[#33CCFF] hover:text-[#FF3366] transition flex items-center gap-1"
//           >
//             <span className="text-xl">+</span> Add Link
//           </button>
//         </div>

//         {/* Step 3 */}
//         <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 mb-8">
//           <h2 className="text-xl font-bold text-white mb-4">
//             Step 3: <span className="text-[#33CCFF]">Add Picture and Description</span>
//           </h2>
          
//           <input
//             value={picture}
//             onChange={(e) => setPicture(e.target.value)}
//             className="w-full mb-3 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//             type="text"
//             placeholder="Enter link to your Picture"
//           />
          
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             rows="3"
//             className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//             placeholder="Enter description"
//           />
//         </div>

//         {/* Create Button */}
//         <button
//           onClick={createLinko}
//           className="w-full py-4 text-white font-bold text-lg rounded-lg hover:scale-105 transition-all duration-300"
//           style={{
//             background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//             boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//           }}
//         >
//           Create your Linko
//         </button>
//       </div>
//     </main>
//   )
// }


// "use client"
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("ruts") // Pre-filled as in screenshot
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     router.push(`/preview?handle=${handle}`)
//   }

//   return (
//     <main className="min-h-screen bg-[#0A0A0F]">
//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       <div className="max-w-3xl mx-auto px-4 py-8">
//         {/* Header with gradient */}
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
//           <span className="text-white">Create your</span>
//           <br />
//           <span className="bg-gradient-to-r from-[#FF3366] to-[#9933FF] bg-clip-text text-transparent">
//             Linko
//           </span>
//         </h1>

//         {/* IMAGE ADDED HERE - Preview Image */}
//         <div className="mb-10 flex justify-center">
//           <img 
//             src="/preview.png" 
//             alt="Linko Preview" 
//             className="rounded-xl border border-[#333333] max-w-full h-auto shadow-2xl"
//           />
//         </div>

//         {/* Progress Steps */}
//         <div className="flex justify-center gap-2 mb-12">
//           <div className="w-16 h-1 bg-gradient-to-r from-[#FF3366] to-[#9933FF] rounded-full"></div>
//           <div className="w-16 h-1 bg-[#333333] rounded-full"></div>
//           <div className="w-16 h-1 bg-[#333333] rounded-full"></div>
//         </div>

//         {/* Step 1 */}
//         <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 mb-6">
//           <h2 className="text-xl font-bold text-white mb-4">
//             Step 1: <span className="text-[#33CCFF]">Claim your Handle</span>
//           </h2>
          
//           <div className="flex items-center gap-2">
//             <span className="text-[#33CCFF] bg-[#1A1A1A] px-3 py-3 rounded-l-lg border border-[#333333] border-r-0">
//               linko.io/
//             </span>
//             <input
//               value={handle}
//               onChange={(e) => setHandle(e.target.value)}
//               className="flex-1 px-4 py-3 bg-transparent border border-[#333333] rounded-r-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//               type="text"
//               placeholder="yourname"
//             />
//           </div>
//           <p className="text-[#33CCFF] text-sm mt-2 flex items-center gap-1">
//             <span className="text-lg">✓</span> Available!
//           </p>
//         </div>

//         {/* Step 2 */}
//         <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 mb-6">
//           <h2 className="text-xl font-bold text-white mb-4">
//             Step 2: <span className="text-[#33CCFF]">Add Links</span>
//           </h2>
          
//           {links.map((link, index) => (
//             <div key={index} className="mb-4">
//               <input
//                 value={link.text}
//                 onChange={(e) => {
//                   const newLinks = [...links]
//                   newLinks[index].text = e.target.value
//                   setLinks(newLinks)
//                 }}
//                 className="w-full mb-2 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                 type="text"
//                 placeholder="Enter link text (e.g. My Portfolio)"
//               />
//               <input
//                 value={link.url}
//                 onChange={(e) => {
//                   const newLinks = [...links]
//                   newLinks[index].url = e.target.value
//                   setLinks(newLinks)
//                 }}
//                 className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//                 type="text"
//                 placeholder="Enter link (e.g. https://)"
//               />
//             </div>
//           ))}

//           <button
//             onClick={addLink}
//             className="mt-2 text-[#33CCFF] hover:text-[#FF3366] transition flex items-center gap-1"
//           >
//             <span className="text-xl">+</span> Add Link
//           </button>
//         </div>

//         {/* Step 3 */}
//         <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 mb-8">
//           <h2 className="text-xl font-bold text-white mb-4">
//             Step 3: <span className="text-[#33CCFF]">Add Picture and Description</span>
//           </h2>
          
//           <input
//             value={picture}
//             onChange={(e) => setPicture(e.target.value)}
//             className="w-full mb-3 px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//             type="text"
//             placeholder="Enter link to your Picture"
//           />
          
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             rows="3"
//             className="w-full px-4 py-3 bg-transparent border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#FF3366]"
//             placeholder="Enter description"
//           />
//         </div>

//         {/* Create Button */}
//         <button
//           onClick={createLinko}
//           className="w-full py-4 text-white font-bold text-lg rounded-lg hover:scale-105 transition-all duration-300"
//           style={{
//             background: 'linear-gradient(135deg, #FF3366, #9933FF)',
//             boxShadow: '0 10px 20px rgba(255,51,102,0.3)'
//           }}
//         >
//           Create your Linko
//         </button>
//       </div>
//     </main>
//   )
// }


// "use client"
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     router.push(`/preview?handle=${handle}`)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1a103d] to-[#0A0A0F]">
//       {/* Animated background blobs */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#33CCFF]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#9933FF]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         {/* Header with animation */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF3366] via-[#33CCFF] to-[#9933FF] bg-clip-text text-transparent animate-pulse">
//               Linko Universe
//             </span>
//           </h1>
//           <p className="text-gray-400 text-lg">One link to rule them all ✨</p>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN - Form with animated steps */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#333333]'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#9933FF]' : 'bg-[#333333]'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#33CCFF] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#33CCFF] bg-white/10 px-4 py-3 rounded-l-xl border border-[#333333] border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#333333] rounded-r-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF3366] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#33CCFF] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#33CCFF] rounded-full animate-ping"></span>
//                 Available! Grab it fast 🚀
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#33CCFF] shadow-lg shadow-[#33CCFF]/20' : 'border-[#333333]'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#33CCFF] to-[#FF3366]' : 'bg-[#333333]'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#33CCFF] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#33CCFF] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#333333] rounded-xl text-[#33CCFF] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#9933FF] shadow-lg shadow-[#9933FF]/20' : 'border-[#333333]'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#9933FF] to-[#33CCFF]' : 'bg-[#333333]'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#9933FF] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#9933FF] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             {/* Create Button */}
//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #33CCFF, #9933FF)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">✨ Create Your Linko Universe ✨</span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN - Image with floating effects */}
//           <div className="relative flex items-center justify-center">
//             {/* Animated background */}
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#33CCFF]/30 to-[#9933FF]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             {/* Image with floating animation - CHANGED TO girl.png */}
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#333333] shadow-2xl"
//               />
              
//               {/* Floating badges */}
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#9933FF] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">NEW! 🔥</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#33CCFF] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add animations */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }



// "use client"
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     router.push(`/preview?handle=${handle}`)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       {/* Animated background blobs - Pink theme */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF69B4]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#FF1493]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#FFB6C1]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         {/* Header with pink gradient */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#FFB6C1] bg-clip-text text-transparent animate-pulse">
//               Pink Universe
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg">Everything is better in pink ✨</p>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN - Form with pink theme */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF69B4] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#FFB6C1] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#FFB6C1] bg-white/10 px-4 py-3 rounded-l-xl border border-[#FF1493]/30 border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#FFB6C1] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#FFB6C1] rounded-full animate-ping"></span>
//                 Available in pink! 💖
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#FF1493] shadow-lg shadow-[#FF1493]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#FF1493] to-[#FF69B4]' : 'bg-[#FF1493]/30'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#FF1493]/30 rounded-xl text-[#FFB6C1] hover:text-[#FF69B4] hover:border-[#FF69B4] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#FFB6C1] shadow-lg shadow-[#FFB6C1]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#FFB6C1] to-[#FF69B4]' : 'bg-[#FF1493]/30'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB6C1] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB6C1] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             {/* Create Button - Pink gradient */}
//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF69B4, #FF1493, #FFB6C1)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">💖 Create Your Pink Universe 💖</span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN - Image with pink floating effects */}
//           <div className="relative flex items-center justify-center">
//             {/* Animated background - Pink */}
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF69B4]/30 via-[#FF1493]/30 to-[#FFB6C1]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF69B4]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             {/* Image with floating animation */}
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#FF69B4]/30 shadow-2xl"
//               />
              
//               {/* Floating badges - Pink */}
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">PINK! 💖</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#FFB6C1] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add animations */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }




// "use client"
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     router.push(`/preview?handle=${handle}`)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1a103d] to-[#0A0A0F]">
//       {/* Animated background blobs */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#33CCFF]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#9933FF]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF3366] via-[#33CCFF] to-[#9933FF] bg-clip-text text-transparent">
//               LINKO Universe
//             </span>
//           </h1>
//           <p className="text-gray-400 text-lg">One link to rule them all ✨</p>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN - Form */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#333333]'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#9933FF]' : 'bg-[#333333]'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#33CCFF] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#33CCFF] bg-white/10 px-4 py-3 rounded-l-xl border border-[#333333] border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#333333] rounded-r-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF3366] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#33CCFF] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#33CCFF] rounded-full animate-ping"></span>
//                 Available! Grab it fast 🚀
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#33CCFF] shadow-lg shadow-[#33CCFF]/20' : 'border-[#333333]'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#33CCFF] to-[#FF3366]' : 'bg-[#333333]'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#33CCFF] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#33CCFF] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#333333] rounded-xl text-[#33CCFF] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#9933FF] shadow-lg shadow-[#9933FF]/20' : 'border-[#333333]'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#9933FF] to-[#33CCFF]' : 'bg-[#333333]'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#9933FF] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#9933FF] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             {/* Create Button */}
//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #33CCFF, #9933FF)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">✨ Create Your LINKO Universe ✨</span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN - Preview */}
//           <div className="relative flex items-center justify-center">
//             {/* Animated background */}
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#33CCFF]/30 to-[#9933FF]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             {/* Image */}
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#333333] shadow-2xl"
//               />
              
//               {/* Badges */}
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#9933FF] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">LINKO</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#33CCFF] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add animations */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }


// "use client"
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     router.push(`/preview?handle=${handle}`)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       {/* Animated background blobs - Dark Pink theme */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#FF1493]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#FF69B4]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         {/* Header with dark pink gradient */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF3366] via-[#FF1493] to-[#FF69B4] bg-clip-text text-transparent">
//               LINKO Universe
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg">One link to rule them all ✨</p>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN - Form with dark pink theme */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#FF69B4] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#FF69B4] bg-white/10 px-4 py-3 rounded-l-xl border border-[#FF1493]/30 border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF3366] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#FF69B4] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-ping"></span>
//                 Available! Grab it fast 🚀
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#FF1493] shadow-lg shadow-[#FF1493]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#FF1493] to-[#FF3366]' : 'bg-[#FF1493]/30'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#FF1493]/30 rounded-xl text-[#FF69B4] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#FF69B4] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             {/* Create Button - Dark Pink gradient */}
//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #FF1493, #FF69B4)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">✨ Create Your LINKO Universe ✨</span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN - Image with dark pink floating effects */}
//           <div className="relative flex items-center justify-center">
//             {/* Animated background - Dark Pink */}
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#FF1493]/30 to-[#FF69B4]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             {/* Image with floating animation */}
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#FF3366]/30 shadow-2xl"
//               />
              
//               {/* Floating badges - Dark Pink */}
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#FF1493] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">LINKO</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#FF69B4] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add animations */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }



// "use client"
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     if (!handle) {
//       alert("Please enter a handle first!")
//       return
//     }
    
//     // SAVE ALL DATA to localStorage so preview page can access it
//     localStorage.setItem('linkoHandle', handle)
//     localStorage.setItem('linkoLinks', JSON.stringify(links))
//     localStorage.setItem('linkoPicture', picture)
//     localStorage.setItem('linkoDescription', description)
    
//     // Navigate to preview page
//     router.push(`/preview/${handle}`)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       {/* Animated background blobs - Dark Pink theme */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#FF1493]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#FF69B4]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         {/* Header with dark pink gradient */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF3366] via-[#FF1493] to-[#FF69B4] bg-clip-text text-transparent">
//               LINKO Universe
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg">One link to rule them all ✨</p>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN - Form with dark pink theme */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#FF69B4] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#FF69B4] bg-white/10 px-4 py-3 rounded-l-xl border border-[#FF1493]/30 border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF3366] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#FF69B4] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-ping"></span>
//                 Available! Grab it fast 🚀
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#FF1493] shadow-lg shadow-[#FF1493]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#FF1493] to-[#FF3366]' : 'bg-[#FF1493]/30'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#FF1493]/30 rounded-xl text-[#FF69B4] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#FF69B4] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             {/* Create Button - Dark Pink gradient */}
//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #FF1493, #FF69B4)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">✨ Create Your LINKO Universe ✨</span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN - Image with dark pink floating effects */}
//           <div className="relative flex items-center justify-center">
//             {/* Animated background - Dark Pink */}
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#FF1493]/30 to-[#FF69B4]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             {/* Image with floating animation */}
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#FF3366]/30 shadow-2xl"
//               />
              
//               {/* Floating badges - Dark Pink */}
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#FF1493] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">LINKO</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#FF69B4] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add animations */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }

// "use client"
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     if (!handle) {
//       alert("Please enter a handle first!")
//       return
//     }
    
//     // SAVE ALL DATA to localStorage so preview page can access it
//     localStorage.setItem('linkoHandle', handle)
//     localStorage.setItem('linkoLinks', JSON.stringify(links))
//     localStorage.setItem('linkoPicture', picture)
//     localStorage.setItem('linkoDescription', description)
    
//     // Navigate to preview page - FIXED: removed /preview/ folder
//     router.push(`/${handle}`)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       {/* Animated background blobs - Dark Pink theme */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#FF1493]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#FF69B4]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         {/* Header with dark pink gradient */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF3366] via-[#FF1493] to-[#FF69B4] bg-clip-text text-transparent">
//               LINKO Universe
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg">One link to rule them all ✨</p>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN - Form with dark pink theme */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#FF69B4] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#FF69B4] bg-white/10 px-4 py-3 rounded-l-xl border border-[#FF1493]/30 border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF3366] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#FF69B4] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-ping"></span>
//                 Available! Grab it fast 🚀
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#FF1493] shadow-lg shadow-[#FF1493]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#FF1493] to-[#FF3366]' : 'bg-[#FF1493]/30'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#FF1493]/30 rounded-xl text-[#FF69B4] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#FF69B4] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             {/* Create Button - Dark Pink gradient */}
//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #FF1493, #FF69B4)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">✨ Create Your LINKO Universe ✨</span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN - Image with dark pink floating effects */}
//           <div className="relative flex items-center justify-center">
//             {/* Animated background - Dark Pink */}
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#FF1493]/30 to-[#FF69B4]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             {/* Image with floating animation */}
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#FF3366]/30 shadow-2xl"
//               />
              
//               {/* Floating badges - Dark Pink */}
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#FF1493] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">LINKO</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#FF69B4] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add animations */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }

// "use client"
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     if (!handle) {
//       toast.error("Please enter a handle first!")
//       return
//     }

//     // Check if handle already exists in My Linkos
//     const existing = JSON.parse(localStorage.getItem('myLinkos') || '[]')
//     const handleExists = existing.some(item => item.handle === handle)
    
//     if (handleExists) {
//       toast.error("This Linko already exists!")
//       return
//     }
    
//     // Create new Linko object
//     const newLinko = {
//       handle: handle,
//       links: links.filter(l => l.text && l.url), // Only save filled links
//       pic: picture,
//       desc: description,
//       date: new Date().toISOString(),
//       linkCount: links.filter(l => l.text && l.url).length
//     }
    
//     // Save to My Linkos list
//     existing.push(newLinko)
//     localStorage.setItem('myLinkos', JSON.stringify(existing))
    
//     // Save current for preview
//     localStorage.setItem('linkoHandle', handle)
//     localStorage.setItem('linkoLinks', JSON.stringify(links))
//     localStorage.setItem('linkoPicture', picture)
//     localStorage.setItem('linkoDescription', description)
    
//     // Show success message
//     toast.success("✨ Your Linko has been generated successfully!")
    
//     // Navigate to preview page after short delay
//     setTimeout(() => {
//       router.push(`/${handle}`)
//     }, 1500)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       <ToastContainer 
//         position="top-center"
//         autoClose={3000}
//         theme="dark"
//       />
      
//       {/* Animated background blobs - Dark Pink theme */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#FF1493]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#FF69B4]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         {/* Header with dark pink gradient */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF3366] via-[#FF1493] to-[#FF69B4] bg-clip-text text-transparent">
//               LINKO Universe
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg">One link to rule them all ✨</p>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN - Form with dark pink theme */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#FF69B4] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#FF69B4] bg-white/10 px-4 py-3 rounded-l-xl border border-[#FF1493]/30 border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF3366] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#FF69B4] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-ping"></span>
//                 Available! Grab it fast 🚀
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#FF1493] shadow-lg shadow-[#FF1493]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#FF1493] to-[#FF3366]' : 'bg-[#FF1493]/30'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#FF1493]/30 rounded-xl text-[#FF69B4] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#FF69B4] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             {/* Create Button - Dark Pink gradient */}
//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #FF1493, #FF69B4)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">✨ Create Your LINKO Universe ✨</span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN - Image with dark pink floating effects */}
//           <div className="relative flex items-center justify-center">
//             {/* Animated background - Dark Pink */}
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#FF1493]/30 to-[#FF69B4]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             {/* Image with floating animation */}
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#FF3366]/30 shadow-2xl"
//               />
              
//               {/* Floating badges - Dark Pink */}
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#FF1493] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">LINKO</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#FF69B4] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add animations */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }


// "use client"
// import React, { useState, useEffect } from "react";  // Added useEffect
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)

//   // 👇 ADD THIS useEffect FOR EDIT FUNCTIONALITY
//   useEffect(() => {
//     // Check if we're in edit mode
//     const params = new URLSearchParams(window.location.search);
//     const editHandle = params.get('handle');
//     const isEdit = params.get('edit');
    
//     if (editHandle && isEdit) {
//       // Get all saved linkos
//       const saved = JSON.parse(localStorage.getItem('myLinkos') || '[]');
//       const linkoToEdit = saved.find(item => item.handle === editHandle);
      
//       if (linkoToEdit) {
//         // Load data into form
//         setHandle(linkoToEdit.handle);
//         setLinks(linkoToEdit.links.length ? linkoToEdit.links : [{ text: "", url: "" }]);
//         setPicture(linkoToEdit.pic || "");
//         setDescription(linkoToEdit.desc || "");
        
//         toast.info(`Editing @${linkoToEdit.handle}`);
//       }
//     }
//   }, []);

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   // 👇 UPDATED createLinko FUNCTION WITH EDIT SUPPORT
//   const createLinko = () => {
//     if (!handle) {
//       toast.error("Please enter a handle first!")
//       return
//     }

//     // Get existing linkos
//     const existing = JSON.parse(localStorage.getItem('myLinkos') || '[]')
    
//     // Check if we're in edit mode
//     const params = new URLSearchParams(window.location.search);
//     const editHandle = params.get('handle');
//     const isEdit = params.get('edit');
    
//     // Create new Linko object
//     const newLinko = {
//       handle: handle,
//       links: links.filter(l => l.text && l.url), // Only save filled links
//       pic: picture,
//       desc: description,
//       date: new Date().toISOString(),
//       linkCount: links.filter(l => l.text && l.url).length
//     }
    
//     if (isEdit && editHandle) {
//       // UPDATE existing linko
//       const index = existing.findIndex(item => item.handle === editHandle);
//       if (index !== -1) {
//         existing[index] = newLinko;
//         localStorage.setItem('myLinkos', JSON.stringify(existing));
//         toast.success("✨ Linko updated successfully!");
//       }
//     } else {
//       // CREATE new linko - Check if handle already exists
//       const handleExists = existing.some(item => item.handle === handle)
      
//       if (handleExists) {
//         toast.error("This Linko already exists!")
//         return
//       }
      
//       // Save to My Linkos list
//       existing.push(newLinko)
//       localStorage.setItem('myLinkos', JSON.stringify(existing))
//       toast.success("✨ Your Linko has been generated successfully!")
//     }
    
//     // Save current for preview
//     localStorage.setItem('linkoHandle', handle)
//     localStorage.setItem('linkoLinks', JSON.stringify(links))
//     localStorage.setItem('linkoPicture', picture)
//     localStorage.setItem('linkoDescription', description)
    
//     // Navigate to preview page after short delay
//     setTimeout(() => {
//       router.push(`/${handle}`)
//     }, 1500)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       <ToastContainer 
//         position="top-center"
//         autoClose={3000}
//         theme="dark"
//       />
      
//       {/* Animated background blobs - Dark Pink theme */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#FF1493]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#FF69B4]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       {/* Navbar spacer */}
//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         {/* Header with dark pink gradient */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF3366] via-[#FF1493] to-[#FF69B4] bg-clip-text text-transparent">
//               LINKO Universe
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg">One link to rule them all ✨</p>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN - Form with dark pink theme */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#FF69B4] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#FF69B4] bg-white/10 px-4 py-3 rounded-l-xl border border-[#FF1493]/30 border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF3366] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#FF69B4] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-ping"></span>
//                 Available! Grab it fast 🚀
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#FF1493] shadow-lg shadow-[#FF1493]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#FF1493] to-[#FF3366]' : 'bg-[#FF1493]/30'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#FF1493]/30 rounded-xl text-[#FF69B4] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#FF69B4] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             {/* Create Button - Dark Pink gradient */}
//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #FF1493, #FF69B4)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">✨ Create Your LINKO Universe ✨</span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN - Image with dark pink floating effects */}
//           <div className="relative flex items-center justify-center">
//             {/* Animated background - Dark Pink */}
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#FF1493]/30 to-[#FF69B4]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             {/* Image with floating animation */}
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#FF3366]/30 shadow-2xl"
//               />
              
//               {/* Floating badges - Dark Pink */}
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#FF1493] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">LINKO</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#FF69B4] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add animations */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }



// "use client"
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)

//   // 👇 GET HANDLE FROM URL (when coming from homepage)
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const urlHandle = params.get('handle');
//     const editHandle = params.get('handle');
//     const isEdit = params.get('edit');
    
//     // If handle is in URL (from homepage), set it
//     if (urlHandle && !isEdit) {
//       setHandle(urlHandle);
//       toast.info(`Creating Linko for @${urlHandle}`);
//     }
    
//     // Check if we're in edit mode
//     if (editHandle && isEdit) {
//       const saved = JSON.parse(localStorage.getItem('myLinkos') || '[]');
//       const linkoToEdit = saved.find(item => item.handle === editHandle);
      
//       if (linkoToEdit) {
//         setHandle(linkoToEdit.handle);
//         setLinks(linkoToEdit.links.length ? linkoToEdit.links : [{ text: "", url: "" }]);
//         setPicture(linkoToEdit.pic || "");
//         setDescription(linkoToEdit.desc || "");
//         toast.info(`Editing @${linkoToEdit.handle}`);
//       }
//     }
//   }, []);

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     if (!handle) {
//       toast.error("Please enter a handle first!")
//       return
//     }

//     const existing = JSON.parse(localStorage.getItem('myLinkos') || '[]')
    
//     const params = new URLSearchParams(window.location.search);
//     const editHandle = params.get('handle');
//     const isEdit = params.get('edit');
    
//     const newLinko = {
//       handle: handle,
//       links: links.filter(l => l.text && l.url),
//       pic: picture,
//       desc: description,
//       date: new Date().toISOString(),
//       linkCount: links.filter(l => l.text && l.url).length
//     }
    
//     if (isEdit && editHandle) {
//       const index = existing.findIndex(item => item.handle === editHandle);
//       if (index !== -1) {
//         existing[index] = newLinko;
//         localStorage.setItem('myLinkos', JSON.stringify(existing));
//         toast.success("✨ Linko updated successfully!");
//       }
//     } else {
//       const handleExists = existing.some(item => item.handle === handle)
      
//       if (handleExists) {
//         toast.error("This Linko already exists!")
//         return
//       }
      
//       existing.push(newLinko)
//       localStorage.setItem('myLinkos', JSON.stringify(existing))
//       toast.success("✨ Your Linko has been generated successfully!")
//     }
    
//     localStorage.setItem('linkoHandle', handle)
//     localStorage.setItem('linkoLinks', JSON.stringify(links))
//     localStorage.setItem('linkoPicture', picture)
//     localStorage.setItem('linkoDescription', description)
    
//     setTimeout(() => {
//       router.push(`/${handle}`)
//     }, 1500)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#FF1493]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#FF69B4]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF3366] via-[#FF1493] to-[#FF69B4] bg-clip-text text-transparent">
//               LINKO Universe
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg">One link to rule them all ✨</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#FF69B4] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#FF69B4] bg-white/10 px-4 py-3 rounded-l-xl border border-[#FF1493]/30 border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF3366] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#FF69B4] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-ping"></span>
//                 Available! Grab it fast 🚀
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#FF1493] shadow-lg shadow-[#FF1493]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#FF1493] to-[#FF3366]' : 'bg-[#FF1493]/30'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#FF1493]/30 rounded-xl text-[#FF69B4] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#FF69B4] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #FF1493, #FF69B4)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">✨ Create Your LINKO Universe ✨</span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="relative flex items-center justify-center">
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#FF1493]/30 to-[#FF69B4]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#FF3366]/30 shadow-2xl"
//               />
              
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#FF1493] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">LINKO</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#FF69B4] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }


// "use client"
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)
//   // 👇 ADD THIS - Track edit mode
//   const [isEditMode, setIsEditMode] = useState(false);

//   // 👇 UPDATED useEffect WITH EDIT MODE DETECTION
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const urlHandle = params.get('handle');
//     const editHandle = params.get('handle');
//     const isEdit = params.get('edit');
    
//     // Set edit mode if edit=true
//     if (isEdit) {
//       setIsEditMode(true);
//     }
    
//     // If handle is in URL (from homepage), set it
//     if (urlHandle && !isEdit) {
//       setHandle(urlHandle);
//       toast.info(`Creating Linko for @${urlHandle}`);
//     }
    
//     // Check if we're in edit mode
//     if (editHandle && isEdit) {
//       const saved = JSON.parse(localStorage.getItem('myLinkos') || '[]');
//       const linkoToEdit = saved.find(item => item.handle === editHandle);
      
//       if (linkoToEdit) {
//         setHandle(linkoToEdit.handle);
//         setLinks(linkoToEdit.links.length ? linkoToEdit.links : [{ text: "", url: "" }]);
//         setPicture(linkoToEdit.pic || "");
//         setDescription(linkoToEdit.desc || "");
//         setIsEditMode(true);
//         toast.info(`Editing @${linkoToEdit.handle}`);
//       }
//     }
//   }, []);

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     if (!handle) {
//       toast.error("Please enter a handle first!")
//       return
//     }

//     const existing = JSON.parse(localStorage.getItem('myLinkos') || '[]')
    
//     const params = new URLSearchParams(window.location.search);
//     const editHandle = params.get('handle');
//     const isEdit = params.get('edit');
    
//     const newLinko = {
//       handle: handle,
//       links: links.filter(l => l.text && l.url),
//       pic: picture,
//       desc: description,
//       date: new Date().toISOString(),
//       linkCount: links.filter(l => l.text && l.url).length
//     }
    
//     if (isEdit && editHandle) {
//       const index = existing.findIndex(item => item.handle === editHandle);
//       if (index !== -1) {
//         existing[index] = newLinko;
//         localStorage.setItem('myLinkos', JSON.stringify(existing));
//         toast.success("✨ Linko updated successfully!");
//       }
//     } else {
//       const handleExists = existing.some(item => item.handle === handle)
      
//       if (handleExists) {
//         toast.error("This Linko already exists!")
//         return
//       }
      
//       existing.push(newLinko)
//       localStorage.setItem('myLinkos', JSON.stringify(existing))
//       toast.success("✨ Your Linko has been generated successfully!")
//     }
    
//     localStorage.setItem('linkoHandle', handle)
//     localStorage.setItem('linkoLinks', JSON.stringify(links))
//     localStorage.setItem('linkoPicture', picture)
//     localStorage.setItem('linkoDescription', description)
    
//     setTimeout(() => {
//       router.push(`/${handle}`)
//     }, 1500)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#FF1493]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#FF69B4]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF3366] via-[#FF1493] to-[#FF69B4] bg-clip-text text-transparent">
//               LINKO Universe
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg">One link to rule them all ✨</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#FF69B4] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#FF69B4] bg-white/10 px-4 py-3 rounded-l-xl border border-[#FF1493]/30 border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF3366] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#FF69B4] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-ping"></span>
//                 Available! Grab it fast 🚀
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#FF1493] shadow-lg shadow-[#FF1493]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#FF1493] to-[#FF3366]' : 'bg-[#FF1493]/30'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#FF1493]/30 rounded-xl text-[#FF69B4] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#FF69B4] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             {/* 👇 UPDATED BUTTON WITH DYNAMIC TEXT */}
//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #FF1493, #FF69B4)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">
//                 {isEditMode ? '✨ Update Your LINKO Universe ✨' : '✨ Create Your LINKO Universe ✨'}
//               </span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="relative flex items-center justify-center">
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#FF1493]/30 to-[#FF69B4]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#FF3366]/30 shadow-2xl"
//               />
              
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#FF1493] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">LINKO</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#FF69B4] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }

// "use client"
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     // Get current logged-in user
//     const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
//     setCurrentUser(user);
    
//     const params = new URLSearchParams(window.location.search);
//     const urlHandle = params.get('handle');
//     const editHandle = params.get('handle');
//     const isEdit = params.get('edit');
    
//     // Set edit mode if edit=true
//     if (isEdit) {
//       setIsEditMode(true);
//     }
    
//     // If handle is in URL (from homepage), set it
//     if (urlHandle && !isEdit) {
//       setHandle(urlHandle);
//       toast.info(`Creating Linko for @${urlHandle}`);
//     }
    
//     // Check if we're in edit mode
//     if (editHandle && isEdit) {
//       const saved = JSON.parse(localStorage.getItem('myLinkos') || '[]');
//       // Only allow editing if it's the user's own linko
//       const linkoToEdit = saved.find(item => item.handle === editHandle && item.userEmail === user?.email);
      
//       if (linkoToEdit) {
//         setHandle(linkoToEdit.handle);
//         setLinks(linkoToEdit.links.length ? linkoToEdit.links : [{ text: "", url: "" }]);
//         setPicture(linkoToEdit.pic || "");
//         setDescription(linkoToEdit.desc || "");
//         setIsEditMode(true);
//         toast.info(`Editing @${linkoToEdit.handle}`);
//       } else if (saved.find(item => item.handle === editHandle)) {
//         toast.error("You don't have permission to edit this Linko");
//         setTimeout(() => router.push('/'), 2000);
//       }
//     }
//   }, [router]);

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = () => {
//     if (!handle) {
//       toast.error("Please enter a handle first!")
//       return
//     }

//     // Check if user is logged in
//     if (!currentUser) {
//       toast.error("Please log in to create a Linko");
//       setTimeout(() => router.push('/login'), 2000);
//       return;
//     }

//     const existing = JSON.parse(localStorage.getItem('myLinkos') || '[]')
    
//     const params = new URLSearchParams(window.location.search);
//     const editHandle = params.get('handle');
//     const isEdit = params.get('edit');
    
//     // 👇 ADD userEmail TO THE Linko OBJECT
//     const newLinko = {
//       handle: handle,
//       links: links.filter(l => l.text && l.url),
//       pic: picture,
//       desc: description,
//       date: new Date().toISOString(),
//       linkCount: links.filter(l => l.text && l.url).length,
//       userEmail: currentUser.email  // 👈 THIS LINE IS IMPORTANT
//     }
    
//     if (isEdit && editHandle) {
//       // Check if user owns this linko before editing
//       const index = existing.findIndex(item => item.handle === editHandle && item.userEmail === currentUser.email);
//       if (index !== -1) {
//         existing[index] = newLinko;
//         localStorage.setItem('myLinkos', JSON.stringify(existing));
//         toast.success("✨ Linko updated successfully!");
//       } else {
//         toast.error("You don't have permission to edit this Linko");
//         return;
//       }
//     } else {
//       // Check if handle already exists (globally, but warn user)
//       const handleExists = existing.some(item => item.handle === handle)
      
//       if (handleExists) {
//         toast.error("This handle is already taken! Please choose another.")
//         return
//       }
      
//       existing.push(newLinko)
//       localStorage.setItem('myLinkos', JSON.stringify(existing))
//       toast.success("✨ Your Linko has been generated successfully!")
//     }
    
//     localStorage.setItem('linkoHandle', handle)
//     localStorage.setItem('linkoLinks', JSON.stringify(links))
//     localStorage.setItem('linkoPicture', picture)
//     localStorage.setItem('linkoDescription', description)
    
//     setTimeout(() => {
//       router.push(`/${handle}`)
//     }, 1500)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#FF1493]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#FF69B4]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF3366] via-[#FF1493] to-[#FF69B4] bg-clip-text text-transparent">
//               LINKO Universe
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg">One link to rule them all ✨</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#FF69B4] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#FF69B4] bg-white/10 px-4 py-3 rounded-l-xl border border-[#FF1493]/30 border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF3366] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#FF69B4] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-ping"></span>
//                 Available! Grab it fast 🚀
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#FF1493] shadow-lg shadow-[#FF1493]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#FF1493] to-[#FF3366]' : 'bg-[#FF1493]/30'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#FF1493]/30 rounded-xl text-[#FF69B4] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#FF69B4] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #FF1493, #FF69B4)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">
//                 {isEditMode ? '✨ Update Your LINKO Universe ✨' : '✨ Create Your LINKO Universe ✨'}
//               </span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="relative flex items-center justify-center">
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#FF1493]/30 to-[#FF69B4]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#FF3366]/30 shadow-2xl"
//               />
              
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#FF1493] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">LINKO</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#FF69B4] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }

// "use client"
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function GeneratePage() {
//   const router = useRouter()
//   const [handle, setHandle] = useState("")
//   const [links, setLinks] = useState([{ text: "", url: "" }])
//   const [picture, setPicture] = useState("")
//   const [description, setDescription] = useState("")
//   const [activeStep, setActiveStep] = useState(1)
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     // Get current logged-in user
//     const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
//     setCurrentUser(user);
    
//     const params = new URLSearchParams(window.location.search);
//     const urlHandle = params.get('handle');
//     const editHandle = params.get('handle');
//     const isEdit = params.get('edit');
    
//     // Set edit mode if edit=true
//     if (isEdit) {
//       setIsEditMode(true);
//     }
    
//     // If handle is in URL (from homepage), set it
//     if (urlHandle && !isEdit) {
//       setHandle(urlHandle);
//       toast.info(`Creating Linko for @${urlHandle}`);
//     }
    
//     // Check if we're in edit mode
//     if (editHandle && isEdit) {
//       const saved = JSON.parse(localStorage.getItem('myLinkos') || '[]');
//       // Only allow editing if it's the user's own linko
//       const linkoToEdit = saved.find(item => item.handle === editHandle && item.userEmail === user?.email);
      
//       if (linkoToEdit) {
//         setHandle(linkoToEdit.handle);
//         setLinks(linkoToEdit.links.length ? linkoToEdit.links : [{ text: "", url: "" }]);
//         setPicture(linkoToEdit.pic || "");
//         setDescription(linkoToEdit.desc || "");
//         setIsEditMode(true);
//         toast.info(`Editing @${linkoToEdit.handle}`);
//       } else if (saved.find(item => item.handle === editHandle)) {
//         toast.error("You don't have permission to edit this Linko");
//         setTimeout(() => router.push('/'), 2000);
//       }
//     }
//   }, [router]);

//   const addLink = () => {
//     setLinks([...links, { text: "", url: "" }])
//   }

//   const createLinko = async () => {  // 👈 Make it async
//     if (!handle) {
//       toast.error("Please enter a handle first!")
//       return
//     }

//     // Check if user is logged in
//     if (!currentUser) {
//       toast.error("Please log in to create a Linko");
//       setTimeout(() => router.push('/login'), 2000);
//       return;
//     }

//     const existing = JSON.parse(localStorage.getItem('myLinkos') || '[]')
    
//     const params = new URLSearchParams(window.location.search);
//     const editHandle = params.get('handle');
//     const isEdit = params.get('edit');
    
//     // Create Linko object (without date for MongoDB)
//     const newLinko = {
//       handle: handle,
//       links: links.filter(l => l.text && l.url),
//       pic: picture,
//       desc: description,
//       userEmail: currentUser.email
//     }
    
//     // For localStorage (add date for display)
//     const localLinko = {
//       ...newLinko,
//       date: new Date().toISOString(),
//       linkCount: links.filter(l => l.text && l.url).length
//     }
    
//     // 👇 STEP 1: Save to localStorage (immediate display)
//     if (isEdit && editHandle) {
//       // Check if user owns this linko before editing
//       const index = existing.findIndex(item => item.handle === editHandle && item.userEmail === currentUser.email);
//       if (index !== -1) {
//         existing[index] = localLinko;
//         localStorage.setItem('myLinkos', JSON.stringify(existing));
//         toast.success("✨ Linko updated successfully!");
//       } else {
//         toast.error("You don't have permission to edit this Linko");
//         return;
//       }
//     } else {
//       // Check if handle already exists
//       const handleExists = existing.some(item => item.handle === handle)
      
//       if (handleExists) {
//         toast.error("This handle is already taken! Please choose another.")
//         return
//       }
      
//       existing.push(localLinko)
//       localStorage.setItem('myLinkos', JSON.stringify(existing))
//       toast.success("✨ Your Linko has been generated successfully!")
//     }
    
//     // 👇 STEP 2: Save to MongoDB (background)
//     try {
//       const response = await fetch('/api/add-route', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newLinko)
//       });
      
//       const data = await response.json();
//       if (data.success) {
//         console.log('✅ Saved to MongoDB');
//       } else {
//         console.log('❌ MongoDB error:', data.message);
//       }
//     } catch (error) {
//       console.error('MongoDB connection error:', error);
//     }
    
//     // 👇 STEP 3: Redirect to preview
//     setTimeout(() => {
//       router.push(`/${handle}`)
//     }, 1500)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
//       <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#FF1493]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
//         <div className="absolute w-[400px] h-[400px] bg-[#FF69B4]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
//       </div>

//       <div className="h-24"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Create your</span>
//             <br />
//             <span className="bg-gradient-to-r from-[#FF3366] via-[#FF1493] to-[#FF69B4] bg-clip-text text-transparent">
//               LINKO Universe
//             </span>
//           </h1>
//           <p className="text-gray-300 text-lg">One link to rule them all ✨</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT COLUMN */}
//           <div className="space-y-6">
//             {/* Step 1 - Handle */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(1)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiUser className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
//                 {handle && <FiCheckCircle className="text-[#FF69B4] ml-auto" size={20} />}
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-[#FF69B4] bg-white/10 px-4 py-3 rounded-l-xl border border-[#FF1493]/30 border-r-0 backdrop-blur-sm">
//                   linko.io/
//                 </span>
//                 <input
//                   value={handle}
//                   onChange={(e) => setHandle(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF3366] transition-all"
//                   type="text"
//                   placeholder="yourname"
//                 />
//               </div>
//               <p className="text-[#FF69B4] text-sm mt-3 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-ping"></span>
//                 Available! Grab it fast 🚀
//               </p>
//             </div>

//             {/* Step 2 - Links */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#FF1493] shadow-lg shadow-[#FF1493]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(2)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#FF1493] to-[#FF3366]' : 'bg-[#FF1493]/30'}`}>
//                   <FiLink className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Links</h2>
//               </div>
              
//               <div className="space-y-3">
//                 {links.map((link, index) => (
//                   <div key={index} className="relative group">
//                     <input
//                       value={link.text}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].text = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="Link text (e.g. My Portfolio)"
//                     />
//                     <input
//                       value={link.url}
//                       onChange={(e) => {
//                         const newLinks = [...links]
//                         newLinks[index].url = e.target.value
//                         setLinks(newLinks)
//                       }}
//                       className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
//                       type="text"
//                       placeholder="URL (e.g. https://)"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={addLink}
//                 className="mt-4 w-full py-3 border-2 border-dashed border-[#FF1493]/30 rounded-xl text-[#FF69B4] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
//               >
//                 <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
//                 Add Another Link
//               </button>
//             </div>

//             {/* Step 3 - Media */}
//             <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : 'border-[#FF1493]/30'}`}
//                  onClick={() => setActiveStep(3)}>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#FF69B4] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
//                   <FiImage className="text-white text-xl" />
//                 </div>
//                 <h2 className="text-xl font-bold text-white">Add Media</h2>
//               </div>
              
//               <div className="space-y-3">
//                 <input
//                   value={picture}
//                   onChange={(e) => setPicture(e.target.value)}
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   type="text"
//                   placeholder="Picture URL"
//                 />
                
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="3"
//                   className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
//                   placeholder="Tell your story..."
//                 />
//               </div>
//             </div>

//             <button
//               onClick={createLinko}
//               className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 background: 'linear-gradient(135deg, #FF3366, #FF1493, #FF69B4)',
//                 backgroundSize: '200% 200%',
//                 animation: 'gradient 3s ease infinite'
//               }}
//             >
//               <span className="relative z-10">
//                 {isEditMode ? '✨ Update Your LINKO Universe ✨' : '✨ Create Your LINKO Universe ✨'}
//               </span>
//               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//             </button>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="relative flex items-center justify-center">
//             <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#FF1493]/30 to-[#FF69B4]/30 blur-3xl rounded-full animate-spin-slow"></div>
//             <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
//             <div className="relative z-10 animate-float">
//               <img 
//                 src="/girl.png" 
//                 alt="Linko Preview" 
//                 className="w-full max-w-md h-auto rounded-3xl border-2 border-[#FF3366]/30 shadow-2xl"
//               />
              
//               <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#FF1493] px-4 py-2 rounded-full shadow-lg animate-bounce">
//                 <span className="text-white text-sm font-semibold">LINKO</span>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-[#FF69B4] px-4 py-2 rounded-full shadow-lg">
//                 <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   )
// }


"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiLink, FiImage, FiUser, FiPlus, FiCheckCircle } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GeneratePage() {
  const router = useRouter()
  const [handle, setHandle] = useState("")
  const [links, setLinks] = useState([{ text: "", url: "" }])
  const [picture, setPicture] = useState("")
  const [description, setDescription] = useState("")
  const [activeStep, setActiveStep] = useState(1)
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Get current logged-in user
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setCurrentUser(user);
    
    const params = new URLSearchParams(window.location.search);
    const urlHandle = params.get('handle');
    const editHandle = params.get('handle');
    const isEdit = params.get('edit');
    
    // Set edit mode if edit=true
    if (isEdit) {
      setIsEditMode(true);
    }
    
    // If handle is in URL (from homepage), set it
    if (urlHandle && !isEdit) {
      setHandle(urlHandle);
      toast.info(`Creating Linko for @${urlHandle}`);
    }
    
    // Check if we're in edit mode
    if (editHandle && isEdit) {
      const saved = JSON.parse(localStorage.getItem('myLinkos') || '[]');
      // Only allow editing if it's the user's own linko
      const linkoToEdit = saved.find(item => item.handle === editHandle && item.userEmail === user?.email);
      
      if (linkoToEdit) {
        setHandle(linkoToEdit.handle);
        setLinks(linkoToEdit.links.length ? linkoToEdit.links : [{ text: "", url: "" }]);
        setPicture(linkoToEdit.pic || "");
        setDescription(linkoToEdit.desc || "");
        setIsEditMode(true);
        toast.info(`Editing @${linkoToEdit.handle}`);
      } else if (saved.find(item => item.handle === editHandle)) {
        toast.error("You don't have permission to edit this Linko");
        setTimeout(() => router.push('/'), 2000);
      }
    }
  }, [router]);

  const addLink = () => {
    setLinks([...links, { text: "", url: "" }])
  }

  const createLinko = async () => {
    if (!handle) {
      toast.error("Please enter a handle first!")
      return
    }

    // Check if user is logged in
    if (!currentUser) {
      toast.error("Please log in to create a Linko");
      setTimeout(() => router.push('/login'), 2000);
      return;
    }

    const existing = JSON.parse(localStorage.getItem('myLinkos') || '[]')
    
    const params = new URLSearchParams(window.location.search);
    const editHandle = params.get('handle');
    const isEdit = params.get('edit');
    
    // Create Linko object (without date for MongoDB)
    const newLinko = {
      handle: handle,
      links: links.filter(l => l.text && l.url),
      pic: picture,
      desc: description,
      userEmail: currentUser.email
    }
    
    // For localStorage (add date for display)
    const localLinko = {
      ...newLinko,
      date: new Date().toISOString(),
      linkCount: links.filter(l => l.text && l.url).length
    }
    
    // 👇 STEP 1: Save to localStorage (immediate display)
    if (isEdit && editHandle) {
      // Check if user owns this linko before editing
      const index = existing.findIndex(item => item.handle === editHandle && item.userEmail === currentUser.email);
      if (index !== -1) {
        existing[index] = localLinko;
        localStorage.setItem('myLinkos', JSON.stringify(existing));
        toast.success("✨ Linko updated successfully!");
      } else {
        toast.error("You don't have permission to edit this Linko");
        return;
      }
    } else {
      // Check if handle already exists
      const handleExists = existing.some(item => item.handle === handle)
      
      if (handleExists) {
        toast.error("This handle is already taken! Please choose another.")
        return
      }
      
      existing.push(localLinko)
      localStorage.setItem('myLinkos', JSON.stringify(existing))
      toast.success("✨ Your Linko has been generated successfully!")
    }
    
    // 👇 STEP 2: Save to MongoDB (background) - FIXED URL
    try {
      const response = await fetch('/api/add', {  // ✅ Changed from '/api/add-route' to '/api/add'
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLinko)
      });
      
      const data = await response.json();
      if (data.success) {
        console.log('✅ Saved to MongoDB');
      } else {
        console.log('❌ MongoDB error:', data.message);
      }
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
    
    // 👇 STEP 3: Redirect to preview
    setTimeout(() => {
      router.push(`/${handle}`)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0b1f] via-[#2d1a2a] to-[#1a0b1f]">
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-[#FF3366]/10 blur-3xl rounded-full top-[-200px] right-[-200px] animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#FF1493]/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse delay-1000"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#FF69B4]/10 blur-3xl rounded-full top-1/2 left-1/3 animate-pulse delay-500"></div>
      </div>

      <div className="h-24"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Create your</span>
            <br />
            <span className="bg-gradient-to-r from-[#FF3366] via-[#FF1493] to-[#FF69B4] bg-clip-text text-transparent">
              LINKO Universe
            </span>
          </h1>
          <p className="text-gray-300 text-lg">One link to rule them all ✨</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Step 1 - Handle */}
            <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 1 ? 'border-[#FF3366] shadow-lg shadow-[#FF3366]/20' : 'border-[#FF1493]/30'}`}
                 onClick={() => setActiveStep(1)}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 1 ? 'bg-gradient-to-r from-[#FF3366] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
                  <FiUser className="text-white text-xl" />
                </div>
                <h2 className="text-xl font-bold text-white">Claim your Handle</h2>
                {handle && <FiCheckCircle className="text-[#FF69B4] ml-auto" size={20} />}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[#FF69B4] bg-white/10 px-4 py-3 rounded-l-xl border border-[#FF1493]/30 border-r-0 backdrop-blur-sm">
                  linko.io/
                </span>
                <input
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF3366] transition-all"
                  type="text"
                  placeholder="yourname"
                />
              </div>
              <p className="text-[#FF69B4] text-sm mt-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF69B4] rounded-full animate-ping"></span>
                Available! Grab it fast 🚀
              </p>
            </div>

            {/* Step 2 - Links */}
            <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 2 ? 'border-[#FF1493] shadow-lg shadow-[#FF1493]/20' : 'border-[#FF1493]/30'}`}
                 onClick={() => setActiveStep(2)}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 2 ? 'bg-gradient-to-r from-[#FF1493] to-[#FF3366]' : 'bg-[#FF1493]/30'}`}>
                  <FiLink className="text-white text-xl" />
                </div>
                <h2 className="text-xl font-bold text-white">Add Links</h2>
              </div>
              
              <div className="space-y-3">
                {links.map((link, index) => (
                  <div key={index} className="relative group">
                    <input
                      value={link.text}
                      onChange={(e) => {
                        const newLinks = [...links]
                        newLinks[index].text = e.target.value
                        setLinks(newLinks)
                      }}
                      className="w-full mb-2 px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
                      type="text"
                      placeholder="Link text (e.g. My Portfolio)"
                    />
                    <input
                      value={link.url}
                      onChange={(e) => {
                        const newLinks = [...links]
                        newLinks[index].url = e.target.value
                        setLinks(newLinks)
                      }}
                      className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF1493] transition-all"
                      type="text"
                      placeholder="URL (e.g. https://)"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={addLink}
                className="mt-4 w-full py-3 border-2 border-dashed border-[#FF1493]/30 rounded-xl text-[#FF69B4] hover:text-[#FF3366] hover:border-[#FF3366] transition-all flex items-center justify-center gap-2 group"
              >
                <FiPlus className="group-hover:rotate-180 transition-transform duration-500" />
                Add Another Link
              </button>
            </div>

            {/* Step 3 - Media */}
            <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 ${activeStep === 3 ? 'border-[#FF69B4] shadow-lg shadow-[#FF69B4]/20' : 'border-[#FF1493]/30'}`}
                 onClick={() => setActiveStep(3)}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep >= 3 ? 'bg-gradient-to-r from-[#FF69B4] to-[#FF1493]' : 'bg-[#FF1493]/30'}`}>
                  <FiImage className="text-white text-xl" />
                </div>
                <h2 className="text-xl font-bold text-white">Add Media</h2>
              </div>
              
              <div className="space-y-3">
                <input
                  value={picture}
                  onChange={(e) => setPicture(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
                  type="text"
                  placeholder="Picture URL"
                />
                
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                  className="w-full px-4 py-3 bg-white/5 border border-[#FF1493]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF69B4] transition-all"
                  placeholder="Tell your story..."
                />
              </div>
            </div>

            <button
              onClick={createLinko}
              className="w-full py-4 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #FF3366, #FF1493, #FF69B4)',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}
            >
              <span className="relative z-10">
                {isEditMode ? '✨ Update Your LINKO Universe ✨' : '✨ Create Your LINKO Universe ✨'}
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#FF3366]/30 via-[#FF1493]/30 to-[#FF69B4]/30 blur-3xl rounded-full animate-spin-slow"></div>
            <div className="absolute w-[400px] h-[400px] bg-[#FF3366]/20 blur-3xl rounded-full animate-pulse"></div>
            
            <div className="relative z-10 animate-float">
              <img 
                src="/girl.png" 
                alt="Linko Preview" 
                className="w-full max-w-md h-auto rounded-3xl border-2 border-[#FF3366]/30 shadow-2xl"
              />
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3366] to-[#FF1493] px-4 py-2 rounded-full shadow-lg animate-bounce">
                <span className="text-white text-sm font-semibold">LINKO</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-[#FF69B4] px-4 py-2 rounded-full shadow-lg">
                <span className="text-white text-sm font-semibold">✨ PREVIEW</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
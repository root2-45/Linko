// import clientPromise from "@/lib/mongodb";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { handle, links, pic, desc } = body;

//     if (!handle) {
//       return NextResponse.json({
//         success: false,
//         message: "Handle is required"
//       });
//     }

//     const client = await clientPromise;
//     const db = client.db("Linko");
//     const collection = db.collection("links");

//     // Check if handle already exists
//     const existing = await collection.findOne({ handle });

//     if (existing) {
//       // UPDATE existing record
//       await collection.updateOne(
//         { handle },
//         {
//           $set: {
//             links: links || [],
//             pic: pic || "",
//             desc: desc || "",
//             updatedAt: new Date()
//           }
//         }
//       );
      
//       return NextResponse.json({
//         success: true,
//         message: "Your Linko has been updated successfully!",
//         isUpdate: true
//       });
//     } else {
//       // CREATE new record
//       await collection.insertOne({
//         handle,
//         links: links || [],
//         pic: pic || "",
//         desc: desc || "",
//         createdAt: new Date(),
//         updatedAt: new Date()
//       });
      
//       return NextResponse.json({
//         success: true,
//         message: "Your Linko has been created successfully!",
//         isUpdate: false
//       });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json({
//       success: false,
//       message: "Something went wrong"
//     });
//   }
// }

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { handle, links, pic, desc, userEmail } = body;

    if (!handle) {
      return NextResponse.json({
        success: false,
        message: "Handle is required"
      });
    }

    const client = await clientPromise;
    const db = client.db("Linko");
    const collection = db.collection("links");

    // Check if handle already exists
    const existing = await collection.findOne({ handle });

    if (existing) {
      // UPDATE existing record
      await collection.updateOne(
        { handle },
        {
          $set: {
            links: links || [],
            pic: pic || "",
            desc: desc || "",
            userEmail: userEmail || "",
            updatedAt: new Date()
          }
        }
      );

      return NextResponse.json({
        success: true,
        message: "Linko updated successfully"
      });
    } else {
      // CREATE new record
      await collection.insertOne({
        handle,
        links: links || [],
        pic: pic || "",
        desc: desc || "",
        userEmail: userEmail || "",
        createdAt: new Date(),
        updatedAt: new Date()
      });

      return NextResponse.json({
        success: true,
        message: "Linko created successfully"
      });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    });
  }
}
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const handle = searchParams.get("handle");

    if (!handle) {
      return NextResponse.json({
        success: false,
        message: "Handle is required"
      });
    }

    const client = await clientPromise;
    const db = client.db("Linko");
    const collection = db.collection("links");

    const item = await collection.findOne({ handle });

    if (item) {
      return NextResponse.json({
        success: true,
        data: {
          links: item.links || [],
          desc: item.desc || "",
          pic: item.pic || "",
          handle: item.handle
        }
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Linko not found"
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      success: false,
      message: "Error fetching data"
    });
  }
}
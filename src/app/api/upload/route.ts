import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // If running LOCALLY (development), save the physical file so it can be committed to GitHub.
    if (process.env.NODE_ENV === "development") {
      const ext = path.extname(file.name) || ".jpg";
      const filename = `${crypto.randomBytes(16).toString("hex")}${ext}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      
      // Ensure directory exists
      try {
        await mkdir(uploadDir, { recursive: true });
      } catch (e) {}

      await writeFile(path.join(uploadDir, filename), buffer);
      return NextResponse.json({ url: `/uploads/${filename}` });
    } 
    
    // If running on VERCEL (production), the filesystem is read-only.
    // We fallback to converting the image to a Base64 string to prevent the 500 Server Error.
    const base64Str = `data:${file.type || 'image/jpeg'};base64,${buffer.toString("base64")}`;
    return NextResponse.json({ url: base64Str });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

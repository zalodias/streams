import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "streams.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return NextResponse.json(JSON.parse(fileContents));
}

export async function POST(request: Request) {
  try {
    const filePath = path.join(process.cwd(), "data", "streams.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const streams = JSON.parse(fileContents);

    const newStream = await request.json();
    streams.push(newStream);

    await fs.writeFile(filePath, JSON.stringify(streams, null, 2));

    return NextResponse.json(newStream);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update streams" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const filePath = path.join(process.cwd(), "data", "streams.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const streams = JSON.parse(fileContents);

    const updatedStream = await request.json();
    const index = streams.findIndex((s: any) => s.id === updatedStream.id);

    if (index === -1) {
      return NextResponse.json({ error: "Stream not found" }, { status: 404 });
    }

    streams[index] = updatedStream;
    await fs.writeFile(filePath, JSON.stringify(streams, null, 2));

    return NextResponse.json(updatedStream);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update stream" },
      { status: 500 }
    );
  }
}

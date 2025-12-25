import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs"; // VERY IMPORTANT

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("audio");

    if (!file) {
      return NextResponse.json(
        { error: "No audio file received" },
        { status: 400 }
      );
    }

    // Convert Blob to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Send directly to Whisper
    const transcription = await openai.audio.transcriptions.create({
      file: buffer,
      model: "gpt-4o-transcribe", // or "whisper-1"
    });

    return NextResponse.json({
      text: transcription.text,
    });
  } catch (err) {
    console.error("Transcription error:", err);
    return NextResponse.json(
      { error: "Transcription failed" },
      { status: 500 }
    );
  }
}

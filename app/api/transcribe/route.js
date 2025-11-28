import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const form = await req.formData();
    const audio = form.get("audio");

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const result = await client.audio.transcriptions.create({
      file: audio,
      model: "gpt-4o-mini-tts", // whisper/advance model
    });

    return NextResponse.json({ text: result.text });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

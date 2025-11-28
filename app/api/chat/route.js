import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json(
        { error: "No message provided" },
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "text" },
      messages: [
        {
          role: "system",
          content: `
            You are MathsBuddy — a friendly math tutor.

            ALWAYS respond in:
            - simple clear English
            - clean text (no LaTeX, no \\( \\), no $$ symbols)
            - step-by-step format
            - show calculations using × ÷ + −
            - avoid long paragraphs
            - keep everything readable
            - put final answer at the end as: "Final Answer: ..."

            Example:
            1. First...
            2. Next...
            Final Answer: ...
          `,
        },
        { role: "user", content: message },
      ],
    });

    let reply =
      completion.choices?.[0]?.message?.content ||
      "I'm not sure, try again!";

    // Clean unnecessary formatting
    reply = reply
      .replace(/\\\(/g, "")
      .replace(/\\\)/g, "")
      .replace(/\\times/g, "×")
      .replace(/\*/g, "×")
      .replace(/\\\\/g, "")
      .replace(/\$/g, "");

    return Response.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Server error, try again later." },
      { status: 500 }
    );
  }
}

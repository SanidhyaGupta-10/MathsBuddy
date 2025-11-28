import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { question, answer } = await req.json();

  const client = await clientPromise;
  const historyCollection = client.db().collection("history");

  await historyCollection.insertOne({
    userId: session.user.email,
    question,
    answer,
    createdAt: new Date(),
  });

  return Response.json({ message: "Saved successfully" });
}

import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const client = await clientPromise;
  const historyCollection = client.db().collection("history");

  const history = await historyCollection
    .find({ userId: session.user.email })
    .sort({ createdAt: -1 })
    .toArray();

  return Response.json({ history });
}

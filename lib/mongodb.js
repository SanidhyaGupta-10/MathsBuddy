import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

// IMPORTANT: For local development, store your MongoDB URI in `.env.local`.
// For production, place it in `.env` or the environment as appropriate.
if (!process.env.MONGODB_URI) {
  throw new Error(
    console.log("Please add your Mongo URI to .env.local")
  );
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

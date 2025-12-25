// import {MongoClient } from "mongodb";


// const uri  =  process.env.MONGO_URI as string 
// const dbName = process.env.DB_NAME || "test";


// let client : MongoClient
// let clientPromise: Promise<MongoClient>;


// if(!process.env.MONGO_URI){
//     throw new Error("Please add your Mongo URI to .env")
// }

// if(process.env.NODE_ENV === "development"){
    
//     if(!(global as any)._mongoClientPromise){
//         client = new MongoClient(uri);
//         (global as any)._mongoClientPromise = client.connect();
//     }
//     clientPromise = (global as any)._mongoClientPromise
// }else{
//     client = new MongoClient(uri);
//     clientPromise = client.connect()
// }


// export async function getDB(){
//     const client = await clientPromise;
//     return client.db(dbName)
// }




import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;
const DB_NAME = process.env.DB_NAME || "test";

if (!MONGO_URI) {
  throw new Error("MONGO_URI missing in .env");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function  connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      dbName: DB_NAME,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

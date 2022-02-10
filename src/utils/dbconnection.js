
import { connect, connection } from "mongoose";

const conn = {
    isConnected: false
}

export async function dbConnect() {

  if (conn.isConnected) return;

  const db = await connect(process.env.MONGODB_URL);

  conn.isConnected = db.connections[0].readyState;
  
  console.log("Conectado a: " + db.connection.db.databaseName)
}

/////////////////////
// Mongoose Events //
/////////////////////

// Connection success message
connection.on("connected", () => {
  console.log("Mongodb is connected");
});

// Connection error message
connection.on("error", (err) => {
  console.error("Mongodb connection failed: ", err.message);
});
import mongoose from "mongoose";

const URL = process.env.DB_CONNECTION_STRING;

async function connect() {
  mongoose.connect(URL);

  const connection = mongoose.connection;

  connection.on("error", (error) => {
    console.log("ERROR: " + error);
  }).once("open", () => {
    console.log("MongoDB connected successfully");
  });

  return mongoose.connection;
}

export default connect;
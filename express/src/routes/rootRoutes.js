import express from "express";

const root = express.Router();

root.get("/", (req, res) => {
  res.status(200)
    .send("This is a stupid root route using Express");
});

root.get("/stupid", (req, res) => {
  res.status(200)
    .send("Wow a new express route... pathetic!");
});

export default root;
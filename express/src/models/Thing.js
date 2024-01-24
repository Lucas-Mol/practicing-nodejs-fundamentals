import mongoose from "mongoose";
import { originSchema } from "./Origin.js";

const thingSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { 
    type: String,
    required: true 
  },
  price: { 
    type: Number 
  },
  origin: originSchema
},  {versionKey: false });

const thing = mongoose.model("things", thingSchema);

export default thing;
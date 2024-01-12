import mongoose from "mongoose"

const thingSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true},
    price: { type: Number}
},  {versionKey: false })

const thing = mongoose.model("things", thingSchema)

export default thing
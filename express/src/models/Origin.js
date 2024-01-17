import mongoose from "mongoose"

const originSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    country: { type: String, required: true},
    year: { type: Number, required: true}
},  {versionKey: false })

const origin = mongoose.model("origin", originSchema)

export { origin, originSchema}
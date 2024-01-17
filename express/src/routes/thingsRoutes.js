import express from "express"
import ThingController from "../controllers/thingController.js"

const routes = express.Router()

routes.post("/things", ThingController.createThing)
routes.get("/things", ThingController.getThings)
routes.get("/things/:id", ThingController.getThingById)
routes.put("/things/:id", ThingController.updateThing)
routes.delete("/things/:id", ThingController.deleteThing)

export default routes
import express from "express";
import ThingController from "../controllers/thingController.js";
import pagination from "../middlewares/pagination.js";

const routes = express.Router();

routes.post("/things", ThingController.createThing);
routes.get("/things/search", ThingController.getThingsByFilters, pagination);
routes.get("/things", ThingController.getThings, pagination);
routes.get("/things/:id", ThingController.getThingById);
routes.put("/things/:id", ThingController.updateThing);
routes.delete("/things/:id", ThingController.deleteThing);

export default routes;
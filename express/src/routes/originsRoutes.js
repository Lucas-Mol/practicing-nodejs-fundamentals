import express from "express";
import OriginController from "../controllers/originController.js";

const routes = express.Router();

routes.post("/origins", OriginController.createOrigin);
routes.get("/origins", OriginController.getOrigin);
routes.get("/origins/:id", OriginController.getOriginById);
routes.put("/origins/:id", OriginController.updateOrigin);
routes.delete("/origins/:id", OriginController.deleteOrigin);

export default routes;
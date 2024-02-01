import thing from "../models/Thing.js";
import ThingService from "../services/ThingService.js";
import ErrorUtils from "../utils/ErrorUtils.js";

class ThingController {
    
  static async createThing(req, res, next) {
    try{
      const newThing = 
                await ThingService.createNewThingByController(req.body);

      const createdThing = await thing.create(newThing);
        
      res.status(201)
        .json({ 
          message: "Created successfully",
          thing: createdThing
        });
    } catch(error) {
      next(error);
    }
  }

  static async getThings(req, res, next) {
    try{
      const getThings = thing.find();

      req.result = getThings;

      next();

    } catch(error) {
      next(error);
    }
  }

  static async getThingById(req, res, next) {
    try{
      const id = req.params.id;
      const foundThing = await thing.findById(id);
      
      if(foundThing !== null) {
        res.status(200)
          .json(foundThing);
      }
      else ErrorUtils.ResourceNotFoundHTTPResponse(res);

    } catch(error) {
      next(error);
    }
  }

  static async updateThing(req, res, next) {
    try {
      const id = req.params.id;
      const body = req.body;
      const updatedThing = await thing.findByIdAndUpdate(
        id, 
        body, 
        { new: true});
          
      if(updatedThing !== null) {
        res.status(200)
          .json({
            message: "Updated successfully",
            thing: updatedThing 
          });
      }
      else ErrorUtils.ResourceNotFoundHTTPResponse(res);

    } catch(error) {
      next(error);
    }
  }

  static async deleteThing(req, res, next) {
    try {
      const id = req.params.id;
      const removedThing = await thing.findByIdAndDelete(id);
      
      if(removedThing !== null) {
        res.status(200)
          .json({message: "Deleted successfully"});        
      }
      else ErrorUtils.ResourceNotFoundHTTPResponse(res);

    } catch (error) {
      next(error);
    }
  }

  static async getThingsByFilters(req, res, next) {
    try {
      const searchFilters = ThingService.getFiltersByReq(req);
      const thingsByOrigin =  thing.find(searchFilters);
      
      req.result = thingsByOrigin;

      next();

    } catch (error) {
      next(error);
    }

  }
}

export default ThingController;

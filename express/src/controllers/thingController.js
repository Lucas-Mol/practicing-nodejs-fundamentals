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
      let { limit, page = 1 } = req.query;

      limit = parseInt(limit);
      page = parseInt(page);
      
      if(limit < 1 | page < 1) 
        next(ErrorUtils.InvalidInputDataHTTTPResponse(res));

      const getThings = await thing.find({})
        .skip((page - 1) * limit)
        .limit(limit);

      if(getThings !== null) {
        res.status(200)
          .json(getThings);
      }
      else ErrorUtils.ResourceNotFoundHTTPResponse(res);

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
      const { name, price, origin, origin_country, origin_year } = req.query;

      const searchFilters = {};

      if(name) searchFilters.name = new RegExp(name, "i");
      if(price) searchFilters.price = price;
      if(origin) searchFilters["origin._id"] =  origin;
      if(origin_country) searchFilters["origin.country"] = new RegExp(origin_country, "i");
      if(origin_year) searchFilters["origin.year"] =  origin_year;

      const thingsByOrigin = await thing.find(searchFilters);
      
      if(thingsByOrigin !== null) {
        res.status(200)
          .json(thingsByOrigin);
      }
      else ErrorUtils.NotFoundHTTPResponse(res);

    } catch (error) {
      next(error);
    }

  }
}

export default ThingController;

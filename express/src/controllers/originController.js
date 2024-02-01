import { origin } from "../models/Origin.js";
import ErrorUtils from "../utils/ErrorUtils.js";

class OriginController {
    
  static async createOrigin(req, res, next) {
    try{
      const newOrigin = await origin.create(req.body);
        
      res.status(201)
        .json({ 
          message: "Created successfully",
          thing: newOrigin
        });
    } catch(error) {
      next(error);
    }
  }

  static async getOrigin(req, res, next) {
    try{
      const getOrigins = origin.find({});

      req.result = getOrigins;

      next();
      
    } catch(error) {
      next(error);
    }
  }

  static async getOriginById(req, res, next) {
    try{
      const id = req.params.id;
      const foundOrigin = await origin.findById(id);

      if(foundOrigin !== null) {
        res.status(200)
          .json(foundOrigin);
      } 
      else ErrorUtils.ResourceNotFoundHTTPResponse(res);

    } catch(error) {
      next(error);
    }
  }

  static async updateOrigin(req, res, next) {
    try {
      const id = req.params.id;
      const body = req.body;
      const updatedOrigin = await origin.findByIdAndUpdate(
        id, 
        body, 
        { new: true});

      if(updatedOrigin !== null) {
        res.status(200)
          .json({
            message: "Updated successfully",
            thing: updatedOrigin 
          });
      }
      else ErrorUtils.ResourceNotFoundHTTPResponse(res);

    } catch(error) {
      next(error);
    }
  }

  static async deleteOrigin(req, res, next) {
    try {
      const id = req.params.id;
      const removedOrigin = await origin.findByIdAndDelete(id);
      
      if(removedOrigin !== null) {
        res.status(200)
          .json({message: "Deleted successfully"});        
      }
      else ErrorUtils.ResourceNotFoundHTTPResponse(res);

    } catch (error) {
      next(error);
    }
  }
}

export default OriginController;

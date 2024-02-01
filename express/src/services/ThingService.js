import { origin } from "../models/Origin.js";
import ThingUtils from "../utils/ThingUtils.js";

class ThingService {
  static async createNewThingByController(requestBody) {
    if(ThingUtils.hasOriginFromBody(requestBody)) {
      const foundOrigin = 
                await origin.findById(requestBody.origin);

      return ThingUtils.mergeThingAndOrigin(requestBody, foundOrigin._doc);
    }

    return requestBody;
  }

  static getFiltersByReq(req) {
    const { name, price, origin, origin_country, origin_year } = req.query;

    const searchFilters = {};

    if(name) searchFilters.name = new RegExp(name, "i");
    if(price) searchFilters.price = price;
    if(origin) searchFilters["origin._id"] =  origin;
    if(origin_country) searchFilters["origin.country"] = new RegExp(origin_country, "i");
    if(origin_year) searchFilters["origin.year"] =  origin_year;

    return searchFilters;
  }

}

export default ThingService;
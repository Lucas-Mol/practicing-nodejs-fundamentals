import { origin } from "../models/Origin.js"
import ThingUtils from "../utils/ThingUtils.js"

class ThingService {
    static async createNewThingByController(requestBody) {
        if(ThingUtils.hasOriginFromBody(requestBody)) {
            const foundOrigin = 
                await origin.findById(requestBody.origin)

            console.log(foundOrigin._doc);

            return ThingUtils.mergeThingAndOrigin(requestBody, foundOrigin._doc)
        }

        return requestBody
    }

}

export default ThingService
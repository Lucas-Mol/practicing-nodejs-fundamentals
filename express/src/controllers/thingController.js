import thing from "../models/Thing.js"
import ThingService from "../services/ThingService.js"
import ErrorUtils from "../utils/ErrorUtils.js"

class ThingController {
    
    static async createThing(req, res) {
        try{
            const newThing = 
                await ThingService.createNewThingByController(req.body)

            const createdThing = await thing.create(newThing)
        
            res.status(201)
                .json({ 
                    message: "Created successfully",
                    thing: createdThing
                })
        } catch(error) {
            ErrorUtils.handleErrorToHTTPResponse(res, error)
        }
    }

    static async getThings(req, res) {
        try{
            const getThings = await thing.find({})
            res.status(200)
                .json(getThings)
        } catch(error) {
            ErrorUtils.handleErrorToHTTPResponse(res, error)
        }
    }

    static async getThingById(req, res) {
        try{
            const id = req.params.id
            const foundThing = await thing.findById(id)
        
            res.status(200)
                .json(foundThing)
        } catch(error) {
            ErrorUtils.handleErrorToHTTPResponse(res, error)
        }
    }

    static async updateThing(req, res) {
        try {
            const id = req.params.id
            const body = req.body
            const updatedThing = await thing.findByIdAndUpdate(
                                                id, 
                                                body, 
                                                { new: true})
            
            res.status(200)
                .json({
                    message: "Updated successfully",
                    thing: updatedThing 
                })
        } catch(error) {
            ErrorUtils.handleErrorToHTTPResponse(res, error)
        }
    }

    static async deleteThing(req, res) {
        try {
            const id = req.params.id
            await thing.findByIdAndDelete(id)
        
            res.status(200)
                .json({message: "Deleted successfully"})        
        } catch (error) {
            ErrorUtils.handleErrorToHTTPResponse(res, error)
        }
    }

    static async getThingsByOriginID(req, res) {
        try {
            const originID = req.query.origin

            const thingsByOrigin = await thing.find({
                'origin._id': originID
            })
            
            res.status(200)
                .json(thingsByOrigin)
        } catch (error) {
            ErrorUtils.handleErrorToHTTPResponse(res, error)
        }

    }
}

export default ThingController

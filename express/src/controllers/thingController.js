import thing from "../models/Thing.js"

class ThingController {
    
    static async createThing(req, res) {
        try{
            const newThing = await thing.create(req.body)
        
            res.status(201)
                .json({ 
                    message: "Created successfully",
                    thing: newThing
                })
        } catch(error) {
            ThingController._errorHandler(res, error)
        }
    }

    static async getThings(req, res) {
        try{
            const getThings = await thing.find({})
            res.status(200)
                .json(getThings)
        } catch(error) {
            ThingController._errorHandler(res, error)
        }
    }

    static async getThingById(req, res) {
        try{
            const id = req.params.id
            const foundThing = await thing.findById(id)
        
            res.status(200)
                .json(foundThing)
        } catch(error) {
            ThingController._errorHandler(res, error)
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
            ThingController._errorHandler(res, error)
        }
    }

    static async deleteThing(req, res) {
        try {
            const id = req.params.id
            await thing.findByIdAndDelete(id)
        
            res.status(200)
                .json({message: "Deleted successfully"})        
        } catch (error) {
            ThingController._errorHandler(res, error)
        }
    }

    static _errorHandler(res, error) {
        res.status(500)
            .json({ message: `Error: ${error.message}`})
    }
}

export default ThingController

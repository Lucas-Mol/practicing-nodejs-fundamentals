import { origin } from "../models/Origin.js"

class OriginController {
    
    static async createOrigin(req, res) {
        try{
            const newOrigin = await origin.create(req.body)
        
            res.status(201)
                .json({ 
                    message: "Created successfully",
                    thing: newOrigin
                })
        } catch(error) {
            OriginController._errorHandler(res, error)
        }
    }

    static async getOrigin(req, res) {
        try{
            const getOrigins = await origin.find({})
            res.status(200)
                .json(getOrigins)
        } catch(error) {
            OriginController._errorHandler(res, error)
        }
    }

    static async getOriginById(req, res) {
        try{
            const id = req.params.id
            const foundOrigin = await origin.findById(id)
        
            res.status(200)
                .json(foundOrigin)
        } catch(error) {
            OriginController._errorHandler(res, error)
        }
    }

    static async updateOrigin(req, res) {
        try {
            const id = req.params.id
            const body = req.body
            const updatedOrigin = await origin.findByIdAndUpdate(
                                                id, 
                                                body, 
                                                { new: true})
            
            res.status(200)
                .json({
                    message: "Updated successfully",
                    thing: updatedOrigin 
                })
        } catch(error) {
            OriginController._errorHandler(res, error)
        }
    }

    static async deleteOrigin(req, res) {
        try {
            const id = req.params.id
            await origin.findByIdAndDelete(id)
        
            res.status(200)
                .json({message: "Deleted successfully"})        
        } catch (error) {
            OriginController._errorHandler(res, error)
        }
    }

    static _errorHandler(res, error) {
        res.status(500)
            .json({ message: `Error: ${error.message}`})
    }
}

export default OriginController
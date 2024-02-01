class Controller {
    constructor(serviceEntity) {
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res) {
        try {
            const registries = await this.serviceEntity.getAll();
            return res.status(200)
                .json(registries);
        } catch (error) {
            console.log(error);
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const registry = await this.serviceEntity.getById(Number(id));
            return res.status(200).json(registry);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Error"});
        }
    }

    async create(req, res) {
        const creationData = req.body;
        try {
            const newRegistry = await this.serviceEntity.create(creationData);
            return res.status(200).json(newRegistry);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Error"});
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const updatedData = req.body;
        
        try {
            const isUpdated = await this.serviceEntity.updateById(Number(id), updatedData);
            
            if(!isUpdated) {
                return res.status(400).json({ message: "Registry wasn't updated"});
            } else {
                return res.status(200).json({ message: "Updated successfully"});
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Error"});
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            await this.serviceEntity.delete(Number(id));
            return res.status(200).json({ mensagem: `id ${id} was deleted` });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Error"});
        }
    }
}

module.exports = Controller;
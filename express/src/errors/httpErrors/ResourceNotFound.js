import NotFoundError from "./NotFoundError.js";

class ResourceNotFound extends NotFoundError {
  constructor() {
    super("Resource not found");
  }
}

export default ResourceNotFound;
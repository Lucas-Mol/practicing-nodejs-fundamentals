import BaseError from "./BaseError.js";

class NotFoundError extends BaseError {
  constructor(message = "Not found") {
    super(404, message);
  }
}

export default NotFoundError;
import BaseError from "./BaseError.js";

class InvalidInputData extends BaseError {
  constructor(message = "Invalid input data") {
    super(400, message);
  }
}

export default InvalidInputData;
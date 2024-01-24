import InvalidInputData from "./InvalidInputData.js";

class ValidationInputError extends InvalidInputData {
  constructor(error) {
    const errorMessage = Object.values(error.errors)
      .map(error => error.message)
      .join("; ");

    super(errorMessage);
  }
}

export default ValidationInputError;
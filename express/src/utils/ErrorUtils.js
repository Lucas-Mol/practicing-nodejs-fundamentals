import BaseError from "../errors/httpErrors/BaseError.js";
import InvalidInputData from "../errors/httpErrors/InvalidInputData.js";
import ResourceNotFound from "../errors/httpErrors/ResourceNotFound.js";
import ValidationInputError from "../errors/httpErrors/ValidationInputError.js";

class ErrorUtils {
  static InternalServerErrorHTTPResponse(res, error) {
    new BaseError(error.message).sendResponse(res);
  }

  static ResourceNotFoundHTTPResponse(res) {
    new ResourceNotFound().sendResponse(res);
  }

  static InvalidInputDataHTTTPResponse(res) {
    new InvalidInputData().sendResponse(res);
  }

  static ValidationInputErrorHTTPResponse(res, error) {
    new ValidationInputError(error).sendResponse(res);
  }
}

export default ErrorUtils;
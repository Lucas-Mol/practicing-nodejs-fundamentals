import mongoose from "mongoose";
import ErrorUtils from "../utils/ErrorUtils.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next)  {
  console.log(error);

  if(error instanceof mongoose.Error.CastError) {
    ErrorUtils.InvalidInputDataHTTTPResponse(res);
  } else if(error instanceof mongoose.Error.ValidationError) {
    ErrorUtils.ValidationInputErrorHTTPResponse(res, error);
  } else {
    ErrorUtils.InternalServerErrorHTTPResponse(res, error);
  }
}

export default errorHandler;
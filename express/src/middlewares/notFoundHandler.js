import ErrorUtils from "../utils/ErrorUtils.js";

// eslint-disable-next-line no-unused-vars
function notFoundHandler(req, res, next) {
  ErrorUtils.ResourceNotFoundHTTPResponse(res);
}

export default notFoundHandler;
import ErrorUtils from "../utils/ErrorUtils.js";

class ControllerUtils {

  static getPagination(req, res, next) {
    let { limit, page = 1 } = req.query;

    limit = parseInt(limit);
    page = parseInt(page);
        
    if(limit < 1 | page < 1) 
      next(ErrorUtils.InvalidInputDataHTTTPResponse(res));

    return { limit, page };
  }
}

export default ControllerUtils;
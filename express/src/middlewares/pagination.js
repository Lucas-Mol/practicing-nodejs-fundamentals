import ControllerUtils from "../utils/ControllerUtils.js";
import ErrorUtils from "../utils/ErrorUtils.js";

async function pagination(req, res, next) {
  try{
    const { limit, page = 1 } = ControllerUtils.getPagination(req, res, next);
        
    const result = req.result;

    const getResult = await result.find({})
      .skip((page - 1) * limit)
      .limit(limit);
  
    if(getResult !== null) {
      res.status(200)
        .json(getResult);
    }
    else ErrorUtils.ResourceNotFoundHTTPResponse(res);
  
  } catch(error) {
    next(error);
  }
}

export default pagination;

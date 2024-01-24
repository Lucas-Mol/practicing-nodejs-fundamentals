class BaseError extends Error {
  constructor(status = 500, message = "Interal Server Error") {
    super();
    this.message = message;
    this.status = status;
  }

  sendResponse(res) {
    res.status(this.status).send({
      status: this.status,
      message: this.message
    });
  }
}

export default BaseError;
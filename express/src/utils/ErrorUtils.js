class ErrorUtils {
    static handleErrorToHTTPResponse(res, error) {
        res.status(500)
            .json({ message: `Error: ${error.message}`})
    }
}

export default ErrorUtils
const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};

const sendError = (res, message = 'Error', statusCode = 500, errors = null) => {
    return res.status(statusCode).json({
        success: false,
        message,
        errors
    });
};

const sendValidationError = (res, errors) => {
    return sendError(res, 'Validation failed', 400, errors);
};

const sendNotFound = (res, message = 'Resource not found') => {
    return sendError(res, message, 404);
};

const sendUnauthorized = (res, message = 'Unauthorized') => {
    return sendError(res, message, 401);
};

const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

module.exports = {
    sendSuccess,
    sendError,
    sendValidationError,
    sendNotFound,
    sendUnauthorized,
    catchAsync
};

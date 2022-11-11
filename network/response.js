exports.success = function(req, res, message, status){
    let statusCode = status || 200;
    let statusMessage= message || '';
    res.status(statusCode,statusMessage).send({
        error: false,
        status: status,
        body: statusMessage
    })
}

exports.error = function(req, res, message, status){
    let statusMessage= message || 'Internal server error';
    let statusCode = status || 500;
    res.status(statusCode,statusMessage).send({
        error: false,
        status: status,
        body: statusMessage
    })
}
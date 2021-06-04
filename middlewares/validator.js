const Validator = require('validatorjs');
Validator.useLang('es');

module.exports = (request) => {
    return async (req, res, next) => {
        try {
            let validation = await
                new Validator(
                    req.body,
                    request.rules)
            
            if (!validation.passes())
                res.send(validation.errors, 422)
            
            next();
        } catch(error) {
            next(new Error(error.message)); 
        }
    }
}
const Joi = require('joi');

export const userValidate = (res,res,next)=>{
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        contactNo: Joi.number().required(),
    });
    
    try { 
    const { error, value } = schema.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
          return res.status(400).send({status:400,data: JSON.stringify(error)});
      } else {
        next()
      }
    }
    catch (err) { 
        res.send({status:500,err})
    }
}

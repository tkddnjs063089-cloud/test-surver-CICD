import Joi from "joi";

const dogSchema = Joi.object({
  name: Joi.string().trim().min(1).required().messages({ "string.empty": "name is required" }),
  breed: Joi.string().trim().min(1).required().messages({ "string.empty": "breed is required" }),
  age: Joi.number().integer().min(0).required().messages({ "number.base": "age must be a number", "number.min": "age must be at least 0" }),
});

export default dogSchema;

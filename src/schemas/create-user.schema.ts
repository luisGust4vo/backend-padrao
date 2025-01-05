// validation/user.validation.ts
import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().greater(17).required(),
});

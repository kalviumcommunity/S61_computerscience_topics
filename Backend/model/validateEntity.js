const Joi = require('joi');

const validateSchema = Joi.object({
  ID: Joi.string().required(),
  Title: Joi.string().required(),
  Description: Joi.string().required(),
  RequiredKnowledge: Joi.array().required(),
  Popularity: Joi.number().required(),
  LevelOfHardness: Joi.number().required(),
});

module.exports = validateSchema;
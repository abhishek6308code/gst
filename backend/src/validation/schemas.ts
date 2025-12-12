// import Joi from 'joi';

// export const enquirySchema = Joi.object({
//   name: Joi.string().trim().min(2).max(100).required(),
//   email: Joi.string().trim().email().required(),
//   phone: Joi.string().trim().min(7).max(20).required(),
//   business_name: Joi.string().trim().allow(null, '').max(150),
//   service_type: Joi.string().trim().valid('bookkeeping','gst_filing','tax_advisory','payroll','financial_planning','other').required(),
//   message: Joi.string().trim().min(5).max(2000).required(),
// });

// export const enrollmentSchema = Joi.object({
//   name: Joi.string().trim().min(2).max(100).required(),
//   email: Joi.string().trim().email().required(),
//   phone: Joi.string().trim().allow('', null).max(20),
//   highestQualification: Joi.string().trim().min(2).max(100).required(),
// });

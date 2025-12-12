// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import { Enquiry } from './models/Enquiry';
// import { Enrollment } from './models/Enrollment';
// import { enquirySchema, enrollmentSchema } from './validation/schemas';

// dotenv.config();
// const PORT = process.env.PORT || 4000;
// const MONGODB_URI = process.env.MONGODB_URI || '';

// if (!MONGODB_URI) {
//   console.error('MONGODB_URI is required in env');
//   process.exit(1);
// }

// mongoose.connect(MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1);
//   });

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Health
// app.get('/api/health', (_req, res) => res.json({ ok: true }));

// // Create enquiry
// app.post('/api/enquiries', async (req, res) => {
//   try {
//     const { error, value } = enquirySchema.validate(req.body, { abortEarly: false });
//     if (error) return res.status(400).json({ errors: error.details.map(d => d.message) });

//     const enquiry = new Enquiry(value);
//     const saved = await enquiry.save();
//     return res.status(201).json({ id: saved._id, message: 'Enquiry submitted' });
//   } catch (err) {
//     console.error('POST /api/enquiries error', err);
//     return res.status(500).json({ error: 'Server error' });
//   }
// });

// // Create enrollment
// app.post('/api/enrollments', async (req, res) => {
//   try {
//     const { error, value } = enrollmentSchema.validate(req.body, { abortEarly: false });
//     if (error) return res.status(400).json({ errors: error.details.map(d => d.message) });

//     const enrollment = new Enrollment(value);
//     const saved = await enrollment.save();
//     return res.status(201).json({ id: saved._id, message: 'Enrollment successful' });
//   } catch (err) {
//     console.error('POST /api/enrollments error', err);
//     return res.status(500).json({ error: 'Server error' });
//   }
// });

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

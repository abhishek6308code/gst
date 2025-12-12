// import { Schema, model } from 'mongoose';

// export interface IEnquiry {
//   name: string;
//   email: string;
//   phone: string;
//   business_name?: string | null;
//   service_type: string;
//   message: string;
//   createdAt?: Date;
// }

// const EnquirySchema = new Schema<IEnquiry>({
//   name: { type: String, required: true, trim: true },
//   email: { type: String, required: true, trim: true },
//   phone: { type: String, required: true, trim: true },
//   business_name: { type: String, default: null, trim: true },
//   service_type: { type: String, required: true, trim: true },
//   message: { type: String, required: true, trim: true },
// }, { timestamps: true });

// export const Enquiry = model<IEnquiry>('Enquiry', EnquirySchema);

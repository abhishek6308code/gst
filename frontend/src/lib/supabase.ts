import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  full_name: string;
  business_name: string | null;
  phone: string;
  gstin: string | null;
  role: 'client' | 'admin';
  created_at: string;
  updated_at: string;
};

export type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  business_name: string | null;
  service_type: 'bookkeeping' | 'gst_filing' | 'tax_advisory' | 'payroll' | 'financial_planning' | 'other';
  message: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  admin_notes: string | null;
  created_at: string;
};

export type Document = {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  file_path: string;
  file_type: 'gst_return' | 'invoice' | 'tax_document' | 'payroll' | 'financial_report' | 'other';
  file_size: number;
  uploaded_at: string;
  uploaded_by: string;
};

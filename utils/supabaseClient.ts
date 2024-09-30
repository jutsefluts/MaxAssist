// utils/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bgeivmtdqqpfmmtvcmzv.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnZWl2bXRkcXFwZm1tdHZjbXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NTM3NTUsImV4cCI6MjA0MzAyOTc1NX0.NvrlExgHI22cZYPOudLol56WRtPFBqhHUDETAl5oW6s';

// Create a Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
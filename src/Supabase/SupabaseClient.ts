import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL as string; // Supabase Database URL
const key = process.env.SUPABASE_KEY as string; // Supabase Database Key

// Create Supabase client to connect to database
export const supabase = createClient(url, key);

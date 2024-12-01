import { createClient } from "@supabase/supabase-js";

//process.envでstring以外の値が参照されることはない
const supabaseUrl = process.env.VITE_SUPABASE_URL as string;
const supabaseKey = process.env.VITE_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

// import { createClient } from '@supabase/supabase-js'

// // Create a single supabase client for interacting with your database
// export const supabase = createClient(
//         process.env.VITE_SUPABASE_URL!,
//         process.env.VITE_SUPABASE_ANON_KEY!
// )


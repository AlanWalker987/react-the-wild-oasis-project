import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://idtlezolwqytzblhuskc.supabase.co";
const supabasekey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkdGxlem9sd3F5dHpibGh1c2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MTM1NzYsImV4cCI6MjA0NDI4OTU3Nn0.WXyHtxHBgA0m0N8k7C2yfS8x1SVZQU3P7RyIZx3T1M0";
const supabase = createClient(supabaseUrl, supabasekey);

export default supabase;

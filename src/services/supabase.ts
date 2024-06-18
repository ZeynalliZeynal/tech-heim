import { createClient } from "@supabase/supabase-js";

export const supabaseUrl: string = "https://vyhhxsbwqijjsemwtexx.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5aGh4c2J3cWlqanNlbXd0ZXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4OTUyMTcsImV4cCI6MjAzMzQ3MTIxN30.VLnfNTPCBUn9Cr07cgQFK2SYuEBZgkVkjsVmVS6alIM";
export const supabase = createClient(supabaseUrl, supabaseKey);

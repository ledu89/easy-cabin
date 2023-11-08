import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vvtmiebjglgozcnabluu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2dG1pZWJqZ2xnb3pjbmFibHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNTY1MDgsImV4cCI6MjAxMTgzMjUwOH0.P7casE4hKWkMCnQWxTfSs0Ew0XN2y45K0SjyHVMLGmo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

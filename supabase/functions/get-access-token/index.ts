// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import { corsHeaders } from '../_shared/cors.ts'

console.log("Hello from Functions!")

Deno.serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const formData = new URLSearchParams();
  formData.append("grant_type", "account_credentials")
  formData.append("account_id", "lu73HX_SRnid9VMDmQ5A4Q")
  console.log(formData)
  const response = await fetch("https://zoom.us/oauth/token", {
      method: "POST",
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic VmpkanFMOEJRMHpTWkZVVFFwX2J3Ong0a2lQUVZmaEJldU4zZkt1eUU3VG5qWlBKeVBXNERC'
      },
      body: formData
  });
  let data = await response.json()
  console.log(data)

  return new Response(
    JSON.stringify(data),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } },
  )
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/get-access-token' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/

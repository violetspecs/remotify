import { createClient } from '@supabase/supabase-js'
import { useAuthStore } from '../stores/auth'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ecyuyoodejvocsoduyuv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjeXV5b29kZWp2b2Nzb2R1eXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1OTI3MjcsImV4cCI6MjAyMjE2ODcyN30.w_9RVcdVhWP4yRHMTjzAaQIRXN8PcfqZdOPbsiqCNn0')
const store = useAuthStore();
async function signUpNewUser(email, password) {
    const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
        emailRedirectTo: 'http://localhost:9000/'
    }
    })
    if (error) {
        console.log(error)
    }
}

async function signInWithEmail(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (error) {
        console.log(error)
    }
    if (data) {
        console.log(data)
        store.isLoggedIn = true
        if (data.user) {
            return true
        } else {
            return false
        }
    }
}

async function signOut() {
    const { error } = await supabase.auth.signOut()
    store.isLoggedIn = false
}


  

export { signUpNewUser, signInWithEmail, signOut }
async function getAccessToken() {
    const response = await fetch("https://ecyuyoodejvocsoduyuv.supabase.co/functions/v1/get-access-token")
    return response.json()
}

export { getAccessToken }
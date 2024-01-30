async function getAccessToken() {
    const formData = new FormData();
    formData.append("grant_type", "account_credentials")
    formData.append("account_id", "lu73HX_SRnid9VMDmQ5A4Q")
    const response = await fetch("https://zoom.us/oauth/token", {
        method: "POST",
        mode: "no-cors",
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic VmpkanFMOEJRMHpTWkZVVFFwX2J3Ong0a2lQUVZmaEJldU4zZkt1eUU3VG5qWlBKeVBXNERC'
        },
        body: formData
    });
    return response.json()
}

export { getAccessToken }
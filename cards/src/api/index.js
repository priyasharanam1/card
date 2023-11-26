export const getPosts = async () => {
    const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc",{
        method: "GET",
    })
    return await response.json()
}
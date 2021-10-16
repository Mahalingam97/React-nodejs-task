export async function getEmoji() {
    try{
        const response = await fetch("http://localhost:5000/search");
        return await response.json();
    }catch(error) {
        return [];
    }
}

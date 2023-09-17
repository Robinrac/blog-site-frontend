import axios from "axios";

const API = process.env.API_URL

export async function homePage() {
    try {
        const response = await axios.get(API);
        const data = response.data;
        return data;

    } catch (error) {
        console.error("Error message", error);
        return { error: error.message};
    }
}
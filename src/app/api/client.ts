import axios from "axios";

export const sjekkInnlogget = async function(): Promise<Boolean> {
    try {
        const response = await axios.get('/api/sjekk-innlogget');
        if(response.status === 200) {
            return true;
        }
        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
}
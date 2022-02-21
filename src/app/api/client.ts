import axios from "axios";
import { Organisasjon } from "../../types/Organisasjon";

export const sjekkInnlogget = async function(): Promise<Boolean> {
    try {
        const response = await axios.get('/permitteringsportal/api/sjekk-innlogget');
        if(response.status === 200) {
            return true;
        }
        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export const hentOrganisasjoner = async function(): Promise<Organisasjon[]> {
    try {
        const response = await axios.get('/permitteringsportal/api/organisasjoner');
        if(response.status === 200) {
            return response.data
        }
        return [];
    } catch (e) {
        console.log(e);
        return [];
    }
}


import axios from "axios";
import { Oppgave } from "../../types/Oppgave";
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
    const response = await axios.get('/permitteringsportal/api/organisasjoner');
    return response.data
}

export const sendOppgaver = () => {
    axios.post('/permitteringsportal/api/send-bekreftelse"')
}

export const hentOppgaver = async function(): Promise<Oppgave[]> {
    const response = await axios.get('/permitteringsportal/api/oppgaver');
    return response.data
}

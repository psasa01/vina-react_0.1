import axios from 'axios';
import {
    FETCH_USER,
    FETCH_VINA,
    FETCH_SINGLE_VINO,
    VINA_PO_ZEMLJAMA,
    VINA_PO_VRSTAMA,
    VINA_PO_KORISNICIMA,
    VINA_PO_GODINAMA,
    MOJA_KOLEKCIJA_VINA,
    OBRISI_VINO
} from './types';


export const fetchUser = () => async dispatch => {
    // if reduxThunk middleware sees that we returning function
    // it will automaticaly call this function and pass dispatch as an argument!!
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchVina = () => async dispatch => {
    const res = await axios.get('/api/vina');
    dispatch({ type: FETCH_VINA, payload: res.data })
}

export const fetchSingleVino = (slug) => async dispatch => {

    const res = await axios.get(`/api/vino/${slug}`);
    dispatch({ type: FETCH_SINGLE_VINO, payload: res.data })
}

export const vinaPoZemljama = (zemlja) => async dispatch => {

    const res = await axios.get(`/api/vina/zemlje/${zemlja}`);
    dispatch({ type: VINA_PO_ZEMLJAMA, payload: res.data })
}

export const vinaPoVrstama = (vrsta) => async dispatch => {

    const res = await axios.get(`/api/vina/vrste/${vrsta}`);
    dispatch({ type: VINA_PO_VRSTAMA, payload: res.data })
}

export const vinaPoKorisnicima = (korisnik) => async dispatch => {

    const res = await axios.get(`/api/vina/korisnici/${korisnik}`);
    dispatch({ type: VINA_PO_KORISNICIMA, payload: res.data })
}

export const vinaPoGodinama = (godina) => async dispatch => {

    const res = await axios.get(`/api/vina/godine/${godina}`);
    dispatch({ type: VINA_PO_GODINAMA, payload: res.data })
}

export const mojaKolekcijaVina = () => async dispatch => {

    const res = await axios.get('/api/vina/mojaKolekcijaVina');
    dispatch({ type: MOJA_KOLEKCIJA_VINA, payload: res.data })
}

export const obrisiVino = (slug) => async dispatch => {

    const res = await axios.get(`/api/vino/ukloni/${slug}`);
    dispatch({ type: OBRISI_VINO, payload: res.data })
}
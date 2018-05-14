import { combineReducers } from 'redux';
import authReducer from './authReducer';
import vinoReducer from './vinoReducer';
import singleVinoReducer from './singleVinoReducer';
import vinaPoZemljamaReducer from './vinaPoZemljamaReducer';
import vinaPoVrstamaReducer from './vinaPoVrstamaReducer';
import vinaPoKorisnicimaReducer from './vinaPoKorisnicimaReducer';
import vinaPoGodinamaReducer from './vinaPoGodinamaReducer';
import mojaKolekcijaVinaReducer from './mojaKolekcijaVinaReducer';
import obrisiVinoReducer from './obrisiVinoReducer';

export default combineReducers({
    // whatever we put inside represents a key that exists inside state 
    auth: authReducer,
    vina: vinoReducer,
    vino: singleVinoReducer,
    zemlje: vinaPoZemljamaReducer,
    vrste: vinaPoVrstamaReducer,
    korisnici: vinaPoKorisnicimaReducer,
    godine: vinaPoGodinamaReducer,
    moja: mojaKolekcijaVinaReducer,
    obrisano: obrisiVinoReducer
});
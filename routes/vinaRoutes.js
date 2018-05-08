const vinaController = require('../controllers/vinaController');
const catchErrors = (fn) => {
    return function (req, res, next) {
        return fn(req, res, next).catch(next);
    };
};


module.exports = (app) => {

    app.get('/api/vina', vinaController.fetchVina);
    app.get('/api/vino/:slug', vinaController.fetchSingleVino);
    app.get('/api/vina/zemlje/:zemlja', vinaController.pretragaPoZemljama);
    app.get('/api/vina/vrste/:vrsta', vinaController.pretragaPoVrstama);
    app.get('/api/vina/korisnici/:korisnik', vinaController.pretragaPoKorisnicima);
    app.get('/api/vina/godine/:godina', vinaController.pretragaPoGodinama);
    app.get('/api/vina/mojaKolekcijaVina', vinaController.mojaKolekcijaVina);
    app.post('/api/vino/dodaj-vino',
        vinaController.dodajSliku,
        vinaController.resize,
        catchErrors(vinaController.snimiVino)
    );
    app.post('/api/vino/uredi-vino/:slug',
        vinaController.dodajSliku,
        vinaController.resize,
        catchErrors(vinaController.snimiUredjenoVino)
    );

    app.get('/api/vino/ukloni/:slug', catchErrors(vinaController.ukloniVino));

}
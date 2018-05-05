const vinaController = require('../controllers/vinaController');

module.exports = (app) => {

    app.get('/api/vina', vinaController.fetchVina);
    app.get('/api/vino/:slug', vinaController.fetchSingleVino)

}
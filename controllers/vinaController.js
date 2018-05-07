const mongoose = require('mongoose');
const Vino = mongoose.model('Vino');
const User = mongoose.model('users');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');
const fs = require('fs');
const mongooseAlgolia = require('mongoose-algolia');



exports.fetchVina = async (req, res) => {
    const vina = await Vino
        .find()
        .collation({ locale: "hr", strength: 2 })
        .sort({ datum: -1 })
        .limit(20);
    res.send(vina);
}

exports.fetchSingleVino = async (req, res) => {
    console.log(req.params)

    const vino = await Vino.findOne({
        slug: req.params.slug
    })
    res.send(vino);
}

exports.pretragaPoZemljama = async (req, res) => {
    console.log(req.params)
    const zemlja = req.params.zemlja;
    const zemljaPromise = Vino.listaZemalja();
    const vinoPromise = Vino.find({
        zemlja: zemlja
    }).sort({ datum: 1 });
    const [zem, vina] = await Promise.all([zemljaPromise, vinoPromise]);
    res.send({
        title: 'Pregled vina po zemljama',
        zemlja,
        zem,
        vina
    });

};

exports.pretragaPoVrstama = async (req, res) => {
    const vrsta = req.params.vrsta;
    const vrstaPromise = Vino.popisVrsti();
    const vinoPromise = Vino.find({
        vrsta
    }).collation({ locale: "hr", strength: 2 }).sort({ zemlja: 1 });
    const [vrs, vina] = await Promise.all([vrstaPromise, vinoPromise]);
    res.send({
        title: 'Pregled vina po vrstama',
        vrsta,
        vrs,
        vina
    });
};

exports.pretragaPoKorisnicima = async (req, res) => {
    const korisnik = req.params.korisnik;
    const korisnikPromise = Vino.popisKorisnika();
    const vinoPromise = Vino.find({
        ime: korisnik
    }).collation({ locale: "hr", strength: 2 }).sort({ zemlja: 1 });
    const [kor, vina] = await Promise.all([korisnikPromise, vinoPromise]);
    res.send({
        title: 'Pregled vina po korisnicima',
        korisnik,
        kor,
        vina
    });
};

exports.pretragaPoGodinama = async (req, res) => {
    const godina = parseInt(req.params.godina) || null;
    const godinaPromise = Vino.popisGodina();
    const vinoPromise = Vino.find({
        godina
    }).collation({ locale: "hr", strength: 2 }).sort({ zemlja: 1 });
    const [god, vina] = await Promise.all([godinaPromise, vinoPromise]);
    res.send({
        title: 'Pregled vina po godinama',
        godina,
        god,
        vina
    });
};

exports.mojaKolekcijaVina = async (req, res) => {

    console.log('ffgfsgfgf', req.user.ime);

    const loggedUser = req.user.ime
    console.log(loggedUser)

    // const page = req.params.page || 1;
    // const limit = 12;
    // const skip = (page * limit) - limit;

    const moja = await Vino
        .find({ ime: loggedUser })
        .collation({ locale: "hr", strength: 2 })
        .sort({ zemlja: 1 })
    // .skip(skip)
    // .limit(limit);

    res.send(moja);
}

// ---------------------------------------------------------- SNIMI VINO ------------------------------------------------- //

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter: function (req, file, next) {
        const isPhoto = file.mimetype.startsWith('image/');
        if (isPhoto) {
            next(null, true);
        } else {
            next({
                message: 'Taj tip datoteke nije podržan!'
            });
        }
    }
};

exports.dodajSliku = multer(multerOptions).single('slika');

exports.resize = async (req, res, next) => {
    // check if there is no file to resize
    // console.log(req.file)
    if (!req.file) {
        return next();
    }
    const extension = req.file.mimetype.split('/')[1];
    req.body.slika = `${uuid.v4()}.${extension}`;
    // resize
    const slika = await jimp.read(req.file.buffer);
    const resize800 = slika.resize(jimp.AUTO, 800);
    const write800 = slika.write(`./client/public/images/vina-big/${req.body.slika}`);
    const resize400 = slika.resize(jimp.AUTO, 400);
    const write400 = slika.write(`./client/public/images/vina-thumbs/${req.body.slika}`);
    Promise.all([resize800, write800, resize400, write400]);
    next();
};

exports.snimiVino = async (req, res) => {
    const userPromise = User.findOneAndUpdate({
        _id: req.user._id
    }, {
            $inc: { brojVina: 1 }
        }, {
            new: true,
            runValidators: true
        }).exec();

    req.body.korisnik = req.user._id;

    const vino = new Vino(req.body);
    vino.ime = req.user.ime;

    const vinoPromise = vino.save();
    // const algoliaPromise = Vino.SyncToAlgolia();

    // await Promise.all([vinoPromise, userPromise, algoliaPromise]);
    await Promise.all([vinoPromise, userPromise]);

    req.flash('success', 'Uspješno ste unijeli novo vino u bazu');
    res.redirect('/');
}

exports.snimiUredjenoVino = async (req, res) => {
    const vino = await Vino.findOneAndUpdate({
        slug: req.params.slug
    }, req.body, {
            new: true,
            runValidators: true
        }).exec();

    // Vino.SyncToAlgolia();

    res.redirect('/');
}
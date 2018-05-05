const mongoose = require('mongoose');
const Vino = mongoose.model('Vino');
const User = mongoose.model('users');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');
const fs = require('fs');
const mongooseAlgolia = require('mongoose-algolia');

exports.fetchVina = async (req, res) => {
    const vina = await Vino.find();

    res.send(vina);
}

exports.fetchSingleVino = async (req, res) => {


    const vino = await Vino.findOne({
        slug: req.params.slug
    })

    res.send(vino);
}
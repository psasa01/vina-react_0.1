const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');
const passportLocalMongoose = require('passport-local-mongoose');
const md5 = require('md5');

const userSchema = new Schema({
    google: {
        id: String,
        name: String,
        token: String
    },
    facebook: {
        id: String,
        name: String,
        token: String
    },
    ime: {
        type: String,
        required: 'Molimo unesite korisničko ime',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Molimo unesite validan email',
        lowercase: true,
        trim: true,
        validate: [
            validator.isEmail,
            'Nažalost niste unijeli validnu email adresu!'
        ]
    },
    zadnjiPutVidjen: {
        type: Date
    },
    slika: String,
    level: {
        type: Number,
        default: 30
    },
    reg: {
        type: String,
        default: 'ne'
    },
    brojVina: {
        type: Number,
        default: 0
    },
    registrovan: {
        type: Date,
        default: Date.now()
    },
    secretToken: {
        type: String
    },
    active: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String,
        default: ''
    },
    resetPasswordExpire: {
        type: Date,
        default: undefined
    }
},
    // https://stackoverflow.com/questions/13133911/cant-get-mongoose-virtuals-to-be-part-of-the-result-object
    {
        toObject: { virtuals: true }
    });

userSchema.virtual('gravatar').get(function () {
    const hash = md5(this.email);
    return `https://gravatar.com/avatar/${hash}?s=50`;
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});

mongoose.model('users', userSchema);
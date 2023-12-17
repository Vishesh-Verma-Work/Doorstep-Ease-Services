const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    exp: {
        type: String,
        required: true
    },
    add: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    code1: {
        type: String,
        required: true
    },
    num1: {
        type: Number,
        required: true
    },
    code2: {
        type: String,
        required: true
    },
    num2: {
        type: Number,
        required: true
    }
});

const prov = mongoose.model("prov", providerSchema);

module.exports = prov;
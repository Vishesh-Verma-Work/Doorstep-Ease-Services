const mongoose = require('mongoose');

const categSchema = new mongoose.Schema({
    serviceName : {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },




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

const catg = mongoose.model("catg", categSchema);

module.exports = catg;
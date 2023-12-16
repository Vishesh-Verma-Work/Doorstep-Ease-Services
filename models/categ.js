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
    }
});

const catg = mongoose.model("catg", categSchema);

module.exports = catg;
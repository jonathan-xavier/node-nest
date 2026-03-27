const mongoose = require("mongoose")

const mebroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    idade: {
        type: Number,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },

}, {

    timestamps: true
})

module.exports = mongoose.model("Membro", mebroSchema)
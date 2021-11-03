const mongoose = require('mongoose');
const { Schema } = mongoose

const Surgerie = new Schema({
    paciente: String,
    doctor: String,
    cirugia: String,
    datetime_cx: String,
    estado: String
})

module.exports = mongoose.model('Surgerie', Surgerie)

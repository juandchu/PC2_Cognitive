var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    apellido: {type: String, required: true, max: 20},
    email: {type: String, required: true},
    celular: {type: String, required: true, max:9},
    codAlum: {type: String, required: true, max:9},
    carrera: {type: String, required: true, max:25},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);

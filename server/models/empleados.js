const mongoose = require('mongoose');

const { Schema} = mongoose;

const empleadosSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    oficina: {type: String, required: true},
    salario: {type: Number, required: true}
});

module.exports = mongoose.model('empleados', empleadosSchema);
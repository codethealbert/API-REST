const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-empleados';

mongoose.connect(URI, {useNewUrlParser: true})
    .then( db => console.log('Conectados a la BD'))
    .catch( err => console.log(err));

module.exports = mongoose;
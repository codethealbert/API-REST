const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); 
const app = express();

const { mongoose } = require('./database');

// Configuracion
app.set('port', process.env.PORT | 3000);

// Midleware para procesar los datos
app.use(morgan('dev')); // Para visializar el tipo de peticiones echas al servidor
app.use(express.json());  // Para tender los formatos json para angular
app.use(cors({origin: 'http://localhost:4200'})); // para aceptar que angular en otro puerto acceda a la api res

// rutas
app.use('/api/empleados',require('./routes/empleados.routes'));

// Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
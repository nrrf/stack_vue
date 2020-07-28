'use strict'
const bodyParser = require('body-parser'); // de la mano a lo que es el middleweres
const express = require('express');
const app = express();

// usamos el modulo de mongoose para conectarnos con mongodb
const mongoose = require('mongoose');
// recordar al hacer la siguiente conexion tener mongod abierto
mongoose.connect('mongodb://localhost/mevn-stack', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("bd Connection")).catch(err => console.log(err)); // aqui se crea la base de datos (nombre obvamiente es opcional)

/*
mongoose.connect('mongodb://localhost/mevn-stack', { // esto es un metodo q se hacia antes pero con las actualizaciones de mongoose ya no es necesario
        useMongoClient: true
    })*/
// settings: configuraciones del servidor
app.set('port', process.env.PORT || 3000); // esto nos dice q si en el SO hay un puerto o sino use 3000

/*app.listen(3000, () => {
    console.log('server on port', 3000)
})*/

//middlewres // configurar todo lo que vamos a necesitar para nuestra aplicacion en elk lado del cliente
app.use(bodyParser.json); // vue nos va a dar un formato json, lo anteior es para poder entenderlo



app.listen(app.get('port'), () => { // este es el puerto q se asigna y si no se da es el 3000 por defecto
    console.log('server on port', app.get('port'))
});
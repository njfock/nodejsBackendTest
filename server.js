const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/message', function (req, res){
    res.send('Lista de mensajes');
});
router.delete('/message', function (req, res){
    res.send('Borrar mensaje');
});
//app.use('/', function (req, res) {
//    res.send('Hola');
//});

app.listen(3000);
console.log('La app escucha en http://localhost:3000');
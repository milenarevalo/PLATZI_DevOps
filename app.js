const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
     return res.sendFile(__dirname + '/public/index.html');
});

//para que siempre entregue el index file al usuario en cualquier ruta que visite
app.get('/*',(req, res) =>{
     return res.redirect('/');
});

module.exports = app;

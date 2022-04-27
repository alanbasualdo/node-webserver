const hbs = require('hbs')
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático
app.use(express.static('public'))

app.listen(port, (req, res) => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Alan',
        titulo: 'Node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alan',
        titulo: 'Node'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alan',
        titulo: 'Node'
    })
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});
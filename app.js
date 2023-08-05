const express = require('express')  
const hbs = require('hbs');
const app = express();
require('dotenv').config();

const port = process.env.PORT;  


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use( express.static( 'public' ))


app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'Alvaro Mosqueda',
        titulo: 'Curso de NodeJs'
    });
})
app.get('/generic', (req, res) =>{
    res.render('generic', {
        nombre: 'Alvaro Mosqueda',
        titulo: 'Curso de NodeJs'
    })
})

app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'Alvaro Mosqueda',
        titulo: 'Curso de NodeJs'
    });
})

app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, ()=>{
    console.log(`listening at https://localhost:${port}`)
})
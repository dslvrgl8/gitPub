const express = require('express')
const app = express()
const models = require('./models/Drinks');
const drinks = models.drinks
console.log(drinks)

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {drinks})
})

app.get('/drinks/:id', (req, res) => {
    const drink = drinks[req.params.id]
    res.render('drinks_show.ejs', {drink})
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

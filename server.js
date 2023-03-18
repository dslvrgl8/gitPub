const express = require('express')
const app = express()
const models = require('./models/Drinks');
const model = require('./models/Food')

const drinks = models.drinks
const food = model.food

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

app.get('/food', (req, res) => {
    res.render('food_index.ejs', {food})
})

app.get('/food/:id', (req, res) => {
    const foods = food[req.params.id]
    res.render('food_show.ejs', {foods})
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

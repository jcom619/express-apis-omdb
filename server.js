// required packages
const { default: axios } = require('axios')
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const rowdy = require('rowdy-logger')
const OMDB_API_KEY = process.env.OMDB_API_KEY

// configure express app
const app = express()
const PORT = 3000
// (╯°□°）╯︵ ┻━┻
const rowdyResults = rowdy.begin(app)

// Sets EJS as the view engine
app.set('view engine', 'ejs')
// Specifies the location of the static assets folder
app.use(express.static('static'))
// Enables EJS Layouts middleware
app.use(ejsLayouts)
// Sets up body-parser for parsing form data
app.use(express.urlencoded({ extended: false }))
// Adds some logging to each request
app.use(require('morgan')('dev'))

// Routes
app.get('/', function(req, res) {
  res.render('results.ejs', { movies: result.})
})

app.get('/results', () => {

})

app.get('/detail', (req, res) => {

})


app.get('/test', async (req, res) => {
  const results = await axios.get('http://www.omdbapi.com/?s=freddy got fingered&apikey=${OMDB_API_KEY}&s=${req.query.search}')
// The app.listen function returns a server handle
  res.json({ movies:results.data})

})


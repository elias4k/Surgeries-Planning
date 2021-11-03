const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const uri = "mongodb://localhost/mevn-database";



const app = express()
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err))


// Settings
app.set('port', process.env.PORT || 3000)


// Middleware
app.use(morgan('dev'))
app.use(express.json())


// Routes
app.use('/', require('./routes/surgeries.js'))


// Statics Files

app.use(express.static(__dirname + '/public'))


// Server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'))
    console.log("http://localhost:3000")
})
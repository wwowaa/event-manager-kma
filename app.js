//imports
const express = require('express')
const app = express()
const port = 3000

//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

//Set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('auth')
})

app.get('/event', (req, res) => {
    res.render('event')
})

app.get('/fullcalendar', (req, res) => {
    res.render('fullcalendar')
})

app.get('/mainpage', (req, res) => {
    res.render('mainpage')
})

app.get('/passreset1', (req, res) => {
    res.render('passreset1')
})

app.get('/passreset2', (req, res) => {
    res.render('passreset2')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/auth', (req, res) => {
    res.render('auth')
})


// Listen on port 
app.listen(port, () => console.info(`Listening on port ${port}`))
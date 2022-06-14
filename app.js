const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config({path: './env/.env'})

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))
//app.use(cookieParser)

// import the router
app.use('/', require('./routes/router'))

app.use(express.static(path.join(__dirname, '/public')))

app.listen(5000, ()=>{
    console.log('Server running in port: 5000')
});
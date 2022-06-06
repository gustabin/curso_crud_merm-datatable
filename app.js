const express = require('express')
const app = express()

app.set('View engine', 'ejs')

// import the router
app.use('/', require('./routes/router'))

app.listen(5000, ()=>{
    console.log('Server running in port: 5000')
});
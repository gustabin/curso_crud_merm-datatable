const express = require('express')
const router = express.Router()

//Invoke the database connection
const conexion = require('../database/db')

router.get('/', (req, res) => {
    // res.send('hola mundo')
    conexion.query('SELECT * FROM users', (error, results) => {
        if(error){
            throw error;
        } else {
            res.send(results);
        }
    })
})


module.exports = router;
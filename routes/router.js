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
            // res.send(results);
            res.render('index', { results: results })
        }
    })
})

router.get('/create', (req, res) => {
    res.render('create')
})

//to invoke the methods for the CRUD of users
const userController = require('../controllers/userController')

router.post('/save', userController.save)


module.exports = router;
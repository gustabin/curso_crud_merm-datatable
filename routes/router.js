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

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id= ?', [id], (error, results) => {
        if(error){
            throw error;
        } else {
            res.render('edit', { user: results[0] })
        }
    })
})

//to invoke the methods for the CRUD of users
const userController = require('../controllers/userController')

router.post('/save', userController.save)
router.post('/update', userController.update)

router.get('/delete/:id', (req, res) => {
    const id = req.params.id
    conexion.query('DELETE FROM users WHERE id= ?', [id], (error, results) => {
        if(error){
            throw error;
        } else {
            res.redirect('/')
        }
    })
});


module.exports = router;
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
            res.render('users', { results: results })
        }
    })
})

router.get('/createUser', (req, res) => {
    res.render('createUser')
})

router.get('/editUser/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id= ?', [id], (error, results) => {
        if(error){
            throw error;
        } else {
            res.render('editUser', { user: results[0] })
        }
    })
})

//to invoke the methods for the CRUD of users
const userController = require('../controllers/userController')

router.post('/saveUser', userController.saveUser)
router.post('/updateUser', userController.updateUser)

router.get('/deleteUser/:id', (req, res) => {
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
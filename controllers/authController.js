const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const { promisify } = require('util')

//procedure to register
exports.register = async (req, res) => {   
    try {
        const name = req.body.name
        const email = req.body.email
        const pass = req.body.pass
       
        let passHash = await bcryptjs.hash(pass, 10)
        //console.log(name + " - " + email + " - " + passHash)
        conexion.query('INSERT INTO users SET ?', {name: name, email: email, pass: passHash}, (error, results) => {
            if(error) {
                console.error(error)
                res.render('register', {
                    alert: true,
                    alertMessage: 'This email already exists'
                })
            } else {
                res.redirect('/')
            }
        }) 
    } catch (error) {
        console.error(error)
    }
}

//procedure to logout
exports.logout = (req, res) => {
    return res.redirect('/')
}
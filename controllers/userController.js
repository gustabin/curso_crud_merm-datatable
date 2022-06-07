//invoke the DB connection
const conexion = require('../database/db')

//procedure to save
exports.save = (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const rol = req.body.rol

    // console.log(email + " - " + name + " - " + rol)
    conexion.query('INSERT INTO users SET ?', {email:email, name:name, rol:rol}, (error, results) => {
        if(error) {
            console.error(error)
        } else {
            res.redirect('/');
        }
    });
};

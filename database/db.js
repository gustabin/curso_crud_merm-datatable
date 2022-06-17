const mysql = require('mysql')

const conexion = mysql.createConnection({
    // host : process.env.DB_HOST,
    // user : process.env.DB_USER,
    // password : process.env.DB_PASS,
    // database : process.env.DB_DATABASE,
    host : 'www.gustabin.com',
    user : 'tutornodejs',
    password : '1234567890',
    database : 'crud_nodejs',
})

conexion.connect ((error) => {
    if(error) {
        console.error('The connection error is:' + error)
        return
    }
    console.log('Connected to the database MySQL!')
})

module.exports = conexion
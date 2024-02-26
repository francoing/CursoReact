const express = require('express')
const { dbConnection } = require('./database/config')
require('dotenv').config()
var cors = require('cors')



// crear server de expres

const app = express()

//base de datos
dbConnection()

//Cors
app.use(cors())
 

// Directorio publico
app.use(express.static('public'))

//lectura y parseo de la request

app.use(express.json())

//Rutas
app.use('/api/auth',require('./routes/auth'))


//escuchar peticion

app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto  ${process.env.PORT}`);
})
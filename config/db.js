const mongoose = require('mongoose')


require('dotenv').config({path: 'variables.env'})

const conectarDB = async () => {

    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.DB_URL, {
        })

        console.log('db conectado')
        
    } catch (error) {
        console.log('hubo un error')
        console.log(error)

        process.exit(1)

    }

}

module.exports = conectarDB
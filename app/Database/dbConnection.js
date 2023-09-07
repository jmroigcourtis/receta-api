let mongoose = require('mongoose')
const dbConnect = async(MONGO_URI) => {
    try {
        console.log('Conectando a la base de datos...')
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.error('Fallo la conexión a la base de datos', error)
    } finally {
        console.log('Conexión establecida')
    }
}

module.exports = dbConnect
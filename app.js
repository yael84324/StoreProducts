const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const bodyParsr = require('body-parser')
const productRouter = require('./routes/product.router')
const cors=require('cors')
app.use(cors())
app.use(bodyParsr.json())
app.use('/products', productRouter)

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('connected to db')
    }).catch(err => {
        console.log(err)
    })


app.listen(process.env.PORT, () => { console.log(`listening port ${process.env.PORT}`) })
const express=require('express')
const dotenv=require('dotenv').config()
const cors=require('cors')
const morgan=require('morgan')
const connectDb=require('./db/db.js')
const authRoute=require('./routes/authRoute.js')
const pizzaRoute=require('./routes/pizzaRoute.js')
const cartRoute=require('./routes/cartRoute.js')
const orderRoute=require('./routes/orderRoute.js')

connectDb()
const app=express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))


app.use('/api/user',authRoute)
app.use('/api/pizza',pizzaRoute)
app.use('/api/cart',cartRoute)
app.use('/api/orders',orderRoute)

const port=process.env.PORT ||7788;

app.listen(port,()=>{
    console.log('sever running on port '+port)
})
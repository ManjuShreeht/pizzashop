const mongoose=require('mongoose')

const connectDb=async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongo db connected ${ conn.connection.host}`)

    }catch(error){
        console.log(`mongodb error ${error}`)
    }
}

module.exports=connectDb
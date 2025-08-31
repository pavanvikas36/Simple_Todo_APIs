const mongooes = require("mongoose")

const uri = "mongodb+srv://pavanvivek36_db_user:kC5Rhhone90S1AYJ@cluster0.mo0i2rv.mongodb.net/"
// const uri = "mongodb://localhost:27017/"

async function connectDB (){
    try{
        await mongooes.connect(uri, {dbName: "simple_todo"})
        console.log("Database Connected Successfully")
    }catch(error){
        console.log(error)
    }
}
module.exports = {connectDB}
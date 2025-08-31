const mongooes = require("mongoose")

async function connectDB (){
    try{
        await mongooes.connect("mongodb://localhost:27017/", {dbName: "simple_todo"})
        console.log("Database Connected Successfully")
    }catch(error){
        console.log(error)
    }
}
module.exports = {connectDB}
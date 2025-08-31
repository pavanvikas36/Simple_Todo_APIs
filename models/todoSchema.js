const mongooes = require("mongoose")

const todosScheme = new mongooes.Schema({
    title:{type:String, require:true, unique:true},
    body:{type:String, require:true, unique:true, trim:true}
}, {timestamps:true})

const TodoModel = mongooes.model("todos", todosScheme)

module.exports = {TodoModel}
const {TodoModel} = require("../models/todoSchema.js")

const getAllTodo = async(req, res) => {
    try {
        const todosData = await TodoModel.find()
        res.status(200).json({message:"Todos", data:todosData})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Unable To Get Todos Information"})
    }
    // res.send("Get All Todo")
}

const getTodo = async(req, res) => {
    try {
        const id = req.params.id
        const todo = await TodoModel.findById(id)
        res.status(200).json({message:"Todos", data:todo})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Unable To Get Todo Information"})
    }
    // res.send("Get Todo")
}

const addTodo = async(req, res) => {
    try {
        const {title, body} = req.body
        const newTodo = new TodoModel({title:title, body:body})
        const result = await newTodo.save()
        res.status(200).json({message:"Todo Is Successully Added", todo:result})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Fail To Add TOdo"})
    }
    // res.send("Add Todo")
}

const updateTodo = async(req, res) => {
    try {
        const id = req.params.id
        const {title, body} = req.body
        const updateTodo = await TodoModel.findByIdAndUpdate(id, {title:title, body:body}, {new:true})
        res.status(200).json({message:"Todo Updated Successully", todo:updateTodo})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Fail To Update Todo"})
    }
    // res.send("Update Todo")
}

const deleteTodo = async(req, res) => {
    try {
        const id = req.params.todoId
        const deleteTodo = await TodoModel.findByIdAndDelete(id)
        res.status(200).json({message:"Todo Delete Successully", todo:deleteTodo})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message:"Fail To Delete Todo"})
    }
    // res. dend("Delete Todo")
}

module.exports = {getAllTodo, getTodo, addTodo, updateTodo, deleteTodo}
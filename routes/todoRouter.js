const express = require("express")
const router = express.Router()
const {getAllTodo, getTodo, updateTodo, deleteTodo, addTodo} = require("../controllers/todoControllers.js")

router.get("/getAllTodos", getAllTodo)

router.post("/addTodo", addTodo)

router.put("/updateTodo/:id", updateTodo)

router.get("/getTodo/:id", getTodo)

router.delete("/deleteTodo/:todoId", deleteTodo)

module.exports = router
const express = require("express")
const app = express()
const todoRouter = require("./routes/todoRouter.js")
const {connectDB} = require("./config/db.js")
const cors = require("cors");

connectDB();

//middlewares
app.use(express.json()) //raw nunchi data tachukodaniki
app.use(express.urlencoded())

//cors middleware
app.use(cors({
    origin: ["http://localhost:5173", "https://simpletodoapis.onrender.com/api/todos/getAllTodos"]
}));

//Creating APIs (Router Middleware)
app.get("/", (req, res) => {
    res.status(200).send("Hi Iam Good")
})
app.use("/api/todos/", todoRouter)//Router Middleware

const port = 3000
app.listen(port, () => {
    console.log("Server Started " + port)
})
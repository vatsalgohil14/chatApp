const express = require("express");
const chats = require("./data");
const dotenv = require("dotenv");
const { connect } = require("mongoose");
const connectDB = require("./Config/db")
const colors = require("colors")
const userRoutes = require('./Routes/userRoutes')
const {notFound, errorHandler} = require("./Middleware/errorMiddleware")


const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept json data

app.get('/',(req,res)=>{
    res.send("Api is running")
})

app.use('/api/user',userRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001
app.listen(PORT, console.log(`Sever started on port ${PORT}`.underline.bgWhite));

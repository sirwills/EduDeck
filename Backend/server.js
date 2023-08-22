const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors')
const authController = require("./controllers/authController")

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // userNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to MongoDB")

    } catch (error) {
        console.error("Error connecting to MongoDb:", error)
    }
}

startServer()


app.use(cors())
app.use(express.json())
app.use('/auth', authController)

app.listen(process.env.PORT, ()=>console.log(`Server Running on ${process.env.PORT}`))
const express = require("express")
require("dotenv").config()
const connectDB = require("./config/db")
const cors = require('cors')

//Connect to database
connectDB()

const app = express()

//Body parser
app.use(
    cors(
        {
            origin: "*",
        }
    )
)

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/team', require('./routes/personRoutes'))

const PORT = process.env.PORT || 5500

app.listen(PORT, console.log(`App listening on port ${PORT}`))



require('dotenv').config();

const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const port = process.env.PORT || 3000
const mongoUrl = process.env.MONGO_URL

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Browser-Studio"
  };

app.use(cors({
  credentials : true,
  origin :["http://localhost:5173"]
}))

app.use(function(req,res,next){
  res.header("Content-Type", "application/json;charseu=UTF-8")
  res.header("Access-Control-Allow-Credentials", true)
  res.header(
    "Access-Control-Allow-Credentials",
     "Origin, X-requested-With, Content-Type, Accept"
  )
  next()
})

const adminRouter = require("./routes/admin")

app.use(express.json())
app.use("/admin",adminRouter)

mongoose.connect(mongoUrl, mongoOptions);

app.listen(port, () => console.log(`Server is running on port ${port}`))

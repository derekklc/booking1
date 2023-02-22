const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())

mongoose.connect(
    `mongodb+srv://derekklc:69806980kK@cluster0.yx3hs.mongodb.net/?retryWrites=true&w=majority`
)

app.use("/", require("./routes/noteRoute"))

app.listen(3001, () => {
    console.log("express server running.")
})

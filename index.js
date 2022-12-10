const express = require('express')
let port = 2000

const app = express()

app.use(express.static("localfiles"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
    console.log('Working');
})
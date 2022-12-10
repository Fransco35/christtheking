const express = require('express')

const app = express()

app.use(express.static("localfiles"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 2000;
}

app.listen(port, function() {
  console.log("Sucessfully started server");
});

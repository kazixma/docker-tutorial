var express = require('express')
var app = express()
app.get('/', function (req, res) {
  res.send('Hello Worldaaa')
})

app.listen(8080)
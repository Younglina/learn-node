
var express = require('express')
var morgan = require('morgan')
var path = require('path')
var rfs = require('rotating-file-stream') // version 2.x

var app = express()

var accessLogStream = rfs.createStream('access.log', {
  interval: '10s', // rotate daily
  path: path.join(__dirname, 'logs')
})

app.use(morgan('combined', { stream: accessLogStream }))

app.get('/log', function (req, res) {
  res.send('hello, world!')
})
app.listen(3000, ()=>{
  console.log('start at http://localhost:3000')
})
const express = require('express')

const app = express()

app.use(function(req, res, next) {
  console.log('middleware');
  next();
});
app.use('/login', function(req, res, next) {
  console.log('login');
  next();
});
app.use('/home', function(req, res, next) {
  console.log('home');
  next();
});

app.listen(3000, () => {
  console.log('start')
})
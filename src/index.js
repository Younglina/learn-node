const app = require('./app/app')
const { APP_PORT } = require('./app/config')
app.listen(APP_PORT, ()=>{
  console.log(`start on http://localhost:${APP_PORT}`)
})
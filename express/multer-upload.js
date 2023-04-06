const express = require('express')
const multer = require('multer')
// multer中间件，解析content-type 为 multer/form-data 的接口，可进行文件上传
// 可以通过配置选项来设置上传文件的名称和路径。
// Multer提供了两个配置选项来设置文件名和路径：
// destination：定义上传文件的存储路径。可以使用一个回调函数来动态设置存储路径，也可以使用一个静态路径。
// filename：定义上传文件的名称。可以使用一个回调函数来动态设置文件名称，也可以使用一个固定的文件名称。

const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    console.log(file)
  // {
  //   fieldname: 'file', 传参时的字段名
  //   originalname: 'postman.png', 文件名
  //   encoding: '7bit',
  //   mimetype: 'image/png'
  // }
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname)
  }
})

const upload = multer({storage})
 
app.post('/upload', upload.single('file'), function(req, res, next) {
  console.log(req.body);
  next();
});
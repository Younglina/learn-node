const fs = require('fs')
const path = require('path')
/*
fs.writeFile() 是 Node.js 中 fs 模块提供的一个异步方法，用于将数据写入文件。它的语法如下：
fs.writeFile(file, data[, options], callback)
其中：
- file：要写入的文件的路径，可以是相对路径或绝对路径。
- data：要写入的数据，可以是字符串、Buffer 或 Uint8Array 类型。
- options：一个可选参数，是一个对象，用于指定文件编码、文件打开模式等。常用的选项有：
  - encoding：指定文件编码，默认为 'utf8'。
  - mode：指定文件的权限，默认为 0o666。
  - flag：指定文件打开模式，默认为 'w'，表示以写入模式打开文件。
- callback：一个回调函数，用于处理写入文件后的结果。回调函数有一个参数：
  - err：如果写入文件出错，该参数为一个 Error 对象，否则为 null。
*/
console.log('start')
// fs.writeFile(path.join(__dirname, './file/test_write.txt'), "测试fs writeFile 方法", (err)=>{
//   if(err) {
//     return console.log('写入文件失败！' + err.message)
//   }
//   console.log('写入文件成功！')
// })

fs.writeFileSync(path.join(__dirname, './file/test_write.txt'), '测试fs writeFileSync 方法')
console.log('end')
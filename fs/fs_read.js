import { readFile, readFileSync } from 'node:fs'
/*
fs.readFile() 是 Node.js 中 fs 模块提供的一个异步方法，用于读取文件内容。
fs.readFile(path[, options], callback)
其中：
- path：要读取的文件的路径，可以是相对路径或绝对路径。
- options：一个可选参数，是一个对象，用于指定文件编码、文件打开模式等。常用的选项有：
  - encoding：指定文件编码，默认为 null，即返回原始的 buffer 对象。
  - flag：指定文件打开模式，默认为 'r'，表示以读取模式打开文件。
- callback：一个回调函数，用于处理读取文件后的结果。回调函数有两个参数：
  - err：如果读取文件出错，该参数为一个 Error 对象，否则为 null。
  - data：读取文件的内容，如果设置了 encoding 选项，则为字符串类型，否则为 Buffer 类型。
  fs.readFile() 方法是异步的，因此需要在回调函数中处理读取文件后的结果。
  如果需要同步读取文件，可以使用 fs.readFileSync() 方法。
*/
console.log('start')
readFile('./file/test.json', 'utf8', (err, dataStr)=>{
  if(err) {
    return console.log('读取文件失败！' + err.message)
  }
  const d = JSON.parse(dataStr)
  console.log(d,d.a)
})

const testData = readFileSync('./file/test.json', 'utf8')
console.log(testData)
console.log('end')
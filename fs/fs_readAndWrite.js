const fs = require('fs')
const path = require('path')

try{
  const score =fs.readFileSync(path.join(__dirname, './file/score.txt'), 'utf-8')
  const formatScore = score.replaceAll('=',':').split(' ')
  .map(item=>item.split(':')).sort((a,b)=>b[1]-a[1])
  .map(item=>item.join(':')).join('\r\n')
  fs.writeFileSync(path.join(__dirname, './file/formatScore.txt'), formatScore)
}catch(e){
  console.log(e)
}
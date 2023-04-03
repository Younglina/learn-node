import { readFileSync, writeFileSync } from "fs";

try{
  const score = readFileSync('./file/score.txt', 'utf-8')
  const formatScore = score.replaceAll('=',':').split(' ')
  .map(item=>item.split(':')).sort((a,b)=>b[1]-a[1])
  .map(item=>item.join(':')).join('\r\n')
  writeFileSync('./file/formatScore.txt', formatScore)
}catch(e){
  console.log(e)
}
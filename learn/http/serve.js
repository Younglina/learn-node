
const http = require('http');
const url = require('url')
const qs = require('querystring')

const server = http.createServer()

server.on('request', (req, res)=>{
  const { method } = req
  const { pathname, query } = url.parse(req.url)
  // 获取get请求的参数 使用querystring模块
  if(pathname==='/login'){
    const { username } = qs.parse(query)
    console.log(username) // 1
    res.setHeader('content-type', 'text/html;charset=utf-8')
    // http://localhost:8080/login?username=1
    res.end(`请求方式:${method} 请求地址:${pathname} 请求参数:${query}`)
    // 请求方式:GET 请求地址:/login 请求参数:username=1
  }
  // 获取post请求的参数
  if(pathname==='/regist'){
    req.on('data', (data) => {
      const { username, password } = JSON.parse(data)
      console.log(username, password )
    })
    res.end(`regist`)
  }
})


server.listen(8080, 'localhost', () => {
  console.log('Server started!');
});
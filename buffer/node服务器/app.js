/**
 * 不借助任何第三方库，去搭建原生服务器
 * 
 * 
 * 
 */
//引入Node内置的http模块
let http = require('http'); 
//创建一个“服务员” --曾经爱你服务对象
let server = http.createServer(function (req,res){
 //让服务员开始干活，获取客人点的菜单
 /**
  * （1）.request ：请求对象昂，里面包含客户端给服务器的“东西”
  * （2）.response: 响应对戏那个，里面包含着服务器要返回给客户端的“东西”
  */
 res.setHeader('content-type','text/html;charset=utf8') //为了解决乱码问题
 res.end('<h1>你好啊就</h1>')
})
server.listen(3000,function(err){
    if(!err)console.log('服务器启动成功了')
    else console.log(err);
    
    
})
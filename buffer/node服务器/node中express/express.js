//引入express
const express = require('express')
//1.创建app服务对象
const app = express()
//2.配置路由器
 app.get('/haha',function(req,res){
    console.log(req.params);
     console.log(req.query);  
    res.send('ok')
 }) 
//3.指定服务器运行端口号
app.listen(3001,function(err){
    if(!err)console.log('服务器启动成功');
    else console.log(err);
    
}) 
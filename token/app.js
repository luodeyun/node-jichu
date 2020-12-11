const express = require('express')
const app = express()
var cookieParser = require('cookie-parser');
const Token = require('./modul/Token')
app.use(cookieParser()) 
app.post('/',(req,res)=>{
     let {username,password} = req.query
     let id = '65F65DF8SD';
     let tokenKey = Token.en(id);
     console.log(tokenKey);
     return res.send({
         msg:"操作成功",
         status:200,
         tokenKey
     })
    })
app.get('/',(req,res)=>{
    let {name}=req.query
    let tokenKey = Token.de(name);
    console.log(req.cookies);
    return res.send({
        msg:"操作成功",
        status:200,
        tokenKey
    })
})
app.listen(3003,(err)=>{
    console.log('服务器启动成功');    
})
//1. 安装 jsonwebtoken npm i jsonwebtoken
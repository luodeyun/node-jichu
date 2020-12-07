const express = require('express')
const app = express()
const Token = require('./modul/Token')
 app.post('/',(req,res)=>{
     let {username,password} = req.query
      
     let id = '65F65DF8SD';
     let tokenKey = Token.en(id);
     return res.send({
         msg:"操作成功",
         status:200,
         tokenKey
     })
    })
app.get('/',(req,res)=>{
    let {name}=req.query
    let tokenKey = Token.de(name);
    return res.send({
        msg:"操作成功",
        status:200,
        tokenKey
    })
})

app.listen(3000,(err)=>{
    console.log('服务器启动成功');    
})
//1. 安装 jsonwebtoken npm i jsonwebtoken
const express = require('express')
let db = require('./db/db')
const app = express()

app.listen('3000',(err)=>{
    if(err) console.log('服务器启动失败',err);
    else{ console.log('服务器启动成功');
    }
    
})
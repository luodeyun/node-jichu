/*
 fs.readFile(path [,options],callback)
   --path ：尧都区文件爱你的路径+文件爱你名+后缀
   --options:配置对象(可选)
   --callback：回调
*/ 
let fs = require('fs')
 fs.readFile(__dirname+'/demo.txt' ,(err,data)=>{
         if(err){
        console.log(err);
             
        }
        else {
            console.log(data);
            //因为用户读取的不一定是纯文本
            //输出 ： <Buffer e4 bb 8a e5 a4 a9 e5 a4 a9 e6 b0 94 e7 9c 9f e6 99 b4 e6 9c 97 ef bc 81>
        }
 })
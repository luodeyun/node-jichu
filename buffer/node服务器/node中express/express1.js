let express = require('express')
let app = express()
    //request和response都有什么API
/**
 * 1.request
 *  request.query  获取查询字符串参数（query），拿到的是一个对象
 *  requset.params 获取get请求参数路由的参数，拿到的是一个对象
 *  requset.body 获取post请求体，拿到的是一个对象
 *   request.get（xxxxx） 获取请求头中指定key对应的value
 * 2.response对象：
 *   response.send()给浏览器做出一个响应
 *   response.end()给浏览器做出一个响应（不会自动追加响应头）
 *   response.download()告诉浏览器下载一个文件，可以传递相对路径
 *   response.sendFile()给浏览器发送一个文件 备注：必须是绝对路径
 *   response.redirect()重定向到一个新的地址(url)
 *   response.set(key,value)自定义响应头内容
 *   response.get（key） 获取响应头指定key对应的value 很少使用
 * response.status(code)设置响应状态码
 * 
 * 
 * * */

app.get('/',function(req,res){
    res.send('ok')
})
app.get('/demo/:id',function(req,res){
    res.set("Access-Control-Allow-Origin", "*");
    console.log(req.params);
    
res.send('我是参数路由页面')    
})
app.listen(3002,function(err){
if(!err)console.log('ok')
else console.log(err);

})
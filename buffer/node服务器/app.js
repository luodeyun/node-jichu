/**
 * 不借助任何第三方库，去搭建原生服务器
 */
//引入Node内置的http模块
let http = require('http');
let qs = require('querystring')
//创建一个“服务员” -创建一个服务对象
let server = http.createServer(function (req, res) {
    //让服务员开始干活，获取客人点的菜单
    /**
     * （1）.request ：请求对象昂，里面包含客户端给服务器的“东西”
     * （2）.response: 响应对戏那个，里面包含着服务器要返回给客户端的“东西”
     * 
     */
    console.log(req.url);
    let params = req.url.split('?')[1]
    console.log(params);
    let objparams = qs.parse(params)
    let {name , age} = objparams


    res.setHeader('content-type', 'text/html;charset=utf8') //为了解决乱码问题
    res.end(`<h1>你叫${name}年纪${age}</h1>`)
})
server.listen(3000, function (err) {
    if (!err) console.log('服务器启动成功了')
    else console.log(err);
})
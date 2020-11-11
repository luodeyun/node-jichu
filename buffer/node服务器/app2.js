let http = require('http')
let qs = require('querystring')
let server = http.createServer(function (req, res) {
    res.setHeader('content-type', 'text/html;charset=utf8')
    console.log(req.url);
    let params = req.url.split('?')[1];
    let objparams = qs.parse(params);
    let {
        name,
        age
    } = objparams
    console.log(objparams);
    res.end(`你好呀${name} 真好${age}`)
})
server.listen(3000, function (err) {
    if (!err) {
        console.log('请求服务器成功');
    } else {
        console.log(err);
    }
})
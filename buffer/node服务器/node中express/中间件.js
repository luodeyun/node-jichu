/**
 * 中间件：
 *   概念：本质上就是一个函数，包含三个参数：request,response,next
 * 
 * 作用  ：
 *  （1）执行任何代码
 *  （2）修改请求和响应对象
 *  （3）终结请求-响应循环(让一次请求得到响应)
 *  （4）调用堆栈中的下一个中间件或路由
 * 分类： 
 *  （1）应用（全局）级中间件（过滤非法的请求，例如防盗连）
 *       如果放在所有请求之前那就是所有请求的第一扇门
 *       如果放在所有请求之后那就是所有请求的最后一扇门
 *        第一种写法：app.use（(request,response,next)=>{}）
 * next()放行
 *        第二种写法：使用函数定义
 *   （2）第三方中间件(通过npm下载的中间件，例如body-parser)
 *        app.use(bodyParser.urlencoded({extended:true}))
 *    (3)内置中间件（express内部封装好的中间件）
 *        app.use(express.urlencoded({extended:true}))
 *        app.use(express.static('public'))
 *    (4)路由器中间件
 * 备注：在express中，定义路由和中间件的时候，根据定义的顺序（代码的顺序），将定义的每一个中间件
 * 或路由，放在一个类似数组的容器中，当请求过来的时候，依次从容器中取出中间件和路由，进行匹配，如果匹配
 * 成功，交由该路由或中间件处理，如果全局中间件写在了最开始的位置，那就是请求的第一扇门
 *      对于服务器来说，一次请求，只有一个响应对象，其他任何的request和response都是对二者的引用
 * 
 * 
 */
// let express = require('express')
// let app = express()
// app.use((req, res, next) => {
// //1.过滤一些合法的请求
// // if(合法){
// // next()
// // }
// // else{res.send('非法请求')}

// }
// )
// app.get('/', (req, res) => {
//     res.send('ok 你好')
// })
// app.get('/demo', (req, res) => {
//     res.send('ok 你好demo')
// })
// app.listen(3000, function (err) {
//     if (!err) console.log('ok');
//     else console.log(err);
// })
//-------------------------------------------------------
let express = require('express')
//引入第三方中间件
// （2）第三方中间件(通过npm下载的中间件，例如body-parser)
//  *        app.use(bodyParser.urlencoded({extended:true}))
let bodyParser = require('body-parser')
let app = express()
// app.use((req, res, next) => {
// //1.过滤一些合法的请求
// // if(合法){
// // next()
// // }
// // else{res.send('非法请求')}

// }
// )
app.use(bodyParser.urlencoded({
 //解析post请求请求体中所携带的urlencoded编码形式的参数为一个对象，随后挂载到request.body对象上
    extended: true
}))
app.get('/', (req, res) => {
    res.send('ok 你好')
})
app.post('/demo', (req, res) => {
    console.log(req.body);
    
    res.send('ok 你好demo')
})
app.listen(3004, function (err) {
    if (!err) console.log('ok');
    else console.log(err);
})
/**
 * 中间件：
 *   概念：本质上就是一个函数，包含三个参数：request,response,next
 * 作用  ：
 *  （1）执行任何代码
 *  （2）修改请求和响应对象
 *  （3）终结请求-响应循环(让一次请求得到响应)
 *  （4）调用堆栈中的下一个中间件或路由
 * 分类： 
 *  （1）应用（全局）级中间件（过滤非法的请求，例如防盗连）
 *        第一种写法：app.use（(request,response,next)=>{}）
 *        第二种写法：使用函数定义
 *   （2）第三方中间件(通过npm下载的中间件，例如body-parser)
 *        app.use(bodyParser.urlencoded({extended:true}))
 *    (3)内置中间件（express内部封装好的中间件）
 *        app.use(express.urlencoded({extended:true}))
 *        app.use(express.static('public'))
 *    (4)路由器中间件
 */ 
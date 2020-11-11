/* 引入express*/
const express = require('express')
//创建app应用对象
const app = express()
//禁止服务器返回X-powered-By 为了安全
app.disable('x-Powered-By')
//引入db模块，用于连接数据库
const db = require('./db')
//引入用户模型
let usersModel = require('./model/userMoudel')
/**暴露静态资源 */
db.then(
    () => {
        app.use(express.static(__dirname + '/public'))
        //使用内置中间件，用于解析post请求的urlencoded参数
        app.use(express.urlencoded({
            extended: true
        }))
        app.get('/', (req, res) => {
            res.send('你好')
        })
        //用于展示登录页面的路由，无任何其他逻辑
        app.get('/login', (req, res) => {
            res.sendFile(__dirname + '/public/login.html')
        })
        //用于展示注册页面的路由，无任何其他逻辑
        app.get('/register', (req, res) => {
            res.sendFile(__dirname + '/public/register.html')
        })
        //y用于处理用户的登录请求，有很多业务逻辑
        app.post('/login', (req, res) => {})
        //用于处理用户的注册请求的路由，
        app.post('/register', async (req, res) => {
            console.log(req.body);
            // 1.获取用户的输入
            const {
                email,
                nick_name,
                password,
                re_password
            } = req.body
            /*2.校验数据的合法性
                2.1 校验成功
                      去数据库中查找邮箱是否注册过
                         2.1.1：注册过：提示用户邮箱已被占用
                          2.1.2：未注册，写入数据库
                 2.2：校验失败
                        提示用户具体哪里输入的不正确
                 */
            //校验邮件的正则表达式
            const emailReg = /^[a-zA-z0-9_]{4,20}@[a-zA-z0-9]{2,10}\.com$/
            const nickNameReg = /[\u4e00-\u9fa5]/gm
            const passwordReg = /^[a-zA-Z0-9_@#.+&]{6,20}$/
            if (!emailReg.test(email)) {
                res.send('邮箱格式不合法，用户名必须4-20位，主机名必须2-10位')
            } else if (!nickNameReg.test(nick_name)) {
                res.send('昵称格式不合法，必须为中文')
            } else if (!passwordReg.test(password)) {
                res.send('密码格式不合法，必须6-20')
            } else {
                //去数据库中查询该邮箱是否注册过
                //try里面放可能出现错误的代码，一旦出现错误，会携带着错误信息来到catch中。
                try {
                    //3.检查该邮箱是否注册过
                    let finResult = await usersModel.findOne({
                        email
                    })
                    if (finResult) {
                        res.send(`注册失败，${email}邮箱已经被注册了`)
                        return
                    } else {
                        await usersModel.create({
                            email,
                            nick_name,
                            password
                        })
                        console.log(`邮箱为：${email}，昵称为:${nick_name}的用户注册成功了！`)
                        res.send('注册成功了！')
                    }
                } catch (err) {
                    //1.计数 2.引入警报模块
                    console.log(err)
                    res.send('阿偶，网络不稳定，稍后重试！')
                }
            }
        })
    }).catch(err => console.log('数据库连接失败'))

app.listen('3000', (err) => {
    if (!err) console.log('服务器启动成功');
    else console.log(err);

})
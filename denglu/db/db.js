const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/kehu',{
    useNewUrlParser: true, //使用一个新的url解析器，用于解析一些安全性问题
        useUnifiedTopology: true //使用一个统一的拓扑结构
})
module.exports = new Promise((resolve,reject)=>{
    mongoose.connection.on('open',(err)=>{
        if(err){ console.log(err,'数据库连接失败');
    reject()}
        else {
            console.log('数据库连接成功');
            resolve()       
        }
    })
})

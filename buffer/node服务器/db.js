let mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
module.exports = new Promise(function (resolve, reject) {
    mongoose.connect('mongodb://localhost:27017/demo', {
        useNewUrlParser: true, //使用一个新的url解析器，用于解析一些安全性问题
        useUnifiedTopology: true //使用一个统一的拓扑结构
    })
    mongoose.connection.on('open', function (err) {
        if (err) {
            console.log(err);
            reject(err)
        } else {
            console.log('数据库连接成功');
            resolve(1)
        }
    })
})
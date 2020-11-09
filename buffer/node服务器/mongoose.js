let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, //使用一个新的url解析器，用于解析一些安全性问题
    useUnifiedTopology: true //使用一个统一的拓扑结构
})
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log('数据库连接失败');

    } else {
        console.log('数据库连接成功');
        let Schema = mongoose.Schema
        let StudentsRlue = new Schema({
            stu_id: {
                type: String,
                required: true,
                unique: true
            },
            name: {
                type: String,
                required: false,
               
            },
            sex: {
                type: String,
                required: true,
            },
            age: {
                type: Number,
                required: true,
               
            },

            hobby: [String],
            info: Schema.Types.Mixed, //任意类型
            data: {
                type: Date,
                default: Date.now()
            },

            enable_flag: {
                type:String,
                default: 'Y',
               
            }
        })
        let stumodel = mongoose.model('students',StudentsRlue)
      /*  stumodel.create({
            stu_id:'004',
            name:'班长',
            age:20,
            sex:'男',
            hobby:['爱女','喝酒','打篮球'],
            info:'一个风一样的男子'
        },function(err,data){
            if(err){
                console.log(err);               
            }
            else{console.log(data);
            }
        })*/
        stumodel.find({},function(er,data){
            if(err){
                console.log(err);
                
            }
            else{
                console.log(data);
                
            }
        })
    }
})
let mongoose = require('mongoose')  //连接数据库 
let Schema = mongoose.Schema   //制定规则模式
let StuRule = new Schema({      
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
                type: String,
                default: 'Y',
            }
        })                                
 module.exports = new mongoose.model('students',StuRule)  //students 数据库下的students集合
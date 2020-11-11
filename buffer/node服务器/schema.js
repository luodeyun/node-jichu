let mongoose = require('mongoose')
let Schema = mongoose.Schema
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
 module.exports = new mongoose.model('students',StuRule)
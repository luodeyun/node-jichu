let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)
mongoose.connect('mongodb://localhost://27017/demo',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('open',function(err){
    if(err)console.log(err);
    else{
        console.log('连接成功');
        let Schema = mongoose.Schema
        let StuRule = new Schema(
            {    stu_id: {
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

        }})
        let stumodel = mongoose.model('students',StuRule)
    }  
})
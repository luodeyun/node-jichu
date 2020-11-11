let mongoose = require('mongoose')
let Schema = mongoose.Schema
 let usersRule = new Schema({
          email: {
                type: String,
                required: true,
                unique: true
            },
            nick_name: {
                type: String,
                required: false,
            },
          password:{
              type:String,
              required:true
          },         
            data: {
                type: Date,
                default: Date.now()
            },
            enable_flag: {
                type: String,
                default: 'Y',
            }
        })
 module.exports = new mongoose.model('user',usersRule)
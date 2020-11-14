let mongoose = require('mongoose')
let db = require('./db/db')
let kehuModel = require('./model/kubuModel');
(async()=>{
    await db;
    let result = await kehuModel.findOne({name:'班长'},function(err,data){
        if(err) console.log(err);
        else console.log(data);
    })

})()

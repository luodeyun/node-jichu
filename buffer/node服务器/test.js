let stuModel = require('./schema')
let db = require('./db');
(async()=>{
    await db  
    let result = await stuModel.findOne({name:'班长'})
    console.log(result);
    console.log(db);
})()
// db
//     .then(value => {
//         console.log(value);
//     })
//     .then(value => {
//         stuModel.find({}, function (err, data) {
//             if (err) console.log(err);
//             else {
//                 console.log(data);
//             }
//         })
//     })
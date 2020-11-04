/**
 * 1.Node中的文件系统：
 *     1.在NodeJs中有一个文件系统，所谓的文件系统，就是对计算机中的文件进行增删改查等操作
 *     2.在NodeJs中，给我们提供了一个模块，叫做fs模块(文件系统)，专门操作文件
 *     3.fs模块是Node的核心模块，使用的时候，无需下载，直接引入
 * 2.异步文件写入（简单文件写入）
 *  fs.writeFile(file,data [,options],callback)
 *            ---file: 要写入的文件路径+文件名字
 *            ---data：要写入的数据
 *            ---options：可选参数 
 *                  ---encoding：设置文件爱你的编码方式，默认值：utf8(万国码)
 *                  ---mode：设置文件的操作权限，默认值是：0o666=0o222+0o444
 *                         0o222：文件可被写入的权限
 *                         0o444：文件可被读取的权限
 *                  ---flag:打开文件爱你要执行的操作，默认值是'w'
 *                     --a:追加
 *                     --w：写入
 *            ---callback：回调函数
 * 在Node中有这样一个原则：错误优先
 * 
 * */ 
//引入内置的fs模块
let fs= require('fs')
 
//调用writeFile方法
fs.writeFile('./demo.txt','zou！',{mode:0o666,flag:'a'},(err)=>{
    if(err){
        console.log('文件写入失败',err);
        
    }else{
        console.log('文件写入成功');
        
    }

})
/*
Buffer是什么？
  1.他是一个类似数组的对象，用于存储数据（存储的是二进制数据）他可以存储字符串，音频 视频
  2.Buffer的效率很高，存储和读取很快，他是直接对计算机的内存进行操作
  3.Buffer的大小一旦确定，不可修改
  4.每个元素占用内存的大小为1字节
  5.Buffer是Node中的非常核心的模块，无需下载无需引入直接使用

*/

//创建了一个Buffer   ------性能特别差 1.在堆里开辟空间2.清理
//<Buffer 00 00 00 00 00 00 00 00 00 00>
//  let buf = new Buffer(10)
//  console.log(buf); 
// //  会出现一个弃用警告  快被弃用了 
// //Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() 
// //创建了一个Buffer   -----性能也差比上面强一点 1.在堆里开辟一个没用过的空间
// //<Buffer 00 00 00 00 00 00 00 00 00 00>
// let buf2 =Buffer.alloc(10)
// console.log(buf2);
// //Buffer.allocUnsafe() ----性能最好 1.在堆里随机开辟空间会拿点
// //<Buffer 18 43 c3 40 01 00 00 00 00 00>
 
// // 1.输出的Buffer里有大于1的？ 
// // 2.输出的Buffer不为空？ 
// let buf3 = Buffer.allocUnsafe(10) 
// console.log(buf3);
//将数据存入一个Buffer实例
let buf4=Buffer.from('hello atguigu')
console.log(buf4);//<Buffer 68 65 6c 6c 6f 20 61 74 67 75 69 67 75>

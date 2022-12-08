
const path =  require('path')
module.exports ={
    mode: 'development' ,  //mode 用来指定构建模式 可选值有development 和 production

    entry: path.join(__dirname,'./src/index.js'),   //entry 指定要处理哪个文件
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'mian.js'  //生成的文件名
    },
    devServer: {
        static: "./src"                              // 修改默认打开目录
      }
     
}
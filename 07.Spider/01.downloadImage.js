// http://pic.58pic.com/58pic/13/71/30/15r58PIChmX_1024.jpg


var request = require('request');
var path = require('path');
var fs = require('fs');

//1.图片地址
var imageUrl = 'http://pic.58pic.com/58pic/13/71/30/15r58PIChmX_1024.jpg';
//2.如偏保存路径
var imagePath = path.join(__dirname,'images','img1.jpg');
//3.下载并保存文件
//  步骤1：下载
//  步骤2：导流，以流的形式传递刚刚下载的数据
//  步骤3：fs根据传递过来的流以及图片路径，创建文件
request(imageUrl).pipe(fs.createWriteStream(imagePath));



//下载函数
//参数1：要下载内容的地址
//参数2：要保存的文件夹名
//参数3：要保存的文件名
function download(url,directory,filename) {
    //根据当前目录生成文件夹目录
    var dir = path.join(__dirname,directory)
    //判断文件夹是否存在
    var isDir = fs.existsSync(dir);
    //不存在，创建
    if (!isDir){
        fs.mkdir(dir)
    }
    //生成保存文件路径
    var filePath = path.join(dir,filename)
    //下载并保存
    request(url).pipe(fs.createWriteStream(filePath))
}

var imgURL = 'http://pic.58pic.com/58pic/13/71/30/15r58PIChmX_1024.jpg'
download(imgURL,'img','img2.jpg')



//判断文件夹结构
// var stat = fs.statSync(path.join(__dirname,'file'))
// if (stat.isDirectory()){
//     console.log('文件存在')
// } else{
//     console.log('文件不存在')
// }

// var isDirection = fs.existsSync(path.join(__dirname,'images'))
// if (isDirection){
//     console.log('文件存在')
// } else{
//     console.log('文件夹不存在')
// }


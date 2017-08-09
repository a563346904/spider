var fs = require('fs');
var download = require('./download')
fs.readFile('./douban.json','utf-8',function (error,data) {

    // console.log(data)
    var array = data.split(',')
    console.log(array)
    array.forEach(function (item,index) {
        // console.log(item)
        download(item,'imgDouBan',index+'.jpg')
    })
})
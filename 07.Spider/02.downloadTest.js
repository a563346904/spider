var download = require('./download');

var imgArray = [
    'http://pic27.nipic.com/20130319/10415779_103704478000_2.jpg',
    'http://img.taopic.com/uploads/allimg/140505/235006-1405050Q44649.jpg',
    'http://img.taopic.com/uploads/allimg/130331/240460-13033106243430.jpg',
    'http://pic.qiantucdn.com/01/61/38/93bOOOPIC15.jpg'

]

//第一个参数：路径     第二个参数：下表     第三个参数：数组本身
imgArray.forEach(function (item,index,arr) {
    download(item,'images','img'+index + '.jpg')


})
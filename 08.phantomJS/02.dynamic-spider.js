//引入webpage文件
var webpage = require('webpage')
// var download = require('./download')
//创建webpage
var page = webpage.create();
phantom.outputEncoding = 'utf-8';


/***************************下午代码分割线**********************************/
//引入phantom的文件系统
var fs = require('fs');
//由于浏览器没有控制台输出
//创建一个浏览器输出函数
page.onConsoleMessage = function(msg, lineNum, sourceId) {
    console.log( msg);
};
/***************************下午代码分割线**********************************/
page.open('http://pianke.me',function (status) {
    if (status==='success'){
        console.log('加载成功')

        console.log(page.title)
        /***************************下午代码分割线**********************************/
        // includeJs
        // 浏览器可以识别其他js库，可以引入一些代码
        // 例如：jQuery
        page.includeJs("https://code.jquery.com/jquery-3.2.1.min.js",function () {
            //实际情况，浏览器加载网页，有部分内容延迟加载
            //比如 ajax请求
            // 延迟10秒，去读取数据
            setTimeout(function () {
                //对路劲中的网页进行操作
                //比如：DOM操作，事件
                var $abc = page.evaluate(function () {
                    var arr=[];

                    //通过jq获取对应的img的src
                    $('.container>.focus-picture>div>a>img').each(function (index, element) {
                        var a= $(element).attr('src');
                        //将获取的src添加到对应的数组中
                        arr.push(a);
                        // console.log(a)

                    })

                    // 将数组返回
                    return arr
                    // console.log(fs)

                })
                console.log($abc)

                //写入文件
                fs.write('./arr.json',$abc,'w')
                phantom.exit(0)
            },5000)
        })
        /***************************下午代码分割线**********************************/
    }else {
        console.log('加载失败')
        phantom.exit(0)
    }

})
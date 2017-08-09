var webpage = require('webpage');
var page = webpage.create();
phantom.outputEncoding = 'ytf-8';

var fs = require('fs');
page.onConsoleMessage = function(msg, lineNum, sourceId) {
    // console.log( msg);
};

page.open('http:www.jd.com',function (status) {
    if (status === 'success'){
        console.log('加载成功');
        // console.log(page.title)
        page.includeJs("https://code.jquery.com/jquery-3.2.1.min.js",function () {
            setTimeout(function () {
                var $abc = page.evaluate(function () {
                    var arr = [];
                    $('#seckill>.grid_c1>.box_bd>.J_sk_list_wrapper>.clearfix>.sk_item>.sk_item_pic>.sk_item_pic_lk>img').each(function (index,element) {

                        var re = /\/\/img\S+\.jpg/g;
                        var a = $(element).attr('src')
                        arr.push(a.match(re))

                    })
                    return arr
                })
                // console.log($abc)
                // fs.write('./douban.json',$abc,'w')
                phantom.exit(0)
            },50000)
        })

    }else{
        console.log('加载失败');
        phantom.exit(0)
    }



})
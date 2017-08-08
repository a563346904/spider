var cheerio = require('cheerio');
var request = require('request');
var download = require('./download');

var url = 'http://www.fruitday.com/';
request(url,function (error,response,body) {
    // console.log(body)
    var $ = cheerio.load(body);
    var items = [];



     $('.fruit-kinds').eq(2).children('.good-list').children('ul').children('li').children('div').children('a').children('img').each(function (index,element) {
        var item = {
            src :$(element).attr('data-original')
        }
        items.push(item)
        console.log($(element).attr('data-original'))
    })

    // console.log(items)

    for (var i = 0 ;i<items.length;i++){
        // console.log(items[i])
        download(items[i].src,'fruiteImg',i+'.jpg')
    }
})
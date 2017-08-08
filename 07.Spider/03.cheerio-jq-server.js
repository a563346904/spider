var cheerio = require('cheerio');
var request = require('request')
    // $ = cheerio.load('<div class = "J_f J_sk need_ani sk');

var url ='http://cnodejs.org/'
request(url,function (error,response,body) {
    // console.log(body)
    var $ = cheerio.load(body)
    var items = [];
    $('#topic_list .topic_title').each(function (index,element) {
        // console.log($(element).attr('title')
        // console.log($(element).attr('href')
        var item = {
            title:$(element).attr('title'),
            href:$(element).attr('href')
        }
        items.push(item)
        console.log(index)
    })

    $('.cell > .user_avatar > img').each(function (index, element) {

        items[index].icon = $(element).attr('src')
        // console.log(items[index])
    })

    // console.log(items)

})


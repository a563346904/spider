var request = require('request');
var cheerio = require('cheerio');
var download = require('./download');


var url = 'https://www.douban.com';

var options = {
    url: 'https://www.douban.com/',
    headers: {
        'Host': 'www.douban.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
}
request.get(options, function (error, response, body) {

    var $ = cheerio.load(body);

    //热点内容

    //遍历图片
    var items = [];
$('#anony-sns>.wrapper>.main>.mod>.albums>ul>li>.pic>a>img').each(function (index,element) {
    var item = {
        src :$(element).attr('data-origin')
    }
    items.push(item)
})
    //遍历文字部分
    $('#anony-sns>.wrapper>.main>.mod>.albums>ul>li>a').each(function (index,element) {


        items[index].title = $(element).text()
    })

    var hotContent = {
        obj:items
    }







    //热门部分
    var arr_hot_img = [];
    $(".wrapper>.main>.mod>.albums>ul>li>.pic>a>img").each(function (index, element) {
        var a = $(element).attr('data-origin');
        arr_hot_img.push(a);
        download(a, 'douBan', index + '.jpg');
    });


    var arr_hot_title = [];
    $(".wrapper>.main>.mod>.notes>ul>li>a").each(function (index, element) {
        var a = $(element).text();
        arr_hot_title.push(a);
    });

    var hot = {
        obj:arr_hot_img
    }
    var hot_title = {
        obj:arr_hot_title
    }



    //视频部分
    var arr_time_arr=[];
    $("#anony-time>.wrapper>.main>ul>li>a>img").each(function (index, element) {
        var a = $(element).attr('src');
        var b={
            src:a
        };
        arr_time_arr.push(b);
        download(a, 'douBan', index + '.jpg');
    });

    $("#anony-time>.wrapper>.main>ul>li>a:nth-child(2)").each(function (index, element) {
        var a = $(element).text();

        arr_time_arr[index].text=a;

    });

    $("#anony-time>.wrapper>.main>ul>li>span").each(function (index, element) {
        var a = $(element).text();

        arr_time_arr[index].span=a;

    });

    var video = {
        obj : arr_time_arr
    }








    //正在热映
    var play = [];
    $('.main .movie-list ul li .pic  a img').each(function (index,element){
        var thePlay = {img:$(element).attr('data-origin')};
        play.push(thePlay)
        download($(element).attr('data-origin'),'douBan','reYing'+index+'.jpg');
    });

    $('.main .movie-list ul li .title  a').each(function (index,element){
        play[index].title = $(element).text();
    });

    $('.main .movie-list ul li .rating  i').each(function (index,element){
        play[index].score = $(element).text();
    });

    var playing = {
        obj:play
    }


    //热门小组
    var groupArr = [];
    $(".main .group-list ul li .pic a img").each(function (index,element){
        var theGroup = {img:$(element).attr('data-origin')};
        groupArr.push(theGroup)
        download($(element).attr('data-origin'),'douBan','xiaozu'+index+'.jpg');
    });

    $('.main .group-list ul li .info .title a').each(function (index,element){
        groupArr[index].title = $(element).text();
    });

    $('.main .group-list ul li .info').each(function (index,element){
        groupArr[index].number = $(element).text();
    });

    var groupArr = {
        obj:groupArr
    }



    //遍历新书快递部分
    var book = [];
    $('#anony-book>.wrapper>.main>.mod>.book-list>ul>li>.pic>a>img').each(function (index,element) {
        // console.log($(element).attr('data-origin'))
        var item = {
            src :$(element).attr('data-origin')
        }
        download($(element).attr('data-origin'),'douBan','book'+index+'.jpg')
        book.push(item)
    })


    $('#anony-book>.wrapper>.main>.mod>.book-list>ul>li>.title>a').each(function (index,element) {
        // console.log($(element).attr('data-origin'))


        book[index].title = $(element).text();

    })

    var books = {
        obj:book
    }



    //遍历音乐部分

    //豆瓣新碟榜
    var itemsMusic = [];
    $('#anony-music>.wrapper>.main>.album-list>ul>li>.pic>a>img').each(function (index,element) {
        // console.log($(element).attr('data-origin'))
        var item = {
            src :$(element).attr('data-origin')
        }
        download($(element).attr('data-origin'),'douBan','music'+index+'.jpg')
        itemsMusic.push(item)
    })
    $('#anony-music>.wrapper>.main>.album-list>ul>li>.title>a').each(function (index,element) {
        // console.log($(element).text())

        itemsMusic[index].title = $(element).text()

    })

    $('#anony-music>.wrapper>.main>.album-list>ul>li>.rating>i').each(function (index,element) {
        // console.log($(element).text())
        // var item = {
        //     rating :$(element).attr('data-origin')
        // }
        itemsMusic[index].rating = $(element).text()
    })

    var music = {
        obj:itemsMusic
    }



    //热门歌单

    var itemsHotMusic = [];
    $('#anony-music>.wrapper>.main>.programme-list>ul>li>.pic>img').each(function (index,element) {

        var item = {
            src :$(element).attr('src')
        }
        itemsHotMusic.push(item)
    })

    $('#anony-music>.wrapper>.main>.programme-list>ul>li>.title').each(function (index,element) {

        itemsHotMusic[index].title1 = $(element).text()

    })

    var hotMusic = {
        obj:itemsHotMusic
    }




    var all = [hot,hot_title,video,playing,groupArr,books,music,hotMusic];
    console.log(video)
    console.log(hot_title)




})



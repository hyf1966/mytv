var rule = {
     title: '狗番',
     host: 'https://www.dogsfun.fun',
     模板:'首图2',
     searchUrl: '/vodsearch/**----------fypage---',
     url: '/show/fyclass--------fypage---',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable: 0,//是否启用分类筛选,
     class_name:'TV动画&剧场动画',
     class_url:'1&2',
     tab_rename:{'追番乐切':'LR',},
     lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        var MacPlayerConfig={};
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        } else if (html.encrypt == '3') {
            url = base64Decode(url);
        }
        if (/\\.m3u8|\\.mp4/.test(url)) {
            input = url
        } else {
            eval(fetch(HOST + "/static/js/playerconfig.js").replace('var Mac','Mac'));
            var list = MacPlayerConfig.player_list[from].parse;
            input={
                jx:0,
                url:list+url,
                parse:1,
                header: JSON.stringify({
                    'referer': HOST
                })
            }
        }
    `,
    推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-tag-left&&Text;a&&href',
    一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-tag-left&&Text;a&&href',
    二级:{
           'title': '.h1&&Text',
           'desc': '.stui-content__detail p:eq(3)&&Text;.stui-content__detail p:eq(0)&&Text;.stui-content__detail p:eq(2)&&Text;.stui-content__detail p:eq(1)&&Text;',
           'content': '.stui-content__detail p:eq(4)&&Text;',
           'tabs':'.nav-tabs li',
           'lists':'.stui-content__playlist:eq(#id) li'
         },
    搜索: 'ul.stui-vodlist__media:eq(0) li,ul.stui-vodlist:eq(0) li,#searchList li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href;.text-muted:eq(-1)&&Text'
    }
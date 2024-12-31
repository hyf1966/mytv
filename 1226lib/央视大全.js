var rule = {
    title:'央视频',
    host:'https://api.cntv.cn',
    homeUrl: '/lanmu/columnSearch?&fl=&fc=&cid=&p=1&n=500&serviceId=tvcctv&t=json',
             //lanmu/columnSearch?&fl=&fc=&cid=&p=1&n=20&serviceId=tvcctv&t=jsonp&cb=Callback
    url:'/list/getVideoAlbumList?fyfilter&area=&letter=&n=24&serviceId=tvcctv&t=json',
  //  searchUrl:'https://search.cctv.com/search.php?qtext=**&type=video',
//    https://search.cctv.com/m/if3g_search.php?page=fypage&qtext=**&type=video&sort=SCORE&pageSize=20&channel=
   searchUrl:'https://search.cctv.com/m/if3g_search.php?page=fypage&qtext=**&type=video&sort=SCORE&pageSize=20&channel=',
    searchable:1,
    quickSearch:1,
    class_name: '4K专区&栏目大全&特别节目&纪录片&电视剧&动画片',
    class_url: '4K专区&栏目大全&特别节目&纪录片&电视剧&动画片',
    filterable: 1,
    filter_url: 'channel={{fl.channel}}&sc={{fl.sc}}&year={{fl.year}}',
    filter: {

		"纪录片":[
            {"key":"channel","name":"频道","value":[{"n":"全部","v":""},{"n":"CCTV-1综合","v":"CCTV-1综合,CCTV-1高清,CCTV-1综合高清"},{"n":"CCTV-2财经","v":"CCTV-2财经,CCTV-2高清,CCTV-2财经高清"},{"n":"CCTV-3综艺","v":"CCTV-3综艺,CCTV-3高清,CCTV-3综艺高清"},{"n":"CCTV-4中文国际","v":"CCTV-4中文国际,CCTV-4高清,CCTV-4中文国际(亚)高清"},{"n":"CCTV-5体育","v":"CCTV-5体育,CCTV-5高清,CCTV-5体育高清"},{"n":"CCTV-6电影","v":"CCTV-6电影,CCTV-6高清,CCTV-6电影高清"},{"n":"CCTV-7国防军事","v":"CCTV-7国防军事,CCTV-7高清,CCTV-7国防军事高清"},{"n":"CCTV-8电视剧","v":"CCTV-8电视剧,CCTV-8高清,CCTV-8电视剧高清"},{"n":"CCTV-9纪录","v":"CCTV-9纪录,CCTV-9高清,CCTV-9纪录高清"},{"n":"CCTV-10科教","v":"CCTV-10科教,CCTV-10高清,CCTV-10科教高清"},{"n":"CCTV-11戏曲","v":"CCTV-11戏曲,CCTV-11高清,CCTV-11戏曲高清"},{"n":"CCTV-12社会与法","v":"CCTV-12社会与法,CCTV-12高清,CCTV-12社会与法高清"},{"n":"CCTV-13新闻","v":"CCTV-13新闻,CCTV-13高清,CCTV-13新闻高清"},{"n":"CCTV-14少儿","v":"CCTV-14少儿,CCTV-14高清,CCTV-14少儿高清"},{"n":"CCTV-15音乐","v":"CCTV-15音乐,CCTV-15高清,CCTV-15音乐高清"},{"n":"CCTV-17农业农村","v":"CCTV-17农业农村,高清,高清"}]},
            {"key":"sc","name":"类型","value":[{"n":"全部","v":""},{"n":"人文历史","v":"人文历史"},{"n":"人物","v":"人物"},{"n":"军事","v":"军事"},{"n":"探索","v":"探索"},{"n":"社会","v":"社会"},{"n":"时政","v":"时政"},{"n":"经济","v":"经济"},{"n":"科技","v":"科技"}]},
            {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"
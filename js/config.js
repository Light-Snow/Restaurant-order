require.config({
	urlArgs: 'ver=0.2.1',  //版本号
	baseUrl: "../js/",
    paths : {
    	"jquery" : "lib/jquery/1.11.1/jquery.min",
        "swiper" : "lib/swiper/swiper.min",
        "swiper.jquery" : "lib/swiper/swiper-3.4.2.jquery.min",
        "fly"    : "lib/jquery.fly/jquery.fly.min",
        "layer"  : "lib/layer/layer",
        "base"   : "page/base_original",
        "flexible"   : "lib/flexible/flexible.debug"
    },
    shim: {
        "fly"    : ["jquery"],
        "layer"  : ["jquery"],
        "layer"  : ["jquery"],
        "swiper.jquery"  : ["jquery"]
    }
})

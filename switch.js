function swap(){
    var a=[
    "https://skipfie.com/bgpics/01.jpg",
    "https://skipfie.com/bgpics/02.jpg",
    "https://skipfie.com/bgpics/03.jpg",
    "https://skipfie.com/bgpics/04.jpg",
    "https://skipfie.com/bgpics/05.jpg",
    "https://skipfie.com/bgpics/06.jpg",
    "https://skipfie.com/bgpics/07.jpg",
    "https://skipfie.com/bgpics/08.jpg",
    "https://skipfie.com/bgpics/09.jpg",
    "https://skipfie.com/bgpics/10.jpg",
    "https://skipfie.com/bgpics/11.jpg",
    "https://skipfie.com/bgpics/12.jpg"],b=Math.floor(Math.random()*a.length),c=a[b];$('<img src="'+c+'">').on("load",function(){$("#bgimg").css("background-image","url("+c+")"),setTimeout(showPage,250)})}function showPage(){$("#loader").fadeOut(200),$("#bgimg").show()}

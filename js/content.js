var currentUrl = window.location.href;
var currentSite = currentUrl.indexOf("earnstations") >= 0 ? "E" : "M";
var urlDetailM = 'http://www.makearn.com/user/videos/details/';



$(document).ready(function () {
    window.alert = function(){};
    if(currentUrl.indexOf("user/videos/details") >= 0){
        $('#bs-navbar-collapse-1 > ul.nav.navbar-nav.navbar-right').append('<li><a onclick="player.seekTo(181,true)" class="btn" id="done">done</a></li>');
    }
    if(currentSite == 'E'){
        if(currentUrl.indexOf('user/welcome')>=0){
            window.location = 'https://www.earnstations.com/user/videos';
        }else if(currentUrl.indexOf('user/videos')>=0 && currentUrl.indexOf('videos/details/') === -1 ){
            runE();
        }
    }else{
        if(currentUrl.indexOf('user/welcome')>=0){
            runM();
        }
    }
})

function runM(){
    $.get( "videos/today_videos", function( data ) {
        data = jQuery.parseJSON(data).data.videos;
        $.each(data,function (index,value) {
            window.open(urlDetailM+value.video_id,'_blank');
        })
    });
}

function runE() {
    $("#features > div > div > div > h4 > a").each(function() {
        window.open(this.href,'_blank');
    })
}

chrome.runtime.onMessage.addListener(function (request, sender, sendEesponse) {
    if (request.start == true) {
        switch (currentSite) {
            case 'E':
                if($('#bs-navbar-collapse-1 > ul.nav.navbar-nav.navbar-right > li:nth-child(1) > a').text() != 'Logout'){
                    $("input[name='login_email']" ).val(request.email);
                    $("input[name='login_password']" ).val(request.pass);
                    $("button[name='btn_login']" ).click();
                }else{
                    window.location = 'https://www.earnstations.com/user/videos';
                }
                break;
            case 'M':
                if($('#bs-navbar-collapse-1 > ul.nav.navbar-nav.navbar-right > li:nth-child(5) > a').text() != 'Logout'){
                    $("input[name='login_email']" ).val(request.email);
                    $("input[name='login_password']" ).val(request.pass);
                    $("button[name='btn_login']" ).click();
                }else{
                    runM();
                }
                break;
            default:
                alert('no site is open');
                break;
        }
    }
})

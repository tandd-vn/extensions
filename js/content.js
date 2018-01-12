var currentSite = window.location.href.indexOf("earnstations") >= 0 ? "E" : "M";

chrome.runtime.onMessage.addListener(function (request, sender, sendEesponse) {
    if (request.start == true) {
        switch (currentSite) {
            case 'E':

                break;
            case 'M':
                if($('#bs-navbar-collapse-1 > ul.nav.navbar-nav.navbar-right > li:nth-child(5) > a').text() != 'Logout'){
                    //not login
                    $( "input[name='login_email']" ).val('tandd');
                    $( "input[name='login_password']" ).val('tandd');
                    $( "button[name='btn_login']" ).click();
                }else{

                }
                break;
            default:
                alert('no site is open');
                break;
        }
    }
})
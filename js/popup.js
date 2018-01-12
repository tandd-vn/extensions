$(document).ready(function () {

    $('.md-select').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.md-select ul li').on('click', function () {
        var v = $(this).text();
        $('.md-select ul li').not($(this)).removeClass('active');
        $(this).addClass('active');
        $('.md-select label button').text(v);
    });


    $("#submit-btn").click(start);
})



// start();





var listEmail = [
    'tandd.dev@gmail.com',
    'throne.rush.dt01@gmail.com',
    'throne.rush.dt03@gmail.com',
    'throne.rush.dt04@gmail.com',
    'throne.rush.dt05@gmail.com',
    'throne.rush.dt06@gmail.com',
    'throne.rush.dt07@gmail.com',
    'throne.rush.dt08@gmail.com',
    'throne.rush.dt09@gmail.com',
    'thronerushdt01@gmail.com',
    'thronerushdt03@gmail.com',
    'thronerushdt04@gmail.com',
    'thronerushdt05@gmail.com',
    'thronerushdt06@gmail.com',
    'thronerushdt07@gmail.com',
    'thronerushdt08@gmail.com',
    'thronerushdt09@gmail.com',
    'tandddev@gmail.com',
    'tan.dddev@gmail.com',
    'tan.dd.dev@gmail.com'
]


function start(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{start:true},function (response) {

        })
    })
}
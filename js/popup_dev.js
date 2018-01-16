$(document).ready(function () {
    setTimeout(function() {
        start();
    }, 3000);
    $("#submit-btn").click(run);
})
function start(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{start:true},function (response) {
            $('#display').html(response.message);
            $('#submit-btn').html(response.status);
        })
    })
}
function run(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{isRun:true},function (response) {
            $('#submit-btn').html(response.status);

        })
    })
}
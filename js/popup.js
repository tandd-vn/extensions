function start() {
    chrome.tabs.query({active: !0, currentWindow: !0}, function (t) {
        chrome.tabs.sendMessage(t[0].id, {start: !0}, function (t) {
            $("#display").html(t.message), $("#submit-btn").html(t.status)
        })
    })
}

function run() {
    chrome.tabs.query({active: !0, currentWindow: !0}, function (t) {
        chrome.tabs.sendMessage(t[0].id, {isRun: !0}, function (t) {
            $("#submit-btn").html(t.status)
        })
    })
}

$(document).ready(function () {
    setTimeout(function () {
        start()
    }, 3e3), $("#submit-btn").click(run)
});










